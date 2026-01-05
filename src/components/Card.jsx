import { Link } from "react-router-dom";

const ProductCard = ({ title, image, id}) => {
  return (
    <Link to={`/product/detail/${id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300">

        {/* Product Image */}
        <div className="h-48 w-full overflow-hidden rounded-t-xl">
          <img
            src={image}

            className="h-full w-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {title}
          </h3>

          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptates fugiat eaque error suscipit expedita esse et, accusamus quae ipsam totam sit ducimus hic, quas quaerat officia obcaecati atque. Qui.
          </p>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-blue-600">
              ₹1500
            </span>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ProductCard;
