import { useEffect, useState } from 'react'

export default function AdminProfile() {
  const [activeTab, setActiveTab] = useState('edit')
  const [dragActive, setDragActive] = useState(false)
  const [preview, setPreview] = useState(null)
  const [profileData, setProfileData] = useState({
    name: 'Admin',
    email: 'xyz@gmail.com',
    mobile: '1234567890',
  })
  const [passwordData, setPasswordData] = useState({
    current: '',
    newPassword: '',
    confirmPassword: '',
  })

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    if (preview) URL.revokeObjectURL(preview)
    setPreview(URL.createObjectURL(file))
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setDragActive(false)
    const file = event.dataTransfer.files[0]
    handleFile(file)
  }

  const handleInputChange = (event) => {
    const file = event.target.files[0]
    handleFile(file)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = () => {
    setDragActive(false)
  }

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">Admin Profile</h2>
        <p className="mt-2 text-sm text-gray-500">Manage your profile details, contact information, and password settings.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative">
              <div className="h-28 w-28 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                {preview ? (
                  <img src={preview} alt="Admin" className="h-full w-full object-cover object-" />
                ) : (
                  <img
                    src="https://cdn.vectorstock.com/i/1000v/34/56/admin-icon-male-user-person-profile-avatar-symbol-vector-41213456.jpg"
                    alt="Admin"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Admin</h3>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-gray-50 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Contact Information</h4>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-gray-600 shadow-sm">📞</span>
                <div>
                  <p className="text-gray-900">Phone</p>
                  <p>{profileData.mobile}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-gray-600 shadow-sm">✉️</span>
                <div>
                  <p className="text-gray-900">Email</p>
                  <p>{profileData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold ${
                  activeTab === 'edit' ? 'bg-violet-600 text-white' : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('password')}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold ${
                  activeTab === 'password' ? 'bg-violet-600 text-white' : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Change Password
              </button>
            </div>
          </div>

          {activeTab === 'edit' ? (
            <div className="mt-6 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
              <div className="space-y-4 rounded-3xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-700">Choose Image</p>
                <div
                  className={`flex h-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed px-4 text-center transition ${
                    dragActive ? 'border-violet-500 bg-violet-50' : 'border-gray-300 bg-white'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <div className="space-y-3">
                    <div className="mx-auto h-14 w-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-2xl">
                      ⬆️
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Profile</p>
                    <p className="text-sm text-gray-500">Drag and drop an image here</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="mt-4 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(event) => setProfileData((prev) => ({ ...prev, name: event.target.value }))}
                      className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(event) => setProfileData((prev) => ({ ...prev, email: event.target.value }))}
                      className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    value={profileData.mobile}
                    onChange={(event) => setProfileData((prev) => ({ ...prev, mobile: event.target.value }))}
                    className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none"
                    placeholder="Number"
                  />
                </div>
                <button className="inline-flex rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                  Update Profile
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  value={passwordData.current}
                  onChange={(event) => setPasswordData((prev) => ({ ...prev, current: event.target.value }))}
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none"
                  placeholder="Current Password"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(event) => setPasswordData((prev) => ({ ...prev, newPassword: event.target.value }))}
                    className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none"
                    placeholder="New Password"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(event) => setPasswordData((prev) => ({ ...prev, confirmPassword: event.target.value }))}
                    className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-violet-500 focus:outline-none"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <button className="inline-flex rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                Change Password
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
