/*
* remove node at tail
* 1. first if null (or) one node only - return null
* 2. if >= 2 nodes then stand at 2 nodes before null.
* 3. simply point standing node to null.
* */
export function removeTail(head) {
    if (head === null || head.next == null) {
        // if empty (or) single node
        return null;
    }

    // for >= 2 nodes -> stand at 2 nodes before null
    let curr = head;
    // if I am at the standing node, what condition should be satisfied
    while (curr.next.next !== null) {
        // to reach that standing node, how should I move, in this case, it's just linear one node at a time
        curr = curr.next;
    }

    // skips the tail
    curr.next = null;
    return head;
}