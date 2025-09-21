import { Link } from "react-router-dom";
import logo from "../../../public/beja.svg";
import { CartIcon } from "../assets/icons/SvgIcons";

export const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-40 h-24 w-full ">
      <div className="mx-auto flex max-w-7xl border-b-4 border-[#E4E4E4] items-center justify-between px-4 py-6">
        <Link to="/" className="bg-white">
          <img src={logo} alt="Bejamas" />
        </Link>

        <button>
          <CartIcon />
        </button>
      </div>
    </nav>
  );
};
