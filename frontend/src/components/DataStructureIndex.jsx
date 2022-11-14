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
                        <MDBCardLink href='/lists'>Lists/ Arrays</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/queue'>Queues</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/stack'>Stacks</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/linkedlist'>Linked Lists</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/hashtable'>Hash Table / Dictionary</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/heap'>Heap</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/tree'>Trees</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/graphs'>Graphs</MDBCardLink>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </MDBCol>
    );
}