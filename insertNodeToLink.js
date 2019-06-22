// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  let current = head;
  let pre = null;
  let index = 0;

  while(true){
    if(index === position){
      let temp = current;
      pre.next = newNode;
      newNode.next = temp;
      break;
    }
    pre = current;
    current = current.next;
    index++;
  }

  return head;

}