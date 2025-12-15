import { Play, ChevronDown, Link2, Sparkles, FileText, Search, X, ChevronLeft, ChevronRight, Database } from 'lucide-react';
import { WorkflowNode, StepConfig } from '../App';
import { useState, useRef, useEffect } from 'react';

interface AgentControlPanelProps {
  activeNode?: WorkflowNode;
  previousNode?: WorkflowNode;
  stepConfig?: StepConfig;
  selectedTools: string[];
  selectedDocs: string[];
  prompt: string;
  logs: string[];
  onToolToggle: (tool: string) => void;
  onDocToggle: (docId: string) => void;
  onPromptChange: (prompt: string) => void;
  onExecute: () => void;
  isExecuting: boolean;
}

export default function AgentControlPanel({
  activeNode,
  previousNode,
  stepConfig,
  selectedTools,
  selectedDocs,
  prompt,
  logs,
  onToolToggle,
  onDocToggle,
  onPromptChange,
  onExecute,
  isExecuting,
}: AgentControlPanelProps) {
  const [showLogs, setShowLogs] = useState(true);
  const [dbSearch, setDbSearch] = useState('');
  const [showDbDropdown, setShowDbDropdown] = useState(false);
  const [showMcpServers, setShowMcpServers] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Knowledge Databases from RAG page
  const knowledgeDatabases = [
    { id: 'db1', name: 'Bio-Literature Index', description: 'PubMed, 논문, 학술지 등 텍스트 기반의 연구 자료를 모아둔 벡터 저장소. 타겟 단백질의 기전이나 최신 연구 동향 검색.', files: 12, color: 'blue' },
    { id: 'db2', name: 'ChemSpace Vector', description: 'SMILES, 화합물 구조, 물성 데이터 등을 임베딩하여 저장. 유사 구조 검색, 약물성 평가 데이터.', files: 8, color: 'emerald' },
    { id: 'db3', name: 'IP-Intelligence Store', description: 'Google Patents, 유료 특허 DB 등의 특허 문서와 청구항을 벡터화. FTO 분석, 특허 회피 설계.', files: 24, color: 'purple' },
    { id: 'db4', name: 'Clinical-Evidence Hub', description: 'ClinicalTrials.gov, FDA/EMA 승인 문서, 임상 결과 보고서. 임상 단계 파악, 부작용 사례 검색.', files: 15, color: 'orange' },
  ];

  // Filter databases based on search
  const filteredDbs = knowledgeDatabases.filter(db => 
    db.name.toLowerCase().includes(dbSearch.toLowerCase()) ||
    db.description.toLowerCase().includes(dbSearch.toLowerCase())
  );

  const toggleDb = (dbId: string) => {
    onDocToggle(dbId);
  };

  const removeDb = (dbId: string) => {
    onDocToggle(dbId);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDbDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const colorClasses = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  if (!activeNode || !stepConfig) {
    return (
      <div className={`bg-white border-r border-slate-200 flex items-center justify-center transition-all duration-300 ${
        isCollapsed ? 'w-12' : 'w-[400px]'
      }`}>
        {!isCollapsed && <p className="text-sm text-slate-500">No step selected</p>}
      </div>
    );
  }

  return (
    <div className={`bg-white border-r border-slate-200 flex flex-col overflow-hidden relative transition-all duration-300 ${
      isCollapsed ? 'w-12' : 'w-[400px]'
    }`}>
      {/* Toggle Button - Fixed on right edge */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-1/2 -translate-y-1/2 right-0 z-50 w-6 h-16 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded-l-lg shadow-lg transition-colors"
        aria-label={isCollapsed ? 'Expand panel' : 'Collapse panel'}
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>

      {/* Panel Content - Hidden when collapsed */}
      {!isCollapsed && (
        <>
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h2 className="text-sm font-semibold text-slate-900">Config: {activeNode.title}</h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{stepConfig.title}</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Context Awareness Badge */}
              <div className={`rounded-lg p-3 flex items-start gap-3 ${
                previousNode 
                  ? 'bg-blue-50 border border-blue-200' 
                  : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <Link2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  previousNode ? 'text-blue-600' : 'text-emerald-600'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium ${
                    previousNode ? 'text-blue-900' : 'text-emerald-900'
                  }`}>
                    {stepConfig.contextBadge}
                  </p>
                  {previousNode && (
                    <p className="text-xs text-blue-700 mt-1">
                      Using results from <span className="font-semibold">{previousNode.title}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* MCP Tools Selection - Dynamic based on step type */}
              <div>
                <button
                  onClick={() => setShowMcpServers(!showMcpServers)}
                  className="w-full flex items-start justify-between text-left"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">MCP Servers</p>
                    <p className="text-xs text-slate-500 mt-0.5">Select data sources for analysis</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 mt-0.5 ${showMcpServers ? 'rotate-180' : ''}`} />
                </button>
                {showMcpServers && (
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {stepConfig.tools.map((tool) => {
                      const isSelected = selectedTools.includes(tool.id);
                      return (
                        <label
                          key={tool.id}
                          className={`group relative flex items-center gap-2 px-2.5 py-2 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-blue-50 border-blue-300'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                          title={tool.description}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => onToolToggle(tool.id)}
                            className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
                          />
                          <p className="text-xs font-medium text-slate-900 truncate">{tool.name}</p>
                          
                          {/* Tooltip on hover */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                            {tool.description}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* RAG Knowledge Databases Selection */}
              <div>
                <div>
                  <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Knowledge Databases</p>
                  <p className="text-xs text-slate-500 mt-0.5">Select databases for analysis</p>
                </div>
                
                {/* Search Input with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <div className="relative">
                    <input
                      type="text"
                      value={dbSearch}
                      onChange={(e) => setDbSearch(e.target.value)}
                      onFocus={() => setShowDbDropdown(true)}
                      placeholder="Search databases..."
                      className="w-full px-3 py-2.5 pr-10 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2"
                    />
                    <Search className="absolute right-3 top-5 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>

                  {/* Dropdown List */}
                  {showDbDropdown && filteredDbs.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      {filteredDbs.map((db) => {
                        const isSelected = selectedDocs.includes(db.id);
                        return (
                          <div
                            key={db.id}
                            onClick={() => toggleDb(db.id)}
                            className={`flex items-center gap-2 px-3 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 ${
                              isSelected ? 'bg-blue-50' : ''
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {}}
                              className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 pointer-events-none"
                            />
                            <div className={`w-8 h-8 ${colorClasses[db.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Database className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-slate-900 truncate">{db.name}</p>
                              <p className="text-xs text-slate-500 truncate">{db.description}</p>
                            </div>
                            <span className="text-xs text-slate-500 flex-shrink-0">{db.files} files</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Selected Databases Tags */}
                {selectedDocs.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedDocs.map(dbId => {
                      const db = knowledgeDatabases.find(d => d.id === dbId);
                      if (!db) return null;
                      return (
                        <div
                          key={dbId}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 border border-blue-200 rounded-md text-xs text-blue-900"
                        >
                          <div className={`w-4 h-4 ${colorClasses[db.color as keyof typeof colorClasses]} rounded flex items-center justify-center flex-shrink-0`}>
                            <Database className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="font-medium truncate max-w-[160px]">{db.name}</span>
                          <button
                            onClick={() => removeDb(dbId)}
                            className="ml-1 hover:bg-blue-100 rounded p-0.5 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Execution Logs */}
              <div>
                <button
                  onClick={() => setShowLogs(!showLogs)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-slate-700 uppercase tracking-wider"
                >
                  <span>Execution Logs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showLogs ? 'rotate-180' : ''}`} />
                </button>
                {showLogs && (
                  <div className="mt-2 bg-slate-900 rounded-lg p-3 h-64 overflow-y-auto">
                    {logs.map((log, index) => (
                      <div key={index} className="text-xs text-slate-300 font-mono mb-1">
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Execute Button removed - now in top right corner of screen */}
        </>
      )}
    </div>
  );
}