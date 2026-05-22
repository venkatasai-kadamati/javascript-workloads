import {addAtTail} from "./add_node/atTail.js";
import {displayLL} from "./traversal/display.js";
import {removeHead} from "./remove_node/AtHead.js";
import {removeTail} from "./remove_node/atTail.js";

let head = null

head = addAtTail(head, 10)
head = addAtTail(head, 20)
head = addAtTail(head, 30)
head = addAtTail(head, 40)

head = removeHead(head);
head = removeHead(head);
head = removeTail(head);
head = removeTail(head);

displayLL(head)