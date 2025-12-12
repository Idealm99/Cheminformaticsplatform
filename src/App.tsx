import { useState } from 'react';
import GlobalNavRail from './components/GlobalNavRail';
import WorkflowEditor from './components/WorkflowEditor';
import AgentControlPanel from './components/AgentControlPanel';
import ResultCanvas from './components/ResultCanvas';

export interface WorkflowNode {
  id: string;
  number: number;
  title: string;
  stepType: 'target' | 'competitor' | 'structural' | 'custom';
  status: 'idle' | 'complete';
}

export interface StepConfig {
  title: string;
  contextBadge: string;
  tools: Array<{ id: string; name: string; description: string; defaultChecked: boolean }>;
  placeholder: string;
  dashboardType: 'target' | 'competitor' | 'structural' | 'custom';
}

// Step configuration mapping
export const stepConfigs: Record<string, StepConfig> = {
  target: {
    title: 'Target Identification',
    contextBadge: 'Start of Pipeline',
    tools: [
      { id: 'UniProt', name: 'UniProt', description: 'Protein sequence database', defaultChecked: true },
      { id: 'AlphaFold', name: 'AlphaFold', description: 'Protein structure prediction', defaultChecked: true },
      { id: 'PDB', name: 'PDB', description: 'Protein Data Bank', defaultChecked: false },
    ],
    placeholder: 'Enter Target Gene Name (e.g., STAT6)...',
    dashboardType: 'target',
  },
  competitor: {
    title: 'Competitor Drug Search',
    contextBadge: '🔗 Input: Target Protein Data (from Step 1)',
    tools: [
      { id: 'ChEMBL', name: 'ChEMBL', description: 'Bioactive molecules database', defaultChecked: true },
      { id: 'Patents', name: 'Patents', description: 'Patent database search', defaultChecked: true },
      { id: 'FDA', name: 'FDA', description: 'FDA drug approvals', defaultChecked: false },
    ],
    placeholder: 'Set criteria for competitor search (e.g., Phase 2+)...',
    dashboardType: 'competitor',
  },
  structural: {
    title: 'Structural Analysis',
    contextBadge: '🔗 Input: Competitor Drug List (from Step 2)',
    tools: [
      { id: 'RDKit', name: 'RDKit', description: 'Cheminformatics toolkit', defaultChecked: true },
      { id: 'PyMol', name: 'PyMol', description: 'Molecular visualization', defaultChecked: false },
    ],
    placeholder: 'Define clustering parameters...',
    dashboardType: 'structural',
  },
  custom: {
    title: 'Custom Analysis',
    contextBadge: '🔗 Input: Data from previous step',
    tools: [
      { id: 'Custom1', name: 'Custom Tool 1', description: 'General purpose tool', defaultChecked: true },
      { id: 'Custom2', name: 'Custom Tool 2', description: 'Analysis tool', defaultChecked: false },
    ],
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
    'node-1': ['UniProt', 'AlphaFold'],
    'node-2': ['ChEMBL', 'Patents'],
    'node-3': ['RDKit'],
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
  };

  const handleUpdateNodeTitle = (nodeId: string, newTitle: string) => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, title: newTitle } : node
    ));
  };

  const handleChangeStepType = (nodeId: string, newType: 'target' | 'competitor' | 'structural' | 'custom') => {
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

  const handleExecute = () => {
    const activeNode = nodes.find(n => n.id === activeNodeId);
    if (!activeNode) return;

    setIsExecuting(true);
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

  const activeNode = nodes.find(n => n.id === activeNodeId);
  const previousNode = activeNode ? nodes.find(n => n.number === activeNode.number - 1) : undefined;
  const stepConfig = activeNode ? stepConfigs[activeNode.stepType] : undefined;
  const isExecuted = executedSteps.has(activeNodeId);

  return (
    <div className="h-screen bg-slate-50 text-slate-900 flex overflow-hidden">
      {/* Column 1: Global Nav Rail */}
      <GlobalNavRail activeView={activeView} onViewChange={setActiveView} />

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
        logs={logs}
        onToolToggle={(tool) => handleToolToggle(activeNodeId, tool)}
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
    </div>
  );
}
