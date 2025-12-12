import { FileText, TrendingUp } from 'lucide-react';

const patentData = [
  { 
    id: 'US10472345B2', 
    title: 'STAT6 inhibitor compounds and methods', 
    assignee: 'Pfizer Inc.', 
    year: 2023,
    claims: 24 
  },
  { 
    id: 'WO2023045632', 
    title: 'Novel heterocyclic STAT6 modulators', 
    assignee: 'Novartis AG', 
    year: 2023,
    claims: 18 
  },
  { 
    id: 'EP3890723A1', 
    title: 'Bicyclic compounds for STAT pathway modulation', 
    assignee: 'GSK', 
    year: 2022,
    claims: 31 
  },
  { 
    id: 'US11234567B1', 
    title: 'Selective STAT6 inhibitors for inflammatory disease', 
    assignee: 'Genentech', 
    year: 2022,
    claims: 22 
  },
  { 
    id: 'WO2022156789', 
    title: 'Aminopyrimidine derivatives as STAT6 inhibitors', 
    assignee: 'Merck & Co.', 
    year: 2022,
    claims: 27 
  },
];

const topAssignees = [
  { name: 'Pfizer Inc.', count: 23, color: 'bg-blue-500' },
  { name: 'Novartis AG', count: 18, color: 'bg-green-500' },
  { name: 'GSK', count: 15, color: 'bg-purple-500' },
  { name: 'Merck & Co.', count: 12, color: 'bg-orange-500' },
  { name: 'Genentech', count: 9, color: 'bg-red-500' },
];

export default function PatentWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm col-span-2">
      <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-gray-900">Intellectual Property Intelligence</h3>
            <p className="text-xs text-gray-500">Step 4 Results - Patent Landscape</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1: Stats */}
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <div className="text-3xl text-amber-600">156</div>
              <div className="text-xs text-gray-600">Patent Families</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-3xl text-blue-600">89</div>
              <div className="text-xs text-gray-600">Unique Scaffolds</div>
            </div>
            <div>
              <div className="text-sm text-gray-700 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Top Assignees
              </div>
              <div className="space-y-2">
                {topAssignees.map((assignee, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-700">{assignee.name}</span>
                      <span className="text-gray-500">{assignee.count}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${assignee.color}`}
                        style={{ width: `${(assignee.count / topAssignees[0].count) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Patent List */}
          <div className="col-span-2">
            <div className="text-sm text-gray-700 mb-3">Key Patent Documents</div>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {patentData.map((patent, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                        {patent.id}
                      </span>
                      <span className="text-xs text-gray-500">{patent.year}</span>
                    </div>
                    <span className="text-xs text-gray-400">{patent.claims} claims</span>
                  </div>
                  <div className="text-sm text-gray-900 mb-2">{patent.title}</div>
                  <div className="text-xs text-gray-600">{patent.assignee}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
