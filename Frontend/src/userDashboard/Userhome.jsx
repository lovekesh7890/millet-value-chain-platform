import React, { useState } from "react";

import Marketplace from "./marketPlace";
import Usernav from "./Usernav";
import Dashboard from "./Dashboard";
import Cart from "./Cart";

import Footer from "../footer";

function Userhome() {
  const [activeTab, setActiveTab] = useState("products");

  const renderComponent = () => {
    switch (activeTab) {
      case "cart":
        return <Cart />;
      case "dashboard":
        return <Dashboard />;
      case "marketplace":
        return <Marketplace />;
      default:
        return <Marketplace />;
    }
  };

  return (
<<<<<<< HEAD
    <div></div>
  )}
=======
    <>
      <Usernav setActiveTab={setActiveTab} />
      <div className="p-2">{renderComponent()}</div>
      <Footer />
    </>
  );
}
>>>>>>> 580ac1ac828006c230bcd4765a0503525ce023b3

export default Userhome;
