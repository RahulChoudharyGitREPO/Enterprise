
export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gray-100 rounded-lg">
          
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Application Settings</h2>
        <p className="text-gray-600 mb-4">
          Configure your application preferences, manage user accounts, set up integrations, and customize your
          workspace to fit your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">User Management</h3>
            <p className="text-sm text-gray-600">Manage user accounts, roles, and permissions.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Integrations</h3>
            <p className="text-sm text-gray-600">Configure third-party service integrations.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Preferences</h3>
            <p className="text-sm text-gray-600">Customize themes, notifications, and workspace settings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
