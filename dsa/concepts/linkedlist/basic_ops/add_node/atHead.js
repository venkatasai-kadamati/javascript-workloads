/*
 add a new node at the head of LL
 steps:
 1. create a new node with some data + pointer set to null
 2. connect this new node to the current head of the LL
 3. update the new node as the new head of LL.
*/
import {display} from "../traversal/display.js";

export function createNode(value) {
    // return node object
    return {
        data: value,
        next: null
    }
}

// our LL, initially empty with no nodes
let head = null;

// add node at head
function addAtHead(head, data) {
    // first create new node
    let new_node = createNode(data);
    // 2. connect new node to current head
    new_node.next = head;
    // 3. update new node as the new head
    head = new_node
    return head
}

head = addAtHead(head, 50)
head = addAtHead(head, 40)
head = addAtHead(head, 30)
head = addAtHead(head, 20)
head = addAtHead(head, 10)

// display LL
let output = display(head);
console.log("ll: ", output);