interface CategoryCardProps {
  categoryName: string;
  src: string;
  active?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categoryName, src, active }) => {
  return (
    <div
      className={`flex items-center space-x-2 h-16 rounded-xl border  bg-[#f9f9f9] p-2 cursor-pointer transition-colors
        ${
          active
            ? 'bg-orange-100 text-orange-500 border-orange-500 '
            : 'border-zinc-300 text-zinc-600 hover:text-orange-500 hover:border-orange-500 '
        }
        
    `}
    >
      {/* Contenedor de la imagen */}
      <div className="flex-shrink-0 bg-gray-300 rounded-lg">
        <img src={src} alt={`Icono de ${categoryName}`} className="w-12 h-12 object-cover rounded-md p-1" />
      </div>
      {/* Nombre de la categoría */}
      <p className="text-sm font-medium">{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
