import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditorModal from "./EditorModal";
import ExplanationModal from "./ExplanationModal";
import ListGroup from 'react-bootstrap/ListGroup';

export default function List(props){
    const [modalShow, setModalShow] = React.useState(false);
    const [explanationShow, setExplanationShow] = React.useState(false);

    return (
        <ListGroup variant="flush">
        <ListGroup.Item>
            <Row>
                <Col> <Button variant="success" size ='lg' href = {props.url}> {props.id}. {props.name} </Button>{' '} </Col>
                <Col> <Button variant="outline-primary" size ='lg' onClick={() => setModalShow(true)}> Solution </Button>{' '} </Col>
                <EditorModal question = {props.name} solution = {props.solution} show={modalShow} onHide={() => setModalShow(false)}/>
                <Col> <Button variant="outline-dark" size ='lg' onClick={() => setExplanationShow(true)} >Explanation</Button> </Col>
                <ExplanationModal question = {props.name} explanation = {props.explanation} show={explanationShow} onHide={() => setExplanationShow(false)}/>
            </Row>
        </ListGroup.Item>
        </ListGroup>
  )
}

/*



function handleClick(){
    props.deletion(props.id)
    }

<button onClick={handleClick}>Delete</button>

 <h1 >  id: {props.id} </h1>
        <h1 >  name: {props.name} </h1>
        <p> explanation: {props.explanation}</p>
        <p> solution: {props.solution}</p>
        <p> dsaType: {props.dsaType}</p>
        <p> url: {props.url}</p>
        <p> difficulty: {props.difficulty}</p>
*/