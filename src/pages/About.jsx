const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          About <span className="text-blue-600">MiniShop</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We are a modern e-commerce platform focused on delivering quality
          products with a smooth shopping experience.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MiniShop is a demo e-commerce project built using React and
            Tailwind CSS. Our goal is to showcase a clean UI, fast performance,
            and scalable architecture suitable for real-world applications.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in simplicity, usability, and modern web technologies
            to create delightful user experiences.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About MiniShop"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="p-6 bg-white shadow rounded-xl text-center">
            🚀
            <h3 className="font-semibold mt-3">Fast Performance</h3>
            <p className="text-sm text-gray-500 mt-2">
              Optimized React components for speed.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center">
            🎨
            <h3 className="font-semibold mt-3">Modern UI</h3>
            <p className="text-sm text-gray-500 mt-2">
              Clean & responsive Tailwind design.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center">
            🔒
            <h3 className="font-semibold mt-3">Secure</h3>
            <p className="text-sm text-gray-500 mt-2">
              Best practices followed for safety.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center">
            🛒
            <h3 className="font-semibold mt-3">E-commerce Ready</h3>
            <p className="text-sm text-gray-500 mt-2">
              Scalable structure for real projects.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
