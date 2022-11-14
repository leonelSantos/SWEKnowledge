import React from "react";
import {
    MDBCard,
    MDBCol,
    MDBCardImage,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import algo from '/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/algorithms.jpeg';

export default function AlgoIndex(){
    return (
        <MDBCol md = '2'>
            <MDBCard>
                <MDBCardImage position='top' alt='...' src={algo} />
                <MDBListGroup flush>
                    <MDBListGroupItem>
                        <MDBCardLink href='/greedy' className="text-dark">Greedy</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/mergeSort' className="text-dark">Merge Sort</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/dynProg' className="text-dark">Dynamic Programming</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/backTrack' className="text-dark">Backtracking</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/binSearch' className="text-dark">Binary Search</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/bfs' className="text-dark">Breadth First Search</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/dfs' className="text-dark">Depth First Search</MDBCardLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink href='/divideConq' className="text-dark">Divide & Conquer</MDBCardLink>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
        </MDBCol>
    );
}