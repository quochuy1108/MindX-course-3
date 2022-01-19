import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const onClick = () => {
    localStorage.setItem("isLoggedIn", "1");
    navigate("/home");
  };

  return <button onClick={onClick}>Login</button>;
};

export default Login;
