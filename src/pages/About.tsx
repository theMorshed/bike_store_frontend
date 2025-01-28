const AboutPage = () => {
  return (
    <div className="container mx-auto py-30">
      <h1 className="text-5xl font-bold text-left mb-8 text-gray-800">About Bike Store</h1>
      
      <div className="flex flex-col items-left mb-8">
        <img
          src="https://i.ibb.co.com/GPcKMRg/about-bike-image.png" // Replace with your actual image path
          alt="Bike Store"
          className="w-full max-w-xl rounded-lg mb-6"
        />
        <p className="text-lg text-gray-700 mb-4 w-full text-left">
          Welcome to Bike Store! We are a passionate team of cycling enthusiasts dedicated to providing you with the best bikes, accessories, and service. Our mission is to make cycling accessible, enjoyable, and rewarding for everyone, from beginners to seasoned cyclists.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 w-full">
          At Bike Store, our mission is simple: to inspire and support the cycling community by offering high-quality bikes and gear for every rider. We believe in the power of cycling to improve health, promote sustainability, and connect people to their environment.
        </p>
        <p className="text-lg text-gray-700 mt-4 w-full">
          Whether you are looking for a new road bike to race on, a mountain bike for your next adventure, or a reliable commuter bike for everyday use, we’ve got you covered. We aim to offer a personalized shopping experience, expert advice, and services to help you choose the right bike for your needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
          <li>Wide selection of high-quality bikes from top brands.</li>
          <li>Expert advice and personalized recommendations from our experienced team.</li>
          <li>Competitive pricing and exclusive offers for loyal customers.</li>
          <li>Bike maintenance services to keep your ride in top condition.</li>
          <li>Environmentally friendly, promoting cycling as a sustainable transportation option.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 w-full">
          At Bike Store, we are guided by the values of passion, quality, and community. We are passionate about cycling and are committed to offering the best products and services to our customers. Quality is at the heart of everything we do, from the bikes we sell to the advice we provide. And, above all, we believe in fostering a strong cycling community where everyone is welcome.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-4">
          Join our community of cycling enthusiasts! Stay connected with us on social media, attend our events, and participate in group rides. We believe in the power of sharing experiences, learning from each other, and growing the love for cycling.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for choosing Bike Store. We look forward to supporting your cycling journey and helping you find the perfect bike to match your lifestyle.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
