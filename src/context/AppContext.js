import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [modalInfo, setModalInfo] = useState({
    name: "",
    image: "",
  });

  const onShowModal = (name, image) => {
    setShowModal(true);
    setModalInfo({
      name,
      image,
    });
  };

  const onCloseModal = () => setShowModal(false);

  const addToShoppingCart = ({
    id,
    name,
    image,
    description,
    price,
    count,
    add,
  }) => {
    let exist = false;

    for (let i = 0; i < shoppingCartItems.length; i++) {
      if (shoppingCartItems[i].id === id) {
        shoppingCartItems[i].count = add
          ? shoppingCartItems[i].count + 1
          : count;
        setShoppingCartItems([...shoppingCartItems]);
        exist = true;
        break;
      }
    }

    if (!exist) {
      setShoppingCartItems([
        ...shoppingCartItems,
        {
          id,
          name,
          image,
          description,
          price,
          count: 1,
        },
      ]);
    }
  };

  const removeToShoppingCart = (id) => {
    for (let i = 0; i < shoppingCartItems.length; i++) {
      if (shoppingCartItems[i].id === id) {
        shoppingCartItems.splice(i, 1);
        setShoppingCartItems([...shoppingCartItems]);
        break;
      }
    }
  };

  const calculateTotal = () => {
    let result = 0;

    for (let item of shoppingCartItems) {
      result += item.count * item.price;
    }

    return result;
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        modalInfo,
        shoppingCartItems,
        onShowModal,
        onCloseModal,
        setModalInfo,
        addToShoppingCart,
        removeToShoppingCart,
        calculateTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
