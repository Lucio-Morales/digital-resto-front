import { useState } from 'react';
import Side from './components/ui/Side';
import Header from './components/ui/Header';
import MenuMobile from './components/ui/MenuMobile';
import SecondPanel from './components/ui/SecondPanel';
import CentralPanel from './components/ui/CentralPanel';

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
      {/* PANEL IZQUIERDO */}
      <Side showMenu={showMenu} />
      {/* MENU MOVIL */}
      <MenuMobile showMenu={showMenu} toggleMenu={toggleMenu} toggleInvoice={toggleInvoice} />
      {/* HEADER PRINCIPAL */}
      <Header />
      {/* MAIN PRINCIPAL */}
      <main className="bg-Bg-gray lg:pl-54 grid grid-cols-1 lg:grid-cols-10 pb-20 ">
        {/* PANEL CENTRAL */}
        <CentralPanel />

        {/* PANEL DERECHO  */}
        <SecondPanel showInvoice={showInvoice} toggleInvoice={toggleInvoice} />
      </main>
    </div>
  );
}

export default App;
