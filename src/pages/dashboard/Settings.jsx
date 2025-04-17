import React from "react";
import { FiUser, FiLock, FiBell, FiShield, FiGlobe, FiMoon, FiSave, FiRefreshCw } from "react-icons/fi";

const Settings = () => {
  return (
    <div className="text-white bg-[#b5a7a7] p-6 h-screen overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-[#0c0c0f] rounded-xl p-5 shadow">
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <FiUser /> Account Settings
          </h3>
          <div className="space-y-3">
            <input type="text" placeholder="Username" className="w-full p-3 rounded bg-[#2A2A3B] outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded bg-[#2A2A3B] outline-none" />
            <input type="file" className="w-full p-3 rounded bg-[#2A2A3B] text-gray-400" />
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-[#000000] rounded-xl p-5 shadow">
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <FiGlobe /> Preferences
          </h3>
          <div className="space-y-3">
            <select className="w-full p-3 rounded bg-[#0b0b0d] outline-none">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
            <div className="flex items-center gap-3">
              <FiMoon />
              <span>Dark Mode Enabled</span>
              <input type="checkbox" checked readOnly className="ml-auto accent-purple-500" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#050506] rounded-xl p-5 shadow">
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <FiBell /> Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Email Alerts</span>
              <input type="checkbox" defaultChecked className="accent-green-500" />
            </div>
            <div className="flex justify-between items-center">
              <span>App Notifications</span>
              <input type="checkbox" defaultChecked className="accent-green-500" />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-[#040406] rounded-xl p-5 shadow">
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <FiShield /> Security
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Two-Factor Authentication</span>
              <input type="checkbox" className="accent-red-500" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Recent Logins</label>
              <textarea className="p-3 rounded bg-[#2A2A3B] text-sm resize-none" rows="2" placeholder="IP: 192.168.1.1 - 5 mins ago..."></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md">
          <FiRefreshCw /> Reset
        </button>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md">
          <FiSave /> Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
