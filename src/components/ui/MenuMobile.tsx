import { RiAddLine, RiCloseLine, RiMenu3Fill, RiPieChartLine, RiUser3Line } from 'react-icons/ri';

interface MenuMobileProps {
  showMenu: boolean;
  toggleMenu: () => void;
  toggleOrders: () => void;
}

const MenuMobile = ({ showMenu, toggleMenu, toggleOrders }: MenuMobileProps) => {
  return (
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button className="p-2">
        <RiUser3Line />
      </button>
      <button className="p-2">
        <RiAddLine />
      </button>
      <button onClick={toggleOrders} className="p-2">
        <RiPieChartLine />
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </nav>
  );
};

export default MenuMobile;
