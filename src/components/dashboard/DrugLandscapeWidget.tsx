import { Pill } from 'lucide-react';

const competitorDrugs = [
  { name: 'AS1517499', phase: 'Preclinical', bioactivity: 'IC50: 21 nM', developer: 'Astellas' },
  { name: 'Compound 25', phase: 'Lead Optimization', bioactivity: 'IC50: 145 nM', developer: 'Pfizer' },
  { name: 'SAR-1', phase: 'Phase I', bioactivity: 'IC50: 87 nM', developer: 'Sanofi' },
  { name: 'GSK2894512', phase: 'Phase I', bioactivity: 'IC50: 9.8 nM', developer: 'GSK' },
  { name: 'BMT-123', phase: 'Preclinical', bioactivity: 'IC50: 340 nM', developer: 'Biomarin' },
  { name: 'Compound X12', phase: 'Lead Optimization', bioactivity: 'IC50: 520 nM', developer: 'Novartis' },
];

const phaseColors: Record<string, string> = {
  'Preclinical': 'bg-gray-100 text-gray-700',
  'Lead Optimization': 'bg-blue-100 text-blue-700',
  'Phase I': 'bg-green-100 text-green-700',
  'Phase II': 'bg-amber-100 text-amber-700',
  'Phase III': 'bg-orange-100 text-orange-700',
};

export default function DrugLandscapeWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Pill className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-gray-900">Competitor Drug Landscape</h3>
            <p className="text-xs text-gray-500">Step 2 Results</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl text-blue-600">247</div>
            <div className="text-xs text-gray-600">Total Compounds</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl text-green-600">12</div>
            <div className="text-xs text-gray-600">Clinical Trials</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl text-purple-600">8</div>
            <div className="text-xs text-gray-600">Developers</div>
          </div>
        </div>

        {/* Drug Table */}
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs text-gray-700">Compound</th>
                <th className="px-3 py-2 text-left text-xs text-gray-700">Phase</th>
                <th className="px-3 py-2 text-left text-xs text-gray-700">Bioactivity</th>
                <th className="px-3 py-2 text-left text-xs text-gray-700">Developer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {competitorDrugs.map((drug, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-3 text-gray-900">{drug.name}</td>
                  <td className="px-3 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${phaseColors[drug.phase]}`}>
                      {drug.phase}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-600">{drug.bioactivity}</td>
                  <td className="px-3 py-3 text-gray-600">{drug.developer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
