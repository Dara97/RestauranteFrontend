import { useState } from "react";
import { Footer } from "../../components/Footer/footer";
import { MenuItem } from "../../components/MenuItem/menu";

import { menuData } from "../../data/menuData";

import "./menu.css";

export const Menu = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      <div
        className="fondo-oscuro"
        style={{
          width: "100%",
          minHeight: "calc(100vh - 72px)",
          marginTop: "72px",
          paddingTop: "36px",
        }}
      >
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            height: "50px",
            borderRadius: "8px",
            display: showAlert ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            fontSize: "1.1rem",
            backgroundImage:
              "linear-gradient( 135deg, #fff783 0, #ffdf67 25%, #f9c346 50%, #e8a722 75%, #db8f00 100% )",
          }}
        >
          Se ha agregado un producto a su carrito
        </div>

        <section class="container" style={{ padding: "24px 0 64px" }}>
          <h1 class="comida">HAMBURGUESAS</h1>
          <div class="row" id="burguer">
            {menuData.burguers.map((item) => (
              <MenuItem key={item.id} data={item} showAlert={onShowAlert} />
            ))}
          </div>
          <h1 class="comida" style={{ marginTop: "80px" }}>
            PIZZAS
          </h1>
          <div class="row" id="pizza">
            {menuData.pizzas.map((item) => (
              <MenuItem key={item.id} data={item} showAlert={onShowAlert} />
            ))}
          </div>
          <h1 class="comida" style={{ marginTop: "80px" }}>
            PROTEÍNAS
          </h1>
          <div class="row" id="protein">
            {menuData.proteins.map((item) => (
              <MenuItem key={item.id} data={item} showAlert={onShowAlert} />
            ))}
          </div>
          <h1 class="comida" style={{ marginTop: "80px" }}>
            ENSALADAS
          </h1>
          <div class="row" id="salad">
            {menuData.salads.map((item) => (
              <MenuItem key={item.id} data={item} showAlert={onShowAlert} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
