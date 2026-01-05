const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">MiniShop</h2>
            <p className="mt-3 text-sm text-gray-400">
              Your one-stop shop for quality products at best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact
            </h3>
            <p className="text-sm">📧 support@minishop.com</p>
            <p className="text-sm">📞 +91 98765 43210</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MiniShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
