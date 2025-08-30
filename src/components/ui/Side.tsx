import { SlBell, SlEnvolope, SlHome, SlStar, SlCalender, SlCreditCard } from 'react-icons/sl';
import NavLink from './NavLink';
import LogoItem from './Logo';

interface SideProps {
  showMenu: boolean;
}

const Side = ({ showMenu }: SideProps) => {
  return (
    <div
      className={`bg-[#f9f9f9] fixed lg:left-0 top-0 lg:w-56 h-full flex flex-col justify-between py-6 px-2 z-50 transition-all ${
        showMenu ? 'left-0' : '-left-full'
      }`}
    >
      <div>
        <ul>
          {/* logo */}
          <LogoItem src="/logo.svg" firstWord="Good" secondWord="Food" />
          {/* nav buttons */}
          <NavLink icon={<SlHome className="w-5 h-5" />} label="Dashboard" href="#" active />
          <NavLink icon={<SlBell className="w-5 h-5" />} label="Food Order" href="#" />
          <NavLink icon={<SlStar className="w-5 h-5" />} label="Feedback" href="#" />
          <NavLink icon={<SlEnvolope className="w-5 h-5" />} label="Message" href="#" />
          <NavLink icon={<SlCalender className="w-5 h-5" />} label="Order History" href="#" />
          <NavLink icon={<SlCreditCard className="w-5 h-5" />} label="Payment details" href="#" />
          <NavLink icon={<SlBell className="w-5 h-5" />} label="Customization" href="#" />
        </ul>
      </div>
    </div>
  );
};

export default Side;
