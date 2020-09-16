import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, ProgressBar } from "react-bootstrap";
import useDetails from "../hooks/useDetails";
import { useParams } from "react-router-dom";
import { getPokemon } from "../store/actions/pokemonAction";
import { connect } from "react-redux";
import NavPokemon from "../components/Navbar";

function Details(props) {
  let { id } = useParams();
  const { items, loading, error } = useDetails(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  useEffect(() => {
    props.getPokemon(id);
  }, [id]);

  return (
    <>
      <NavPokemon></NavPokemon>
      <Card
        style={{
          width: "25rem",
          margin: "0 auto",
          float: "none",
          marginBottom: "10px",
        }}
      >
        {/* {JSON.stringify(props.pokemon)} */}
        <Card.Header className="d-flex justify-content-center">
          <b>{props.pokemon && props.pokemon.name}</b>
        </Card.Header>
        <Card.Img
          style={{ display: "flex" }}
          variant="top"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        />
        <Card.Text className="d-flex justify-content-center">
          <b>abilities</b>
        </Card.Text>
        <ListGroup className="list-group-flush">
          {props.pokemon &&
            props.pokemon.abilities.map(({ ability }, index) => (
              <ListGroupItem key={index}>{ability.name}</ListGroupItem>
            ))}
        </ListGroup>
        <Card.Text className="d-flex justify-content-center">
          <b>type</b>
        </Card.Text>
        <ListGroup className="list-group-flush">
          {props.pokemon &&
            props.pokemon.types.map(({ type }, index) => (
              <ListGroupItem key={index}>{type.name}</ListGroupItem>
            ))}
        </ListGroup>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10px",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <div style={{ width: "25%" }}>
              <span>HP</span>
            </div>
            <div
              style={{
                width: "75%",
              }}
            >
              <ProgressBar
                variant="danger"
                now={props.pokemon && props.pokemon.stats[0].base_stat}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10px",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <div style={{ width: "25%" }}>
              <span>Attack</span>
            </div>
            <div
              style={{
                width: "75%",
              }}
            >
              <ProgressBar
                variant="success"
                now={props.pokemon && props.pokemon.stats[1].base_stat}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10px",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <div style={{ width: "25%" }}>
              <span>Defense</span>
            </div>
            <div
              style={{
                width: "75%",
              }}
            >
              <ProgressBar
                variant="info"
                now={props.pokemon && props.pokemon.stats[2].base_stat}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10px",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <div style={{ width: "25%" }}>
              <span>Speed</span>
            </div>
            <div
              style={{
                width: "75%",
              }}
            >
              <ProgressBar
                variant="warning"
                now={props.pokemon && props.pokemon.stats[5].base_stat}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemonReducer.pokemon,
});
const mapDispatchToProps = { getPokemon };
export default connect(mapStateToProps, mapDispatchToProps)(Details);
