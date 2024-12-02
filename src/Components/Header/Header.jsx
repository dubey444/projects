
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7 px-10 bg-emerald-600 text-white flex items-center justify-between">
      <h2 className="text-2xl">Dubey</h2>
      <div className="flex gap-10">
        <Link className="text-lg underline" to="/">
          Home
        </Link>
        <Link className="text-lg underline" to="/about">
          About
        </Link>
        <Link className="text-lg underline" to="/contact">
          Conntact
        </Link>
        <Link className="text-lg underline" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Header;
