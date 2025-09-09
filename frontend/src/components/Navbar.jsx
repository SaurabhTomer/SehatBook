const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src={assets.logo} alt="SehatBook Logo" className="h-10 w-10" /> */}
        <h1 className="text-xl font-bold text-blue-600">SehatBook</h1>
      </div>

      {/* Menu Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
            All Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};