import { RiAddLine, RiCloseLine, RiMenu3Fill, RiPieChartLine, RiUser3Line } from 'react-icons/ri';

interface MenuMobileProps {
  showMenu: boolean;
  toggleMenu: () => void;
  toggleInvoice: () => void;
}

const MenuMobile = ({ showMenu, toggleMenu, toggleInvoice }: MenuMobileProps) => {
  return (
    <nav className="bg-zinc-500 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-300 py-2 px-8 flex items-center justify-between z-10">
      <button className="p-2">
        <RiUser3Line />
      </button>
      <button className="p-2">
        <RiAddLine />
      </button>
      <button onClick={toggleInvoice} className="p-2">
        <RiPieChartLine />
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </nav>
  );
};

export default MenuMobile;
