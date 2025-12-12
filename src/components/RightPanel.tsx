import { WorkflowNode } from '../App';
import DashboardView from './dashboard/DashboardView';
import StepView from './dashboard/StepView';

interface RightPanelProps {
  activeNode?: WorkflowNode;
}

export default function RightPanel({ activeNode }: RightPanelProps) {
  if (!activeNode) {
    return (
      <div className="flex-1 bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-slate-600 text-sm">No step selected</div>
        </div>
      </div>
    );
  }

  // Show full dashboard for Step 5
  if (activeNode.number === 5) {
    return <DashboardView />;
  }

  // Show step-specific view for Steps 1-4
  return <StepView stepNumber={activeNode.number} />;
}
