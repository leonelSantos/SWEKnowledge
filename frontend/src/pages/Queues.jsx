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
import queue1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Queue/Queues1.webp";
import queue2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Queue/Queues2.webp";
import queue3 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Queue/Queue3.webp";

export default function Queues(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Queue Data Structure </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Queue1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={queue1} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Queue2"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Basic Operations of Queue </h5>
                                                <ul>
                                                    <PageParagraph pagename = {"Queue3"}/>
                                                </ul>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Working of Queue </h5>
                                                <p>A queue is an object (an abstract data structure - ADT) that allows the following operations:</p>
                                                <p>Queue operations work as follows:</p>
                                                <ul>
                                                    <PageParagraph pagename = {"Queue4"}/>
                                                </ul>
                                                <h5 class="mb-3 h5"> Enqueue Operation </h5>
                                                <ul>
                                                    <PageParagraph pagename = {"Queue5"}/>
                                                </ul>
                                                <h5 class="mb-3 h5"> Dequeue Operation </h5>
                                                <ul>
                                                    <PageParagraph pagename = {"Queue6"}/>
                                                </ul>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={queue2} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Queue Implementations in Python </h5>
                                                <PageParagraph pagename = {"Queue7"}/>
                                                <PageCode pagename = {"Queue1"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Limitations of Queue </h5>
                                                <PageParagraph pagename = {"Queue8"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={queue3} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Queue9"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Complexity Analysis </h5>
                                                <PageParagraph pagename = {"Queue10"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Applications of Queue </h5>
                                                <ul>
                                                    <PageParagraph pagename = {"Queue11"}/>
                                                </ul>
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