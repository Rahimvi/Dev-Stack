import logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <div className=" shadow-sm sticky top-0">
      <div className="navbar bg-base-100 w-full max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
            >
              <li>
                <a className="text-[#d92180]">Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <img className="btn btn-ghost text-xl" src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a className="text-[#d92180]">Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-3xl mr-2">Sign In</a>
          <a className="btn bg-[#d92180] text-white rounded-3xl">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
