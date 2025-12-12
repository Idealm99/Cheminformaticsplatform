import { useState } from 'react';
import { Play, Loader2, Send, FlaskConical } from 'lucide-react';
import WorkflowEditor from './WorkflowEditor';
import AgentControlPanel from './AgentControlPanel';
import ResultCanvas from './ResultCanvas';
import { WorkflowNode, StepConfig } from '../App';

// Research-specific MCP Servers for literature search
const researchMCPServers = [
  { id: 'PubMed', name: 'PubMed', description: 'Medical literature database', defaultChecked: true },
  { id: 'PubChem', name: 'PubChem', description: 'Chemical compounds database', defaultChecked: true },
  { id: 'ClinicalTrials', name: 'ClinicalTrials.gov', description: 'Clinical trial registry', defaultChecked: true },
  { id: 'openFDA', name: 'openFDA', description: 'FDA adverse events and labels', defaultChecked: true },
  { id: 'GooglePatents', name: 'Google Patents', description: 'Patent search and analysis', defaultChecked: false },
  { id: 'ChEMBL', name: 'ChEMBL', description: 'Bioactive drug-like molecules', defaultChecked: false },
  { id: 'UniProt', name: 'UniProt', description: 'Protein sequence and functional information', defaultChecked: false },
  { id: 'RCSB_PDB', name: 'RCSB PDB', description: 'Protein Data Bank structures', defaultChecked: false },
  { id: 'AlphaFold', name: 'AlphaFold', description: 'Predicted protein structures', defaultChecked: false },
  { id: 'RDKit', name: 'RDKit', description: 'Cheminformatics and molecular modeling', defaultChecked: false },
  { id: 'InterPro', name: 'InterPro', description: 'Protein families and domains', defaultChecked: false },
];

// Fixed research workflow steps configuration
const researchStepConfigs: Record<string, StepConfig> = {
  literature: {
    title: 'Literature Search',
    contextBadge: 'Research Pipeline Start',
    tools: researchMCPServers,
    placeholder: 'Enter research topic, keywords, or specific questions...',
    dashboardType: 'custom',
  },
  extraction: {
    title: 'Data Extraction',
    contextBadge: '🔗 Input: Literature Search Results (from Step 1)',
    tools: researchMCPServers,
    placeholder: 'Specify data extraction criteria (e.g., key findings, methods, results)...',
    dashboardType: 'custom',
  },
  analysis: {
    title: 'Analysis & Synthesis',
    contextBadge: '🔗 Input: Extracted Data (from Step 2)',
    tools: researchMCPServers,
    placeholder: 'Define analysis parameters (e.g., trends, patterns, correlations)...',
    dashboardType: 'custom',
  },
  report: {
    title: 'Report Generation',
    contextBadge: '🔗 Input: Analysis Results (from Step 3)',
    tools: researchMCPServers,
    placeholder: 'Specify report format and sections (e.g., executive summary, detailed findings)...',
    dashboardType: 'custom',
  },
};

