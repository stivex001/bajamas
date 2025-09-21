const About = () => {
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - About Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About the Samurai King Resting
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Pets</h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter likely scrambled part
                of Cicero's De Finibus in order to provide placeholder text to
                mockup various fonts for a type specimen book. So how did the
                classical Latin become so incoherent? According to McClintock, a
                15th century typesetter likely scrambled part of Cicero's De
                Finibus in order to provide placeholder
              </p>
              <p>
                text to mockup various fonts for a type specimen book. So how
                did the classical Latin become so incoherent? According to
                McClintock.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - People also buy & Details */}
        <div className="space-y-8">
          {/* People also buy section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              People also buy
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {/* Product 1 - Yellow/Orange */}
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-black rounded-sm"></div>
              </div>

              {/* Product 2 - Beige/Cream */}
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-8 bg-gray-700 rounded-sm"></div>
              </div>

              {/* Product 3 - Gray */}
              <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Details section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Size:</span>
                <span>1020 x 1020 pixel</span>
              </div>
              <div className="flex justify-between">
                <span>Size:</span>
                <span>15 mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
