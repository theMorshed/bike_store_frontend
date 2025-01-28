const CustomerReview = () => {
    return (
        <section className="py-30 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-20 text-gray-800">What Our Customers Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {["Alice", "Bob", "Charlie", "David"].map((customer, index) => (
                        <div key={index} className="p-6 border border-amber-600 rounded-lg shadow-lg">
                            {/* Customer Image */}
                            <div className="mb-4">
                                <img
                                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                                    alt={customer}
                                    className="w-24 h-24 rounded-full mx-auto"
                                />
                            </div>
                            {/* Review Text */}
                            <p className="italic mb-4 text-gray-600">"Amazing quality and service!"</p>
                            <h4 className="font-bold text-gray-800">- {customer}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;
