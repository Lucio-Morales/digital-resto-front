import { RiNotificationLine, RiArrowDownSLine } from 'react-icons/ri';

const UserProfileButton = () => {
  const user = {
    name: 'Lucio Morales',
    profileImage: 'https://via.placeholder.com/40', // Reemplaza con la URL real de la imagen de perfil
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Botón de notificaciones (Campana) */}
      <button
        type="button"
        className="p-2 rounded-full  bg-gray-100 text-zinc-400 hover:bg-gray-200 cursor-pointer"
        aria-label="Notificaciones"
      >
        <RiNotificationLine size={22} />
      </button>

      {/* Botón de perfil de usuario */}
      <button
        type="button"
        className="flex items-center space-x-1 py-1 px-1 border border-zinc-300 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
      >
        {/* Imagen de perfil */}
        <img src="/ban.jpg" alt={`Perfil de ${user.name}`} className="w-8 h-8 object-cover rounded-full" />
        {/* Nombre del usuario */}
        <span className="text-gray-600 pl-1 text-sm font-medium hidden md:block">{user.name}</span>
        {/* Icono de flecha */}
        <RiArrowDownSLine size={24} className="text-gray-500" />
      </button>
    </div>
  );
};

export default UserProfileButton;
