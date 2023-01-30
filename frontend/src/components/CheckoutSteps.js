import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Iniciar Sesion</Col>
      <Col className={props.step2 ? 'active' : ''}>Direccion</Col>
      <Col className={props.step3 ? 'active' : ''}>Metodo de pago</Col>
      <Col className={props.step4 ? 'active' : ''}>Completar compra</Col>
    </Row>
  );
}
