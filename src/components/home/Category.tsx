import { useState } from "react";
import { FilterIcon } from "../assets/icons/SvgIcons";
import { useCartStore } from "@/store/useCartStore";
import redbench from "../assets/images/redbench.png";
import egg from "../assets/images/egg.png";
import people from "../assets/images/people.png";
import archi from "../assets/images/archi.png";

const products = [
  {
    id: 1,
    title: "Red Bench",
    category: "People",
    price: "$3.89",
    image: redbench,
  },
  {
    id: 2,
    title: "Egg Balloon",
    category: "Food",
    price: "$93.89",
    image: egg,
  },
  {
    id: 3,
    title: "Egg Balloon",
    category: "Food",
    price: "$93.89",
    image: egg,
  },
  { id: 4, title: "Man", category: "People", price: "$100.00", image: people },
  {
    id: 5,
    title: "Architecture",
    category: "Landmarks",
    price: "$101.00",
    image: archi,
  },
  {
    id: 6,
    title: "Architecture",
    category: "Landmarks",
    price: "$101.00",
    image: archi,
  },
    {
    id: 7,
    title: "Architecture",
    category: "Landmarks",
    price: "$10.00",
    image: archi,
  },  {
    id: 8,
    title: "Architecture",
    category: "Landmarks",
    price: "$50.00",
    image: redbench,
  },
];

const ITEMS_PER_PAGE = 6;

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    "Pets",
    "Food",
    "Landmarks",
  ]);
  const [sortBy, setSortBy] = useState("Price");
  const [currentPage, setCurrentPage] = useState(1);

  const { addToCart } = useCartStore();

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="mt-10 ">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <span className="text-black text-base lg:text-2xl font-bold">
            Photography
          </span>
          <span className="text-black text-base lg:text-2xl font-bold">/</span>
          <span className="text-[#9B9B9B] text-base lg:text-2xl">
            Premium Photos
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <span className="text-[#9B9B9B] text-base">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded"
          >
            <option>Price</option>
            <option>Name</option>
            <option>Date</option>
          </select>
        </div>
        <button className="lg:hidden">
          <FilterIcon />
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className=" hidden lg:block w-64 flex-shrink-0">
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-4">Category</h3>
            <div className="space-y-3">
              {[
                "People",
                "Premium",
                "Pets",
                "Food",
                "Landmarks",
                "Cities",
                "Nature",
              ].map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Price range</h3>
            <div className="space-y-3">
              {[
                "Lower than $20",
                "$20 - $100",
                "$100 - $200",
                "More than $200",
              ].map((range) => (
                <label
                  key={range}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-2">
            <span className=" text-black px-3 py-1 rounded text-sm">
              Best Seller
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[500px] object-cover "
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-0 w-full bg-black hover:bg-black/70 transition text-white px-6 py-2 text-sm"
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="text-sm text-gray-500 mb-1">
                  {product.category}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {product.title}
                </h3>
                <div className="text-gray-600">{product.price}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="text-black disabled:text-gray-400"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-2 ${
                  currentPage === page
                    ? "font-bold text-black"
                    : "text-gray-500"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="text-black disabled:text-gray-400"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
