import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="w-full pt-10 pb-30">
            <div className="container mx-auto md:flex items-center justify-between">
                {/* Left Side (Text) */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        Discover Your Perfect Bike
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure rerum molestiae consectetur totam odio deserunt, voluptatum distinctio ipsam odit deleniti? Dignissimos natus quibusdam suscipit fugiat laudantium dolores ullam enim maxime.
                    </p>
                    <Link to="/products" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300">Shop now</Link>
                </div>

                {/* Right Side (Image) */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="https://i.ibb.co.com/nb2Sfqr/bike-image-banner.png"
                        alt="Bike"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
