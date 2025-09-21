import { useCartStore } from "@/store/useCartStore";
import samurai from "../assets/images/samurai.png";

const Detail = () => {
  const { addToCart } = useCartStore();

  const product = {
    id: 999,
    title: "Samurai King Resting",
    category: "Pets",
    price: "$10000.00",
    image: samurai,
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <button
          onClick={() => addToCart(product)}
          className="hidden lg:block bg-black text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors"
        >
          ADD TO CART
        </button>
      </div>

      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute bottom-0 left-0">
          <span className="bg-white text-black px-4 py-4 text-sm font-medium rounded">
            Photo of the day
          </span>
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full lg:hidden bg-black text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Detail;
