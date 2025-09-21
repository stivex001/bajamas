const Deatil = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Samurai King Resting
        </h1>
        <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors">
          ADD TO CART
        </button>
      </div>

      <div className="relative mb-4">
        <img
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="Shiba Inu dog resting on sidewalk wearing a red harness"
          className="w-full h-[500px] object-cover "
        />

        <div className="absolute bottom-0 left-0">
          <span className="bg-white text-black px-4 py-4 text-sm font-medium rounded">
            Photo of the day
          </span>
        </div>
      </div>
    </div>
  );
};

export default Deatil;
