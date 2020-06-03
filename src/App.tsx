import React from 'react'
import { Container, Row, Col } from './styles'
import './app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col col={1} md={{ col: 6, display: 'none' }}>
              1
            </Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col>4</Col>
            <Col>5</Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
