function Page() {
  return (
    <div className="flex items-center justify-center h-full">
    <div className="w-full max-w-2xl bg-white shadow-2xl border border-gray-300 py-8 px-10 rounded-2xl">
      <h2 className="text-black text-center text-2xl font-semibold">Add New Customer</h2>
      
      <form className="space-y-5 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-inner"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-inner"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="w-full py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-inner"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              id="address"
              type="number"
              name="address"
              className="w-full py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-inner"
            />
          </div>
        </div>
  
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-2/3 py-2 rounded-lg bg-blue-900 hover:bg-black text-white font-medium shadow-md transition-all"
          >
            Save Customer
          </button>
        </div>
      </form>
  
      <p className="text-gray-600 text-sm text-center mt-6">
        Want to go back?{' '}
        <a href="/customers" className="text-blue-800 hover:underline font-medium">
          View Customers
        </a>
      </p>
    </div>
  </div>
  
  )
}

export default Page