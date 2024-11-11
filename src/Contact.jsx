function Contact() {
    return(
        <div className="Contact">
            <div className="contact-container p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        We’d love to hear from you! Whether you have a question about your order, need assistance, or just want to share feedback, feel free to reach out to us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <div className="mb-6">
        <p><strong>Email:</strong> support@foodiedelight.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Foodie Lane, Gourmet City, USA</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2 font-medium" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            rows="5"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
    )
}

export default Contact;