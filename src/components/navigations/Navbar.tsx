import { Link } from "react-router-dom";
import logo from "../../../public/beja.svg";
import { CartIcon } from "../assets/icons/SvgIcons";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export const Navbar = () => {
  const { cart, clearCart } = useCartStore();
  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-40 h-24 w-full">
      <div className="mx-auto flex max-w-7xl border-b-4 border-[#E4E4E4] items-center justify-between px-4 py-6 relative">
        <Link to="/" className="bg-white">
          <img src={logo} alt="Bejamas" />
        </Link>

        <div className="relative">
          <button onClick={() => setOpen((prev) => !prev)} className="relative">
            <CartIcon />
            {cartCount > 0 && (
              <div className="absolute -bottom-2 right-0 bg-black flex items-center justify-center rounded-full w-5 h-5">
                <span className="text-white text-xs">{cartCount}</span>
              </div>
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-4 w-72 bg-white shadow-lg border rounded p-6 z-50">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-0 right-2 text-black font-bold hover:text-black"
              >
                ✕
              </button>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.price}</p>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover"
                      />
                    </div>
                  ))}

                  <button
                    onClick={clearCart}
                    className="w-full border border-black text-black py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                  >
                    CLEAR
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
