import { useState, useEffect } from "react";

function SettingsPage() {
  // Theme state: light or dark
  const [darkMode, setDarkMode] = useState(false);

  // Profile info (optional, can be linked to your ProfilePage)
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      const data = JSON.parse(savedProfile);
      setProfile({ name: data.name, email: data.email });
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile updated!");
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Profile Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6 space-y-4">
        <h2 className="text-xl font-semibold">Profile</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleSaveProfile}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Save Profile
        </button>
      </section>

      {/* Theme Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Theme</h2>
        <button
          onClick={handleToggleTheme}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </section>

      {/* Security Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6 space-y-4">
        <h2 className="text-xl font-semibold">Security</h2>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition">
          Change Password
        </button>
        <button className="w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-lg font-semibold transition">
          Logout
        </button>
      </section>

      {/* App Preferences */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6 space-y-4">
        <h2 className="text-xl font-semibold">App Preferences</h2>
        <p>Here you can add options like default task priority, sorting, or notification preferences.</p>
      </section>
    </div>
  );
}

export default SettingsPage;
