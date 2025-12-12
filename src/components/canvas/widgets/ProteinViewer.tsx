import { Maximize2, Download, RotateCw } from 'lucide-react';

export default function ProteinViewer() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[500px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg text-slate-100">3D Protein Structure</h3>
          <p className="text-xs text-slate-500">PDB: 6WTT • STAT6 Complex</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <RotateCw className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Maximize2 className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Download className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* 3D Viewer Placeholder */}
      <div
        id="ngl-viewer"
        className="flex-1 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30 rounded-lg relative overflow-hidden border border-slate-800/50"
      >
        {/* Animated protein visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Core sphere */}
            <div className="w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-cyan-400/40 rounded-full animate-spin-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 border border-purple-400/30 rounded-full animate-spin-reverse"></div>
            </div>
            
            {/* Center marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </div>
          </div>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 text-xs">
            <div>
              <div className="text-slate-500 mb-1">Resolution</div>
              <div className="text-slate-100">2.15 Å</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Chains</div>
              <div className="text-slate-100">A, B</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Ligands</div>
              <div className="text-slate-100">1 bound</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">R-factor</div>
              <div className="text-slate-100">0.189</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
