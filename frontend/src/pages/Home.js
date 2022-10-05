import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import wsk from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/wsk.PNG'
import mtn from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/mtn.jpg'
import surf2 from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/surf2.jpeg'
import './Home.css'

export default function Home(){
    return (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="scale-down"
              src={wsk}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="scale-down"
              src={mtn}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="second-h3">Second slide label</h3>
              <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="scale-down"
              src={surf2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="second-h3">Third slide label</h3>
              <p className="second-p">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      );
}