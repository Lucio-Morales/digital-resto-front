import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
// import Sidebar from './components/ui/Sidebar';
import { useState } from 'react';
// import Header from './components/shaded/Header';
// import Card from './components/shaded/Card';
// import Car from './components/shaded/Car';
import Side from './components/ui/Side';
import Header from './components/ui/Header';
import MenuMobile from './components/ui/MenuMobile';
import CategoryCard from './components/shaded/CategoryCard';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#f9f9f9] w-full min-h-screen">
      <Side showMenu={showMenu} />
      <MenuMobile showMenu={showMenu} toggleMenu={toggleMenu} toggleOrders={toggleOrders} />
      <Header />
      <div className="flex">
        <main className="bg-zinc-200 lg:pl-56 min-h-screen flex-grow">
          {/* explore categories */}
          <div className="p-3">
            <h2 className="text-lg font-medium mb-4">Explore categories</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              <CategoryCard categoryName="Burgers" src="/burger.svg" active />
              <CategoryCard categoryName="Donuts" src="/donut.svg" />
              <CategoryCard categoryName="Ice cream" src="/ice-cream.svg" />
              <CategoryCard categoryName="Drinks" src="/soda.svg" />
              <CategoryCard categoryName="Pizza" src="/pizza.svg" />
              <CategoryCard categoryName="Fruit" src="/fruit.svg" />
              <CategoryCard categoryName="Burgers" src="/burger.svg" />
              <CategoryCard categoryName="Donuts" src="/donut.svg" />
              <CategoryCard categoryName="Ice cream" src="/ice-cream.svg" />
              <CategoryCard categoryName="Drinks" src="/soda.svg" />
            </div>
          </div>

          <div>ProductsSection</div>
        </main>
        <aside className="w-72 bg-gray-400 hidden lg:block ">aside</aside>
      </div>
    </div>
  );
}

export default App;

// return (
//   <div className="bg-[#262837] w-full min-h-screen">
//     <Sidebar showMenu={showMenu} />
//     <Car showOrder={showOrder} setShowOrder={setShowOrder} />
//     {/* Menu movil */}
//     <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
//       <button className="p-2">
//         <RiUser3Line />
//       </button>
//       <button className="p-2">
//         <RiAddLine />
//       </button>
//       <button onClick={toggleOrders} className="p-2">
//         <RiPieChartLine />
//       </button>
//       <button onClick={toggleMenu} className="text-white p-2">
//         {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
//       </button>
//     </nav>
//     <main className="lg:pl-32 lg:pr-96 pb-20">
//       <div className="md:p-8 p-4">
//         {/* Header */}
//         <Header />
//         {/* Title content */}
//         <div className="flex items-center justify-between mb-16">
//           <h2 className="text-xl text-gray-300">Choose Dishes</h2>
//           <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
//             <RiArrowDownSLine /> Dine in
//           </button>
//         </div>
//         {/* Content */}
//         <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
//           {/* Card */}
//           <Card img="comida.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="dish.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="comida.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="dish.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="comida.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="dish.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="comida.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="dish.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="comida.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//           {/* Card */}
//           <Card img="dish.png" description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
//         </div>
//       </div>
//     </main>
//   </div>
// );
