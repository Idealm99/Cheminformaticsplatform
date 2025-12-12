import ProteinViewer from './widgets/ProteinViewer';
import ChemicalSpaceChart from './widgets/ChemicalSpaceChart';
import CompetitorTable from './widgets/CompetitorTable';
import BindingEnergyChart from './widgets/BindingEnergyChart';
import MetricsPanel from './widgets/MetricsPanel';
import PatentTimeline from './widgets/PatentTimeline';

export default function DashboardView() {
  return (
    <div className="flex-1 bg-slate-950 overflow-y-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-slate-100 mb-2">Final Analysis Dashboard</h1>
          <p className="text-slate-400">Comprehensive results across all workflow steps</p>
        </div>

        {/* Metrics Panel */}
        <MetricsPanel />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Row 1: Large visualizations */}
          <div className="col-span-6">
            <ProteinViewer />
          </div>
          <div className="col-span-6">
            <ChemicalSpaceChart />
          </div>

          {/* Row 2: Data tables and charts */}
          <div className="col-span-7">
            <CompetitorTable />
          </div>
          <div className="col-span-5">
            <BindingEnergyChart />
          </div>

          {/* Row 3: Additional insights */}
          <div className="col-span-12">
            <PatentTimeline />
          </div>
        </div>
      </div>
    </div>
  );
}
