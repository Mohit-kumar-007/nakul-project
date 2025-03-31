import React from 'react';
import { Activity, Zap, Brain, Stethoscope } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Advanced EMG Healthcare Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Revolutionizing electromyography diagnosis and treatment with cutting-edge technology and personalized care.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Activity className="h-8 w-8 text-blue-600" />}
              title="Real-time Monitoring"
              description="Advanced EMG signal tracking and analysis for precise diagnosis"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Signal Analysis"
              description="Sophisticated algorithms for accurate interpretation of electrical signals"
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-blue-600" />}
              title="AI-Powered Insights"
              description="Machine learning algorithms for predictive analysis and treatment recommendations"
            />
            <FeatureCard
              icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
              title="Expert Care"
              description="Personalized treatment plans backed by professional medical expertise"
            />
          </div>
        </div>
      </div>

      {/* EMG Information Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Understanding EMG</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Electromyography (EMG) is a diagnostic procedure that measures muscle response to nervous stimulation.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Medical procedure"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How EMG Works</h3>
                <p className="text-gray-600">
                  EMG records the electrical activity produced by skeletal muscles. The test involves inserting a thin needle electrode into the muscle to measure electrical activity at rest and during muscle contraction.
                </p>
                <p className="text-gray-600">
                  This helps diagnose muscle and nerve conditions, providing valuable insights for treatment planning and monitoring recovery progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default Home;