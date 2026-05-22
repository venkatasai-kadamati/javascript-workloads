// display LL
export function displayLL(head) {
    let curr = head;
    let llOutput = "";
    while (curr != null) {
        llOutput = llOutput + curr.data + " -> ";
        curr = curr.next;
    }
    llOutput = llOutput + "X";
    console.log("LL: ", llOutput);
}