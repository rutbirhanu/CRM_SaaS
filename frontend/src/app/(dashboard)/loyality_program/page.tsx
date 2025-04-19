import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN's Button component
import { Card } from "@/components/ui/card"; // Assuming you're using ShadCN's Card component

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Customer Loyalty Dashboard</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Upgrade Membership</Button>
        </div>

        {/* Loyalty Points Summary */}
        <div className="flex justify-center mb-8 gap-9 mx-auto w-1/2">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full"> */}
            {/* <div className="grid md:grid-cols-2 gap-1 mb-8"> */}
              <Card className="p-6 rounded-xl shadow-xl shadow-amber-200">
                <h3 className="text-[16px] font-semibold text-gray-800">Total Loyalty Points</h3>
                <p className="text-2xl font-bold text-blue-600">1,250</p>
                <p className="text-sm text-gray-600">Points available for rewards</p>
              </Card>
              <Card className="p-6 rounded-xl shadow-xl shadow-amber-200">
                <h3 className="text-[16px] font-semibold text-gray-800">Points Earned This Month</h3>
                <p className="text-2xl font-bold text-green-600">250</p>
                <p className="text-sm text-gray-600">Points earned in the last 30 days</p>
              </Card>
          {/* </div> */}
          </div>

            {/* Transaction History */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h3>
              <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full text-sm text-gray-700">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Transaction</th>
                      <th className="py-2 px-4 text-left">Points Earned</th>
                      <th className="py-2 px-4 text-left">Points Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">03/25/2025</td>
                      <td className="py-2 px-4">Purchase - Shoes</td>
                      <td className="py-2 px-4">50</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-2 px-4">03/20/2025</td>
                      <td className="py-2 px-4">Purchase - Jacket</td>
                      <td className="py-2 px-4">100</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">03/18/2025</td>
                      <td className="py-2 px-4">Redeemed Points</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Rewards</h3>
              <div className="grid md:grid-cols-3 gap-6 ">
                <Card className="p-6 rounded-xl shadow-xl bg-blue-50 w-full">
                  <h4 className="text-lg font-semibold text-blue-700">$20 Gift Card</h4>
                  <p className="text-sm text-gray-600">Redeem with 50 points</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">Redeem</Button>
                </Card>
                <Card className="p-6 rounded-xl shadow-xl bg-yellow-50 w-full">
                  <h4 className="text-lg font-semibold text-yellow-600">Free Shipping</h4>
                  <p className="text-sm text-gray-600">Redeem with 70 points</p>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white mt-4">Redeem</Button>
                </Card>
                <Card className="p-6 rounded-xl shadow-xl bg-green-50 w-full">
                  <h4 className="text-lg font-semibold text-green-700">25% Off Your Next Order</h4>
                  <p className="text-sm text-gray-600">Redeem with 100 points</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white mt-4">Redeem</Button>
                </Card>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-500 text-sm mt-8">
              <p>&copy; 2025 Fruit Corner. All rights reserved.</p>
            </footer>
          </div>
        </div>
        );
};

        export default Dashboard;
