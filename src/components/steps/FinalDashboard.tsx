import ProteinWidget from '../dashboard/ProteinWidget';
import DrugLandscapeWidget from '../dashboard/DrugLandscapeWidget';
import ChemicalSpaceWidget from '../dashboard/ChemicalSpaceWidget';
import PatentWidget from '../dashboard/PatentWidget';

export default function FinalDashboard() {
  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-gray-900 mb-1">Comprehensive Analysis Report</h2>
          <p className="text-sm text-gray-500">
            Integrated results from all workflow steps
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Widget A: Protein Info */}
          <ProteinWidget />

          {/* Widget B: Drug Landscape */}
          <DrugLandscapeWidget />

          {/* Widget C: Chemical Space */}
          <ChemicalSpaceWidget />

          {/* Widget D: IP Intelligence */}
          <PatentWidget />
        </div>
      </div>
    </div>
  );
}
