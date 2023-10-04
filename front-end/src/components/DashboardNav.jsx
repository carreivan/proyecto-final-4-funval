import { Link } from "react-router-dom";
import devlogo from "../assets/devchallenges-light.svg";
import profile from "../assets/icons/profile.png";

const DashboardNav = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-5 bg-zinc-700">
      <img src={devlogo} alt="" />

      <Link to="/admin/perfil">
        <img src={profile} alt="" className="w-12 h-12" />
      </Link>
    </header>
  );
};

export default DashboardNav;
