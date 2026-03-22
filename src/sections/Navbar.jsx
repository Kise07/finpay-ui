import { useState } from "react";
import { X, Menu } from "lucide-react";
import clsx from "clsx";
import useScrollPosition from "../hooks/useScrollPosition";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();

  return (
    <nav className={clsx(
      "sticky top-0 z-50 bg-white px-6 py-4 transition-shadow duration-200",
      scrollY > 80 && "shadow-md" // <- shadow only appears after 80px scroll
    )}>

      {/* Container - limits max width, centers content */}
      <div className="max-w-6x1 mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="font-bold text-xl text-navy-900">Finpay</div>

        {/* Desktop links - hidden on mobile, flex on md+ */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#features">Products</a>
          <a href="#why">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="#learn">Learn</a>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="text-sm text-gray-600">Login</button>
          <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>

        {/* Mobile hamburger - visible only on mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 border-t border-gray-100">
          <a href="#features" className="text-gray-600">Products</a>
          <a href="#why" className="text-gray-600">Customers</a>
          <a href="#pricing" className="text-gray-600">Pricing</a>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg w-full">
            Sign Up
          </button>
        </div>
      )}

    </nav >
  )
}

export default Navbar;
