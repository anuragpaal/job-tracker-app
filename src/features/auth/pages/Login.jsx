import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../authSlice";

export default function Login() {
  const user = useSelector((s) => s.auth.user);

  if (user) {
    return <Navigate to="/" />;
  }

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const nav = useNavigate();

  function login() {
    if (email) {
      dispatch(setUser({ email }));
      nav("/");
    }
  }

  return (
    <div
      className="flex h-screen items-center justify-center
    bg-gradient-to-br
    from-blue-100
  to-indigo-200
  dark:from-gray-900
  dark:to-gray-800
    "
    >
      <div
        className="bg-white/90
      dark:bg-gray-900/80
   backdrop-blur
   p-8
   rounded-xl
   shadow-xl
   w-80
   border
   border-gray-200
   dark:border-gray-700
      "
      >
        <h2 className="text-xl mb-4">Login</h2>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-4 bg-transparent"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
