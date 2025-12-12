import { Plus, Trash2, Circle, CheckCircle2, FlaskConical, Pill, Atom, FileText, Loader2 } from 'lucide-react';
import { WorkflowNode } from '../App';
import { useState } from 'react';

interface WorkflowEditorProps {
  nodes: WorkflowNode[];
  activeNodeId: string;
  onNodeClick: (nodeId: string) => void;
  onAddNode: (afterIndex: number) => void;
  onDeleteNode: (nodeId: string) => void;
  onUpdateNodeTitle: (nodeId: string, newTitle: string) => void;
  onChangeStepType: (nodeId: string, newType: 'target' | 'competitor' | 'structural' | 'clinical' | 'custom') => void;
}

const stepTypeIcons = {
  target: FlaskConical,
  competitor: Pill,
  structural: Atom,
  clinical: FileText,
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
        <h2 className="text-sm font-semibold text-slate-900">Workflow Pipeline</h2>
        <p className="text-xs text-slate-500 mt-0.5">{nodes.length} steps configured</p>
      </div>

      {/* Workflow Nodes */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-3">
          {nodes.map((node, index) => {
            const StepIcon = stepTypeIcons[node.stepType];
            
            return (
              <div key={node.id}>
                {/* Node Card */}
                <div
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => onNodeClick(node.id)}
                  className={`relative group cursor-pointer transition-all rounded-lg p-4 border ${
                    node.id === activeNodeId
                      ? 'bg-blue-50 border-blue-400 shadow-sm ring-2 ring-blue-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      {node.status === 'running' ? (
                        <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                      ) : node.status === 'complete' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : node.id === activeNodeId ? (
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-slate-500">Step {node.number}</span>
                        
                        {/* Step Type Badge */}
                        <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-xs ${
                          node.stepType === 'target' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                          node.stepType === 'competitor' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                          node.stepType === 'structural' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                          node.stepType === 'clinical' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                          'bg-slate-50 text-slate-700 border border-slate-200'
                        }`}>
                          <StepIcon className="w-3 h-3" />
                          <span className="capitalize">{node.stepType}</span>
                        </div>

                        {node.status === 'running' && (
                          <span className="px-2 py-0.5 bg-blue-100 border border-blue-200 rounded text-xs text-blue-700">
                            Running...
                          </span>
                        )}
                        {node.id === activeNodeId && node.status !== 'running' && (
                          <span className="px-2 py-0.5 bg-blue-100 border border-blue-200 rounded text-xs text-blue-700">
                            Active
                          </span>
                        )}
                      </div>
                      
                      {/* Editable Title */}
                      {editingNodeId === node.id ? (
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
                          className="w-full text-sm text-slate-900 mt-1 bg-transparent border-b border-blue-400 focus:outline-none"
                        />
                      ) : (
                        <h3
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartEdit(node);
                          }}
                          className="text-sm text-slate-900 mt-1 cursor-text hover:text-blue-600 transition-colors"
                        >
                          {node.title}
                        </h3>
                      )}

                      {/* Step Type Selector (show on hover/active) */}
                      {(hoveredNodeId === node.id || node.id === activeNodeId) && editingNodeId !== node.id && (
                        <div className="mt-2 flex gap-1">
                          {(['target', 'competitor', 'structural', 'clinical', 'custom'] as const).map((type) => {
                            const Icon = stepTypeIcons[type];
                            return (
                              <button
                                key={type}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onChangeStepType(node.id, type);
                                }}
                                className={`p-1 rounded border transition-all ${
                                  node.stepType === type
                                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                                }`}
                                title={type}
                              >
                                <Icon className="w-3 h-3" />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Delete Button */}
                    {hoveredNodeId === node.id && nodes.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteNode(node.id);
                        }}
                        className="flex-shrink-0 p-1.5 bg-red-50 hover:bg-red-100 border border-red-200 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Connector + Add Button */}
                {index < nodes.length - 1 && (
                  <div className="flex items-center justify-center my-3 relative">
                    {/* Vertical Line */}
                    <div className={`absolute w-0.5 h-full ${
                      node.status === 'complete' ? 'bg-emerald-200' : 'bg-slate-200'
                    }`}></div>

                    {/* Plus Button */}
                    <button
                      onClick={() => onAddNode(index)}
                      className="relative z-10 w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 rounded-full flex items-center justify-center transition-all group shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer - Add Step */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={() => onAddNode(nodes.length - 1)}
          className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg flex items-center justify-center gap-2 transition-all text-sm text-slate-600"
        >
          <Plus className="w-4 h-4" />
          Add Step
        </button>
      </div>
    </div>
  );
}