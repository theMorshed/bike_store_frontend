const SingleProductPage = () => {
  return (
    <div className="bg-gray-50 py-30">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-gray-100 flex items-center justify-center">
            <img
              src="https://placehold.co/600x400"
              alt="Product"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Name</h1>
            <p className="text-gray-600 text-lg mb-6">
              This is a detailed description of the product, highlighting its key features, benefits, and specifications.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-blue-600">$199.99</span>
              <span className="text-gray-500 line-through">$249.99</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">20% OFF</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>

            <div className="mt-6 text-gray-500 text-sm">
              <p><strong>Category:</strong> Bicycles</p>
              <p><strong>Stock:</strong> Available</p>
              <p><strong>SKU:</strong> 12345</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="p-8 border-t">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Details</h2>
          <p className="text-gray-600 leading-relaxed">
            This section can include additional details about the product, such as dimensions, materials, care instructions, warranty information, and any other relevant details that would help the customer make an informed decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;