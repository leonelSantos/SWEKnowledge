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
import stack1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Stack/Stack1.webp";
import stack2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Stack/Stack2.webp";
import stack3 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Stack/Stack3.webp";


export default function Stack(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Stack Data Structure </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Stack1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={stack1} style={{width: "600px"}}/>
                                                </div>
                                                <p>Here, you can:</p>
                                                <PageParagraph pagename = {"Stack2"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> LIFO Principle of Stack </h5>
                                                <PageParagraph pagename = {"Stack3"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={stack2} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Stack4"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Basic Operations of Stack </h5>
                                                <PageParagraph pagename = {"Stack5"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Working of Stack Data Structure </h5>
                                                <PageParagraph pagename = {"Stack6"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={stack3} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Stack Implementations in Python </h5>
                                                <PageParagraph pagename = {"Stack7"}/>
                                                <PageCode pagename = {"Stack1"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Stack Time Complexity </h5>
                                                <PageParagraph pagename = {"Stack8"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Applications of Stack Data Structure </h5>
                                                <PageParagraph pagename = {"Stack9"}/>
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