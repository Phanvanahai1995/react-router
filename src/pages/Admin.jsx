import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    if (token === "user") {
      navigate("/user");
    }

    if (!token) {
      navigate("/");
    }
  }, [token]);
  return <div className="text-3xl font-bold">Admin Page</div>;
}

export default Admin;
