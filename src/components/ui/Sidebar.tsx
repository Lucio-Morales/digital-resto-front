import {
  RiHome6Line,
  RiLogoutCircleLine,
  RiMailLine,
  RiNotification3Line,
  RiPercentLine,
  RiPieChartLine,
  RiSettings4Line,
} from 'react-icons/ri';

const Sidebar = ({ showMenu }) => {
  return (
    <div
      className={`bg-black text-white fixed lg:left-0 top-0 w-22 h-full flex flex-col justify-between py-2 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? 'left-0' : '-left-full'
      }`}
    >
      <div>
        <ul className="pl-3">
          {/* LOGO */}
          <li>
            <h1 className="text-2xl uppercase font-bold text-center my-2">Logo</h1>
          </li>

          {/* NAV BUTTONS */}
          <li className="bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl">
            <a href="#" className="bg-red-400 p-4 flex justify-center rounded-xl">
              <RiHome6Line className="text-xl" />
            </a>
          </li>

          <li className="hover:bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white text-red-400 p-4 flex justify-center rounded-xl transition-colors"
            >
              <RiPercentLine className="text-xl" />
            </a>
          </li>

          <li className="hover:bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white text-red-400 p-4 flex justify-center rounded-xl transition-colors"
            >
              <RiPieChartLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white text-red-400 p-4 flex justify-center rounded-xl transition-colors"
            >
              <RiMailLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white text-red-400 p-4 flex justify-center rounded-xl transition-colors"
            >
              <RiNotification3Line className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white text-red-400 p-4 flex justify-center rounded-xl transition-colors"
            >
              <RiSettings4Line className="text-xl" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="pl-3">
          <li className="hover:bg-zinc-900 p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white text-red-400 p-4 flex justify-center rounded-xl transition-colors"
            >
              <RiLogoutCircleLine className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
