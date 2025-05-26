
export default function OrchestratePage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gray-100 rounded-lg">
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Orchestrate</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Workflow Orchestration</h2>
        <p className="text-gray-600 mb-4">
          Design and manage complex data workflows. Schedule tasks, set dependencies, and monitor the execution of your
          data processing pipelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Workflow Designer</h3>
            <p className="text-sm text-gray-600">Visual workflow builder with drag-and-drop interface.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Task Scheduling</h3>
            <p className="text-sm text-gray-600">Schedule tasks with cron expressions and triggers.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Dependency Management</h3>
            <p className="text-sm text-gray-600">Set up task dependencies and conditional execution.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
