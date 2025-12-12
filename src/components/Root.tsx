import { Outlet } from 'react-router';
import Stepper from './Stepper';
import { FlaskConical } from 'lucide-react';

export default function Root() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-gray-900">Cheminformatics Target Validation</h1>
              <p className="text-sm text-gray-500">Agentic AI Platform for Drug Discovery</p>
            </div>
          </div>
          
          {/* Stepper */}
          <Stepper />
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[calc(100vh-180px)]">
        <Outlet />
      </main>
    </div>
  );
}
