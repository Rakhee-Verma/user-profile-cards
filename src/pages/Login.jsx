import { useState } from "react";
import users from "../data/userData";
import ProfileImage from "../components/ProfileImage";
import { useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
function Login() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(users[0]);
  const handleSelect = (profile) => {
    setSelectedProfile(profile);
    setIsOpen(false);
  };

  const handleLogin = (e) => {
  e.preventDefault();
  const activeUsers = JSON.parse(localStorage.getItem("activeUserIds") || "[]");
  if (!activeUsers.includes(selectedProfile.id)) {
    activeUsers.push(selectedProfile.id);
  }
  localStorage.setItem("activeUserIds",JSON.stringify(activeUsers));
  sessionStorage.setItem("loggedInUserId", selectedProfile.id);
  navigate("/users");
};

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="flex items-start gap-4 w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex-1">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">Login</h2>
          <p className="mb-6 text-xs leading-relaxed text-gray-500">
            Select a profile to activate it on the dashboard.
          </p>
          <form onSubmit={handleLogin}>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-2 text-left"
              >
                <div className="flex flex-col items-start">
                  <p className="text-xs font-semibold text-gray-900">
                    {selectedProfile.name}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {selectedProfile.role}
                  </p>
                </div>
                <span className="text-xl text-gray-400">
                  <MdArrowDropDown />
                </span>
              </button>
              {isOpen && (
                <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                  {users.map((profile) => (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => handleSelect(profile)}
                      className="flex w-full items-center justify-between px-3 py-2 text-left hover:bg-gray-50"
                    >
                      <div className="flex flex-col items-start">
                        <p className="text-xs font-semibold text-gray-900">
                          {profile.name}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {profile.role}
                        </p>
                      </div>
                      {selectedProfile.id === profile.id && (
                        <span className="text-xl text-emerald-500">
                          <IoCheckmark />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
            >
              Login
            </button>
          </form>
        </div>
        <ProfileImage src={selectedProfile.image} alt={selectedProfile.name} />
      </div>
    </div>
  );
}

export default Login;
