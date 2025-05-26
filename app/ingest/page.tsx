
export default function IngestPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gray-100 rounded-lg">
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Ingest</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Ingestion</h2>
        <p className="text-gray-600 mb-4">
          Connect and import data from various sources including databases, APIs, files, and streaming services. Set up
          automated data pipelines for continuous data flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Database Connections</h3>
            <p className="text-sm text-gray-600">Connect to SQL and NoSQL databases.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">API Integration</h3>
            <p className="text-sm text-gray-600">Import data from REST and GraphQL APIs.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">File Upload</h3>
            <p className="text-sm text-gray-600">Upload CSV, JSON, Excel, and other file formats.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
