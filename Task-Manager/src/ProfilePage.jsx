// import  { useState, useEffect } from "react";

// function ProfilePage() {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     bio: ""
//   });

//   const [isEditing, setIsEditing] = useState(true);

//   // Load data from localStorage on first render
//   useEffect(() => {
//     const savedProfile = localStorage.getItem("profile");
//     if (savedProfile) {
//       setProfile(JSON.parse(savedProfile));
//       setIsEditing(false); // Show saved profile instead of form
//     }
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   // Save profile to localStorage
//   const handleSave = () => {
//     localStorage.setItem("profile", JSON.stringify(profile));
//     setIsEditing(false);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
//       {isEditing ? (
//         <>
//           <h2 className="text-2xl font-bold  text-yellow-500 mb-4">Fill Your Profile</h2>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={profile.name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded mb-3"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={profile.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded mb-3"
//           />
//           <textarea
//             name="bio"
//             placeholder="Short Bio"
//             value={profile.bio}
//             onChange={handleChange}
//             className="w-full border p-2 rounded mb-3"
//           />
//           <button
//             onClick={handleSave}
//             className="bg-yellow-500 text-white px-4 py-2 rounded"
//           >
//             Save
//           </button>
//         </>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4">My Profile</h2>
//           <p><strong>Name:</strong> {profile.name}</p>
//           <p><strong>Email:</strong> {profile.email}</p>
//           <p><strong>Bio:</strong> {profile.bio}</p>

//           <button
//             onClick={() => setIsEditing(true)}
//             className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Edit Profile
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;


import { useState, useEffect } from "react";

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: ""
  });

  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
      setIsEditing(false);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 flex flex-col items-center text-white">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-700 mb-3">
            {profile.name ? profile.name[0].toUpperCase() : "P"}
          </div>
          <h2 className="text-2xl font-bold">{isEditing ? "Fill Your Profile" : "My Profile"}</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={profile.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <textarea
                name="bio"
                placeholder="Short Bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none h-24"
              />
              <button
                onClick={handleSave}
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-semibold py-3 rounded-xl shadow-md"
              >
                Save Profile
              </button>
            </div>
          ) : (
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Name:</span> {profile.name}</p>
              <p><span className="font-semibold">Email:</span> {profile.email}</p>
              <p><span className="font-semibold">Bio:</span> {profile.bio}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold py-3 rounded-xl shadow-md"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
