function About() {
    return(
        <div className="About">
            <div className="about-container p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">FoodieDelight</span> – your one-stop solution for delicious food delivered right to your doorstep! We connect food lovers with their favorite restaurants, ensuring a seamless experience.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to bring you a variety of cuisines from top restaurants and local eateries. Whether you're craving pizza, sushi, or a hearty burger, we offer quick and reliable delivery services.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Features</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Wide selection of restaurants and cuisines</li>
        <li>Easy-to-use interface for seamless ordering</li>
        <li>Real-time tracking of your order</li>
        <li>Exclusive deals and discounts</li>
        <li>Multiple payment options for convenience</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <p className="mb-4">
        We understand the importance of both time and good food. Our platform offers a reliable, fast, and user-friendly service for a great dining experience at home.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
      <p className="mb-4">
        Become a part of our community of food enthusiasts. Download our app or visit our website to get started. We look forward to serving you the best dishes from your favorite places.
      </p>
      <button className="bg-blue-600 dark:bg-blue-700 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 dark:hover:bg-blue-600">
        Start Your Order
      </button>
    </div>
        </div>
    )
}

export default About;