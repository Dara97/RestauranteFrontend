import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./menu.css";

export const MenuItem = ({
  data: { id, name, description, price, image },
  showAlert,
}) => {
  const { onShowModal, addToShoppingCart } = useContext(AppContext);

  const onAddToCart = () => {
    showAlert();
    return addToShoppingCart({
      id,
      name,
      description,
      price,
      image,
      add: true,
    });
  };

  return (
    <div class="col" style={{ marginTop: "32px" }}>
      <div id="nameProduct">
        <h3>{name}</h3>
      </div>

      <div>
        <img src={`/images/${image}`} alt="Hamburguesa especial" id="image" />
      </div>

      <div id="priceProduct">
        <h2>
          <i class="fas fa-dollar-sign"></i>
          <span class="precio"> {price} </span>
        </h2>
      </div>

      <div class="description">
        <h6>{description}</h6>
        <br />
        <button
          type="button"
          class="btn btn-warning btn-block"
          onClick={() => {
            onShowModal(name, image);
          }}
        >
          <i class="fas fa-plus-circle"></i> Más información
        </button>
      </div>

      <div class="addProduct" style={{ marginTop: "12px" }}>
        <button class="agregarCarrito" onClick={onAddToCart}>
          <i class="fas fa-shopping-cart"></i> Agregar carrito
        </button>
      </div>
    </div>
  );
};
