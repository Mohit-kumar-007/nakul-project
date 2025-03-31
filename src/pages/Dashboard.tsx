import { Activity, BarChart2, Calendar, Clock, FileText, Heart, TrendingUp, Zap } from 'lucide-react';

const Dashboard = () => {
  // Mock data for demonstration
  const stats = [
    { title: 'Average EMG Response', value: '2.5mA', change: '+0.3mA', icon: Zap },
    { title: 'Session Duration', value: '20min', change: 'Optimal', icon: Clock },
    { title: 'Weekly Sessions', value: '12', change: 'On Track', icon: Calendar },
    { title: 'Recovery Progress', value: '75%', change: '+5%', icon: TrendingUp }
  ];

  const recentSessions = [
    { date: '2024-03-30', duration: '20min', intensity: '2.5mA', progress: 'Good' },
    { date: '2024-03-29', duration: '20min', intensity: '2.3mA', progress: 'Excellent' },
    { date: '2024-03-28', duration: '18min', intensity: '2.2mA', progress: 'Good' },
    { date: '2024-03-27', duration: '20min', intensity: '2.4mA', progress: 'Excellent' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Patient</h1>
        <p className="mt-2 text-gray-600">Here's your EMG therapy overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">EMG Response Trend</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart2 className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart will be implemented here</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <FileText className="h-5 w-5 mr-2" />
              Upload New EMG Report
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Activity className="h-5 w-5 mr-2" />
              Start New Session
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Heart className="h-5 w-5 mr-2" />
              Schedule Follow-up
            </button>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Sessions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Duration</th>
                  <th className="text-left py-3 px-4">Intensity</th>
                  <th className="text-left py-3 px-4">Progress</th>
                </tr>
              </thead>
              <tbody>
                {recentSessions.map((session, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{session.date}</td>
                    <td className="py-3 px-4">{session.duration}</td>
                    <td className="py-3 px-4">{session.intensity}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        session.progress === 'Excellent' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {session.progress}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;