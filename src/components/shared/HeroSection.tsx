const HeroSection = () => {
    return (
        <section className="w-full my-8">
            <div className="container mx-auto py-16 md:flex items-center justify-between">
                {/* Left Side (Text) */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        Discover Your Perfect Bike
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6">
                        Explore our collection of bikes tailored to your adventure and lifestyle.
                    </p>
                    <a
                        href="#shop-now"
                        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Shop Now
                    </a>
                </div>

                {/* Right Side (Image) */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Bike"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
