import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const { token } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (token === "admin") {
      navigate("/admin");
    } else if (token === "user") {
      navigate("/user");
    }
  }, [token]);

  return <div className="text-3xl font-bold">Login Page</div>;
}

export default Login;
