import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/modules/cart/actions";
import { removeFromCart } from "../../store/modules/cart/actions";

import { Container } from "./styles";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  const addProduct = () => {
    dispatch(addToCart(product));
    toast.success("Produto adicionado ao carrinho");
  };

  return (
    <Container>
      <img src={image} alt="cat's product" />
      <h3>{name}</h3>
      <span>R$ {price},00</span>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCart(id))}>Remover</button>
      ) : (
        <button onClick={addProduct}>Adicionar item ao carrinho</button>
      )}
    </Container>
  );
};

export default Product;
