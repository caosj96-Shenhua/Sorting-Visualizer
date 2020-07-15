import React from 'react';
//import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {bubbleSort} from '../SortingVisualizer/SortingVisualizer.jsx'
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer.jsx';

const Styles = styled.div`
  .navbar {
    background-color: #100;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: red;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">MergeSort</Nav.Link>
      <Nav.Link href="#link">QuickSort</Nav.Link>
      <Nav.Link href="../SortingVisualizer.jsx">BubbleSort</Nav.Link>
      <Button variant="outline-success" onClick={()=> SortingVisualizer.mergeSort()}>Success</Button>{' '}
      <Button onClick={()=> SortingVisualizer.resetArray()}> MergeSort()</Button>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </Styles >
)