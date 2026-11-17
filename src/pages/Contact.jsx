
const Contact = () => {
  const handleContactLogin = (e)=>{
    e.preventDefault()
    alert("Thanks for reaching out! We’ll get back to you soon.");
    e.target.reset()
    
  }
  return (
    <div className="flex items-center min-h-screen bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-white/10  rounded-2xl p-10 shadow-2xl backdrop-blur-md border border-white/20 flex items-center justify-center flex-col gap-8">

        <h2 className="text-white text-4xl font-bold text-center">Get in Touch with <span className="text-red-500">SidByte</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="text-white space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Contact Info</h2>
                <p className="text-gray-300">Have a question or need support? We're here to help you with your electronics journey.</p>
              </div>
              <div>
                <p><strong>📍 Address:</strong> 123 Lane, Maharashtra , India</p>
                <p><strong>📧 Email:</strong> support@sidbyte.com</p>
                <p><strong>📞 Phone:</strong> +91 12345 67890</p>
              </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleContactLogin}>
              <div>
                <label className="block text-white mb-1">Your Name</label>
                <input type="text" placeholder="Siddhi Naikare" className="w-full px-4 py-2 bg-white border border-white/30 text-black rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-white mb-1">Email Address</label>
                <input type="email" placeholder="example@mail.com" id="" className="w-full px-4 py-2 bg-white border border-white/30 text-black rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-white mb-1">Your Message</label>
                <textarea placeholder="type your message.." className="w-full px-4 py-2 bg-white border border-white/30 text-black rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button className="w-full bg-linear-to-r from-red-500 to-fuchsia-600 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">Send Message</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
