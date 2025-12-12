import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  // Cluster 1 (Cyan)
  { x: 15, y: 25, z: 40, cluster: 1, name: 'C1-1' },
  { x: 18, y: 28, z: 45, cluster: 1, name: 'C1-2' },
  { x: 20, y: 23, z: 42, cluster: 1, name: 'C1-3' },
  { x: 16, y: 26, z: 38, cluster: 1, name: 'C1-4' },
  
  // Cluster 2 (Emerald)
  { x: 55, y: 15, z: 50, cluster: 2, name: 'C2-1' },
  { x: 58, y: 18, z: 55, cluster: 2, name: 'C2-2' },
  { x: 52, y: 16, z: 48, cluster: 2, name: 'C2-3' },
  
  // Cluster 3 (Purple) - Lead series
  { x: 35, y: 65, z: 60, cluster: 3, name: 'C3-1' },
  { x: 38, y: 68, z: 65, cluster: 3, name: 'C3-2' },
  { x: 33, y: 63, z: 58, cluster: 3, name: 'C3-3' },
  { x: 36, y: 66, z: 62, cluster: 3, name: 'C3-4' },
  { x: 40, y: 70, z: 68, cluster: 3, name: 'C3-5' },
  
  // Cluster 4 (Amber)
  { x: 75, y: 50, z: 45, cluster: 4, name: 'C4-1' },
  { x: 78, y: 53, z: 48, cluster: 4, name: 'C4-2' },
  { x: 73, y: 48, z: 42, cluster: 4, name: 'C4-3' },
  
  // Cluster 5 (Red)
  { x: 25, y: 75, z: 35, cluster: 5, name: 'C5-1' },
  { x: 28, y: 78, z: 38, cluster: 5, name: 'C5-2' },
  
  // Cluster 6 (Pink)
  { x: 65, y: 35, z: 52, cluster: 6, name: 'C6-1' },
  { x: 68, y: 38, z: 55, cluster: 6, name: 'C6-2' },
  
  // Cluster 7 (Blue) - Novel scaffolds
  { x: 10, y: 45, z: 30, cluster: 7, name: 'C7-1' },
  { x: 12, y: 48, z: 32, cluster: 7, name: 'C7-2' },
  { x: 14, y: 43, z: 28, cluster: 7, name: 'C7-3' },
];

const clusterInfo: Record<number, { color: string; label: string }> = {
  1: { color: '#06B6D4', label: 'Aminopyridines' },
  2: { color: '#10B981', label: 'Quinazolines' },
  3: { color: '#8B5CF6', label: 'Aminopyrimidines (Lead)' },
  4: { color: '#F59E0B', label: 'Benzimidazoles' },
  5: { color: '#EF4444', label: 'Indazoles' },
  6: { color: '#EC4899', label: 'Pyrazolopyrimidines' },
  7: { color: '#3B82F6', label: 'Bicyclic (Novel)' },
};

export default function ChemicalSpaceChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[500px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg text-slate-100">Chemical Space Clustering</h3>
          <p className="text-xs text-slate-500">RDKit Morgan Fingerprints • 247 Compounds</p>
        </div>
      </div>

      <div className="flex-1 min-h-0" style={{ height: '350px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, bottom: 50, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              type="number"
              dataKey="x"
              name="PC1"
              stroke="#475569"
              tick={{ fill: '#64748b', fontSize: 11 }}
              label={{ value: 'Principal Component 1', position: 'bottom', fill: '#64748b', fontSize: 11, offset: 0 }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="PC2"
              stroke="#475569"
              tick={{ fill: '#64748b', fontSize: 11 }}
              label={{ value: 'PC2', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
            />
            <ZAxis type="number" dataKey="z" range={[150, 500]} />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                fontSize: '11px',
              }}
              labelStyle={{ color: '#cbd5e1' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-slate-900 border border-slate-700 rounded-lg p-2">
                      <div className="text-xs text-slate-100 mb-1">{clusterInfo[data.cluster].label}</div>
                      <div className="text-xs text-slate-400">PC1: {data.x.toFixed(1)}</div>
                      <div className="text-xs text-slate-400">PC2: {data.y.toFixed(1)}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter data={data}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={clusterInfo[entry.cluster].color} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pt-4 border-t border-slate-800">
        {Object.entries(clusterInfo).map(([cluster, info]) => (
          <div key={cluster} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: info.color }}></div>
            <span className="text-xs text-slate-400">{info.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}