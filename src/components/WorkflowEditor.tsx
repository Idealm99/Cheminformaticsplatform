import { Plus, Trash2, Circle, CheckCircle2, FlaskConical, Pill, Atom, FileText, Loader2, ArrowDown, Trophy, Network } from 'lucide-react';
import { WorkflowNode } from '../App';
import { useState } from 'react';

interface WorkflowEditorProps {
  nodes: WorkflowNode[];
  activeNodeId: string;
  onNodeClick: (nodeId: string) => void;
  onAddNode: (afterIndex: number) => void;
  onDeleteNode: (nodeId: string) => void;
  onUpdateNodeTitle: (nodeId: string, newTitle: string) => void;
  onChangeStepType: (nodeId: string, newType: 'target' | 'competitor' | 'structural' | 'clinical' | 'pathway' | 'custom') => void;
  isResearchMode?: boolean; // Optional flag to disable editing controls
}

const stepTypeIcons = {
  target: FlaskConical,
  competitor: Pill,
  structural: Atom,
  clinical: FileText,
  pathway: Network,
  custom: Circle,
};

export default function WorkflowEditor({
  nodes,
  activeNodeId,
  onNodeClick,
  onAddNode,
  onDeleteNode,
  onUpdateNodeTitle,
  onChangeStepType,
  isResearchMode,
}: WorkflowEditorProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleStartEdit = (node: WorkflowNode) => {
    setEditingNodeId(node.id);
    setEditValue(node.title);
  };

  const handleFinishEdit = (nodeId: string) => {
    if (editValue.trim()) {
      onUpdateNodeTitle(nodeId, editValue.trim());
    }
    setEditingNodeId(null);
  };

  return (
    <div className="w-80 bg-white border-r border-slate-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">
          {isResearchMode ? 'Cheminformatics' : 'Workflow Pipeline'}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">{nodes.length} steps configured</p>
      </div>

      {/* Workflow Nodes */}
      <div className="flex-1 overflow-y-auto p-4 max-w-xs">
        <div className="space-y-3">
          {/* STEP Header */}
          <div className="text-center mb-4">
            <span className="text-slate-500 tracking-wide font-semibold">STEP</span>
          </div>
          
          {nodes.map((node, index) => {
            const StepIcon = stepTypeIcons[node.stepType];
            const isLastNode = index === nodes.length - 1;
            
            return (
              <div key={node.id}>
                {/* Node Card */}
                <div
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => onNodeClick(node.id)}
                  className={`relative group cursor-pointer transition-all rounded-md p-1.5 border ${
                    isLastNode && node.status === 'complete'
                      ? 'bg-white border-amber-300 shadow-md ring-2 ring-amber-200'
                      : isLastNode
                      ? 'bg-white border-purple-300 shadow-sm ring-2 ring-purple-200'
                      : node.id === activeNodeId
                      ? 'bg-blue-50 border-blue-400 shadow-sm ring-2 ring-blue-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-1.5">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      {node.status === 'running' ? (
                        <Loader2 className={`w-3.5 h-3.5 animate-spin ${isLastNode ? 'text-purple-600' : 'text-blue-600'}`} />
                      ) : node.status === 'complete' && isLastNode ? (
                        <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      ) : node.status === 'complete' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      ) : node.id === activeNodeId ? (
                        <div className={`w-3.5 h-3.5 rounded-full ${isLastNode ? 'bg-purple-600' : 'bg-blue-600'} flex items-center justify-center`}>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-slate-300" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        {/* Final Report Badge */}
                        {isLastNode && (
                          <span className="px-1 py-0.5 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 rounded text-xs font-semibold text-amber-800">
                            ✨
                          </span>
                        )}
                        
                        {/* Step Type Badge */}
                        {!isLastNode && (
                          <div className={`flex items-center gap-0.5 px-1 py-0.5 rounded text-xs ${
                            node.stepType === 'target' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                            node.stepType === 'competitor' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            node.stepType === 'structural' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            node.stepType === 'clinical' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                            node.stepType === 'pathway' ? 'bg-green-50 text-green-700 border border-green-200' :
                            'bg-slate-50 text-slate-700 border border-slate-200'
                          }`}>
                            <StepIcon className="w-2.5 h-2.5" />
                          </div>
                        )}

                        {node.status === 'running' && (
                          <span className={`px-1 py-0.5 border rounded text-xs ${
                            isLastNode 
                              ? 'bg-purple-100 border-purple-200 text-purple-700'
                              : 'bg-blue-100 border-blue-200 text-blue-700'
                          }`}>
                            •
                          </span>
                        )}
                        {node.id === activeNodeId && node.status !== 'running' && !isLastNode && (
                          <span className="px-1 py-0.5 bg-blue-100 border border-blue-200 rounded text-xs text-blue-700">
                            •
                          </span>
                        )}
                      </div>
                      
                      {/* Editable Title */}
                      {editingNodeId === node.id && !isResearchMode ? (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => handleFinishEdit(node.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleFinishEdit(node.id);
                            if (e.key === 'Escape') {
                              setEditingNodeId(null);
                              setEditValue('');
                            }
                          }}
                          onClick={(e) => e.stopPropagation()}
                          autoFocus
                          className="w-full text-xs text-slate-900 mt-0.5 bg-transparent border-b border-blue-400 focus:outline-none"
                        />
                      ) : (
                        <h3
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isResearchMode) handleStartEdit(node);
                          }}
                          className={`text-xs text-slate-900 mt-0.5 leading-tight ${!isResearchMode ? 'cursor-text hover:text-blue-600' : ''} transition-colors`}
                        >
                          {node.title}
                        </h3>
                      )}

                      {/* Step Type Selector (show on hover/active) */}
                      {!isResearchMode && !isLastNode && (hoveredNodeId === node.id || node.id === activeNodeId) && editingNodeId !== node.id && (
                        <div className="mt-1 flex gap-0.5">
                          {(['target', 'competitor', 'structural', 'clinical', 'pathway', 'custom'] as const).map((type) => {
                            const Icon = stepTypeIcons[type];
                            return (
                              <button
                                key={type}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onChangeStepType(node.id, type);
                                }}
                                className={`p-0.5 rounded border transition-all ${
                                  node.stepType === type
                                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                                }`}
                                title={type}
                              >
                                <Icon className="w-2.5 h-2.5" />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Delete Button */}
                    {!isResearchMode && hoveredNodeId === node.id && nodes.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteNode(node.id);
                        }}
                        className="flex-shrink-0 p-0.5 bg-red-50 hover:bg-red-100 border border-red-200 rounded transition-colors"
                      >
                        <Trash2 className="w-3 h-3 text-red-600" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Connector + Add Button */}
                {index < nodes.length - 1 && (
                  <div className="flex items-center justify-center my-2 relative h-6">
                    {/* Vertical Line */}
                    <div className={`absolute w-0.5 h-full transition-colors ${
                      node.status === 'complete' ? 'bg-emerald-300' : 'bg-slate-200'
                    }`}></div>

                    {/* Arrow Icon */}
                    <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      node.status === 'complete' 
                        ? 'bg-emerald-100 border border-emerald-300' 
                        : 'bg-white border border-slate-200'
                    }`}>
                      <ArrowDown className={`w-3.5 h-3.5 transition-colors ${
                        node.status === 'complete' ? 'text-emerald-600' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer - Add Step */}
      {!isResearchMode && (
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={() => onAddNode(nodes.length - 1)}
            className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg flex items-center justify-center gap-2 transition-all text-sm text-slate-600"
          >
            <Plus className="w-4 h-4" />
            Add Step
          </button>
        </div>
      )}
    </div>
  );
}