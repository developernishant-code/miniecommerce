import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Have any questions or feedback? We’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Reach out to us through any of the following ways.
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>📧 Email: support@minishop.com</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📍 Address: Jaipur, Rajasthan, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;