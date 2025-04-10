
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-fawaz-darker py-4">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3c5157bd-1f1a-4ea7-9ed4-b4a05b574621.png" 
              alt="Fawaz Real Estate Logo" 
              className="h-12 object-contain"
            />
          </div>
        </Link>
        <div className="flex space-x-8">
          <NavLink to="/" isActive={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/about" isActive={isActive("/about")}>
            About Us
          </NavLink>
          <NavLink to="/properties" isActive={isActive("/properties")}>
            Properties
          </NavLink>
          <NavLink to="/contact" isActive={isActive("/contact")}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  children, 
  to, 
  isActive 
}: { 
  children: React.ReactNode; 
  to: string; 
  isActive: boolean;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-lg transition-colors",
        isActive ? "text-fawaz-gold" : "text-fawaz-light hover:text-fawaz-gold"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
