import { RiDeleteBinLine } from 'react-icons/ri';

const CartProduct = ({ productImage, productName, price }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-white border border-gray-300 rounded-xl shadow-sm">
      {/* Imagen */}
      <img src={productImage} alt="Producto" className="w-8 h-8 object-contain rounded-lg" />

      {/* Info */}
      <div className="flex-1 px-4">
        <h3 className="text-xs font-medium text-gray-800">{productName}</h3>
        <p className="text-xs font-semibold text-gray-600">${price}</p>
      </div>

      {/* Botón eliminar */}
      <button className="text-red-500 hover:text-red-600 transition cursor-pointer">
        <RiDeleteBinLine className="text-xl" />
      </button>
    </div>
  );
};

export default CartProduct;
