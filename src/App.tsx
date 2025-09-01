// import { RiAddLine, RiPieChartLine, RiMenu3Fill, RiUser3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';
import Side from './components/ui/Side';
import Header from './components/ui/Header';
import MenuMobile from './components/ui/MenuMobile';
import CategoryCard from './components/shaded/CategoryCard';
import ProductCard from './components/shaded/ProductCard';
import { RiCloseLine } from 'react-icons/ri';

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

      <main className="bg-zinc-200 lg:pl-56 grid grid-cols-1 lg:grid-cols-10 pb-20 ">
        {/* PANEL CENTRAL */}
        <div className="lg:col-span-7">
          {/* explore categories */}
          <div className="p-3">
            <h2 className="text-lg font-medium mb-4">Explore categories</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              <CategoryCard categoryName="Burgers" src="/burger.svg" active />
              <CategoryCard categoryName="Donuts" src="/donut.svg" />
              <CategoryCard categoryName="Desserts" src="/ice-cream.svg" />
              <CategoryCard categoryName="Drinks" src="/soda.svg" />
              <CategoryCard categoryName="Pizza" src="/pizza.svg" />
              <CategoryCard categoryName="Fries" src="/fries.svg" />
              <CategoryCard categoryName="Salad" src="/salad.svg" />
              <CategoryCard categoryName="Veggie" src="/veggie.svg" />
              <CategoryCard categoryName="Fruit" src="/fruit.svg" />
              <CategoryCard categoryName="Coffee" src="/coffee.svg" />
            </div>
          </div>

          {/* Products cards */}
          <div className="p-3">
            <h2 className="text-lg font-medium mb-4">Productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Aquí irán las tarjetas de productos */}
              <ProductCard
                imageSrc="/burger-6.png"
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
                imageSrc="/burger-3.png"
                productName="Delicious Burger"
                currentPrice="$12.99"
                oldPrice="$15.00"
                rating={4.5}
                reviews={245}
                isWishlisted={true}
                isSelected={true}
              />
              <ProductCard
                imageSrc="/burger-4.png"
                productName="Spicy Pizza"
                currentPrice="$18.50"
                oldPrice="$20.00"
                rating={5}
                reviews={310}
                isWishlisted={false}
                isSelected={false}
              />
              <ProductCard
                imageSrc="/burger-5.png"
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
        </div>

        {/* PANEL DERECHO  */}
        <div className="lg:col-span-3 bg-gray-500 fixed lg:static top-0 right-0 w-full h-full">
          <div className="relative pt-18 p-8 ">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content bg-orange-300 rounded-full text-xl" />
            <h1 className="text-2xl mt-4">Orders #40362</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
