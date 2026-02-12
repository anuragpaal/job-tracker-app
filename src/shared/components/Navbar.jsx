import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { logout } from "../../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold">Dashboard</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        🌙
      </button>
      <div>👤 Admin</div>
      <button
        onClick={() => dispatch(logout())}
        className="
  bg-red-500
  text-white
  px-3 py-1
  rounded
  ml-4
 "
      >
        Logout
      </button>
    </div>
  );
}
