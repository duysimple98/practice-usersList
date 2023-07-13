import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { loginContext, user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [loadingAPI, setLoadingAPI] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
    }
    setLoadingAPI(true);
    let res = await loginApi(email.trim(), password);
    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/");
    } else {
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingAPI(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePressEnter = (e) => {
    if (e && e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container col-lg-4 col-sm-6 col-12 mx-auto my-3">
      <div className="title">Log in</div>
      <div className="label-text">Email or username</div>
      <input
        type="text"
        placeholder="Email or username..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="input-pass">
        <input
          type={isShowPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handlePressEnter(e)}
        />
        <i
          className={
            isShowPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
          }
          onClick={() => setIsShowPassword(!isShowPassword)}
        />
      </div>
      <button
        className={email && password && !loadingAPI ? "active" : ""}
        disabled={!email || !password || loadingAPI}
        onClick={() => handleLogin()}
      >
        {loadingAPI && <i className="fa-solid fa-sync fa-spin" />}
        <span>&nbsp;Login</span>
      </button>
      <div className="w-full mx-auto">
        <Link to="/" className="go-back">
          <i className="fa-solid fa-left-long" />
          <span>Go back</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
