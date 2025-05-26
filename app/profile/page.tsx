export default function ProfilePage() {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img src="/placeholder.svg?height=48&width=48" alt="Gaurav Sharma" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Gaurav Sharma</h1>
        </div>
  
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
          <p className="text-gray-600 mb-4">Manage your personal information, account settings, and preferences.</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value="Gaurav Sharma"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100 cursor-default focus:outline-none focus:ring-2 focus:ring-[#5F5084]"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value="gaurav.sharma@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100 cursor-default focus:outline-none focus:ring-2 focus:ring-[#5F5084]"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input
                  type="text"
                  value="Data Analyst"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100 cursor-default focus:outline-none focus:ring-2 focus:ring-[#5F5084]"
                  readOnly
                />
              </div>
            </div>
  
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  value="Analytics"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100 cursor-default focus:outline-none focus:ring-2 focus:ring-[#5F5084]"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Login</label>
                <input
                  type="text"
                  value="Today, 9:30 AM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100 cursor-default focus:outline-none focus:ring-2 focus:ring-[#5F5084]"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Status</label>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  