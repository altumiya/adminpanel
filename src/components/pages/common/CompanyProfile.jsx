import { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function CompanyProfile() {
  const [dragActive, setDragActive] = useState(false)
  const [preview, setPreview] = useState(null)
  const [companyData, setCompanyData] = useState({
    name: 'xyzabc',
    email: 'contact@xyzabc.com',
    mobile: '1234567890',
    address: 'Jaipur, India',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0...',
    facebook: 'https://facebook.com/xyzabc',
    twitter: 'https://twitter.com/xyzabc',
    linkedin: 'https://linkedin.com/company/xyzabc',
    instagram: 'https://instagram.com/xyzabc',
    youtube: 'https://youtube.com/xyzabc',
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

  const handleInputUpdate = (field, value) => {
    setCompanyData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">Company Profile</h2>
        <p className="mt-2 text-sm text-gray-500">Manage company information, location, and social media presence.</p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          {/* Image Upload Section */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700">Category Image</p>
            <div
              className={`flex h-56 flex-col items-center justify-center rounded-3xl border-2 border-dashed px-4 text-center transition ${
                dragActive ? 'border-violet-500 bg-violet-50' : 'border-gray-300 bg-gray-50'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {preview ? (
                <img src={preview} alt="Company logo" className="h-full w-full rounded-3xl object-cover" />
              ) : (
                <div className="space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xl">
                    ☁️
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Drag and drop</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="mx-auto block cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700"
                  />
                </div>
              )}
            </div>
          </div>

          
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={companyData.name}
                  onChange={(e) => handleInputUpdate('name', e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                  placeholder="Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={companyData.email}
                  onChange={(e) => handleInputUpdate('email', e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                value={companyData.mobile}
                onChange={(e) => handleInputUpdate('mobile', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="Mobile Number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                value={companyData.address}
                onChange={(e) => handleInputUpdate('address', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="Address"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Google Map URL</label>
              <input
                type="text"
                value={companyData.mapUrl}
                onChange={(e) => handleInputUpdate('mapUrl', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="Google Map URL"
              />
            </div>
          </div>
        </div>

        
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-gray-700">Location Map</p>
          <div className="h-80 w-full overflow-hidden rounded-3xl border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1234!2d75.8140!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDgnNTAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            ></iframe>
          </div>
        </div>

        
        <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
          <p className="text-sm font-semibold text-gray-700">Social Media Links</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaFacebook className="text-blue-600" />
                Facebook
              </label>
              <input
                type="url"
                value={companyData.facebook}
                onChange={(e) => handleInputUpdate('facebook', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="Facebook URL"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaTwitter className="text-blue-400" />
                Twitter
              </label>
              <input
                type="url"
                value={companyData.twitter}
                onChange={(e) => handleInputUpdate('twitter', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="Twitter URL"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaLinkedin className="text-blue-700" />
                LinkedIn
              </label>
              <input
                type="url"
                value={companyData.linkedin}
                onChange={(e) => handleInputUpdate('linkedin', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="LinkedIn URL"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaInstagram className="text-pink-600" />
                Instagram
              </label>
              <input
                type="url"
                value={companyData.instagram}
                onChange={(e) => handleInputUpdate('instagram', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="Instagram URL"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FaYoutube className="text-red-600" />
                YouTube
              </label>
              <input
                type="url"
                value={companyData.youtube}
                onChange={(e) => handleInputUpdate('youtube', e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none"
                placeholder="YouTube URL"
              />
            </div>
          </div>
        </div>

       
        <div className="mt-6 flex justify-start">
          <button className="inline-flex rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
            Update Company Profile
          </button>
        </div>
      </div>
    </section>
  )
}
