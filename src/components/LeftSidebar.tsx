import { Plus, CheckCircle2, Circle, Loader2 } from 'lucide-react';
import { WorkflowNode } from '../App';

interface LeftSidebarProps {
  nodes: WorkflowNode[];
  activeNodeId: string;
  onNodeClick: (nodeId: string) => void;
  onAddNode: () => void;
}

export default function LeftSidebar({ nodes, activeNodeId, onNodeClick, onAddNode }: LeftSidebarProps) {
  return (
    <div className="w-20 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-6 overflow-y-auto">
      {/* Logo/Brand */}
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-8 flex-shrink-0">
        <div className="text-white text-xs">AI</div>
      </div>

      {/* Vertical Flow */}
      <div className="flex-1 flex flex-col items-center gap-3 relative">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex flex-col items-center">
            {/* Node Button */}
            <button
              onClick={() => onNodeClick(node.id)}
              className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group ${
                node.id === activeNodeId
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-110'
                  : node.status === 'complete'
                  ? 'bg-emerald-500/20 border-2 border-emerald-400'
                  : 'bg-slate-800 border-2 border-slate-700 hover:border-slate-600'
              }`}
            >
              {node.status === 'complete' && node.id !== activeNodeId ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              ) : node.id === activeNodeId ? (
                <div className="text-slate-950">{node.number}</div>
              ) : (
                <Circle className="w-6 h-6 text-slate-500" />
              )}

              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                <div className="text-xs text-slate-100">{node.label}</div>
              </div>

              {/* Active Glow */}
              {node.id === activeNodeId && (
                <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20"></div>
              )}
            </button>

            {/* Connector Line */}
            {index < nodes.length - 1 && (
              <div className={`w-0.5 h-8 my-1 ${
                node.status === 'complete' ? 'bg-emerald-400' : 'bg-slate-700'
              }`}></div>
            )}
          </div>
        ))}

        {/* Add Node Button */}
        <div className="mt-4 flex flex-col items-center">
          <div className="w-0.5 h-6 bg-slate-700 mb-2"></div>
          <button
            onClick={onAddNode}
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center hover:border-cyan-400 hover:bg-slate-700 transition-all duration-300 group"
          >
            <Plus className="w-6 h-6 text-slate-500 group-hover:text-cyan-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
