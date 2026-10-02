import { useNavigate } from "react-router-dom";
import users from "../data/userData";
import UserCard from "./UserCard";

export const UserGrid = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserId");
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Profiles</h1>

            <p className="mt-1 text-sm text-gray-500">
              Connect with people and explore their profiles.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="
              rounded-lg border border-gray-200
              bg-white px-4 py-2
              text-sm font-medium text-gray-600
              transition-all duration-300
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-500
            "
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
