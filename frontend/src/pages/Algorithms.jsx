import React from "react";
import {
    MDBCard,
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardTitle,
    MDBCardGroup,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import AlgoIndex from "../components/AlgorithmsIndex";


export default function Algorithms(){
    return (
        <div>
            <MDBCardGroup>
                <MDBRow>
                    <AlgoIndex/>
                    <MDBCol>
                        <MDBCard>
                            <MDBListGroup flush>
                                <MDBListGroupItem>
                                <MDBCardTitle><h1>Algorithms</h1></MDBCardTitle>
                                    <MDBCardText>
                                        <p className="text-xl-start" >
                                            <h5 class="mb-3 h5"> What is an Algorithm? </h5>
                                            <p>
                                                In computer programming terms, an algorithm is a set of well-defined instructions to solve a 
                                                particular problem. It takes a set of input(s) and produces the desired output. For example,
                                            </p>
                                            <h6 class="mb-3 h6"> An algorithm to add two numbers: </h6>
                                            <ol>
                                                <li> Take two number inputs </li>
                                                <li> Add numbers using the + operator </li>
                                                <li> Display the result </li>
                                            </ol>
                                        </p>

                                        <hr/>

                                        <p className="text-xl-start" >
                                            <h5 class="mb-3 h5"> Qualities of a Good Algorithm </h5>
                                            <ul type = "disc">
                                                <li> Input and output should be defined precisely. </li>
                                                <li> Each step in the algorithm should be clear and unambiguous. </li>
                                                <li> Algorithms should be most effective among many different ways to solve a problem. </li>
                                                <li> An algorithm shouldn't include computer code. Instead, the algorithm should be written in such a way that it can be used in different programming languages. </li>
                                            </ul>
                                        </p>
                                    </MDBCardText>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCardGroup>
        </div> 
        )
}