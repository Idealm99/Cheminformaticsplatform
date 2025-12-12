import { Play, ChevronDown, Link2, AlertCircle, Sparkles } from 'lucide-react';
import { WorkflowNode, StepConfig } from '../App';
import { useState } from 'react';

interface AgentControlPanelProps {
  activeNode?: WorkflowNode;
  previousNode?: WorkflowNode;
  stepConfig?: StepConfig;
  selectedTools: string[];
  logs: string[];
  onToolToggle: (tool: string) => void;
  onExecute: () => void;
  isExecuting: boolean;
}

export default function AgentControlPanel({
  activeNode,
  previousNode,
  stepConfig,
  selectedTools,
  logs,
  onToolToggle,
  onExecute,
  isExecuting,
}: AgentControlPanelProps) {
  const [showLogs, setShowLogs] = useState(false);
  const [prompt, setPrompt] = useState('');

  if (!activeNode || !stepConfig) {
    return (
      <div className="w-[400px] bg-white border-r border-slate-200 flex items-center justify-center">
        <p className="text-sm text-slate-500">No step selected</p>
      </div>
    );
  }

  return (
    <div className="w-[400px] bg-white border-r border-slate-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-slate-900">Config: {activeNode.title}</h2>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">{stepConfig.title}</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Context Awareness Badge */}
          <div className={`rounded-lg p-3 flex items-start gap-3 ${
            previousNode 
              ? 'bg-blue-50 border border-blue-200' 
              : 'bg-emerald-50 border border-emerald-200'
          }`}>
            <Link2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
              previousNode ? 'text-blue-600' : 'text-emerald-600'
            }`} />
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-medium ${
                previousNode ? 'text-blue-900' : 'text-emerald-900'
              }`}>
                {stepConfig.contextBadge}
              </p>
              {previousNode && (
                <p className="text-xs text-blue-700 mt-1">
                  Using results from <span className="font-semibold">{previousNode.title}</span>
                </p>
              )}
            </div>
          </div>

          {/* Prompt Input */}
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Analysis Parameters
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={stepConfig.placeholder}
              rows={4}
              className="mt-2 w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* MCP Tools Selection - Dynamic based on step type */}
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              MCP Servers
            </label>
            <p className="text-xs text-slate-500 mt-1 mb-2">Select data sources for analysis</p>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {stepConfig.tools.map((tool) => {
                const isSelected = selectedTools.includes(tool.id);
                return (
                  <label
                    key={tool.id}
                    className={`group relative flex items-center gap-2 px-2.5 py-2 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-50 border-blue-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                    title={tool.description}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToolToggle(tool.id)}
                      className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
                    />
                    <p className="text-xs font-medium text-slate-900 truncate">{tool.name}</p>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                      {tool.description}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Execution Logs */}
          <div>
            <button
              onClick={() => setShowLogs(!showLogs)}
              className="w-full flex items-center justify-between text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              <span>Execution Logs</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showLogs ? 'rotate-180' : ''}`} />
            </button>
            {showLogs && (
              <div className="mt-2 bg-slate-900 rounded-lg p-3 max-h-32 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="text-xs text-slate-300 font-mono mb-1">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Execute Button - Fixed at Bottom */}
      <div className="p-6 border-t border-slate-200 bg-white">
        <button
          onClick={onExecute}
          disabled={isExecuting}
          className="w-full px-4 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm text-sm font-medium"
        >
          <Play className="w-4 h-4" />
          {isExecuting ? 'Executing...' : `Run ${activeNode.title}`}
        </button>
      </div>
    </div>
  );
}