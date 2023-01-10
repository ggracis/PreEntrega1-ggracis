import { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ProductCard from "./components/ProductCard";
import axios from "axios";

function App() {
  const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState("");

  const getProductos = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProductos(response.data);
    });
  };

  const filteredProducts = filter
    ? productos.filter((product) => product.category === filter)
    : productos;

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Container width="100%" maxWidth="100vw" padding={0}>
      <NavBar filter={filter} setFilter={setFilter} CartWidget={CartWidget} />
      <ItemListContainer
        ProductCard={ProductCard}
        productos={filteredProducts}
        greeting="Bienvenido a nuestra tienda!"
      />
    </Container>
  );
}

export default App;
