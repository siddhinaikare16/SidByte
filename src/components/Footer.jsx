
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-10 text-gray-200 '>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between'>
            <div className='mb-6 md:mb-0 '>
                <h1 className='text-red-500 text-2xl font-bold'>SidByte</h1>
                <p className='mt-2 '>Powering Your World with the Best in Electronics.</p>
                <p className='mt-2 '>123 Electronics St, Style City, Maharashtra 4110</p>
                <p className='mt-2 '>Email: support@sidbyte.com</p>
                <p>Phone: +91 12345 67890</p>
            </div>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-xl font-semibold'>Customer Service</h2>
                <ul className='mt-2 space-y-1'>
                    <li>Contact Us</li>
                    <li>Shipping & Returns</li>
                    <li>FAQs</li>
                    <li>Order Tracking</li>
                </ul>
            </div>
            <div className='mb-6 md:mb-0'>
                <h2 className='text-xl font-semibold'>Follow Us</h2>
                <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
                </div>
            </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-6 text-center'>
           <p>© 2026 <span className='text-red-500'>SidByte</span>. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
