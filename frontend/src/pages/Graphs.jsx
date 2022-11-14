import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardTitle,
    MDBCardGroup,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import DSIndex from "../components/DataStructureIndex";
import PageCode from "../components/PageCode";
import PageParagraph from "../components/PageParagraph";
import graph1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Graphs/Graph1.webp";
import graph2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Graphs/Graph2.webp";
import graph3 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Graphs/Graph3.webp";
import graph4 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Graphs/Graph4.webp";

export default function Graphs(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Graph Data Stucture </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Graphs1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={graph1} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Graphs2"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={graph2} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Graphs3"}/>
                                                <PageCode pagename = {"Graphs1"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Graph Terminology </h5>
                                                <PageParagraph pagename = {"Graphs4"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Graph Representation </h5>
                                                <PageParagraph pagename = {"Graphs5"}/>
                                                <h6 class="mb-3 h6"> 1. Adjacency Matrix </h6>
                                                <PageParagraph pagename = {"Graphs6"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={graph3} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Graphs7"}/>
                                                <h6 class="mb-3 h6"> 2. Adjacency List </h6>
                                                <PageParagraph pagename = {"Graphs8"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={graph4} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Graphs9"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Graph Operations </h5>
                                                <PageParagraph pagename = {"Graphs10"}/>
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