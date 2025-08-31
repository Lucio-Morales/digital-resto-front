import React from 'react';
import { FaRegHeart, FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

// Definimos la interfaz para las props
interface ProductCardProps {
  imageSrc: string;
  productName: string;
  currentPrice: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  isWishlisted?: boolean;
  isSelected?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  currentPrice,
  oldPrice,
  rating,
  reviews,
  isWishlisted = false,
  isSelected = false,
}) => {
  return (
    <div
      className={`bg-white p-4 rounded-xl overflow-hidden relative flex flex-col cursor-pointer ${
        isSelected ? 'border border-orange-500' : 'border border-transparent'
      }`}
    >
      {/* Botón de selección con un check */}
      <button
        className={`absolute top-2 right-2 rounded-full p-1 transition-colors duration-300 ${
          isSelected ? 'bg-orange-500 text-white' : 'bg-white text-gray-400'
        }`}
        aria-label="Select product"
      >
        <FaCheckCircle className="h-4 w-4 md:h-5 md:w-5" />
      </button>
      {/* Imagen de la card */}
      <div className="bg-gray-200  flex justify-center items-center p-2 rounded-xl">
        <img
          src={imageSrc}
          alt={productName}
          className=" w-32 h-32  object-contain rounded-xl md:w-38 md:h-38 lg:w-32 lg:h-32"
        />
      </div>

      {/* Contenido de la card  */}
      <div className="flex flex-col pt-2 ">
        {/* Nombre del producto  */}
        <h3 className="text-base md:text-lg font-semibold text-zinc-800 mb-2">{productName}</h3>

        <div className="flex items-center justify-between mb-2">
          {/* Precio */}
          <div className="flex items-center">
            <span className="text-2xl  font-bold text-orange-600 mr-2">{currentPrice}</span>
            <span className="text-sm md:text-sm text-gray-500 line-through">{oldPrice}</span>
          </div>

          <div className="flex items-center">
            <div className="text-yellow-500 flex mr-1">
              <FaStar className="text-xs" />
            </div>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          {/* Botón Wishlist */}
          <button
            className={`md:text-xs flex-grow flex items-center justify-center p-2 py-3 rounded-lg transition-colors duration-300 cursor-pointer ${
              isWishlisted ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isWishlisted ? <FaHeart className="mr-1" /> : <FaRegHeart className="mr-1" />}
            <span className="text-sm font-medium">Wishlist</span>
          </button>

          {/* Botón Order Now */}
          <button className="flex-grow flex items-center justify-center py-3 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
            <MdOutlineAddShoppingCart className="mr-1" />
            <span className="text-sm font-medium">Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
