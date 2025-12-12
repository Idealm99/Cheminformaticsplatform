import { Upload, FileText, Search, Trash2, Download, Eye, Clock } from 'lucide-react';
import { useState } from 'react';

export default function RAGPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const documents = [
    { id: 1, name: 'STAT6 Pathway Review.pdf', size: '2.4 MB', uploaded: '2 days ago', chunks: 45, status: 'indexed' },
    { id: 2, name: 'Clinical Trial Protocol NCT05234567.docx', size: '1.8 MB', uploaded: '5 days ago', chunks: 32, status: 'indexed' },
    { id: 3, name: 'Competitor Analysis Report.pdf', size: '3.1 MB', uploaded: '1 week ago', chunks: 58, status: 'indexed' },
    { id: 4, name: 'FDA Adverse Events Data.csv', size: '5.2 MB', uploaded: '1 week ago', chunks: 124, status: 'processing' },
    { id: 5, name: 'Patent Landscape Analysis.pdf', size: '4.7 MB', uploaded: '2 weeks ago', chunks: 89, status: 'indexed' },
  ];

  const recentQueries = [
    { query: 'What are the main targets in STAT6 pathway?', time: '10 min ago', results: 12 },
    { query: 'Side effects of IL-4 receptor antagonists', time: '1 hour ago', results: 8 },
    { query: 'Clinical trial results for dupilumab', time: '3 hours ago', results: 15 },
  ];

  const stats = [
    { label: 'Total Documents', value: '24' },
    { label: 'Total Chunks', value: '1,248' },
    { label: 'Storage Used', value: '45.2 GB' },
  ];

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">RAG Document Management</h1>
          <p className="text-slate-600">
            Upload and manage documents for retrieval-augmented generation
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 p-4">
              <p className="text-2xl font-semibold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Upload & Search */}
          <div className="col-span-2 space-y-6">
            {/* Upload Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">Upload Documents</h2>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-700 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-slate-500">
                  PDF, DOCX, TXT, CSV up to 50MB
                </p>
              </div>
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">Search Documents</h2>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask a question about your documents..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                Search with RAG
              </button>
            </div>

            {/* Documents List */}
            <div className="bg-white rounded-lg border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-slate-900">Documents</h2>
              </div>
              <div className="divide-y divide-slate-200">
                {documents.map((doc) => (
                  <div key={doc.id} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-sm font-medium text-slate-900 truncate pr-2">
                            {doc.name}
                          </h3>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <button
                              className="p-1.5 hover:bg-slate-100 rounded transition-colors"
                              title="View"
                            >
                              <Eye className="w-4 h-4 text-slate-600" />
                            </button>
                            <button
                              className="p-1.5 hover:bg-slate-100 rounded transition-colors"
                              title="Download"
                            >
                              <Download className="w-4 h-4 text-slate-600" />
                            </button>
                            <button
                              className="p-1.5 hover:bg-red-50 rounded transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.chunks} chunks</span>
                          <span>•</span>
                          <span>{doc.uploaded}</span>
                          <span>•</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            doc.status === 'indexed'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Queries */}
          <div>
            <div className="bg-white rounded-lg border border-slate-200">
              <div className="p-4 border-b border-slate-200">
                <h2 className="text-sm font-semibold text-slate-900">Recent Queries</h2>
              </div>
              <div className="divide-y divide-slate-200">
                {recentQueries.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <p className="text-sm text-slate-900 mb-2 line-clamp-2">
                      {item.query}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.time}</span>
                      </div>
                      <span>{item.results} results</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="mt-6 bg-blue-50 rounded-lg border border-blue-200 p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">💡 Tips</h3>
              <ul className="space-y-1.5 text-xs text-blue-800">
                <li>• Upload relevant scientific papers and reports</li>
                <li>• Documents are automatically chunked and indexed</li>
                <li>• Use natural language questions for better results</li>
                <li>• Cite sources are included in responses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
