import { RiCloseLine } from 'react-icons/ri';
import CartProduct from './CartProduct';

const SecondPanel = ({ showInvoice, toggleInvoice }) => {
  return (
    <aside
      className={`p-4 fixed w-full h-full top-0 bg-[#f9f9f9] z-50 transition-all
      ${showInvoice ? 'right-0' : '-right-full'}
      lg:col-span-3 
      lg:sticky lg:top-16                 /* 64px: altura del header en desktop */
      lg:max-h-[calc(100vh-64px)]         /* limita el alto del aside en desktop */
      lg:w-auto lg:h-auto`} /* anula el h-full del modo mobile */
    >
      <div className="flex flex-col h-full min-h-0">
        {' '}
        {/* min-h-0 es CLAVE */}
        {/* Header */}
        <div className="flex items-center justify-between shrink-0">
          <h1 className="text-xl font-medium">Your orders</h1>
          <button className="md:hidden">
            <RiCloseLine
              onClick={toggleInvoice}
              className="p-2 box-content border-2 border-orange-400 rounded-full text-xl cursor-pointer"
            />
          </button>
        </div>
        {/* Productos (scrollable) */}
        <div className="flex-1 min-h-0 overflow-y-auto mt-4 mb-4 border-b border-gray-300 scroll-hidden">
          <div className="space-y-2">
            <CartProduct productImage={'/burger-1.png'} productName="Delicious Burger" price="12.99" />
            <CartProduct productImage={'/burger-5.png'} productName="Spicy Pizza" price="18.50" />
            <CartProduct productImage={'/burger-3.png'} productName="Granburger" price="19.99" />
            <CartProduct productImage={'/burger-6.png'} productName="Boomber-B" price="20.90" />
            <CartProduct productImage={'/burger-4.png'} productName="Onion Pick" price="10.50" />
            <CartProduct productImage={'/burger-1.png'} productName="Delicious Burger" price="12.99" />
            <CartProduct productImage={'/burger-5.png'} productName="Spicy Pizza" price="18.50" />
            <CartProduct productImage={'/burger-3.png'} productName="Granburger" price="19.99" />
            <CartProduct productImage={'/burger-1.png'} productName="Delicious Burger" price="12.99" />
            <CartProduct productImage={'/burger-5.png'} productName="Spicy Pizza" price="18.50" />
            <CartProduct productImage={'/burger-3.png'} productName="Granburger" price="19.99" />
          </div>
        </div>
        {/* Footer */}
        <div className="shrink-0">
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
    </aside>
  );
};

export default SecondPanel;

// const SecondPanel = ({ showInvoice, toggleInvoice }) => {
//   return (
//     <aside
//       className={`flex flex-col justify-between p-4 fixed w-full h-full top-0 lg:col-span-3 bg-[#f9f9f9] lg:static lg:h-screen z-50 transition-all ${
//         showInvoice ? 'right-0' : '-right-full'
//       }`}
//     >
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="flex items-center justify-between flex-shrink-0">
//           <h1 className="text-xl font-medium">Your orders</h1>
//           <button className="md:hidden">
//             <RiCloseLine
//               onClick={toggleInvoice}
//               className="p-2 box-content border-2 border-orange-400 rounded-full text-xl cursor-pointer"
//             />
//           </button>
//         </div>

//         {/* Productos (scrollable) */}
//         <div className=" overflow-y-auto flex-1 mt-4 mb-4 border-b border-gray-300 scroll-hidden">
//           <div className="space-y-2">
//             <CartProduct productImage={'/burger-1.png'} productName="Delicious Burger" price="12.99" />
//             <CartProduct productImage={'/burger-5.png'} productName="Spicy Pizza" price="18.50" />
//             <CartProduct productImage={'/burger-3.png'} productName="Granburger" price="19.99" />
//             <CartProduct productImage={'/burger-6.png'} productName="Boomber-B" price="20.90" />
//             <CartProduct productImage={'/burger-4.png'} productName="Onion Pick" price="10.50" />
//           </div>
//         </div>

//         {/* Footer (Invoice + Botón) */}
//         <div className="flex-shrink-0">
//           <div className="p-6 rounded-xl bg-gray-300 border-2 border-dashed border-gray-400">
//             <h2 className="text-xs text-zinc-600 font-medium">Payment summary</h2>
//             <div className="mt-4 space-y-2">
//               <p className="flex justify-between">
//                 <span>Subtotal:</span> <span>$100.00</span>
//               </p>
//               <p className="flex justify-between">
//                 <span>Tax:</span> <span>$23.45</span>
//               </p>
//               <p className="flex justify-between font-semibold">
//                 <span>Total:</span> <span>$123.45</span>
//               </p>
//             </div>
//           </div>

//           <button className="w-full uppercase bg-orange-500 text-white font-semibold mt-4 py-4 rounded-xl hover:bg-orange-600 transition">
//             Pagar
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// };
