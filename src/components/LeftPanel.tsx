import { Play, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface LeftPanelProps {
  stepNumber: 1 | 2 | 3 | 4;
  onRun: () => void;
  isRunning: boolean;
  selectedTools: string[];
  onToolToggle: (tool: string) => void;
}

const stepTools = {
  1: [
    { id: 'UniProt', name: 'UniProt', description: 'Protein sequence and annotation database' },
    { id: 'InterPro', name: 'InterPro', description: 'Protein family and domain analysis' },
    { id: 'RCSB PDB', name: 'RCSB PDB', description: 'Protein structure repository' },
    { id: 'AlphaFold', name: 'AlphaFold', description: 'AI-predicted protein structures' },
  ],
  2: [
    { id: 'ChEMBL', name: 'ChEMBL', description: 'Bioactive molecules database' },
    { id: 'PubChem', name: 'PubChem', description: 'Chemical compounds and properties' },
    { id: 'SureChEMBL', name: 'SureChEMBL', description: 'Patent chemistry extraction' },
    { id: 'ClinicalTrials.gov', name: 'ClinicalTrials.gov', description: 'Clinical trial registry' },
    { id: 'openFDA', name: 'openFDA', description: 'FDA adverse events data' },
  ],
  3: [
    { id: 'RDKit', name: 'RDKit', description: 'Open-source cheminformatics library' },
  ],
  4: [
    { id: 'SureChEMBL', name: 'SureChEMBL', description: 'Patent chemistry extraction' },
    { id: 'Google Patents', name: 'Google Patents', description: 'Patent search and analysis' },
  ],
};

const stepPrompts = {
  1: 'Analyze STAT6 structure and evaluate druggability.',
  2: 'Find competitor drugs targeting STAT6 and collect bioactivity data.',
  3: 'Cluster compounds using RDKit fingerprints and identify chemical scaffolds.',
  4: 'Search patent landscape for STAT6 inhibitors and identify key developers.',
};

export default function LeftPanel({ 
  stepNumber, 
  onRun, 
  isRunning, 
  selectedTools,
  onToolToggle 
}: LeftPanelProps) {
  const [prompt, setPrompt] = useState(stepPrompts[stepNumber]);
  const tools = stepTools[stepNumber];

  return (
    <div className="w-1/2 border-r border-gray-200 bg-white overflow-y-auto">
      <div className="p-6">
        <h2 className="text-gray-900 mb-1">User Input & Configuration</h2>
        <p className="text-sm text-gray-500 mb-6">Define your analysis parameters and select tools</p>

        {/* Prompt Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-2">
            Natural Language Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={stepPrompts[stepNumber]}
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* MCP Server Selector */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-3">
            Available Agents/Tools ({selectedTools.length} selected)
          </label>
          <div className="space-y-2">
            {tools.map(tool => (
              <div
                key={tool.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedTools.includes(tool.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => onToolToggle(tool.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">{tool.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{tool.description}</div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      selectedTools.includes(tool.id)
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedTools.includes(tool.id) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Run Button */}
        <button
          onClick={onRun}
          disabled={isRunning || selectedTools.length === 0}
          className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
            isRunning || selectedTools.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
          }`}
        >
          {isRunning ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Run Analysis
            </>
          )}
        </button>

        {selectedTools.length === 0 && (
          <p className="text-xs text-amber-600 mt-2 text-center">
            Please select at least one tool to run the analysis
          </p>
        )}
      </div>
    </div>
  );
}
