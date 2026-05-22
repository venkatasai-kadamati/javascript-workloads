import {createNode} from "../create_node/createNode.js";

/*
* adding to tail
* 1. create new node
* 2. iterate till the end of the ll
* 3. connect last current to new node.
* */
export function addAtTail(head, data) {
    // 1. create new node
    let new_node = createNode(data);

    // empty ll
    if (head == null) {
        head = new_node;
        return head;
    }

    // 2. iterate till the end
    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;
    }

    // we are now standing at the tail (last valid node)
    // 3. connect last with new node
    curr.next = new_node;
    return head;
}