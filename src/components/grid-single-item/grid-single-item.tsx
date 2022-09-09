import { Button, Card, Col, Row } from "react-bootstrap";
import "./grid-single-item-styles.css";
import { FC, useState } from "react";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import DeleteConfirmationModalComponent from "../../common/delete-confirmation-modal/delete-confirmation-modal-component";
import { Link } from "react-router-dom";
import { SingleItemProps } from "../../models/interfaces";
import React from "react";

//GridSingleItem component for a single employee in grid
const GridSingleItem: FC<SingleItemProps> = ({
  _id,
  id,
  first_name,
  last_name,
  gender,
  email,
  number,
  photo,
  employee,
}) => {
  const [show, setShow] = useState<boolean>(false);

  //handle closing the modal
  const handleClose = (): void => setShow(false);

  //handle showing the modal
  const handleShow = (): void => setShow(true);

  return (
    <Col sm={6} md={3} lg={3} className="mt-4">
      <DeleteConfirmationModalComponent
        employee={employee}
        handleClose={handleClose}
        show={show}
      />
      <Card className="item-card">
        {photo !== "" && photo !== undefined && photo !== null ? (
          <Card.Img className="item-card-image" variant="top" src={photo} />
        ) : (
          <Card.Img
            className="item-card-image"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"
          />)}
        <Card.Body>
          <Row>
            <Col sm={12} md={12} className="card-content-text">
              {first_name} {last_name}
            </Col>
            <Col sm={12} md={12} className="text-decoration-underline card-content-text mt-1">
              {email}
            </Col>
            <Col sm={12} md={12} className="card-content-text mt-1">
              {number}
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={4} md={4} sm={12} className="card-content-text text-left">
              {gender === "M" ? "Male" : "Female"}
            </Col>
            <Col sm={0} md={1} lg={3} />
            <Col sm={6} md={2} lg={2} className="text-right">
              <Button
                className="grid-item-circle-button-red"
                onClick={handleShow}>
                <FaTrashAlt className="grid-item-icons" />
              </Button>
            </Col>
            <Col sm={6} md={2} lg={2} className="mr-1 text-right">
              <Link to={"/employee/edit/" + _id}>
                <Button className="grid-item-circle-button-green">
                  <FaUserEdit className="grid-item-icons" />
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GridSingleItem;
