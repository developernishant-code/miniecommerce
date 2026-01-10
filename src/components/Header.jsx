import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "./Context";

const Header = () => {
  const {cart} = useContext(StoreContext) 
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation()
  // console.log(location)
  const navitems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Contact us",
      path: "/contact"
    }
  ]

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MiniShop
          </div>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {
              navitems.map((items, index) => {
                return (
                  <Link to={items.path} key={index} className={`text-gray-700 ${location.pathname == items.path ? "bg-blue-600 text-white rounded px-5 py-2" : ""} hover:text-black-600`}>
                    {items.name}
                  </Link>
                )
              })
            }



            {/* Cart Button */}
            <Link to={"/cart"}>
              <button className="relative flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                🛒 Cart

                {/* Cart Count */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </button>

            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-3 font-medium">
            {
              navitems.map((items, index) => {
                return (
                  <Link to={items.path} key={index} className={`text-gray-700 ${location.pathname == items.path ? "bg-blue-600 text-white rounded" : ""} hover:text-black-600`}>
                    {items.name}
                  </Link>
                )
              })
            }

            {/* Mobile Cart Button */}
            <Link to={"/cart"}>
              <button className="relative flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                🛒 Cart

                {/* Cart Count */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
