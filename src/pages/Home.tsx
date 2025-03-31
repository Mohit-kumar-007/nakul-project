import React from 'react';
import { Activity, Zap, Brain, Stethoscope, Users, Award, Clock, Shield } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: '95%', label: 'Accuracy Rate', icon: Award },
    { value: '10K+', label: 'Patients Treated', icon: Users },
    { value: '24/7', label: 'Monitoring', icon: Clock },
    { value: '99.9%', label: 'Data Security', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Physical Therapist',
      content: 'The AI-powered analysis has revolutionized how we track patient progress. The accuracy and insights are remarkable.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Neurologist',
      content: 'This system has significantly improved our diagnostic capabilities. The real-time monitoring is particularly valuable.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      content: 'The personalized treatment plan and continuous monitoring gave me confidence in my recovery journey.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Advanced EMG Healthcare Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Revolutionizing electromyography diagnosis and treatment with cutting-edge technology and personalized care.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our EMG Solution?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the future of electromyography with our comprehensive platform
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="py-16 bg-white">
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
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Diagnostic Accuracy</h4>
                    <p className="text-sm text-blue-700">95% accuracy in detecting muscle and nerve conditions</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Recovery Tracking</h4>
                    <p className="text-sm text-green-700">Real-time progress monitoring and analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Trusted by healthcare professionals and patients worldwide
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Start your EMG journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default Home;