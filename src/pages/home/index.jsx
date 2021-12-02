import { useSelector } from "react-redux";

import Header from "../../components/header";
import Product from "../../components/product";
import { Container } from "./styles";

const Home = () => {
  const products = useSelector((store) => store.products);

  console.log(products);

  return (
    <Container>
      <Header />
      <h2>Produtos</h2>
      <section>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </section>
    </Container>
  );
};

export default Home;
