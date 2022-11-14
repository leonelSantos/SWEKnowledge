import React from "react";
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
import PageCode from "../components/PageCode";
import PageParagraph from "../components/PageParagraph";
import linkedlist1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/LinkedList/LinkedList1.webp";
import linkedlist2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/LinkedList/LinkedList2.webp";


export default function LinkedList(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Linked List Data Structure </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Linked List1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={linkedlist1} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Linked List2"}/>
                                                <div class="note note-light mb-3"><PageParagraph pagename = {"Linked List3"}/></div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Representation of Linked List </h5>
                                                <PageParagraph pagename = {"Linked List4"}/>
                                                <PageCode pagename = {"Linked List1"}/>
                                                <PageParagraph pagename = {"Linked List5"}/>
                                                <PageCode pagename = {"Linked List2"}/>
                                                <PageParagraph pagename = {"Linked List6"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={linkedlist2} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"Linked List7"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linked List Utility </h5>
                                                <PageParagraph pagename = {"Linked List8"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linked List Implementations in Python </h5>
                                                <PageCode pagename = {"Linked List3"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linked List Complexity </h5>
                                                <h6 class="mb-3 h6 text-muted"> Time Complexity </h6>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th></th>
                                                            <th>Worst case</th>
                                                            <th>Average Case</th>
                                                        </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td>Search</td>
                                                            <td>O(n)</td>
                                                            <td>O(n)</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Insert</td>
                                                            <td>O(1)</td>
                                                            <td>O(1)</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Deletion</td>
                                                            <td>O(1)</td>
                                                            <td>O(1)</td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
                                                <h6 class="mb-3 h6 text-muted"> Space Complexity: O(n) </h6>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linked List Applications </h5>
                                                <PageParagraph pagename = {"Linked List9"}/>
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