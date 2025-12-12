const competitors = [
  { name: 'GSK2894512', phase: 'Phase I', ic50: '9.8 nM', developer: 'GSK', cluster: 3, status: 'active' },
  { name: 'AS1517499', phase: 'Preclinical', ic50: '21 nM', developer: 'Astellas', cluster: 3, status: 'active' },
  { name: 'SAR-1', phase: 'Phase I', ic50: '87 nM', developer: 'Sanofi', cluster: 2, status: 'active' },
  { name: 'Compound 25', phase: 'Lead Opt', ic50: '145 nM', developer: 'Pfizer', cluster: 1, status: 'active' },
  { name: 'BMT-123', phase: 'Preclinical', ic50: '340 nM', developer: 'Biomarin', cluster: 5, status: 'active' },
  { name: 'NVS-456', phase: 'Lead Opt', ic50: '420 nM', developer: 'Novartis', cluster: 4, status: 'active' },
  { name: 'Compound X12', phase: 'Hit-to-Lead', ic50: '520 nM', developer: 'Novartis', cluster: 4, status: 'on-hold' },
];

export default function CompetitorTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-lg text-slate-100">Competitive Drug Landscape</h3>
        <p className="text-xs text-slate-500">Key compounds and development status</p>
      </div>

      <div className="overflow-hidden border border-slate-800 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-slate-950">
            <tr>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Compound</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Phase</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">IC50</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Developer</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Cluster</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {competitors.map((comp, index) => (
              <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-4 py-3 text-slate-100">{comp.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs border ${
                      comp.phase.includes('Phase')
                        ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20'
                        : comp.phase.includes('Preclinical')
                        ? 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20'
                        : 'bg-slate-700/50 text-slate-400 border-slate-600/50'
                    }`}
                  >
                    {comp.phase}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`${
                    parseFloat(comp.ic50) < 50 ? 'text-emerald-400' : 'text-slate-300'
                  }`}>
                    {comp.ic50}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400">{comp.developer}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded text-xs">
                    {comp.cluster}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      comp.status === 'active' ? 'bg-emerald-400' : 'bg-amber-400'
                    }`}></div>
                    <span className="text-xs text-slate-400 capitalize">{comp.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
