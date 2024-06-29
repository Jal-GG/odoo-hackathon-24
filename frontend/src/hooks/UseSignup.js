import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ email, username, password, gender }) => {
    const success = handleInputErrors({ email, username, password, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post("/api/signup", {
        email,
        username,
        password,
        gender
      });

      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

    } catch (error) {
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}

export default UseSignup;

function handleInputErrors({ email, username, password, gender }) {
  if (!email || !username || !password || !gender) {
    toast.error("Please fill all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
