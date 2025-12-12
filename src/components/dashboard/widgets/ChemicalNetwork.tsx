import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { x: 20, y: 30, z: 45, cluster: 1 },
  { x: 25, y: 35, z: 50, cluster: 1 },
  { x: 22, y: 32, z: 48, cluster: 1 },
  { x: 60, y: 20, z: 55, cluster: 2 },
  { x: 65, y: 25, z: 60, cluster: 2 },
  { x: 62, y: 22, z: 58, cluster: 2 },
  { x: 40, y: 70, z: 40, cluster: 3 },
  { x: 45, y: 75, z: 45, cluster: 3 },
  { x: 42, y: 72, z: 42, cluster: 3 },
  { x: 80, y: 60, z: 70, cluster: 4 },
  { x: 85, y: 65, z: 75, cluster: 4 },
  { x: 30, y: 80, z: 35, cluster: 5 },
  { x: 70, y: 40, z: 65, cluster: 6 },
  { x: 15, y: 50, z: 30, cluster: 7 },
];

const clusterColors: Record<number, string> = {
  1: '#06B6D4',
  2: '#10B981',
  3: '#8B5CF6',
  4: '#F59E0B',
  5: '#EF4444',
  6: '#EC4899',
  7: '#3B82F6',
};

export default function ChemicalNetwork() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg text-slate-100">Chemical Space Network</h3>
          <p className="text-xs text-slate-500">7 Clusters via RDKit Fingerprints</p>
        </div>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, bottom: 40, left: 10 }}>
            <XAxis
              type="number"
              dataKey="x"
              name="PC1"
              stroke="#475569"
              tick={{ fill: '#64748b', fontSize: 11 }}
              label={{ value: 'Principal Component 1', position: 'bottom', fill: '#64748b', fontSize: 11 }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="PC2"
              stroke="#475569"
              tick={{ fill: '#64748b', fontSize: 11 }}
              label={{ value: 'PC2', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
            />
            <ZAxis type="number" dataKey="z" range={[100, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#cbd5e1' }}
            />
            <Scatter data={data} fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={clusterColors[entry.cluster]} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-800">
        {Object.entries(clusterColors).map(([cluster, color]) => (
          <div key={cluster} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
            <span className="text-xs text-slate-400">Cluster {cluster}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
