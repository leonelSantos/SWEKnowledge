import React from "react";
import {
    MDBCard,
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardTitle,
    MDBCardGroup,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import DSIndex from "../components/DataStructureIndex";


export default function Patterns(){
    return (
        <div>
            <MDBCardGroup>
                <MDBRow>
                    <DSIndex/>
                    <MDBCol>
                        <MDBCard>
                            <MDBListGroup flush>
                                <MDBListGroupItem>
                                <MDBCardTitle><h1>Common Patterns</h1></MDBCardTitle>
                                    <MDBCardText>
                                        <p className="text-xl-start" >
                                        <h6>What Are Data Structures?</h6>    
                                        Data structure are a form of storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.
                                        <br></br>Depending on your requirement and project, it is important to choose the right data structure for your project. For example, if you want to store data sequentially in the memory, then you can go for the Array data structure.
                                        </p>

                                        <p className="text-xl-start" >
                                            <h6>Types of Data Structure</h6>
                                            <br></br>Basically, data structures are divided into two categories:

                                            <br></br>Linear data structure
                                            <br></br>Non-linear data structure
                                            <br></br>Let's learn about each type in detail.
                                        </p>

                                        <p className="text-xl-start" >
                                            <h6>Linear data structures</h6>
                                            <br></br>In linear data structures, the elements are arranged in sequence one after the other. Since elements are arranged in particular order, they are easy to implement.

                                            <br></br>However, when the complexity of the program increases, the linear data structures might not be the best choice because of operational complexities.

                                            <br></br>Popular linear data structures are:

                                            <br></br>1. Array Data Structure
                                            <br></br>In an array, elements in memory are arranged in continuous memory. All the elements of an array are of the same type. And, the type of elements that can be stored in the form of arrays is determined by the programming language.
                                        </p>

                                        <p className="text-xl-start" >
                                            2. Stack Data Structure
                                            In stack data structure, elements are stored in the LIFO principle. That is, the last element stored in a stack will be removed first.

                                            It works just like a pile of plates where the last plate kept on the pile will be removed first. To learn more, visit Stack Data Structure.
                                        </p>

                                        <p className="text-xl-start" >
                                            3. Queue Data Structure
                                            <br></br>Unlike stack, the queue data structure works in the FIFO principle where first element stored in the queue will be removed first.

                                            <br></br>It works just like a queue of people in the ticket counter where first person on the queue will get the ticket first. To learn more, visit Queue Data Structure.
                                        </p>

                                        <p className="text-xl-start" >
                                        4. Linked List Data Structure
                                        <br></br>In linked list data structure, data elements are connected through a series of nodes. And, each node contains the data items and address to the next node.
                                        </p>
                                        <p className="text-xl-start" >
                                        Non linear data structures
                                        <br></br>Unlike linear data structures, elements in non-linear data structures are not in any sequence. Instead they are arranged in a hierarchical manner where one element will be connected to one or more elements.

                                        <br></br>Non-linear data structures are further divided into graph and tree based data structures.

                                        <br></br>1. Graph Data Structure
                                        <br></br>In graph data structure, each node is called vertex and each vertex is connected to other vertices through edges.
                                        </p>
                                        <p className="text-xl-start" >
                                        2. Trees Data Structure
                                        <br></br>Similar to a graph, a tree is also a collection of vertices and edges. However, in tree data structure, there can only be one edge between two vertices.
                                        </p>
                                        <p className="text-xl-start" >
                                        Linear Vs Non-linear Data Structures
                                        <br></br>Now that we know about linear and non-linear data structures, let's see the major differences between them.
                                        <br></br>
                                        <table>
                                            <tr>
                                                <td>
                                                Linear Data Structures
                                                </td>

                                                <td>
                                                Non Linear Data Structures
                                                </td>
                                            </tr>

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
                                        </table>
                                        </p>
                                        <p className="text-xl-start" ></p>
                                        <p className="text-xl-start" ></p>
                                        <p className="text-xl-start" ></p>
                                    </MDBCardText>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCardGroup>
        </div> 
        )
}