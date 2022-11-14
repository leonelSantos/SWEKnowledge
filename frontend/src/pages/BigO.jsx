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
import PageCode from "../components/PageCode";
import PageParagraph from "../components/PageParagraph";
import bigO from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/bigO.webp";


export default function BigO(){
    return (
        <div>
            <MDBCardGroup>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem>
                                    <MDBCardTitle><h1 class="mb-3 h1"> Big O Notation </h1></MDBCardTitle>
                                        <MDBCardText>

                                            <p className="text-xl-start" >
                                                <PageParagraph pagename = {"BigO1"}/>
                                            </p>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> What is Big O? </h5>
                                                <PageParagraph pagename = {"BigO2"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> How do you measure the efficiency of an algorithm? </h5>
                                                <PageParagraph pagename = {"BigO3"}/>
                                                <PageCode pagename = {"BigO1"}/>
                                                <PageParagraph pagename = {"BigO4"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> But why do we need Big O? </h5>
                                                <PageParagraph pagename = {"BigO5"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> What is Time Complexity? </h5>
                                                <PageParagraph pagename = {"BigO6"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> What is Space Complexity? </h5>
                                                <PageParagraph pagename = {"BigO7"}/>
                                                <h6 class="mb-3 h6"> Key Time and Space Complexities: </h6>
                                                <ul type = "disc">
                                                    <li>Constant: O(1)</li>
                                                    <li>Linear time: O(n)</li>
                                                    <li>Logarithmic time: O(n log n)</li>
                                                    <li>Quadratic time: O(n^2)</li>
                                                    <li>Exponential time: 2 ^(n)</li>
                                                    <li>Factorial time: O(n!)</li>
                                                </ul>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> The Big O chart </h5>
                                                <PageParagraph pagename = {"BigO8"}/>
                                                <div className="text-center">
                                                    <img alt='...' className='img-thumbnail' src={bigO} style={{width: "600px"}}/>
                                                </div>
                                                <PageParagraph pagename = {"BigO9"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Constant Time: O(1) </h5>
                                                <PageParagraph pagename = {"BigO10"}/>
                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageCode pagename = {"BigO2"}/>
                                                <PageParagraph pagename = {"BigO11"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Linear Time: O(n) </h5>
                                                <PageParagraph pagename = {"BigO12"}/>
                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageCode pagename = {"BigO3"}/>
                                                <PageParagraph pagename = {"BigO13"}/>
                                                <div class="note note-light mb-3">
                                                    <PageParagraph pagename = {"BigO14"}/>
                                                </div>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Logarithm Time: O(log n) </h5>
                                                <PageParagraph pagename = {"BigO15"}/>
                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageParagraph pagename = {"BigO16"}/>
                                                <PageCode pagename = {"BigO4"}/>
                                                <PageParagraph pagename = {"BigO17"}/>
                                                <ol>
                                                    <li>Find the list's midpoint.</li>
                                                    <li>Compare the target to the middle.</li>
                                                    <li>We've located our goal if our value and the target match.</li>
                                                    <li> If our value is lesser than the target, we focus on the list with values ranging from the middle plus one to the highest.</li>
                                                    <li> If our value is greater than the target, we focus on the list starting with the smallest value and ending with the midpoint minus one.</li>
                                                    <li> Continue until we locate the target or till we reach the last element, which indicates that the element is not present in the list.</li>
                                                </ol>
                                                <br></br>
                                                <p>
                                                    With every iteration, the size of our search list shrinks by half. Therefore traversing and finding an entry in the list takes O(log(n)) time.
                                                </p>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Quadratic Time: O(n^2) </h5>
                                                <PageParagraph pagename = {"BigO18"}/>
                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageCode pagename = {"BigO5"}/>
                                                <PageParagraph pagename = {"BigO19"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Exponential Time: O(2^n) </h5>
                                                <PageParagraph pagename = {"BigO20"}/>
                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageCode pagename = {"BigO6"}/>
                                                <PageParagraph pagename = {"BigO21"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Data Structure Complexity Chart </h5>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th> Data Structure </th>
                                                            <th> Space Complexity </th>
                                                            <th> Average Complexity </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </MDBTableHead>

                                                    <MDBTableBody>
                                                        <tr>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td> Access</td>
                                                            <td> Search </td>
                                                            <td> Insertion </td>
                                                            <td> Deletion </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Array</td>
                                                            <td> O(n)</td>
                                                            <td> O(1)</td>
                                                            <td> O(n) </td>
                                                            <td> O(n) </td>
                                                            <td> O(n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Stack</td>
                                                            <td> O(n)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n) </td>
                                                            <td> O(1) </td>
                                                            <td> O(1) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Queue</td>
                                                            <td> O(n)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n) </td>
                                                            <td> O(1) </td>
                                                            <td> O(1) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Singly Linked List</td>
                                                            <td> O(n)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n) </td>
                                                            <td> O(1) </td>
                                                            <td> O(1) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Doubly Linked List</td>
                                                            <td> O(n)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n) </td>
                                                            <td> O(1) </td>
                                                            <td> O(1) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Hash Table</td>
                                                            <td> O(n) </td>
                                                            <td> N/A </td>
                                                            <td> O(1) </td>
                                                            <td> O(1) </td>
                                                            <td> O(1) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Binary Search Tree </td>
                                                            <td> O(log n)</td>
                                                            <td>O(log n)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>

                                            </p>
                    
                                            <hr/>
                                            
                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Algorithm Complexity Chart </h5>
                                                <PageParagraph pagename = {"BigO22"}/>
                                            </p>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Search Algorithms</h5>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th> Search Algorithms </th>
                                                            <th> Space Complexity </th>
                                                            <th> Time Complexity </th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </MDBTableHead>

                                                    <MDBTableBody>
                                                        <tr>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td> Best Case</td>
                                                            <td> Average Case </td>
                                                            <td> Worst Case </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Linear Search</td>
                                                            <td> O(1)</td>
                                                            <td> O(1)</td>
                                                            <td> O(n) </td>
                                                            <td> O(n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Binary Search</td>
                                                            <td> O(1)</td>
                                                            <td> O(1)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
                                            </p>

                                            <br></br>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Sorting Algorithms</h5>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th> Sorting Algorithms </th>
                                                            <th> Space Complexity </th>
                                                            <th> Time Complexity </th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </MDBTableHead>

                                                    <MDBTableBody>
                                                        <tr>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td> Best Case</td>
                                                            <td> Average Case </td>
                                                            <td> Worst Case </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Selection Sort</td>
                                                            <td> O(1)</td>
                                                            <td> O(n^2)</td>
                                                            <td> O(n^2) </td>
                                                            <td> O(n^2) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Insertion Sort</td>
                                                            <td> O(1)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n^2) </td>
                                                            <td> O(n^2) </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bubble Sort</td>
                                                            <td> O(1)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n^2) </td>
                                                            <td> O(n^2) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Quick Sort</td>
                                                            <td> O(log n)</td>
                                                            <td> O(log n)</td>
                                                            <td> O(n log n) </td>
                                                            <td> O(n log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Merge Sort</td>
                                                            <td> O(n)</td>
                                                            <td> O(n)</td>
                                                            <td> O(n log n) </td>
                                                            <td> O(n log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Heap Sort</td>
                                                            <td> O(1)</td>
                                                            <td> O(1)</td>
                                                            <td> O(n log n) </td>
                                                            <td> O(n log n) </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5">Calculating Complexity</h5>
                                                <PageParagraph pagename = {"BigO23"}/>
                                                <ul type = "disc">
                                                    <li>Assignments, bits, and math operators are all basic operations.</li>
                                                    <li>Loops and nested loops</li>
                                                    <li>Recursions and function invocations</li>
                                                </ul>

                                                <br></br>
                                                <h6 class="mb-3 h6 text"> Dropping the constants</h6>
                                                <PageParagraph pagename = {"BigO24"}/>
                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageCode pagename = {"BigO7"}/>
                                                <PageParagraph pagename = {"BigO25"}/>

                                                <h6 class="mb-3 h5"> Example </h6>
                                                <PageCode pagename = {"BigO8"}/>
                                                <PageParagraph pagename = {"BigO26"}/>

                                                <h6 class="mb-3 h6 text">Base of Logarithm in Big O</h6>
                                                <PageParagraph pagename = {"BigO27"}/>
                                            </p>

                                            <hr/>

                                            <p className="text-xl-start" >
                                                <h5 class="mb-3 h5"> Complexity for Advanced Data Structures </h5>
                                                <MDBTable>
                                                    <MDBTableHead dark>
                                                        <tr>
                                                            <th> Data Structure </th>
                                                            <th> Space Complexity </th>
                                                            <th> Average Complexity </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </MDBTableHead>

                                                    <MDBTableBody>
                                                        <tr>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td> Access</td>
                                                            <td> Search </td>
                                                            <td> Insertion </td>
                                                            <td> Deletion </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Skip List</td>
                                                            <td> O(n log n)</td>
                                                            <td> O(log n)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Cartesian Tree</td>
                                                            <td> O(n)</td>
                                                            <td> N/A </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> B-Tree</td>
                                                            <td> O(n)</td>
                                                            <td> O(log n)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Red-Black Tree</td>
                                                            <td> O(n)</td>
                                                            <td> O(log n)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Splay Tree</td>
                                                            <td> O(n)</td>
                                                            <td> N/A </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> AVL Tree </td>
                                                            <td> O(n)</td>
                                                            <td> O(log n)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                        </tr>
                                                        <tr>
                                                            <td> KD Tree </td>
                                                            <td> O(n)</td>
                                                            <td> O(log n)</td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
                                                            <td> O(log n) </td>
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