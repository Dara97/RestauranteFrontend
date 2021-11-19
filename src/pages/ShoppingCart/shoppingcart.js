import { useContext, useState } from "react";
import { useHistory } from "react-router";

import { AppContext } from "../../context/AppContext";
import "./shoppingcart.css";

export const ShoppingCart = () => {
  const {
    shoppingCartItems,
    removeToShoppingCart,
    addToShoppingCart,
    calculateTotal,
  } = useContext(AppContext);

  const history = useHistory();

  const [showAlert, setShowAlert] = useState(false);

  const onShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const onBuy = () => {
    history.push("/orden");
  };

  const onChangeItemCount = (ev, id) => {
    if (ev.target.value <= 0) {
      onShowAlert();
      return removeToShoppingCart(id);
    }

    return addToShoppingCart({ id, count: ev.target.value });
  };

  return (
    <>
      <div
        className="fondo-oscuro"
        style={{
          width: "100%",
          minHeight: "calc(100vh - 72px)",
          marginTop: "72px",
          padding: "36px 0 60px",
        }}
      >
        <h2 className="carrito-title">
          Ped<span>ido</span>
        </h2>
        <div
          style={{
            width: "90%",
            margin: "24px auto",
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
          Se ha eliminado un producto de su carrito
        </div>
        <div className="carrito">
          {shoppingCartItems.length && (
            <>
              <div className="carrito-items my-scroll">
                {shoppingCartItems.map(
                  ({ id, name, description, price, image, count }) => (
                    <div className="carrito-item" key={id}>
                      <div className="carrito-item-img">
                        <img src={`https://res.cloudinary.com/ddqxtzvyw/image/upload/v1636248786/restaurant-images/${image}`} alt={name} />
                        <p>{name}</p>
                      </div>
                      <div className="carrito-item-descripcion">
                        {description}
                      </div>
                      <div className="carrito-item-precio">{price}</div>
                      <div className="carrito-item-cantidad">
                        <input
                          type="number"
                          value={count}
                          onChange={(ev) => {
                            onChangeItemCount(ev, id);
                          }}
                        />
                        <button
                          className="bg-danger"
                          onClick={() => {
                            onShowAlert();
                            removeToShoppingCart(id);
                          }}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="carrito-total">
                <p>Total ${calculateTotal()}</p>
                <button onClick={onBuy}>Comprar</button>
              </div>
            </>
          )}
          {!shoppingCartItems.length && (
            <h2 style={{ color: "#fff" }}>
              No ha seleccionado ningun producto
            </h2>
          )}
        </div>
      </div>
    </>
  );
};
