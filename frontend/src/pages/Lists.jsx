import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBTable, 
    MDBCardImage,
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
import Lists1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/List/Lists1.webp";


export default function Lists(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Python Lists </h1></MDBCardTitle>
                                        <MDBCardText>
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Lists1"}/>
                                                <PageCode pagename = {"List1"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Create Python Lists </h5>
                                                <PageParagraph pagename = {"Lists2"}/>
                                                <PageCode pagename = {"List2"}/>
                                                <PageParagraph pagename = {"Lists3"}/>
                                                <PageCode pagename = {"List3"}/>
                                                <PageParagraph pagename = {"Lists4"}/>
                                                <PageCode pagename = {"List4"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Access List Elements </h5>
                                                <PageParagraph pagename = {"Lists5"}/>
                                                <h5 class="mb-3 h5">List Index</h5>
                                                <PageParagraph pagename = {"Lists6"}/>
                                                <PageCode pagename = {"List5"}/>
                                                Output
                                                <PageCode pagename = {"List6"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Negative indexing </h5>
                                                <PageParagraph pagename = {"Lists7"}/>
                                                <PageCode pagename = {"List7"}/>
                                                Output
                                                <PageCode pagename = {"List8"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={Lists1} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">List Slicing in Python</h5>
                                                <PageParagraph pagename = {"Lists8"}/>
                                                <PageCode pagename = {"List9"}/>
                                                Output
                                                <PageCode pagename = {"List10"}/>
                                                <div class="note note-light mb-3"><PageParagraph pagename = {"Lists9"}/></div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Add/Change List Elements</h5>
                                                <PageParagraph pagename = {"Lists10"}/>
                                                <PageCode pagename = {"List11"}/>
                                                Output
                                                <PageCode pagename = {"List12"}/>
                                                <PageParagraph pagename = {"Lists11"}/>
                                                <PageCode pagename = {"List13"}/>
                                                Output
                                                <PageCode pagename = {"List14"}/>
                                                <PageParagraph pagename = {"Lists12"}/>
                                                <PageCode pagename = {"List15"}/>
                                                Output
                                                <PageCode pagename = {"List16"}/>
                                                <PageParagraph pagename = {"Lists13"}/>
                                                <PageCode pagename = {"List17"}/>
                                                Output
                                                <PageCode pagename = {"List18"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Delete List Elements</h5>
                                                <PageParagraph pagename = {"Lists14"}/>
                                                <PageCode pagename = {"List19"}/>
                                                Output
                                                <PageCode pagename = {"List20"}/>
                                                <PageParagraph pagename = {"Lists15"}/>
                                                <PageCode pagename = {"List21"}/>
                                                Output
                                                <PageCode pagename = {"List22"}/>
                                                <PageParagraph pagename = {"Lists16"}/>
                                                <PageCode pagename = {"List23"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Python List Methods</h5>
                                                <PageParagraph pagename = {"Lists17"}/>
                                            </p>

                                            <MDBTable>
                                                <MDBTableHead dark>
                                                    <tr>
                                                        <th>Methods </th>
                                                        <th> Descriptions</th>
                                                    </tr>
                                                </MDBTableHead>

                                                <MDBTableBody>
                                                    <tr>
                                                        <td> append()</td>
                                                        <td> adds an element to the end of the list </td>
                                                    </tr>
                                                    <tr>
                                                        <td> extend() </td>
                                                        <td> adds all elements of a list to another list </td>
                                                    </tr>
                                                    <tr>
                                                        <td> insert() </td>
                                                        <td> inserts an item at the defined index </td>
                                                    </tr>
                                                    <tr>
                                                        <td>remove()</td>
                                                        <td>removes an item from the list</td>
                                                    </tr>
                                                    <tr>
                                                        <td> pop() </td>
                                                        <td> returns and removes an element at the given index </td>
                                                    </tr>
                                                    <tr>
                                                        <td> clear() </td>
                                                        <td> removes all items from the list </td>
                                                    </tr>
                                                    <tr>
                                                        <td> index() </td>
                                                        <td> returns the index of the first matched item </td>
                                                    </tr>
                                                    <tr>
                                                        <td> count() </td>
                                                        <td> returns the count of the number of items passed as an argument </td>
                                                    </tr>
                                                    <tr>
                                                        <td> sort() </td>
                                                        <td> sort items in a list in ascending order </td>
                                                    </tr>
                                                    <tr>
                                                        <td> reverse() </td>
                                                        <td> reverse the order of items in the list </td>
                                                    </tr>
                                                    <tr>
                                                        <td> copy() </td>
                                                        <td> returns a shallow copy of the list </td>
                                                    </tr>
                                                </MDBTableBody>
                                            </MDBTable>
                    
                                            <PageCode pagename = {"List24"}/>

                                            <hr/>
                                            
                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">List Comprehension: Elegant way to create Lists</h5>
                                                <PageParagraph pagename = {"Lists18"}/>
                                                <PageCode pagename = {"List25"}/>
                                                Output
                                                <PageCode pagename = {"List26"}/>
                                                <PageParagraph pagename = {"Lists19"}/>
                                                <PageCode pagename = {"List27"}/>
                                                <PageParagraph pagename = {"Lists20"}/>
                                                <PageCode pagename = {"List28"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Other List Operations in Python</h5>
                                                <h6 class="mb-3 h6 text-muted">List Membership Test</h6>
                                                <PageParagraph pagename = {"Lists21"}/>
                                                <PageCode pagename = {"List29"}/>
                                                Output
                                                <PageCode pagename = {"List30"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Iterating Through a List</h5>
                                                <PageParagraph pagename = {"Lists22"}/>
                                                <PageCode pagename = {"List31"}/>
                                                Output
                                                <PageCode pagename = {"List32"}/>
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