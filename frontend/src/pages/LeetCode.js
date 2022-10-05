import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeEditor from "../components/CodeEditor";
import EditorModal from "../components/EditorModal";

export default function LeetCode(props){
    const navigate = useNavigate();

    const [modalShow, setModalShow] = React.useState(false);

    const navigateToEditor = () => {
        // 👇️ navigate to /editor
        navigate('/editor');
    };

    return (
        <div>
        <Accordion>
        
        <Accordion.Item eventKey="0">
            <Accordion.Header>Arrays & Hashing</Accordion.Header>
            <Accordion.Body>
        
            <div className="d-grid gap-4">
                <Row>
                    <Col> <Button variant="success" size ='lg' href = 'https://leetcode.com/problems/contains-duplicate/'>Contains Duplicate</Button>{' '} </Col>
                    <Col> <Button variant="outline-primary" size ='lg' onClick={() => setModalShow(true)}> Solution </Button>{' '} </Col>
                    <EditorModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
    
                <Row>
                    <Col> <Button variant="success" size ='lg' href = 'https://leetcode.com/problems/contains-duplicate/'>Valid Anagram</Button>{' '} </Col>
                    <Col> <Button variant="outline-primary" size ='lg' onClick={navigateToEditor}> Solution </Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>

                <Row>
                    <Col> <Button variant="success" size ='lg' href = 'https://leetcode.com/problems/contains-duplicate/'>Two Sum</Button>{' '} </Col>
                    <Col> <Button variant="outline-primary" size ='lg' onClick={navigateToEditor}> Solution </Button>{' '} </Col>
                    <Col> <Button variant="outline-dark" size ='lg'>Explanation</Button> </Col>
                </Row>
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
        <Routes>
            <Route path="/editor" element={<CodeEditor />} />
        </Routes>
        </div>
    );
}

/*




        
*/