/*
* remove at head
* 1. set head as temp
* 2. update head to second node (head.next)
* 3. point temp to null now for memory management
* */

import {addAtTail} from "../add_node/atTail.js";

let head = null;

// building the LL
head = addAtTail(head, 10)

export function removeHead(head) {
    // if LL is empty, remove nothing.
    if (head == null) {
        return null;
    }

    let temp = head;
    head = head.next;
    temp.next = null;
    return head;
}