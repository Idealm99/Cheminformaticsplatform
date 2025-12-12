import { Dna, ExternalLink } from 'lucide-react';

const proteinData = {
  name: 'STAT6',
  uniprotId: 'P42226',
  length: 685,
  molecularWeight: '94.1 kDa',
  pdbId: '6WTT',
  resolution: '2.15 Å',
  domains: [
    { name: 'SH2 domain', range: '535-634', interpro: 'IPR000980' },
    { name: 'STAT DNA-binding', range: '320-480', interpro: 'IPR013799' },
    { name: 'Coiled coil', range: '140-315', interpro: 'IPR011993' },
  ],
};

export default function ProteinWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Dna className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-gray-900">Target Protein Structure</h3>
            <p className="text-xs text-gray-500">Step 1 Results</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Protein Summary */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xl text-gray-900">{proteinData.name}</div>
              <div className="text-sm text-gray-500">UniProt: {proteinData.uniprotId}</div>
            </div>
            <a 
              href={`https://www.uniprot.org/uniprot/${proteinData.uniprotId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-gray-500">Length</div>
              <div className="text-sm text-gray-900">{proteinData.length} aa</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Molecular Weight</div>
              <div className="text-sm text-gray-900">{proteinData.molecularWeight}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">PDB Structure</div>
              <div className="text-sm text-gray-900">{proteinData.pdbId}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Resolution</div>
              <div className="text-sm text-gray-900">{proteinData.resolution}</div>
            </div>
          </div>
        </div>

        {/* 3D Structure Placeholder */}
        <div className="mb-6 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 rounded-lg h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="text-center z-10">
            <div className="text-white text-sm mb-2">3D Structure Viewer</div>
            <div className="text-blue-200 text-xs">PDB: {proteinData.pdbId}</div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border border-blue-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border border-purple-400 rounded-full opacity-20"></div>
        </div>

        {/* Domain Table */}
        <div>
          <div className="text-sm text-gray-700 mb-2">Domain Architecture</div>
          <div className="space-y-2">
            {proteinData.domains.map((domain, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50 rounded border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900">{domain.name}</div>
                    <div className="text-xs text-gray-500">Range: {domain.range}</div>
                  </div>
                  <div className="text-xs text-gray-400">{domain.interpro}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
