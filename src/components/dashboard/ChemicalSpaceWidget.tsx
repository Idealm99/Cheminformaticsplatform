import { FlaskConical } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const chemicalData = [
  // Cluster 1 - Blue
  { x: 2.3, y: 4.5, cluster: 1, name: 'Cluster 1' },
  { x: 2.8, y: 4.2, cluster: 1, name: 'Cluster 1' },
  { x: 2.1, y: 5.1, cluster: 1, name: 'Cluster 1' },
  { x: 2.6, y: 4.8, cluster: 1, name: 'Cluster 1' },
  { x: 3.0, y: 4.4, cluster: 1, name: 'Cluster 1' },
  
  // Cluster 2 - Green
  { x: 5.5, y: 2.3, cluster: 2, name: 'Cluster 2' },
  { x: 5.8, y: 2.7, cluster: 2, name: 'Cluster 2' },
  { x: 5.2, y: 2.1, cluster: 2, name: 'Cluster 2' },
  { x: 6.0, y: 2.5, cluster: 2, name: 'Cluster 2' },
  
  // Cluster 3 - Purple
  { x: 7.2, y: 6.8, cluster: 3, name: 'Cluster 3' },
  { x: 7.5, y: 6.5, cluster: 3, name: 'Cluster 3' },
  { x: 7.0, y: 7.2, cluster: 3, name: 'Cluster 3' },
  { x: 7.8, y: 6.9, cluster: 3, name: 'Cluster 3' },
  
  // Cluster 4 - Orange
  { x: 4.5, y: 7.5, cluster: 4, name: 'Cluster 4' },
  { x: 4.2, y: 7.8, cluster: 4, name: 'Cluster 4' },
  { x: 4.8, y: 7.2, cluster: 4, name: 'Cluster 4' },
  
  // Cluster 5 - Red
  { x: 8.5, y: 3.5, cluster: 5, name: 'Cluster 5' },
  { x: 8.8, y: 3.2, cluster: 5, name: 'Cluster 5' },
  { x: 8.2, y: 3.8, cluster: 5, name: 'Cluster 5' },
  
  // Cluster 6 - Cyan
  { x: 3.5, y: 1.5, cluster: 6, name: 'Cluster 6' },
  { x: 3.8, y: 1.8, cluster: 6, name: 'Cluster 6' },
  { x: 3.2, y: 1.2, cluster: 6, name: 'Cluster 6' },
  
  // Cluster 7 - Pink
  { x: 1.5, y: 8.5, cluster: 7, name: 'Cluster 7' },
  { x: 1.8, y: 8.2, cluster: 7, name: 'Cluster 7' },
  { x: 1.2, y: 8.8, cluster: 7, name: 'Cluster 7' },
];

const clusterColors: Record<number, string> = {
  1: '#2563EB', // blue
  2: '#10B981', // green
  3: '#8B5CF6', // purple
  4: '#F59E0B', // orange
  5: '#EF4444', // red
  6: '#06B6D4', // cyan
  7: '#EC4899', // pink
};

export default function ChemicalSpaceWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-gray-900">Chemical Space Analysis</h3>
            <p className="text-xs text-gray-500">Step 3 Results - RDKit Clustering</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl text-purple-600">7</div>
            <div className="text-xs text-gray-600">Chemical Clusters</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl text-blue-600">247</div>
            <div className="text-xs text-gray-600">Compounds Analyzed</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl text-green-600">0.68</div>
            <div className="text-xs text-gray-600">Avg Tanimoto Sim.</div>
          </div>
        </div>

        {/* Scatter Plot */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="PC1" 
                label={{ value: 'Principal Component 1', position: 'bottom', style: { fontSize: 12, fill: '#6B7280' } }}
                tick={{ fontSize: 11, fill: '#6B7280' }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="PC2" 
                label={{ value: 'Principal Component 2', angle: -90, position: 'left', style: { fontSize: 12, fill: '#6B7280' } }}
                tick={{ fontSize: 11, fill: '#6B7280' }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white border border-gray-200 rounded shadow-lg p-3">
                        <div className="text-xs text-gray-900 mb-1">Cluster {data.cluster}</div>
                        <div className="text-xs text-gray-500">PC1: {data.x.toFixed(2)}</div>
                        <div className="text-xs text-gray-500">PC2: {data.y.toFixed(2)}</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter data={chemicalData} fill="#8884d8">
                {chemicalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={clusterColors[entry.cluster]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Cluster Legend */}
        <div className="mt-4 flex flex-wrap gap-3">
          {Object.entries(clusterColors).map(([cluster, color]) => (
            <div key={cluster} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
              <span className="text-xs text-gray-600">Cluster {cluster}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
