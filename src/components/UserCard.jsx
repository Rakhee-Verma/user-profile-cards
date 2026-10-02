import { useState } from "react";
import ProfileImage from "./ProfileImage";
function UserCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const loggedInUserId = Number(localStorage.getItem("loggedInUserId"));
  const isActive = loggedInUserId === user.id;
  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };
  return (
    <div
      className="relative flex flex-col justify-between rounded-2xl border border-gray-100
       bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-300
        ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.16)]
     "
    >
      <div className="flex items-center gap-4 mb-4">
        <ProfileImage src={user.image} alt={user.name} />
        <div className="flex items-center gap-1.5">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isActive ? "animate-pulse bg-green-500" : "bg-gray-400"
            }`}
          />
          <span
            className={`text-xs ${
              isActive ? "text-green-500" : "text-gray-500"
            }`}
          >
            {isActive ? "Active Now" : "Offline"}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p className="py-1">{user.role}</p>
      <p className="text-sm">{user.bio}</p>
      <button
        className="
          mt-5 w-full rounded-full
          border border-green-500 px-4 py-2
          text-sm font-medium text-green-500
          transition-all duration-300
          hover:bg-green-500 hover:text-white
          hover:shadow-md
          active:scale-95
        "
        onClick={handleFollowClick}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default UserCard;
