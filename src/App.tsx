import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';
import Side from './components/ui/Side';
import Header from './components/ui/Header';
import MenuMobile from './components/ui/MenuMobile';
import CategoryCard from './components/shaded/CategoryCard';
import ProductCard from './components/shaded/ProductCard';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowInvoice(false);
  };

  const toggleInvoice = () => {
    setShowInvoice(!showInvoice);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#f9f9f9] w-full min-h-screen">
      <Side showMenu={showMenu} />
      <MenuMobile showMenu={showMenu} toggleMenu={toggleMenu} toggleInvoice={toggleInvoice} />
      <Header />
      <div className="flex ">
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

          <div className="p-3">
            <h2 className="text-lg font-medium mb-4">Productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Aquí irán las tarjetas de productos */}
              <ProductCard
                imageSrc="/burger-1.png"
                productName="Delicious Burger"
                currentPrice="$12.99"
                oldPrice="$15.00"
                rating={4.5}
                reviews={245}
                isWishlisted={true}
                isSelected={true}
              />
              <ProductCard
                imageSrc="/burger-2.png"
                productName="Spicy Pizza"
                currentPrice="$18.50"
                oldPrice="$20.00"
                rating={5}
                reviews={310}
                isWishlisted={false}
                isSelected={false}
              />
              <ProductCard
                imageSrc="/burger-1.png"
                productName="Delicious Burger"
                currentPrice="$12.99"
                oldPrice="$15.00"
                rating={4.5}
                reviews={245}
                isWishlisted={true}
                isSelected={true}
              />
              <ProductCard
                imageSrc="/burger-2.png"
                productName="Spicy Pizza"
                currentPrice="$18.50"
                oldPrice="$20.00"
                rating={5}
                reviews={310}
                isWishlisted={false}
                isSelected={false}
              />
              <ProductCard
                imageSrc="/burger-1.png"
                productName="Delicious Burger"
                currentPrice="$12.99"
                oldPrice="$15.00"
                rating={4.5}
                reviews={245}
                isWishlisted={true}
                isSelected={true}
              />
              <ProductCard
                imageSrc="/burger-2.png"
                productName="Spicy Pizza"
                currentPrice="$18.50"
                oldPrice="$20.00"
                rating={5}
                reviews={310}
                isWishlisted={false}
                isSelected={false}
              />
            </div>
          </div>
        </main>

        <aside className="w-72 p-1 bg-zinc-200 hidden md:block lg:block ">
          <div className="relative  h-screen mt-3 pt-2 p-4 bg-[#f9f9f9] rounded-xl flex flex-col">
            <h1 className="text-xl font-medium mb-4">Invoice</h1>
            {/* Sección productos */}
            <div className="flex-1 space-y-3 overflow-y-auto pr-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <img
                    src="https://via.placeholder.com/50"
                    alt={`Product ${n}`}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-sm font-medium">Product {n}</h2>
                    <p className="text-xs text-gray-500">Cantidad: {n}</p>
                  </div>
                  <span className="text-sm font-semibold">${n * 10}</span>
                </div>
              ))}
            </div>

            {/* <div className="flex-1 space-y-3 overflow-y-auto">
              Tarjeta producto
              <div className="flex items-center gap-3 p-2  border-b border-zinc-300 ">
                <img src="burger-2.png" alt="Product" className="w-14 h-14 p-2 rounded-md bg-gray-300 object-contain" />
                <div className="flex-1">
                  <h2 className="text-sm font-medium">Product 2</h2>
                  <span className="text-sm font-semibold text-orange-500">$18.50</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border-b border-zinc-300">
                <img src="burger-1.png" alt="Product" className="w-10 h-10 rounded-md object-contain" />
                <div className="flex-1">
                  <h2 className="text-sm font-medium">Product 2</h2>
                  <span className="text-sm font-semibold text-orange-500">$40</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border-b border-zinc-300">
                <img src="burger-1.png" alt="Product" className="w-10 h-10 rounded-md object-contain" />
                <div className="flex-1">
                  <h2 className="text-sm font-medium">Product 2</h2>
                  <span className="text-sm font-semibold text-orange-500">$22.50</span>
                </div>
              </div>
            </div> */}

            {/* Sección Payment Summary fija abajo */}
            <div className="mt-4 border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">$100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Envío</span>
                <span className="font-medium">$5</span>
              </div>
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>$105</span>
              </div>
              <button className="w-full mt-2 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-700 transition cursor-pointer">
                Pagar
              </button>
            </div>
          </div>
        </aside>
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
