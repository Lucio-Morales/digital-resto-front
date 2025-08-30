import { RiFilter3Line, RiNotificationLine, RiSettings3Line } from 'react-icons/ri';
import UserProfileButton from './UserProfileButton';

const Header = () => {
  return (
    <header className="lg:pl-56">
      <div className="flex justify-between items-center p-4">
        <form className="flex items-center space-x-2 w-full max-w-lg">
          <div className="flex-grow">
            <input
              className="w-full p-2 border pl-4 py-2 pr-4 border-zinc-300 bg-zinc-200 rounded-lg outline-none"
              type="text"
              placeholder="Search food"
            />
          </div>
          <button
            type="button"
            className="flex items-center space-x-1 p-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 cursor-pointer"
          >
            <RiFilter3Line />
            <span>Filter</span>
          </button>
        </form>

        <UserProfileButton />

        {/* <div>
          <button
            type="button"
            className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100"
            aria-label="Notifications"
          >
            <RiNotificationLine size={20} />
          </button>
          <button
            type="button"
            className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100"
            aria-label="Settings"
          >
            <RiSettings3Line size={20} />
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
