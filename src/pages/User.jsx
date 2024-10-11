import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    if (token === "admin") {
      navigate("/admin");
    }
  }, [token]);

  return <div className="text-3xl font-bold">User Page</div>;
}

export default User;
