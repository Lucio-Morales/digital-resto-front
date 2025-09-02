import { useState } from 'react';
import Side from './components/ui/Side';
import Header from './components/ui/Header';
import MenuMobile from './components/ui/MenuMobile';
import CategoryCard from './components/shaded/CategoryCard';
import ProductCard from './components/shaded/ProductCard';
import { RiCloseLine } from 'react-icons/ri';
import CartProduct from './components/ui/CartProduct';

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
        <div className="flex flex-col justify-between p-4 lg:col-span-3 bg-[#f9f9f9] fixed lg:static top-0 right-0 w-full h-full lg:h-screen z-10">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">Your orders</h1>
            <button className="md:hidden">
              <RiCloseLine className="p-2 box-content border-2 border-orange-400 rounded-full text-xl cursor-pointer" />
            </button>
          </div>

          {/* Productos (scrollable) */}
          <div className="flex-1 overflow-y-auto mt-4 mb-4 border-b border-gray-300 scroll-hidden">
            <div className="space-y-2">
              <CartProduct productImage={'/burger-1.png'} productName="Delicious Burger" price="12.99" />
              <CartProduct productImage={'/burger-5.png'} productName="Spicy Pizza" price="18.50" />
              <CartProduct productImage={'/burger-3.png'} productName="Granburger" price="19.99" />
              <CartProduct productImage={'/burger-6.png'} productName="Boomber-B" price="20.90" />
              <CartProduct productImage={'/burger-4.png'} productName="Onion Pick" price="10.50" />
            </div>
          </div>

          {/* Footer (Invoice + Botón) */}
          <div className="flex-shrink-0">
            <div className="p-6 rounded-xl bg-gray-300 border-2 border-dashed border-gray-400">
              <h2 className="text-xs text-zinc-600 font-medium">Payment summary</h2>
              <div className="mt-4 space-y-2">
                <p className="flex justify-between">
                  <span>Subtotal:</span> <span>$100.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Tax:</span> <span>$23.45</span>
                </p>
                <p className="flex justify-between font-semibold">
                  <span>Total:</span> <span>$123.45</span>
                </p>
              </div>
            </div>

            <button className="w-full uppercase bg-orange-500 text-white font-semibold mt-4 py-4 rounded-xl hover:bg-orange-600 transition">
              Pagar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
