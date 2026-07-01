export default function Header({ setActiveTab, onLogout }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
        <p className="text-sm text-gray-500">Manage users and colors</p>
      </div>
      <div className="relative group">
        <div className="flex cursor-pointer items-center gap-3 rounded-full px-3 py-2 hover:bg-gray-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            A
          </div>
          <div className="hidden min-w-[200px] flex-col gap-1 text-left sm:flex">
            <p className="text-sm font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>

        <div className="absolute right-0 top-12 z-10 mt-2 hidden w-52 rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-150 group-hover:block">
          <button
            type="button"
            onClick={() => setActiveTab('adminProfile')}
            className="w-full rounded-t-2xl px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Profile
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('companyProfile')}
            className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Company Profile
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="w-full rounded-b-2xl px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
