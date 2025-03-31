import { FileText, Filter, Download, Search, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

const Reports = () => {
  // Mock data for reports
  const reports = [
    {
      id: 1,
      date: '2024-03-30',
      type: 'EMG Analysis',
      status: 'Completed',
      summary: 'Improved muscle response in upper extremities',
      intensity: '2.5mA',
      duration: '20min',
      doctor: 'Dr. Smith',
      priority: 'Normal'
    },
    {
      id: 2,
      date: '2024-03-28',
      type: 'Progress Report',
      status: 'Completed',
      summary: 'Significant improvement in nerve conduction',
      intensity: '2.3mA',
      duration: '20min',
      doctor: 'Dr. Johnson',
      priority: 'High'
    },
    {
      id: 3,
      date: '2024-03-25',
      type: 'Follow-up',
      status: 'Pending Review',
      summary: 'Regular check-up and parameter adjustment',
      intensity: '2.2mA',
      duration: '18min',
      doctor: 'Dr. Smith',
      priority: 'Normal'
    },
    {
      id: 4,
      date: '2024-03-22',
      type: 'EMG Analysis',
      status: 'Completed',
      summary: 'Initial assessment and baseline established',
      intensity: '2.0mA',
      duration: '15min',
      doctor: 'Dr. Johnson',
      priority: 'High'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">EMG Reports</h1>
        <p className="mt-2 text-gray-600">View and manage your EMG therapy reports</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Filter className="h-5 w-5 mr-2 text-gray-600" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Calendar className="h-5 w-5 mr-2" />
              Date Range
            </button>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Reports List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Recent Reports</h2>
            </div>
            <div className="divide-y">
              {reports.map((report) => (
                <div key={report.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <h3 className="font-medium text-gray-900">{report.type}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{report.summary}</p>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                        <span>Date: {report.date}</span>
                        <span>Intensity: {report.intensity}</span>
                        <span>Duration: {report.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600">
                        <Download className="h-5 w-5" />
                      </button>
                      {report.priority === 'High' && (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Sidebar */}
        <div className="space-y-6">
          {/* Progress Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Overall Progress</span>
                <span className="font-semibold text-green-600">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Reports Generated</span>
                <span className="font-semibold text-blue-600">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Last Update</span>
                <span className="font-semibold text-gray-900">2 days ago</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <FileText className="h-5 w-5 mr-2" />
                Generate New Report
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <TrendingUp className="h-5 w-5 mr-2" />
                View Progress Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;