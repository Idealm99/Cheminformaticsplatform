import ProteinViewer from './widgets/ProteinViewer';
import ChemicalNetwork from './widgets/ChemicalNetwork';
import DrugDataTable from './widgets/DrugDataTable';
import InteractionChart from './widgets/InteractionChart';
import MetricsGrid from './widgets/MetricsGrid';

export default function DashboardView() {
  return (
    <div className="flex-1 bg-slate-950 overflow-y-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-slate-100 mb-2">Final Dashboard</h1>
          <p className="text-slate-400">Comprehensive analysis across all workflow steps</p>
        </div>

        {/* Metrics Overview */}
        <MetricsGrid />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* 3D Protein Structure - Spans 6 columns */}
          <div className="col-span-6 row-span-2">
            <ProteinViewer />
          </div>

          {/* Chemical Network - Spans 6 columns */}
          <div className="col-span-6 row-span-2">
            <ChemicalNetwork />
          </div>

          {/* Drug Data Table - Spans 7 columns */}
          <div className="col-span-7">
            <DrugDataTable />
          </div>

          {/* Interaction Energy Chart - Spans 5 columns */}
          <div className="col-span-5">
            <InteractionChart />
          </div>
        </div>
      </div>
    </div>
  );
}
