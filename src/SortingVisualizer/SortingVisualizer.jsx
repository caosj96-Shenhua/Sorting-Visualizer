import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { quickSortAnimations } from '../sortingAlgorithms/quickSortAlgorithms.js';
import { bubbleSort } from '../sortingAlgorithms/bubbleSortAlgorithms.js';
import { selectionSortAnimation } from '../sortingAlgorithms/selectionSortAlgorithms.js';
//import * as sort from '../sortingAlgorithms/heapSortAlgorithms.js';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//const ANIMATION_SPEED_MS = 3;

const NUMBER_OF_ARRAY_BARS = /*400*/ 100;

const PRIMARY_COLOR = 'turquoise';;

const SECONDARY_COLOR = 'blue';



export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      ANIMATION_SPEED_MS: 2,
      NUMBER_OF_ARRAY_BARS: 100
    };
  }


  componentDidMount() {
    this.resetArray();
  }




  resetArray() {
    const array = [];
    for (let i = 0; i < /*window.outerWidth - 1450*/ this.state.NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    console.log(animations.length);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        console.log(animations[i]);//check animations

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight, newcolor] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (newcolor) {
            barOneStyle.backgroundColor = "orange";
          }
        }, i * this.state.ANIMATION_SPEED_MS);
      }
    }
    console.log(this.state.array);

  }
  /*
      testSortingAlgorithms() {
          for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
              array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = getMergeSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
          }
        }
  */
  quickSort() {
    console.log(this.state.array);
    const animations = quickSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');

      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_MS);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight, newcolor] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (newcolor) {
            barOneStyle.backgroundColor = "yellow";
          }
        }, i * this.state.ANIMATION_SPEED_MS);
      }
    }
  }


  bubbleSort() {
    const animations = bubbleSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_MS);
      }

      else {

        setTimeout(() => {
          const [barOneIdx, newHeight, newcolor] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (newcolor) {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
          }
          //console.log(barOneStyle.height == `${newHeight}px`);
        }, i * this.state.ANIMATION_SPEED_MS);
      }

    }
  }


  selectionSort() {
    console.log(this.state.ANIMATION_SPEED_MS);
    const animations = selectionSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        //    console.log(animations[i]);
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_MS);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight, newcolor] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

          if (newcolor) {
            barOneStyle.backgroundColor = "red";
          }
          /*     
               if(newcolor === 1){
                   barOneStyle.backgroundColor = "orange";
               }
             */
          //     console.log(animations[i][0]);
          //  console.log(barOneIdx);
          //     for(let j = 0; j < barOneStyle[0].length; j++){
          //       console.log(barOneStyle[j]);
          //      }
        }, i * this.state.ANIMATION_SPEED_MS);
      }
    }

  }

  clickHandler() {
    this.state.ANIMATION_SPEED_MS = 5;
  }


  render() {
    const { ANIMATION_SPEED_MS } = this.state;
    const { array } = this.state;
    // const { value, setValue } = this.state;

    return (
      <div className="Navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={() => window.location.reload()}>Sorting Visualizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Button variant="outline-primary" onClick={() => this.mergeSort()}>MergeSort</Button>{' '}
              <Button variant="outline-primary" onClick={() => this.quickSort()}>QuickSort</Button>{' '}
              <Button variant="outline-primary" onClick={() => this.bubbleSort()}>BubbleSort</Button>{' '}
              <Button variant="outline-primary" onClick={() => this.selectionSort()}>SelectionSort</Button>{' '}
              <Button variant="success" onClick={() => this.resetArray()}> Generate New Array</Button>



            </Nav>
            <Navbar.Brand>Array Size</Navbar.Brand>

            <RangeSlider
              value={this.state.NUMBER_OF_ARRAY_BARS}
              min={20}
              max={120}
              step={1}
              tooltipPlacement='bottom'
              size='sm'
              //onChange={changeEvent => this.setState({ ANIMATION_SPEED_MS: changeEvent.target.valueAsNumber })}
              //    onChange={() => this.clickHandler()}>SPEED</RangeSlider>
              onChange={() => this.resetArray()}
              onChange={changeEvent => { this.setState({ NUMBER_OF_ARRAY_BARS: changeEvent.target.value }); this.resetArray() }}
            ></RangeSlider>

            <Navbar.Brand>   Animation Speed(ms)</Navbar.Brand>

            <RangeSlider
              value={this.state.ANIMATION_SPEED_MS}
              min={0.5}
              max={10}
              step={0.5}
              tooltipPlacement='bottom'
              size='sm'
              //onChange={changeEvent => this.setState({ ANIMATION_SPEED_MS: changeEvent.target.valueAsNumber })}
              //    onChange={() => this.clickHandler()}>SPEED</RangeSlider>
              onChange={changeEvent => this.setState({ ANIMATION_SPEED_MS: changeEvent.target.value })}>SPEED</RangeSlider>

          </Navbar.Collapse>

        </Navbar>



        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
//export default SortingVisualizer;