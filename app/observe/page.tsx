
export default function ObservePage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gray-100 rounded-lg">
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Observe</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Observability</h2>
        <p className="text-gray-600 mb-4">
          Monitor your data pipelines, track data quality, and get alerts when issues occur. Ensure your data is
          reliable and trustworthy with comprehensive observability tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Pipeline Monitoring</h3>
            <p className="text-sm text-gray-600">Track pipeline performance and execution status.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Data Quality Checks</h3>
            <p className="text-sm text-gray-600">Automated validation and quality assessment.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Alerting System</h3>
            <p className="text-sm text-gray-600">Get notified when data issues or failures occur.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
