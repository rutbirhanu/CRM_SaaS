import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN's Button component
import Link from "next/link";

const AdminCustomerPage = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      loyaltyPoints: 1250,
      lastPurchase: "03/25/2025",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      loyaltyPoints: 850,
      lastPurchase: "03/20/2025",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      loyaltyPoints: 1500,
      lastPurchase: "03/18/2025",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Customer List</h2>
          <Link href="/customers/add-customer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Customer</Button>
          </Link>
        </div>

        {/* Customers Table */}
        <div className="overflow-x-auto rounded-lg mb-8 p-6">
          <table className="min-w-full text-sm text-gray-700 rounded-lg">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-2 px-4 text-left">Customer Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Loyalty Points</th>
                <th className="py-2 px-4 text-left">Last Purchase</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="bg-white border-b">
                  <td className="py-2 px-4">{customer.name}</td>
                  <td className="py-2 px-4">{customer.email}</td>
                  <td className="py-2 px-4 text-blue-600">{customer.loyaltyPoints}</td>
                  <td className="py-2 px-4">{customer.lastPurchase}</td>
                  <td className="py-2 px-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white ml-2">Edit</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white ml-2">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination (if needed) */}
        <div className="flex justify-center mt-4">
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Previous</Button>
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md ml-2">Next</Button>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-8">
          <p>&copy; 2025 Fruit Corner. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminCustomerPage;
