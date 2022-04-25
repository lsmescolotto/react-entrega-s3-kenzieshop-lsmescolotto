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
        {cart.length === 0 ? (
          <h4>Seu carrinho está vazio</h4>
        ) : (
          cart.map((product) => (
            <Product product={product} key={product.id} isRemovable />
          ))
        )}
        <p>
          Total: R$
          {cart.reduce(
            (previousProduct, currentProduct) =>
              previousProduct + currentProduct.price,
            0
          )}
        </p>
      </section>
    </Container>
  );
};

export default Cart;
