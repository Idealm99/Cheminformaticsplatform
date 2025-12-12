import { Maximize2, Download } from 'lucide-react';

export default function ProteinViewer() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg text-slate-100">3D Protein Structure</h3>
          <p className="text-xs text-slate-500">PDB: 6WTT (STAT6)</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Maximize2 className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Download className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* 3D Viewer Container */}
      <div
        id="ngl-viewer"
        className="flex-1 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20 rounded-lg relative overflow-hidden border border-slate-800/50"
      >
        {/* Placeholder Protein Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Central sphere */}
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
            
            {/* Rotating elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="w-40 h-40 border-2 border-cyan-400/30 rounded-full"></div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse">
              <div className="w-48 h-48 border border-purple-400/20 rounded-full"></div>
            </div>
            
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </div>
          </div>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg p-3">
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <div className="text-slate-500">Resolution</div>
              <div className="text-slate-100">2.15 Å</div>
            </div>
            <div>
              <div className="text-slate-500">Chains</div>
              <div className="text-slate-100">2 (A, B)</div>
            </div>
            <div>
              <div className="text-slate-500">Ligands</div>
              <div className="text-slate-100">1 bound</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
