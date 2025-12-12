import { useNavigate, useLocation } from 'react-router';
import { Dna, Pill, FlaskConical, FileText, BarChart3, Check } from 'lucide-react';

const steps = [
  { 
    number: 1, 
    label: 'Target Structure', 
    sublabel: 'Protein List Derivation',
    icon: Dna,
    path: '/step/1'
  },
  { 
    number: 2, 
    label: 'Competitor Drugs', 
    sublabel: 'Data Collection',
    icon: Pill,
    path: '/step/2'
  },
  { 
    number: 3, 
    label: 'Structure Analysis', 
    sublabel: 'RDKit Analysis',
    icon: FlaskConical,
    path: '/step/3'
  },
  { 
    number: 4, 
    label: 'Patent & Keywords', 
    sublabel: 'Clinical/Developer Search',
    icon: FileText,
    path: '/step/4'
  },
  { 
    number: 5, 
    label: 'Final Dashboard', 
    sublabel: 'Comprehensive Report',
    icon: BarChart3,
    path: '/step/5'
  },
];

export default function Stepper() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentStep = steps.findIndex(step => 
    location.pathname === step.path || (location.pathname === '/' && step.number === 1)
  ) + 1 || 1;

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.number} className="flex items-center flex-1">
            <button
              onClick={() => navigate(step.path)}
              className={`flex items-center gap-3 transition-all ${
                isActive ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              {/* Step Circle */}
              <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isActive 
                  ? 'bg-blue-600 shadow-lg shadow-blue-200' 
                  : isCompleted
                  ? 'bg-green-500'
                  : 'bg-gray-200'
              }`}>
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <Icon className={`w-6 h-6 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
                )}
              </div>

              {/* Step Label */}
              <div className="text-left">
                <div className={`text-sm ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                  {step.label}
                </div>
                <div className="text-xs text-gray-500">
                  {step.sublabel}
                </div>
              </div>
            </button>

            {/* Connector Line */}
            {!isLast && (
              <div className={`flex-1 h-0.5 mx-4 transition-all ${
                isCompleted ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
