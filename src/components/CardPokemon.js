import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ModalImage from "./ModalImage";

export default function CardPokemon(props) {
  const disptach = useDispatch();

  const [modalShow, setModalShow] = React.useState(false);
  const [currentPokemon, setCurrentPokemon] = React.useState({});

  const openModal = (item) => {
    setModalShow(true);
    setCurrentPokemon(item);
  };

  const history = useHistory();

  return (
    <Container style={{ backgroundColor: "#ff5f5f" }}>
      <ModalImage
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={currentPokemon.image}
        name={currentPokemon.name}
      />
      <Row>
        {props.items.map((item, index) => {
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
                <Card.Img src={item.image} onClick={() => openModal(item)} />
                <Card.Title className="d-flex justify-content-center">
                  {item.name}
                </Card.Title>
                <Button
                  onClick={(e) => history.push(`details/${item.id}`)}
                  variant="danger btn-sm"
                >
                  Show Details
                </Button>
                <Button
                  onClick={() =>
                    disptach({
                      type: "ADD_FAVORITES",
                      payload: item.id,
                    })
                  }
                  variant="success btn-sm"
                >
                  Add to Favorite
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
