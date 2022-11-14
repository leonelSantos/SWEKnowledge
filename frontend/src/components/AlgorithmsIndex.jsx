import React from "react";
import {
    MDBCard,
    MDBCol,
    MDBCardImage,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import algo from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/block.png';

export default function AlgoIndex(){
    return (
        <MDBCol md = '2'>
            <MDBCard>
                <MDBCardImage position='top' alt='...' src={algo} />
                <MDBListGroup flush>
                    <MDBListGroupItem>
                        <MDBCardLink href='/arrays'>Greedy</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/queue'>Merge Sort</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/stack'>Dynamic Programming</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/linkedlist'>Backtracking</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/hashtable'>Binary Search</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/heap'>Breadth First Search</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/tree'>Depth First Search</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/graphs'>Divide & Conquer</MDBCardLink>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </MDBCol>
    );
}