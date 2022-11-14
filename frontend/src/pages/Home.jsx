import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";
import network from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/network.jpeg';
import './Home.css';

export default function Home(){
    return (
      <header>
        <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${network})` }}
        >

          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Cracking the Coding Interview</h1>
                <h5 className='mb-4'>Free guide to solving SWE interview type problems</h5>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  color="light"
                  size="lg"
                  rel="nofollow"
                  href='/leetcode'
                >
                  Leetcode Solutions
                </MDBBtn>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  color="light"
                  size="lg"
                  href="/datastructures"
                >
                  Data Structures & Algorithms
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

//<Link className='nav-link active' to="/leetcode">Leet Code</Link>