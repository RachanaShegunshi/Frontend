import React from 'react';
import Layout from './Layout/Layout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import chreey from '../assets/chreey.jpg';

const About = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row className="py-5">
          <Col md={6} className="text-center">
            {/* Make the main image larger and centered */}
            <Image src={chreey} fluid className="large-image" />
          </Col>
          <Col md={6}>
            <h1 className="display-4 text-center">About Us</h1>
            <p className="lead text-center">
              Organic is a family-owned grocery store that has been offering quality products for your everyday life since 1999, while also providing superior service and competitive prices.
            </p>
            <div className="text-center">
              <span className="font-weight-bold">Sam Williams</span>
              <br />
              CEO, Founder
            </div>
          </Col>
        </Row>

        <Row className="py-5">
          <Col md={3} className="text-center">
            <Image src={chreey} width={48} />
            <h3 className="mt-3">Quality Products</h3>
            <p>We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.</p>
          </Col>
          <Col md={3} className="text-center">
            <Image src={chreey} width={48} />
            <h3 className="mt-3">Affordable Prices</h3>
            <p>Thanks to our affordable pricing policy, our customers don't have to overpay for the products they need.</p>
          </Col>
          <Col md={3} className="text-center">
            <Image src={chreey} width={48} />
            <h3 className="mt-3">Fast Shipping</h3>
            <p>Our store offers fast worldwide shipping to all customers regardless of what and how much you order.</p>
          </Col>
          <Col md={3} className="text-center">
            <Image src={chreey} width={48} />
            <h3 className="mt-3">Open 24/7</h3>
            <p>Unlike other grocery shops, we are ready to serve you 24/7 and offer the best selection of groceries.</p>
          </Col>
        </Row>

        <Row className="py-5">
          <Col>
            <Image src={chreey} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
