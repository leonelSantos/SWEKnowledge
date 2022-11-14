import React from "react";
import './DataStructures.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBTable, 
    MDBTableHead, 
    MDBTableBody,
    MDBCardText,
    MDBCardTitle,
    MDBCardGroup,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import DSIndex from "../components/DataStructureIndex";
  import PageParagraph from "../components/PageParagraph";
  import dsa1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa1.png";
  import dsa2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa2.png";
  import dsa3 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa3.png";
  import dsa4 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa4.png";
  import dsa5 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa5.png";
  import dsa6 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa6.png";
  import dsa7 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/dsa/dsa7.png";


export default function DataStructures(){
    
    return (
        <div>
            <MDBCardGroup>
                <MDBRow>
                    <DSIndex/>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem>
                                    <MDBCardTitle><h1>Data Structures</h1></MDBCardTitle>
                                        <MDBCardText>
                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> What Are Data Structures? </h5>
                                                <PageParagraph pagename = {"DSA1"}/>

                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={dsa1} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Types of Data Structure </h5>
                                                Basically, data structures are divided into two categories:
                                                <ul type = "disc">
                                                    <li>Non-linear data structure </li>
                                                    <li>Linear data structure</li>
                                                </ul>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linear data structures </h5>
                                                <PageParagraph pagename = {"DSA2"}/>
                                                
                                                <h6 class="mb-3 h6"> Popular linear data structures are: </h6>

                                                <h6 class="mb-3 h6"> 1. Array Data Structure </h6>
                                                <PageParagraph pagename = {"DSA3"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={dsa2} style={{width: "400px"}}/>
                                                </div>
                                                
                                                <h6 class="mb-3 h6"> 2. Stack Data Structure </h6>
                                                <PageParagraph pagename = {"DSA4"}/>
                                                    <div className="text-center">
                                                        <img alt='...' className='img-thumbnail' src={dsa3} style={{width: "400px"}}/>
                                                    </div>
                                                
                                                <h6 class="mb-3 h6"> 3. Queue Data Structure </h6>
                                                <PageParagraph pagename = {"DSA5"}/>
                                                    <div className="text-center">
                                                        <img alt='...' className='img-thumbnail' src={dsa4} style={{width: "400px"}}/>
                                                    </div>
                                                
                                                <h6 class="mb-3 h6"> 4. Linked List Data Structure </h6>
                                                <PageParagraph pagename = {"DSA6"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={dsa5} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Non linear data structures </h5>
                                                <PageParagraph pagename = {"DSA7"}/>
                                                <h6 class="mb-3 h6"> 1. Graph Data Structure </h6>
                                                <PageParagraph pagename = {"DSA8"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={dsa6} style={{width: "400px"}}/>
                                                </div>
                                                
                                                <h6 class="mb-3 h6"> 2. Trees Data Structure </h6>
                                                <PageParagraph pagename = {"DSA9"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={dsa7} style={{width: "400px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linear Vs Non-linear Data Structures </h5>
                                                <PageParagraph pagename = {"DSA10"}/>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <td>
                                                            Linear Data Structures
                                                            </td>

                                                            <td>
                                                            Non Linear Data Structures
                                                            </td>
                                                        </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td>
                                                            The data items are arranged in sequential order, one after the other.
                                                            </td>
                                                            
                                                            <td>
                                                            The data items are arranged in non-sequential order (hierarchical manner).
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            All the items are present on the single layer.
                                                            </td>
                                                            
                                                            <td>
                                                            The data items are present at different layers.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            It can be traversed on a single run. That is, if we start from the first element, we can traverse all the elements sequentially in a single pass.
                                                            </td>
                                                            
                                                            <td>
                                                            It requires multiple runs. That is, if we start from the first element it might not be possible to traverse all the elements in a single pass.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            The memory utilization is not efficient.
                                                            </td>
                                                            
                                                            <td>
                                                            Different structures utilize memory in different efficient ways depending on the need.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            The time complexity increase with the data size.
                                                            </td>
                                                            
                                                            <td>
                                                            Time complexity remains the same.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            Example: Arrays, Stack, Queue
                                                            </td>
                                                            
                                                            <td>
                                                            Example: Tree, Graph, Map
                                                            </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
                                            </p>
                                        </MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCardGroup>
        </div> 
        )
}