export default function ResearchAgentPage() {
  const [pageState, setPageState] = useState<'input' | 'loading' | 'workflow'>('input');
  const [researchQuery, setResearchQuery] = useState('Find recent studies on EGFR inhibitors for non-small cell lung cancer treatment, focusing on clinical efficacy and safety profiles from the last 5 years.');
  
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { 
      id: 'research-1', 
      number: 1, 
      title: 'Literature Search', 
      stepType: 'custom', 
      status: 'idle', 
      logs: ['> Research Agent initialized', '> Ready for literature search'], 
      selectedTools: ['PubMed', 'PubChem', 'ClinicalTrials', 'openFDA'], 
      selectedDocs: [], 
      prompt: '' 
    },
    { 
      id: 'research-2', 
      number: 2, 
      title: 'Data Extraction', 
      stepType: 'custom', 
      status: 'idle', 
      logs: ['> System initialized', '> Awaiting input from Step 1'], 
      selectedTools: ['PubMed', 'PubChem', 'ClinicalTrials', 'openFDA'], 
      selectedDocs: [], 
      prompt: '' 
    },
    { 
      id: 'research-3', 
      number: 3, 
      title: 'Analysis & Synthesis', 
      stepType: 'custom', 
      status: 'idle', 
      logs: ['> System initialized', '> Awaiting input from Step 2'], 
      selectedTools: ['PubMed', 'PubChem', 'ClinicalTrials', 'openFDA'], 
      selectedDocs: [], 
      prompt: '' 
    },
    { 
      id: 'research-4', 
      number: 4, 
      title: 'Report Generation', 
      stepType: 'custom', 
      status: 'idle', 
      logs: ['> System initialized', '> Awaiting input from Step 3'], 
      selectedTools: ['PubMed', 'PubChem', 'ClinicalTrials', 'openFDA'], 
      selectedDocs: [], 
      prompt: '' 
    },
  ]);
  
  const [activeNodeId, setActiveNodeId] = useState('research-1');
  const [executedSteps, setExecutedSteps] = useState<Set<string>>(new Set());
  const [isExecuting, setIsExecuting] = useState(false);

  const handleToolToggle = (nodeId: string, tool: string) => {
    setNodes(nodes.map(node => {
      if (node.id !== nodeId) return node;
      
      const newTools = node.selectedTools.includes(tool)
        ? node.selectedTools.filter(t => t !== tool)
        : [...node.selectedTools, tool];
      
      return { ...node, selectedTools: newTools };
    }));
  };

  const handleDocToggle = (nodeId: string, docId: string) => {
    setNodes(nodes.map(node => {
      if (node.id !== nodeId) return node;
      
      const newDocs = node.selectedDocs.includes(docId)
        ? node.selectedDocs.filter(d => d !== docId)
        : [...node.selectedDocs, docId];
      
      return { ...node, selectedDocs: newDocs };
    }));
  };

  const handlePromptChange = (nodeId: string, prompt: string) => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, prompt } : node
    ));
  };

  const addLogToNode = (nodeId: string, log: string) => {
    setNodes(prevNodes => prevNodes.map(node => 
      node.id === nodeId 
        ? { ...node, logs: [...node.logs, log] } 
        : node
    ));
  };

  const handleExecute = () => {
    const activeNode = nodes.find(n => n.id === activeNodeId);
    if (!activeNode) return;

    setIsExecuting(true);
    setNodes(nodes.map(node =>
      node.id === activeNodeId ? { ...node, status: 'running' } : node
    ));
    
    addLogToNode(activeNodeId, `> [${activeNode.title}] Starting execution...`);

    setTimeout(() => {
      addLogToNode(activeNodeId, `> [${activeNode.title}] Processing data with ${activeNode.selectedTools.length} tools...`);
    }, 800);

    setTimeout(() => {
      addLogToNode(activeNodeId, `> [${activeNode.title}] ✓ Execution complete`);
      setIsExecuting(false);
      setExecutedSteps(prev => new Set([...prev, activeNodeId]));
      
      setNodes(prevNodes => prevNodes.map(node =>
        node.id === activeNodeId ? { ...node, status: 'complete' } : node
      ));
    }, 2500);
  };

  const handleNext = () => {
    const currentIndex = nodes.findIndex(n => n.id === activeNodeId);
    if (currentIndex < nodes.length - 1) {
      setActiveNodeId(nodes[currentIndex + 1].id);
    }
  };

  const activeNode = nodes.find(n => n.id === activeNodeId);
  const previousNode = activeNode ? nodes.find(n => n.number === activeNode.number - 1) : undefined;
  
  // Get appropriate config based on step number
  const getStepConfig = (node: WorkflowNode): StepConfig => {
    const configKeys = ['literature', 'extraction', 'analysis', 'report'];
    const configKey = configKeys[node.number - 1] || 'literature';
    return researchStepConfigs[configKey];
  };
  
  const stepConfig = activeNode ? getStepConfig(activeNode) : undefined;
  const isExecuted = executedSteps.has(activeNodeId);

  // Handle submit research query
  const handleSubmitQuery = () => {
    if (!researchQuery.trim()) return;
    
    setPageState('loading');
    
    setTimeout(() => {
      setPageState('workflow');
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitQuery();
    }
  };

  // Input Screen
  if (pageState === 'input') {
    return (
      <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-8">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FlaskConical className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Research Agent</h1>
            <p className="text-slate-600">
              Automated scientific research workflow powered by AI
            </p>
          </div>

          {/* Input Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Research Query
            </label>
            <div className="flex gap-3">
              <textarea
                value={researchQuery}
                onChange={(e) => setResearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your research topic or question..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
              />
              <button
                onClick={handleSubmitQuery}
                disabled={!researchQuery.trim()}
                className="px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Press <kbd className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded text-slate-700">Enter</kbd> to submit or click the send button
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                📚 Multi-Database Search
              </h3>
              <p className="text-xs text-slate-600">
                Searches across PubMed, PubChem, ClinicalTrials.gov, and more
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                🔄 Automated Pipeline
              </h3>
              <p className="text-xs text-slate-600">
                4-step workflow: Search → Extract → Analyze → Report
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (pageState === 'loading') {
    return (
      <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
            <FlaskConical className="w-10 h-10 text-white" />
          </div>
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Preparing Research Workflow
          </h2>
          <p className="text-slate-600">
            Setting up your research pipeline...
          </p>
        </div>
      </div>
    );
  }

  // Workflow Screen
  return (
    <>
      {/* Fixed Next Button - Bottom Right */}
      <button
        onClick={handleNext}
        disabled={isExecuting || !activeNode}
        className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-lg flex items-center gap-3 transition-all shadow-lg ${
          isExecuting 
            ? 'bg-blue-600 text-white cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl disabled:bg-slate-300 disabled:cursor-not-allowed'
        }`}
      >
        {isExecuting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
        <span className="font-medium">NEXT</span>
      </button>

      {/* Column 2: Workflow Editor - Fixed steps, no add/delete */}
      <WorkflowEditor
        nodes={nodes}
        activeNodeId={activeNodeId}
        onNodeClick={setActiveNodeId}
        onAddNode={() => {}} // Disabled for fixed workflow
        onDeleteNode={() => {}} // Disabled for fixed workflow
        onUpdateNodeTitle={() => {}} // Disabled for fixed workflow
        onChangeStepType={() => {}} // Disabled for fixed workflow
        isResearchMode={true} // Flag to hide add/delete buttons
      />

      {/* Column 3: Agent Control Panel */}
      <AgentControlPanel
        activeNode={activeNode}
        previousNode={previousNode}
        stepConfig={stepConfig}
        selectedTools={activeNode?.selectedTools || []}
        selectedDocs={activeNode?.selectedDocs || []}
        prompt={activeNode?.prompt || ''}
        logs={activeNode?.logs || []}
        onToolToggle={(tool) => handleToolToggle(activeNodeId, tool)}
        onDocToggle={(docId) => handleDocToggle(activeNodeId, docId)}
        onPromptChange={(prompt) => handlePromptChange(activeNodeId, prompt)}
        onExecute={handleExecute}
        isExecuting={isExecuting}
      />

      {/* Column 4: Result Canvas */}
      <ResultCanvas 
        activeNode={activeNode}
        stepConfig={stepConfig}
        isExecuted={isExecuted}
        isExecuting={isExecuting}
        prompt={activeNode?.prompt || ''}
        onPromptChange={(prompt) => handlePromptChange(activeNodeId, prompt)}
        onExecute={handleExecute}
        researchQuery={researchQuery}
      />
    </>
  );
}