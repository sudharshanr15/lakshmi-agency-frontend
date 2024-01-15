import React, { useState } from "react";

function Settings() {
  const notificationItems = [
    {
      title: "Enable all notifications",
      state: true,
    },
    {
      title: "Receive email notifications",
      state: false,
    },
    {
      title: "Receive SMS notifications",
      state: false,
    },
    {
      title: "Subscribe to Our Newsletter",
      state: false,
    },
  ];
  return (
    <div className="w-full mt-10 mb-32 ml-4 lg:ml-0">
      <div className="font-semibold text-[#125476] md:text-xl">
        Notification Settings
      </div>
      <div className="mt-8">
        {notificationItems.map((setting, i) => (
          <NotificationSettings setting={setting} />
        ))}
      </div>
    </div>
  );
}

function NotificationSettings({ setting }) {
  const [enabled, setEnabled] = useState(setting.state);
  return (
    <div className="flex items-center mb-4">
      <h2
        className={`mr-8 ${
          enabled ? "text-[#125476] font-medium" : "text-[#9E9E9E] "
        }`}
      >
        {setting.title}
      </h2>
      <label class="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={() => {
            setEnabled(!enabled);
          }}
          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#125476]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#125476]"
        ></div>
      </label>
    </div>
  );
}

export default Settings;
