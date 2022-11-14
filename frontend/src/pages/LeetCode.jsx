import React from "react";
import {useState, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion';
import axios from "axios";
import List from "../components/List";

export default function LeetCode(){
    const [arrHash , setArrHash] = useState([])
    const [twoP , setTwoP] = useState([])
    const [slidWind , setSlidWind] = useState([])
    const [stck , setStck] = useState([])
    const [binSearch , setBinSearch] = useState([])
    const [linkList , setLinkList] = useState([])
    const [trees , setTrees] = useState([])
    const [heaps , setHeaps] = useState([])
    const [bckTrk , setBckTrk] = useState([])
    const [graph , setGraph] = useState([])
    const [dynProg , setDynProg] = useState([])
    const [greed , setGreed] = useState([])

    async function getArr() {
        try{
            const arraysHash = await axios.get('leetcode/dsaType/Arrays & Hashing');
            setArrHash(arraysHash.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getArr()}, [])

    async function getTwoP() {
        try{
            const twoPointers = await axios.get('leetcode/dsaType/Two Pointers');
            setTwoP(twoPointers.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getTwoP()}, [])

    async function getSlidWin() {
        try{
            const slidingWindow = await axios.get('leetcode/dsaType/Sliding Window');
            setSlidWind(slidingWindow.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getSlidWin()}, [])

    async function getStack() {
        try{
            const stack = await axios.get('leetcode/dsaType/Stack');
            setStck(stack.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getStack()}, [])

    async function getBS() {
        try{
            const binarySearch = await axios.get('leetcode/dsaType/Binary Search');
            setBinSearch(binarySearch.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getBS()}, [])

    async function getLinkedlist() {
        try{
            const linkedList = await axios.get('leetcode/dsaType/Linked List');
            setLinkList(linkedList.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getLinkedlist()}, [])

    async function getTree() {
        try{
            const tree = await axios.get('leetcode/dsaType/Tree');
            setTrees(tree.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getTree()}, [])

    async function getHeap() {
        try{
            const heap = await axios.get('leetcode/dsaType/Heap & Priority Queue');
            setHeaps(heap.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getHeap()}, [])

    async function getBackTrack() {
        try{
            const backTrack = await axios.get('leetcode/dsaType/Backtracking');
            setBckTrk(backTrack.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getBackTrack()}, [])

    async function getGraph() {
        try{
            const graphs = await axios.get('leetcode/dsaType/Graphs');
            setGraph(graphs.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getGraph()}, [])

    async function getDP() {
        try{
            const dynamicProg = await axios.get('leetcode/dsaType/Dynamic Programming');
            setDynProg(dynamicProg.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getDP()}, [])

    async function getGreedy() {
        try{
            const greedy = await axios.get('leetcode/dsaType/Greedy');    
            setGreed(greedy.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getGreedy()}, [])

    return (
        <div>
            <h1>Leet Code Solutions</h1>
        <div className="note">
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Arrays & Hashing</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { arrHash && arrHash.map(arrays => <List
                        id= {arrays.id}
                        name= {arrays.name}
                        explanation= {arrays.explanation}
                        solution= {arrays.solution}
                        dsaType= {arrays.dsaType}
                        url= {arrays.url}
                        difficulty= {arrays.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Two Pointers</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { twoP && twoP.map(twoPoint => <List
                        id= {twoPoint.id}
                        name= {twoPoint.name}
                        explanation= {twoPoint.explanation}
                        solution= {twoPoint.solution}
                        dsaType= {twoPoint.dsaType}
                        url= {twoPoint.url}
                        difficulty= {twoPoint.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Sliding Window</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { slidWind && slidWind.map(slideWin => <List
                        id= {slideWin.id}
                        name= {slideWin.name}
                        explanation= {slideWin.explanation}
                        solution= {slideWin.solution}
                        dsaType= {slideWin.dsaType}
                        url= {slideWin.url}
                        difficulty= {slideWin.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Stack</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { stck && stck.map(stack => <List
                        id= {stack.id}
                        name= {stack.name}
                        explanation= {stack.explanation}
                        solution= {stack.solution}
                        dsaType= {stack.dsaType}
                        url= {stack.url}
                        difficulty= {stack.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Binary Search</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { binSearch && binSearch.map(binarySearch => <List
                        id= {binarySearch.id}
                        name= {binarySearch.name}
                        explanation= {binarySearch.explanation}
                        solution= {binarySearch.solution}
                        dsaType= {binarySearch.dsaType}
                        url= {binarySearch.url}
                        difficulty= {binarySearch.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Linked Lists</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { linkList && linkList.map(lnkList => <List
                        id= {lnkList.id}
                        name= {lnkList.name}
                        explanation= {lnkList.explanation}
                        solution= {lnkList.solution}
                        dsaType= {lnkList.dsaType}
                        url= {lnkList.url}
                        difficulty= {lnkList.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Trees</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { trees && trees.map(tree => <List
                        id= {tree.id}
                        name= {tree.name}
                        explanation= {tree.explanation}
                        solution= {tree.solution}
                        dsaType= {tree.dsaType}
                        url= {tree.url}
                        difficulty= {tree.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="7">
                <Accordion.Header>Heaps</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { heaps && heaps.map(heap => <List
                        id= {heap.id}
                        name= {heap.name}
                        explanation= {heap.explanation}
                        solution= {heap.solution}
                        dsaType= {heap.dsaType}
                        url= {heap.url}
                        difficulty= {heap.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="8">
                <Accordion.Header>Backtracking</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { bckTrk && bckTrk.map(backTrack => <List
                        id= {backTrack.id}
                        name= {backTrack.name}
                        explanation= {backTrack.explanation}
                        solution= {backTrack.solution}
                        dsaType= {backTrack.dsaType}
                        url= {backTrack.url}
                        difficulty= {backTrack.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="9">
                <Accordion.Header>Graphs</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { graph && graph.map(graphs => <List
                        id= {graphs.id}
                        name= {graphs.name}
                        explanation= {graphs.explanation}
                        solution= {graphs.solution}
                        dsaType= {graphs.dsaType}
                        url= {graphs.url}
                        difficulty= {graphs.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="10">
                <Accordion.Header>Dynamic Programming</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { dynProg && dynProg.map(dynaProg => <List
                        id= {dynaProg.id}
                        name= {dynaProg.name}
                        explanation= {dynaProg.explanation}
                        solution= {dynaProg.solution}
                        dsaType= {dynaProg.dsaType}
                        url= {dynaProg.url}
                        difficulty= {dynaProg.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <Accordion>
            <Accordion.Item eventKey="11">
                <Accordion.Header>Greedy</Accordion.Header>
                <Accordion.Body>
                    <div className="d-grid gap-4">
                    { greed && greed.map(greedy => <List
                        id= {greedy.id}
                        name= {greedy.name}
                        explanation= {greedy.explanation}
                        solution= {greedy.solution}
                        dsaType= {greedy.dsaType}
                        url= {greedy.url}
                        difficulty= {greedy.difficulty}
                        />
                    )}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
        </div>
    )
}