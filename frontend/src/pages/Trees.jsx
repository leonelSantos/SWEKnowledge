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
import PageParagraph from "../components/PageParagraph";
import tree1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Tree/Tree1.webp";
import tree2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Tree/Tree2.webp";
import tree3 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Tree/Tree3.webp";
import tree4 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/Tree/Tree4.webp";


export default function Trees(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Tree Data Structure </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Tree1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={tree1} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Why Tree Data Structure? </h5>
                                                <PageParagraph pagename = {"Tree2"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Tree Terminologies </h5>
                                                <h6 class="mb-3 h6"> Node </h6>
                                                <PageParagraph pagename = {"Tree3"}/>
                                                <h6 class="mb-3 h6"> Edge </h6>
                                                <PageParagraph pagename = {"Tree4"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={tree2} style={{width: "600px"}}/>
                                                </div>
                                                <h6 class="mb-3 h6"> Root </h6>
                                                <PageParagraph pagename = {"Tree5"}/>
                                                <h6 class="mb-3 h6"> Height of a Node </h6>
                                                <PageParagraph pagename = {"Tree6"}/>
                                                <h6 class="mb-3 h6"> Depth of a Node </h6>
                                                <PageParagraph pagename = {"Tree7"}/>
                                                <h6 class="mb-3 h6"> Height of a Tree </h6>
                                                <PageParagraph pagename = {"Tree8"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={tree3} style={{width: "600px"}}/>
                                                </div>
                                                <h6 class="mb-3 h6"> Degree of a Node </h6>
                                                <PageParagraph pagename = {"Tree9"}/>
                                                <h6 class="mb-3 h6"> Forest </h6>
                                                <PageParagraph pagename = {"Tree10"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={tree4} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Types of Tree </h5>
                                                <li>Binary Tree</li>
                                                <li>Binary Search Tree</li>
                                                <li>AVL Tree</li>
                                                <li>B-Tree</li>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Tree Traversal </h5>
                                                <PageParagraph pagename = {"Tree11"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Tree Applications </h5>
                                                <PageParagraph pagename = {"Tree12"}/>
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