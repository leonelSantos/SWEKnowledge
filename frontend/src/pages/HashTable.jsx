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
import hashtable1 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/HashTable/HashTable1.webp";
import hashtable2 from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/HashTable/HashTable2.webp";

export default function HashTable(){
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
                                    <MDBCardTitle><h1 class="mb-3 h1"> Hash Tables </h1></MDBCardTitle>
                                        <MDBCardText>
                                        
                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"Hash Table1"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={hashtable1} style={{width: "400px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Hashing (Hash Function) </h5>
                                                <PageParagraph pagename = {"Hash Table2"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={hashtable2} style={{width: "600px"}}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Python Dictionary </h5>
                                                <PageParagraph pagename = {"Hash Table3"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Creating Python Dictionary </h5>
                                                <PageParagraph pagename = {"Hash Table4"}/>
                                                <PageCode pagename = {"Hash Tables1"}/>
                                                <PageParagraph pagename = {"Hash Table5"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Accessing Elements from Dictionary </h5>
                                                <PageParagraph pagename = {"Hash Table6"}/>
                                                <PageCode pagename = {"Hash Tables2"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables3"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Changing and Adding Dictionary Elements </h5>
                                                <PageParagraph pagename = {"Hash Table7"}/>
                                                <PageCode pagename = {"Hash Tables4"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables5"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Removing elements from Dictionary </h5>
                                                <PageParagraph pagename = {"Hash Table8"}/>
                                                <PageCode pagename = {"Hash Tables6"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables7"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Python Dictionary Methods </h5>
                                                <PageParagraph pagename = {"Hash Table9"}/>
                                                
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th> Methods </th>
                                                            <th> Descriptions </th>
                                                        </tr>
                                                    </MDBTableHead>

                                                    <MDBTableBody>
                                                        <tr>
                                                            <td> clear()</td>
                                                            <td> Removes all items from the dictionary. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> copy() </td>
                                                            <td> Returns a shallow copy of the dictionary. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> fromkeys(seq[, v]) </td>
                                                            <td> Returns a new dictionary with keys from seq and value equal to v (defaults to None). </td>
                                                        </tr>

                                                        <tr>
                                                            <td> get(key[,d]) </td>
                                                            <td> Returns the value of the key. If the key does not exist, returns d (defaults to None). </td>
                                                        </tr>

                                                        <tr>
                                                            <td> items() </td>
                                                            <td> Return a new object of the dictionary's items in (key, value) format. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> keys() </td>
                                                            <td> Returns a new object of the dictionary's keys. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> pop(key[,d]) </td>
                                                            <td> Removes the item with the key and returns its value or d if key is not found. If d is not provided and the key is not found, it raises KeyError. </td>
                                                        </tr>
                                                        <tr>
                                                            <td> popitem() </td>
                                                            <td> Removes and returns an arbitrary item (key, value). Raises KeyError if the dictionary is empty. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> setdefault(key[,d]) </td>
                                                            <td> Returns the corresponding value if the key is in the dictionary. If not, inserts the key with a value of d and returns d (defaults to None). </td>
                                                        </tr>

                                                        <tr>
                                                            <td> update([other]) </td>
                                                            <td> Updates the dictionary with the key/value pairs from other, overwriting existing keys. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> values() </td>
                                                            <td> Returns a new object of the dictionary's values </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
                                                <PageParagraph pagename = {"Hash Table10"}/>
                                                <PageCode pagename = {"Hash Tables8"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables9"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Python Dictionary Comprehension </h5>
                                                <PageParagraph pagename = {"Hash Table11"}/>
                                                <PageCode pagename = {"Hash Tables10"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables11"}/>
                                                <PageParagraph pagename = {"Hash Table12"}/>
                                                <PageCode pagename = {"Hash Tables12"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables13"}/>
                                                <PageParagraph pagename = {"Hash Table13"}/>
                                                <PageCode pagename = {"Hash Tables14"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables15"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Other Dictionary Operations </h5>
                                                <h6 class="mb-3 h6"> Dictionary Membership Test </h6>
                                                <PageParagraph pagename = {"Hash Table14"}/>
                                                <PageCode pagename = {"Hash Tables16"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables17"}/>
                                                <h6 class="mb-3 h6"> Iterating Through a Dictionary </h6>
                                                <PageParagraph pagename = {"Hash Table15"}/>
                                                <PageCode pagename = {"Hash Tables18"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables19"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Dictionary Built-in Functions </h5>
                                                <PageParagraph pagename = {"Hash Table16"}/>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th> Function </th>
                                                            <th> Descriptions </th>
                                                        </tr>
                                                    </MDBTableHead>

                                                    <MDBTableBody>
                                                        <tr>
                                                            <td> all() </td>
                                                            <td> Return True if all keys of the dictionary are True (or if the dictionary is empty). </td>
                                                        </tr>

                                                        <tr>
                                                            <td> any() </td>
                                                            <td> Return True if any key of the dictionary is true. If the dictionary is empty, return False. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> len() </td>
                                                            <td> Return the length (the number of items) in the dictionary. </td>
                                                        </tr>

                                                        <tr>
                                                            <td> sorted() </td>
                                                            <td> Return a new sorted list of keys in the dictionary. </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
                                                <PageParagraph pagename = {"Hash Table17"}/>
                                                <PageCode pagename = {"Hash Tables20"}/>
                                                Output
                                                <PageCode pagename = {"Hash Tables21"}/>
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