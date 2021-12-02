import { useHistory } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Container } from "./styles";

const Header = ({ isAtCart = false }) => {
  const history = useHistory();

  const accessCart = () => {
    history.push("/cart");
  };

  const accessHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1>Cat's Kenzieshop</h1>
      {/* <section>
        <input />
        <button>Pesquisar</button>
      </section> */}
      {isAtCart ? (
        <span onClick={accessHome}>
          <IoHome />
          Home
        </span>
      ) : (
        <span onClick={accessCart}>
          <FaShoppingCart />
          Carrinho
        </span>
      )}
    </Container>
  );
};

export default Header;
