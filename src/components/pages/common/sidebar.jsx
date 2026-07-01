import { useState } from 'react'
import { FaAngleDown, FaAngleRight, FaBoxOpen, FaComments, FaEnvelope, FaGlobeAsia, FaImages, FaLayerGroup, FaPalette, FaQuestionCircle, FaReceipt, FaShoppingBag, FaTachometerAlt, FaUser } from 'react-icons/fa'

const menuButtonClass =
    'flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition'

export default function Sidebar({ activeTab, setActiveTab }) {
    const [openMenu, setOpenMenu] = useState('')

    const isActive = (tab) => activeTab === tab
    const handleMenuToggle = (menu) => setOpenMenu((current) => (current === menu ? '' : menu))
  

    return (
        <aside className="sticky top-0 flex h-screen flex-col overflow-hidden bg-white shadow-md">
            <div className="shrink-0 border-b border-gray-200 px-5 py-6">
                <img
                    src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
                    alt="WsCube Tech"
                    className="mx-auto w-44"
                />
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveTab('dashboard')
                                setOpenMenu('')
                            }}
                            className={`${menuButtonClass} ${isActive('dashboard') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <FaTachometerAlt />
                                Dashboard
                            </span>
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveTab('user')
                                setOpenMenu('')
                            }}
                            className={`${menuButtonClass} ${isActive('user') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <FaUser />
                                User
                            </span>
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('color')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaPalette />
                                Color
                            </span>
                            {openMenu === 'color' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'color' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addColor')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addColor') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Color
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewColor')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewColor') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Color
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('enquiry')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaEnvelope />
                                Enquiry
                            </span>
                            {openMenu === 'enquiry' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'enquiry' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('contactEnquiry')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('contactEnquiry') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Contact Enquiry
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('newsletter')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('newsletter') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Newsletter
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('material')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaBoxOpen />
                                Material
                            </span>
                            {openMenu === 'material' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'material' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addMaterial')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addMaterial') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Material
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewMaterial')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewMaterial') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Material
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('category')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaLayerGroup />
                                Category
                            </span>
                            {openMenu === 'category' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'category' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addCategory')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addCategory') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Category
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewCategory')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewCategory') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Category
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('subcategory')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaLayerGroup />
                                SubCategory
                            </span>
                            {openMenu === 'subcategory' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'subcategory' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addSubCategory')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addCategory') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add subCategory
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewSubCategory')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewCategory') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View SubCategory
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('subsubcategory')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaLayerGroup />
                                SubSubCategory
                            </span>
                            {openMenu === 'subsubcategory' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'subsubcategory' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addSubSubCategory')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addCategory') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add SubSubCategory
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewSubSubCategory')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewCategory') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View SubSubCategory
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>




                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('product')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaShoppingBag />
                                Product
                            </span>
                            {openMenu === 'product' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'product' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addProduct')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addProduct') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Product
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewProduct')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewProduct') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Product
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('whyChoose')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaQuestionCircle />
                                Why Choose Us
                            </span>
                            {openMenu === 'whyChoose' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'whyChoose' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addWhyChooseUs')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addWhyChooseUs') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewWhyChooseUs')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewWhyChooseUs') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => setActiveTab('order')}
                            className={`${menuButtonClass} ${isActive('order') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <FaReceipt />
                                Order
                            </span>
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('slider')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaImages />
                                Slider
                            </span>
                            {openMenu === 'slider' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'slider' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addSlider')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addSlider') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Slider
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewSlider')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewSlider') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Slider
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('country')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaGlobeAsia />
                                Country
                            </span>
                            {openMenu === 'country' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'country' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addCountry')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addCountry') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Country
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewCountry')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewCountry') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Country
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('testimonial')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaComments />
                                Testimonial
                            </span>
                            {openMenu === 'testimonial' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'testimonial' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addTestimonial')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addTestimonial') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add Testimonial
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewTestimonial')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewTestimonial') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View Testimonial
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => handleMenuToggle('faq')}
                            className={`${menuButtonClass} text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="flex items-center gap-3">
                                <FaQuestionCircle />
                                FAQ
                            </span>
                            {openMenu === 'faq' ? <FaAngleDown /> : <FaAngleRight />}
                        </button>

                        {openMenu === 'faq' && (
                            <ul className="mt-2 space-y-1 border-l border-gray-200 pl-4">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('addFAQ')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('addFAQ') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Add FAQ
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('viewFAQ')}
                                        className={`w-full rounded-md px-4 py-2 text-left text-sm transition ${isActive('viewFAQ') ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        View FAQ
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
