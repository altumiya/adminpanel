import { useState } from 'react'
import { useNavigate } from 'react-router'
import Sidebar from './sidebar'
import Header from './header'
import Footer from './footer'
import Dashboard from './dashboard'
import User from './User'
import AddColor from './AddColor'
import ViewColor from './ViewColor'
import ContactEnquiry from './ContactEnquiry'
import Newsletter from './Newsletter'
import AddMaterial from './AddMaterial'
import ViewMaterial from './ViewMaterial'
import AddCategory from './AddCategory'
import ViewCategory from './ViewCategory'
import AddSubCategory  from './AddSubCategory'
import ViewSubCategory from './ViewSubCategory'
import AddSubSubCategory from './AddSubSubCategory'
import ViewSubSubCategory from './ViewSubSubCategory'
import AddProduct from './AddProduct'
import ViewProduct from './ViewProduct'
import AddWhyChooseUs from './AddWhyChooseUs'
import ViewWhyChooseUs from './ViewWhyChooseUs'
import Order from './Order'
import AddSlider from './AddSlider'
import ViewSlider from './ViewSlider'
import AddCountry from './AddCountry'
import ViewCountry from './ViewCountry'
import AddTestimonial from './AddTestimonial'
import ViewTestimonial from './ViewTestimonial'
import AddFAQ from './AddFAQ'
import ViewFAQ from './ViewFAQ'
import AdminProfile from './AdminProfile'
import CompanyProfile from './CompanyProfile'

const breadcrumbMap = {
  dashboard: ['Dashboard'],
  user: ['Dashboard', 'User'],
  order: ['Dashboard', 'Order'],
  addColor: ['Dashboard', 'Color', 'Add Color'],
  viewColor: ['Dashboard', 'Color', 'View Color'],
  contactEnquiry: ['Dashboard', 'Enquiry', 'Contact Enquiry'],
  newsletter: ['Dashboard', 'Enquiry', 'Newsletter'],
  addMaterial: ['Dashboard', 'Material', 'Add Material'],
  viewMaterial: ['Dashboard', 'Material', 'View Material'],
  addCategory: ['Dashboard', 'Category', 'Add Category'],
  viewCategory: ['Dashboard', 'Category', 'View Category'],
  addSubCategory:['Dashboard', 'SubCategory', 'Add SubCategory'],
  viewSubCategory:['Dashboard', 'SubCategory', 'View SubCategory'],
  addSubSubCategory:['Dashboard', 'SubSubCategory', 'Add SubSubCategory'],
  viewSubSubCategory:['Dashboard', 'SubSubCategory', 'View SubSubCategory'],
  addProduct: ['Dashboard', 'Product', 'Add Product'],
  viewProduct: ['Dashboard', 'Product', 'View Product'],
  addWhyChooseUs: ['Dashboard', 'Why Choose Us', 'Add'],
  viewWhyChooseUs: ['Dashboard', 'Why Choose Us', 'View'],
  addSlider: ['Dashboard', 'Slider', 'Add Slider'],
  viewSlider: ['Dashboard', 'Slider', 'View Slider'],
  addCountry: ['Dashboard', 'Country', 'Add Country'],
  viewCountry: ['Dashboard', 'Country', 'View Country'],
  addTestimonial: ['Dashboard', 'Testimonial', 'Add Testimonial'],
  viewTestimonial: ['Dashboard', 'Testimonial', 'View Testimonial'],
  addFAQ: ['Dashboard', 'FAQ', 'Add FAQ'],
  viewFAQ: ['Dashboard', 'FAQ', 'View FAQ'],
  adminProfile: ['Dashboard', 'Admin Profile'],
  companyProfile: ['Dashboard', 'Company Profile'],
}

export default function Layout() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'user':
        return <User />
      case 'order':
        return <Order />
      case 'addColor':
        return <AddColor />
      case 'viewColor':
        return <ViewColor />
      case 'contactEnquiry':
        return <ContactEnquiry />
      case 'newsletter':
        return <Newsletter />
      case 'addMaterial':
        return <AddMaterial />
      case 'viewMaterial':
        return <ViewMaterial />
      case 'addCategory':
        return <AddCategory />
      case 'viewCategory':
        return <ViewCategory />
      case 'addSubCategory':
        return <AddSubCategory />
      case 'viewSubCategory':
        return <ViewSubCategory />
      case 'addSubSubCategory':
        return <AddSubSubCategory />
      case 'viewSubSubCategory':
        return <ViewSubSubCategory />  
      case 'addProduct':
        return <AddProduct />
      case 'viewProduct':
        return <ViewProduct />
      case 'addWhyChooseUs':
        return <AddWhyChooseUs />
      case 'viewWhyChooseUs':
        return <ViewWhyChooseUs />
      case 'addSlider':
        return <AddSlider />
      case 'viewSlider':
        return <ViewSlider />
      case 'addCountry':
        return <AddCountry />
      case 'viewCountry':
        return <ViewCountry />
      case 'addTestimonial':
        return <AddTestimonial />
      case 'viewTestimonial':
        return <ViewTestimonial />
      case 'addFAQ':
        return <AddFAQ />
      case 'viewFAQ':
        return <ViewFAQ />
      case 'adminProfile':
        return <AdminProfile />
      case 'companyProfile':
        return <CompanyProfile />
      default:
        return <Dashboard />
    }
  }

  const breadcrumbItems = breadcrumbMap[activeTab] || ['Dashboard']

  return (
    <section className="grid grid-cols-[250px_1fr] min-h-screen bg-gray-50">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col overflow-hidden">
        <Header setActiveTab={setActiveTab} onLogout={handleLogout} />
        <div className="border-b border-gray-200 bg-white px-6 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              {breadcrumbItems.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  <span className={index === breadcrumbItems.length - 1 ? 'font-semibold text-gray-900' : ''}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
        <Footer />
      </div>
    </section>
  )
}
