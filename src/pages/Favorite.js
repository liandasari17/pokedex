import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import CardPokemon from "../components/CardPokemon";
// import SearchPokemon from "../components/Search";
import NavPokemon from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Details() {
  // const [items, setItems] = useState([]);
  const { favorites } = useSelector((state) => state.favoriteReducer);
  const { pokemons } = useSelector((state) => state.pokemonReducer);

  const favoritePokemon = pokemons.filter((pokemon) => {
    return favorites.includes(pokemon.id);
  });
  return (
    <>
      <NavPokemon></NavPokemon>
      {/* {JSON.stringify(favoritePokemon)} */}
      <Container style={{ backgroundColor: "#ff5f5f" }}>
        <Row>
          {/* {loading && <p className="text-center my-5"> Loading.. </p>} */}
          {favoritePokemon.map((item, index) => {
            return (
              <Col sm={2} key={index}>
                {" "}
                <Card
                  border="dark"
                  style={{
                    width: "10rem",
                    marginTop: "50px",
                    color: "#658525",
                    backgroundColor: "#f9e75e",
                  }}
                >
                  <Card.Img src={item.image} />
                  <Card.Title className="d-flex justify-content-center">
                    {item.name}
                  </Card.Title>
                  <Link to={`details/${item.id}`}>
                    <Button variant="danger btn-sm">Show Details</Button>
                  </Link>
                </Card>
              </Col>
            );
          })}
          {/* {error && <p className="text-center my-5"> {error.message} </p>} */}
        </Row>
      </Container>
    </>
  );
}

export default Details;
