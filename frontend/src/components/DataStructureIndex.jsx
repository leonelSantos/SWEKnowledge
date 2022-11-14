import React from "react";
import {
    MDBCard,
    MDBCol,
    MDBCardImage,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import tree from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/binarytree.png';

export default function DSIndex(){
    return (
        <MDBCol md = '2'>
            <MDBCard>
                <MDBCardImage position='top' alt='...' src={tree} />
                <MDBListGroup flush>
                    <MDBListGroupItem>
                        <MDBCardLink href='/lists' className="text-dark">Lists</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/linkedlist' className="text-dark">Linked Lists</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/stack' className="text-dark">Stacks</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/queue' className="text-dark">Queues</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/hashtable' className="text-dark">Hash Table</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/heap' className="text-dark">Heap</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/tree' className="text-dark">Trees</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/graphs' className="text-dark">Graphs</MDBCardLink>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </MDBCol>
    );
}