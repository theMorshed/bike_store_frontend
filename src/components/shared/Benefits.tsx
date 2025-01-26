import { FaCogs, FaDollarSign, FaHeadset, FaBicycle } from "react-icons/fa"; // Example icons

const Benefits = () => {
    const benefits = [
        {
            title: "Premium Quality",
            description: "Only the best bikes for our customers.",
            icon: <FaCogs className="text-6xl text-blue-500" />,
        },
        {
            title: "Affordable Prices",
            description: "High value without breaking the bank.",
            icon: <FaDollarSign className="text-6xl text-green-500" />,
        },
        {
            title: "Expert Support",
            description: "We're here to help every step of the way.",
            icon: <FaHeadset className="text-6xl text-yellow-500" />,
        },
        {
            title: "Wide Selection",
            description: "Choose from a variety of models and styles.",
            icon: <FaBicycle className="text-6xl text-red-500" />,
        },
    ];

    return (
        <section className="py-30 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-20">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                        >
                            {/* Icon - Centered */}
                            <div className="flex justify-center items-center mb-4">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>

                            {/* Description */}
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
