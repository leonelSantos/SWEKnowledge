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
import heap1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap1.png";
import heap2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap2.png";
import heap3 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap3.png";
import heap4 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap4.png";
import heap5 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap5.png";
import heap6 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap6.png";
import heap7 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap7.png";
import heap8 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap8.png";
import heap9 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap9.png";
import heap10 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap10.png";
import heap11 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap11.png";
import heap12 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Heap/Heap12.png";


export default function Heap(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Heap Data Structure </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Heap1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap1} style={{width: "500px"}}/>
                                                </div>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap2} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap2"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Heap Operations </h5>
                                                <PageParagraph pagename = {"Heap3"}/>
                                                <h6 class="mb-3 h6"> Heapify </h6>
                                                <PageParagraph pagename = {"Heap4"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap3} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap5"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap4} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap6"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap5} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap7"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap6} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap8"}/>
                                                <h6 class="mb-3 h6"> Algorithm </h6>
                                                <PageCode pagename = {"Heap1"}/>
                                                <h6 class="mb-3 h6"> To Create a Max Heap: </h6>
                                                <PageCode pagename = {"Heap2"}/>
                                                <PageParagraph pagename = {"Heap9"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Insert Element into Heap </h5>
                                                <PageParagraph pagename = {"Heap10"}/>
                                                <PageCode pagename = {"Heap3"}/>
                                                <PageParagraph pagename = {"Heap11"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap7} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap12"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap8} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap13"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Delete Element from Heap </h5>
                                                <PageParagraph pagename = {"Heap14"}/>
                                                <PageCode pagename = {"Heap4"}/>
                                                <PageParagraph pagename = {"Heap15"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap9} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap16"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap10} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap17"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap11} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap18"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={heap12} style={{width: "500px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Heap19"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Peek (Find max/min) </h5>
                                                <PageParagraph pagename = {"Heap20"}/>
                                                <PageCode pagename = {"Heap5"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Extract-Max/Min </h5>
                                                <PageParagraph pagename = {"Heap21"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Max-Heap Data Structure in Python </h5>
                                                <PageCode pagename = {"Heap6"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Heap Data Structure Applications </h5>
                                                <PageParagraph pagename = {"Heap22"}/>
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