import CartActions from '../Actions/CartActions'; 


const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product
    };
  };
export default addToCart;  