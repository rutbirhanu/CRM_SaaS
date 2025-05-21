import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const AdminProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Business Profile & Account Settings</h2>
          <p className="text-gray-500 mt-2">Manage your business details, branding, and social media links.</p>
        </div>

        {/* Business Information Section */}
        <div className="flex ">
          <Card className="p-6 rounded-xl shadow-lg bg-white mb-10 w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label className="text-gray-700">Business Name</Label>
                <Input
                  type="text"
                  placeholder="Enter Business Name"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label className="text-gray-700">Business Email</Label>
                <Input
                  type="email"
                  placeholder="Enter Business Email"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label className="text-gray-700">Phone Number</Label>
                <Input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label className="text-gray-700">Business Address</Label>
                <Input
                  type="text"
                  placeholder="Enter Business Address"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </Card>

          {/* Branding Section */}
          <Card className="p-6 rounded-xl shadow-lg bg-white mb-10 w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Branding & Media</h3>
            <div className="space-y-6">
              <div>
                <Label className="text-gray-700">Business Logo</Label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    className="p-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Upload Logo</Button>
                </div>
              </div>
              <div>
                <Label className="text-gray-700">Brand Color</Label>
                <input
                  type="color"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label className="text-gray-700">Business Tagline</Label>
                <Input
                  type="text"
                  placeholder="Enter Business Tagline"
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>


      <div className="flex ">
        {/* Social Media Links Section */}
        <Card className="p-6 rounded-xl shadow-lg bg-white mb-10 w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Social Media Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700">Facebook URL</Label>
              <Input
                type="url"
                placeholder="Enter Facebook URL"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label className="text-gray-700">Instagram URL</Label>
              <Input
                type="url"
                placeholder="Enter Instagram URL"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label className="text-gray-700">YouTube URL</Label>
              <Input
                type="url"
                placeholder="Enter YouTube URL"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label className="text-gray-700">LinkedIn URL</Label>
              <Input
                type="url"
                placeholder="Enter LinkedIn URL"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </Card>

        {/* Analytics Section */}
        <Card className="p-6 rounded-xl shadow-lg bg-white mb-10 w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Analytics & Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700">Google Analytics Tracking ID</Label>
              <Input
                type="text"
                placeholder="Enter Google Analytics Tracking ID"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label className="text-gray-700">Facebook Pixel ID</Label>
              <Input
                type="text"
                placeholder="Enter Facebook Pixel ID"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-center mt-8 w-full">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-md">
          Save Changes
        </Button>
      </div>
    </div>

  );
};

export default AdminProfilePage;
