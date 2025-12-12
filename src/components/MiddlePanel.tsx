import { useState } from 'react';
import { Play, Pause, Zap, Cpu } from 'lucide-react';
import { WorkflowNode } from '../App';

interface MiddlePanelProps {
  activeNode?: WorkflowNode;
  isRunning: boolean;
  logs: string[];
  selectedTools: string[];
  onRun: () => void;
  onToolToggle: (tool: string) => void;
}

const toolsByStep: Record<number, Array<{ id: string; name: string; icon: string }>> = {
  1: [
    { id: 'UniProt', name: 'UniProt', icon: '🧬' },
    { id: 'RCSB PDB', name: 'RCSB PDB', icon: '🔬' },
    { id: 'AlphaFold', name: 'AlphaFold', icon: '🤖' },
  ],
  2: [
    { id: 'ChEMBL', name: 'ChEMBL', icon: '💊' },
    { id: 'PubChem', name: 'PubChem', icon: '🧪' },
    { id: 'ClinicalTrials.gov', name: 'ClinicalTrials.gov', icon: '🏥' },
  ],
  3: [
    { id: 'RDKit', name: 'RDKit', icon: '⚗️' },
    { id: 'Molecular Descriptors', name: 'Molecular Descriptors', icon: '📊' },
  ],
  4: [
    { id: 'SureChEMBL', name: 'SureChEMBL', icon: '📄' },
    { id: 'Google Patents', name: 'Google Patents', icon: '🔍' },
  ],
  5: [
    { id: 'Data Aggregator', name: 'Data Aggregator', icon: '📦' },
    { id: 'Visualization Engine', name: 'Visualization Engine', icon: '📈' },
  ],
};

export default function MiddlePanel({
  activeNode,
  isRunning,
  logs,
  selectedTools,
  onRun,
  onToolToggle,
}: MiddlePanelProps) {
  const [prompt, setPrompt] = useState('Analyze STAT6 structure and evaluate druggability across all data sources.');
  const tools = activeNode ? (toolsByStep[activeNode.number] || []) : [];

  return (
    <div className="w-[400px] bg-slate-900 border-r border-slate-800 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-800 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <h2 className="text-cyan-400 text-sm uppercase tracking-wider">Active Node</h2>
        </div>
        <h1 className="text-xl text-slate-100">
          {activeNode ? `Step ${activeNode.number}: ${activeNode.label}` : 'No Step Selected'}
        </h1>
        <div className="mt-2 inline-block px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded text-xs text-cyan-400">
          {activeNode?.status === 'complete' ? 'Complete' : activeNode?.status === 'active' ? 'In Progress' : 'Pending'}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Section A: Prompt Engineering */}
        <div className="p-6 border-b border-slate-800">
          <label className="block text-sm text-slate-400 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            Prompt Engineering
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
            placeholder="Enter your analysis prompt..."
          />
        </div>

        {/* Section B: MCP Server Toolkit */}
        <div className="p-6 border-b border-slate-800">
          <label className="block text-sm text-slate-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            MCP Server Toolkit ({selectedTools.length} active)
          </label>
          <div className="space-y-2">
            {tools.map((tool) => {
              const isSelected = selectedTools.includes(tool.id);
              return (
                <button
                  key={tool.id}
                  onClick={() => onToolToggle(tool.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-cyan-400/10 border-cyan-400/50'
                      : 'bg-slate-950/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="text-xl">{tool.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-slate-100">{tool.name}</div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      isSelected ? 'bg-cyan-400 border-cyan-400' : 'border-slate-600'
                    }`}
                  >
                    {isSelected && (
                      <svg className="w-3 h-3 text-slate-950" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section C: Execution Terminal */}
        <div className="p-6">
          <label className="block text-sm text-slate-400 mb-3">Execution Terminal</label>
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 h-64 overflow-y-auto font-mono text-xs">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`mb-1.5 ${
                  log.includes('✓')
                    ? 'text-emerald-400'
                    : log.includes('Error')
                    ? 'text-red-400'
                    : 'text-slate-400'
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-6 border-t border-slate-800 flex-shrink-0">
        <button
          onClick={onRun}
          disabled={isRunning}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all ${
            isRunning
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-400/20'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="w-5 h-5 animate-pulse" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              <span>Execute Workflow</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
