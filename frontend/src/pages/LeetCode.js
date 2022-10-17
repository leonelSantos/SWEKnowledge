import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditorModal from "../components/EditorModal";
import ListGroup from 'react-bootstrap/ListGroup';

export default function LeetCode(){
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
        <Accordion>
        
        <Accordion.Item eventKey="0">
            <Accordion.Header>Arrays & Hashing</Accordion.Header>
            <Accordion.Body>
            <div className="d-grid gap-4">
                <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col> <Button variant="success" size ='lg' href = 'https://leetcode.com/problems/contains-duplicate/'>Contains Duplicate</Button>{' '} </Col>
                                <Col> <Button variant="outline-primary" size ='lg' onClick={() => setModalShow(true)}> Solution </Button>{' '} </Col>
                                <EditorModal show={modalShow} onHide={() => setModalShow(false)}/>
                                <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col> <Button variant="success" size ='lg' href = 'https://leetcode.com/problems/contains-duplicate/'>Valid Anagram</Button>{' '} </Col>
                                <Col> <Button variant="outline-primary" size ='lg' onClick={() => setModalShow(true)}> Solution </Button>{' '} </Col>
                                <EditorModal show={modalShow} onHide={() => setModalShow(false)}/>
                                <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col> <Button variant="success" size ='lg' href = 'https://leetcode.com/problems/contains-duplicate/'>Two Sum</Button>{' '} </Col>
                                <Col> <Button variant="outline-primary" size ='lg' onClick={() => setModalShow(true)}> Solution </Button>{' '} </Col>
                                <EditorModal show={modalShow} onHide={() => setModalShow(false)}/>
                                <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                            </Row>
                        </ListGroup.Item>
                </ListGroup>
            </div>
                
            </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
            <Accordion.Header>Two Pointers</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>Sliding Window</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>Stack</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>Binary Search</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header>Linked List</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
            <Accordion.Header>Trees</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
            <Accordion.Header>Tries</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
            <Accordion.Header>Heap / Priority Queue</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
            <Accordion.Header>Backtracking</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
            <Accordion.Header>Graphs</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
            <Accordion.Header>Dynamic Programming</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
            <Accordion.Header>Greedy</Accordion.Header>
            <Accordion.Body>
                
                <Row>
                    <Col> <Button variant="outline-dark" size ='lg'>Question</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Solution</Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
                
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
    );
}