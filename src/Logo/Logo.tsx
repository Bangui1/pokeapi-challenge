import { useNavigate } from "react-router-dom";
import logo from "../Resources/Pokemon-Logo.png";

function Logo() {
  const nav = useNavigate();

  return (
    <img className="logo" src={logo} alt="Logo" onClick={() => nav("/")}></img>
  );
}

export default Logo;
