import { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';
import GlobalNavRail from './components/GlobalNavRail';
import WorkflowEditor from './components/WorkflowEditor';
import AgentControlPanel from './components/AgentControlPanel';
import ResultCanvas from './components/ResultCanvas';
import HomePage from './components/HomePage';
import RAGPage from './components/RAGPage';

export interface WorkflowNode {
  id: string;
  number: number;
  title: string;
  stepType: 'target' | 'competitor' | 'structural' | 'clinical' | 'custom';
  status: 'idle' | 'running' | 'complete';
}

export interface StepConfig {
  title: string;
  contextBadge: string;
  tools: Array<{ id: string; name: string; description: string; defaultChecked: boolean }>;
  placeholder: string;
  dashboardType: 'target' | 'competitor' | 'structural' | 'clinical' | 'custom';
}

// Global MCP Server list - same for all steps
const mcpServers = [
  { id: 'UniProt', name: 'UniProt', description: 'Protein sequence and functional information', defaultChecked: true },
  { id: 'InterPro', name: 'InterPro', description: 'Protein families and domains', defaultChecked: false },
  { id: 'RCSB_PDB', name: 'RCSB PDB', description: 'Protein Data Bank structures', defaultChecked: false },
  { id: 'AlphaFold', name: 'AlphaFold', description: 'Predicted protein structures', defaultChecked: true },
  { id: 'ChEMBL', name: 'ChEMBL', description: 'Bioactive drug-like molecules', defaultChecked: true },
  { id: 'PubChem', name: 'PubChem', description: 'Chemical compounds database', defaultChecked: false },
  { id: 'SureChEMBL', name: 'SureChEMBL', description: 'Patent chemistry data', defaultChecked: false },
  { id: 'ClinicalTrials', name: 'ClinicalTrials.gov', description: 'Clinical trial registry', defaultChecked: false },
  { id: 'openFDA', name: 'openFDA', description: 'FDA adverse events and labels', defaultChecked: false },
  { id: 'RDKit', name: 'RDKit', description: 'Cheminformatics and molecular modeling', defaultChecked: true },
  { id: 'GooglePatents', name: 'Google Patents', description: 'Patent search and analysis', defaultChecked: false },
];

// Step configuration mapping
export const stepConfigs: Record<string, StepConfig> = {
  target: {
    title: 'Target Identification',
    contextBadge: 'Start of Pipeline',
    tools: mcpServers,
    placeholder: 'Enter Target Gene Name (e.g., STAT6)...',
    dashboardType: 'target',
  },
  competitor: {
    title: 'Competitor Drug Search',
    contextBadge: '🔗 Input: Target Protein Data (from Step 1)',
    tools: mcpServers,
    placeholder: 'Set criteria for competitor search (e.g., Phase 2+)...',
    dashboardType: 'competitor',
  },
  structural: {
    title: 'Structural Analysis',
    contextBadge: '🔗 Input: Competitor Drug List (from Step 2)',
    tools: mcpServers,
    placeholder: 'Define clustering parameters...',
    dashboardType: 'structural',
  },
  clinical: {
    title: 'Clinical Research Search',
    contextBadge: '🔗 Input: Data from previous step',
    tools: mcpServers.map(server => ({
      ...server,
      defaultChecked: ['ClinicalTrials', 'openFDA', 'GooglePatents'].includes(server.id)
    })),
    placeholder: 'Enter search criteria (e.g., therapeutic area, indication)...',
    dashboardType: 'clinical',
  },
  custom: {
    title: 'Custom Analysis',
    contextBadge: '🔗 Input: Data from previous step',
    tools: mcpServers,
    placeholder: 'Enter analysis parameters...',
    dashboardType: 'custom',
  },
};

export default function App() {
  const [activeView, setActiveView] = useState('agents');
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: 'node-1', number: 1, title: 'Target Identification', stepType: 'target', status: 'idle' },
    { id: 'node-2', number: 2, title: 'Competitor Drug Search', stepType: 'competitor', status: 'idle' },
    { id: 'node-3', number: 3, title: 'Structural Analysis', stepType: 'structural', status: 'idle' },
  ]);
  const [activeNodeId, setActiveNodeId] = useState('node-1');
  const [executedSteps, setExecutedSteps] = useState<Set<string>>(new Set());
  const [isExecuting, setIsExecuting] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '> [System] Scientific workflow platform initialized',
    '> [System] Ready to begin analysis',
  ]);

  // Tool selection state per step
  const [stepTools, setStepTools] = useState<Record<string, string[]>>({
    'node-1': ['UniProt', 'AlphaFold', 'ChEMBL', 'RDKit'],
    'node-2': ['UniProt', 'AlphaFold', 'ChEMBL', 'RDKit'],
    'node-3': ['UniProt', 'AlphaFold', 'ChEMBL', 'RDKit'],
  });

  // RAG document selection state per step
  const [stepDocs, setStepDocs] = useState<Record<string, string[]>>({
    'node-1': [],
    'node-2': [],
    'node-3': [],
  });

  // Prompt state per step
  const [stepPrompts, setStepPrompts] = useState<Record<string, string>>({
    'node-1': '',
    'node-2': '',
    'node-3': '',
  });

  const handleAddNode = (afterIndex: number) => {
    const newNumber = afterIndex + 2;
    const newNode: WorkflowNode = {
      id: `node-${Date.now()}`,
      number: newNumber,
      title: `Step ${newNumber}`,
      stepType: 'custom',
      status: 'idle',
    };

    const updatedNodes = [...nodes];
    updatedNodes.splice(afterIndex + 1, 0, newNode);
    
    const renumbered = updatedNodes.map((node, index) => ({
      ...node,
      number: index + 1,
    }));

    setNodes(renumbered);
    setActiveNodeId(newNode.id);
    setStepTools(prev => ({ ...prev, [newNode.id]: [] }));
    setStepDocs(prev => ({ ...prev, [newNode.id]: [] }));
    setStepPrompts(prev => ({ ...prev, [newNode.id]: '' }));
  };

  const handleDeleteNode = (nodeId: string) => {
    if (nodes.length <= 1) return;

    const updatedNodes = nodes.filter(n => n.id !== nodeId);
    const renumbered = updatedNodes.map((node, index) => ({
      ...node,
      number: index + 1,
    }));

    setNodes(renumbered);

    if (activeNodeId === nodeId) {
      setActiveNodeId(renumbered[0]?.id || '');
    }

    // Clean up tool state
    const newStepTools = { ...stepTools };
    delete newStepTools[nodeId];
    setStepTools(newStepTools);

    // Clean up document state
    const newStepDocs = { ...stepDocs };
    delete newStepDocs[nodeId];
    setStepDocs(newStepDocs);

    // Clean up prompt state
    const newStepPrompts = { ...stepPrompts };
    delete newStepPrompts[nodeId];
    setStepPrompts(newStepPrompts);
  };

  const handleUpdateNodeTitle = (nodeId: string, newTitle: string) => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, title: newTitle } : node
    ));
  };

  const handleChangeStepType = (nodeId: string, newType: 'target' | 'competitor' | 'structural' | 'clinical' | 'custom') => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, stepType: newType } : node
    ));

    // Reset tools to defaults for new type
    const config = stepConfigs[newType];
    const defaultTools = config.tools.filter(t => t.defaultChecked).map(t => t.id);
    setStepTools(prev => ({ ...prev, [nodeId]: defaultTools }));
  };

  const handleToolToggle = (nodeId: string, tool: string) => {
    setStepTools(prev => {
      const currentTools = prev[nodeId] || [];
      const newTools = currentTools.includes(tool)
        ? currentTools.filter(t => t !== tool)
        : [...currentTools, tool];
      return { ...prev, [nodeId]: newTools };
    });
  };

  const handleDocToggle = (nodeId: string, docId: string) => {
    setStepDocs(prev => {
      const currentDocs = prev[nodeId] || [];
      const newDocs = currentDocs.includes(docId)
        ? currentDocs.filter(d => d !== docId)
        : [...currentDocs, docId];
      return { ...prev, [nodeId]: newDocs };
    });
  };

  const handlePromptChange = (nodeId: string, prompt: string) => {
    setStepPrompts(prev => ({ ...prev, [nodeId]: prompt }));
  };

  const handleExecute = () => {
    const activeNode = nodes.find(n => n.id === activeNodeId);
    if (!activeNode) return;

    setIsExecuting(true);
    setNodes(nodes.map(node =>
      node.id === activeNodeId ? { ...node, status: 'running' } : node
    ));
    
    setLogs(prev => [
      ...prev,
      `> [${activeNode.title}] Starting execution...`,
    ]);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        `> [${activeNode.title}] Processing data with ${stepTools[activeNodeId]?.length || 0} tools...`,
      ]);
    }, 800);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        `> [${activeNode.title}] ✓ Execution complete`,
      ]);
      setIsExecuting(false);
      setExecutedSteps(prev => new Set([...prev, activeNodeId]));
      
      setNodes(nodes.map(node =>
        node.id === activeNodeId ? { ...node, status: 'complete' } : node
      ));
    }, 2500);
  };

  const handleRunAll = async () => {
    setIsExecuting(true);
    setLogs(prev => [
      ...prev,
      '> [Pipeline] Starting full pipeline execution...',
    ]);

    // Execute each step sequentially
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      
      // Set current step to running
      setNodes(prevNodes => prevNodes.map(n =>
        n.id === node.id ? { ...n, status: 'running' } : n
      ));
      
      setActiveNodeId(node.id);
      
      setLogs(prev => [
        ...prev,
        `> [${node.title}] Starting execution...`,
      ]);

      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setLogs(prev => [
        ...prev,
        `> [${node.title}] Processing data with ${stepTools[node.id]?.length || 0} tools...`,
      ]);

      if (i > 0) {
        const prevNode = nodes[i - 1];
        setLogs(prev => [
          ...prev,
          `> [${node.title}] Using context from ${prevNode.title}`,
        ]);
      }

      // Simulate completion
      await new Promise(resolve => setTimeout(resolve, 1700));
      
      setLogs(prev => [
        ...prev,
        `> [${node.title}] ✓ Execution complete`,
      ]);

      setExecutedSteps(prev => new Set([...prev, node.id]));
      
      setNodes(prevNodes => prevNodes.map(n =>
        n.id === node.id ? { ...n, status: 'complete' } : n
      ));
    }

    setLogs(prev => [
      ...prev,
      '> [Pipeline] ✓ All steps completed successfully',
    ]);
    
    setIsExecuting(false);
  };

  const activeNode = nodes.find(n => n.id === activeNodeId);
  const previousNode = activeNode ? nodes.find(n => n.number === activeNode.number - 1) : undefined;
  const stepConfig = activeNode ? stepConfigs[activeNode.stepType] : undefined;
  const isExecuted = executedSteps.has(activeNodeId);

  return (
    <div className="h-screen bg-slate-50 text-slate-900 flex overflow-hidden">
      {/* Column 1: Global Nav Rail */}
      <GlobalNavRail activeView={activeView} onViewChange={setActiveView} />

      {/* Conditional rendering based on activeView */}
      {activeView === 'home' && <HomePage />}
      
      {activeView === 'rag' && <RAGPage />}
      
      {activeView === 'agents' && (
        <>
          {/* Fixed Run All Button - Top Right */}
          <button
            onClick={handleRunAll}
            disabled={isExecuting}
            className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-lg flex items-center gap-3 transition-all shadow-lg ${
              isExecuting 
                ? 'bg-blue-600 text-white cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl'
            }`}
          >
            {isExecuting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
            <span className="font-medium">{isExecuting ? 'Running Pipeline...' : 'Run All Steps'}</span>
          </button>

          {/* Column 2: Workflow Editor */}
          <WorkflowEditor
            nodes={nodes}
            activeNodeId={activeNodeId}
            onNodeClick={setActiveNodeId}
            onAddNode={handleAddNode}
            onDeleteNode={handleDeleteNode}
            onUpdateNodeTitle={handleUpdateNodeTitle}
            onChangeStepType={handleChangeStepType}
          />

          {/* Column 3: Agent Control Panel */}
          <AgentControlPanel
            activeNode={activeNode}
            previousNode={previousNode}
            stepConfig={stepConfig}
            selectedTools={stepTools[activeNodeId] || []}
            selectedDocs={stepDocs[activeNodeId] || []}
            prompt={stepPrompts[activeNodeId] || ''}
            logs={logs}
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
          />
        </>
      )}
    </div>
  );
}