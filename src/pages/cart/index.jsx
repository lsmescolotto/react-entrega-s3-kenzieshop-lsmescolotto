import { useSelector } from "react-redux";

import Header from "../../components/header";
import Product from "../../components/product";
import { Container } from "./styles";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <Container>
      <Header isAtCart />

      <h2>Carrinho de compras</h2>
      <section>
        {cart.map((product) => (
          <Product product={product} key={product.id} isRemovable />
        ))}
      </section>
    </Container>
  );
};

export default Cart;
