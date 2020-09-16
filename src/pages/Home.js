import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardPokemon from "../components/CardPokemon";
import SearchPokemon from "../components/Search";
import NavPokemon from "../components/Navbar";
// import useFetch from "../hooks/useFecth";
import { connect } from "react-redux";
import { getPokemons } from "../store/actions/pokemonAction";

function Home(props) {
  useEffect(() => {
    props.getPokemons();
  }, []);

  return (
    <>
      <NavPokemon></NavPokemon>
      <CardPokemon items={props.pokemons}></CardPokemon>
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemonReducer.pokemons,
});
const mapDispatchToProps = { getPokemons };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
