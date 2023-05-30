function createNode(values, next = null) {
    return { values, next };
}

function createLinkedList() {
    let head = null;
    let tail = null;

    //   ADD ELEMENTS TO LINKED LIST
    function insert(values) {
        const node = createNode(values);
        if (!head) {
            head = node;
            tail = node;
            return node;
        }
        tail.next = node;
        tail = node;
        return node;
    }
    function linkedlisttoarray() {
        let currenthead = head
        let a = []
        while (currenthead) {
            a.push(currenthead.values);
            currenthead=currenthead.next

        }
        console.log(a);
    }

    function log() {
        // console.log(head);
        console.log(JSON.stringify(head));
    }

    return {
        insert,
        log,
        head,
        tail,
        linkedlisttoarray
    };
}

const x = createLinkedList();
// x.insert(5);
// x.insert(10);
// x.insert(12)
// x.insert(22)
// x.insert(19)
// x.insert(30)

const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    x.insert(arr[i])
}
// x.log();
x.linkedlisttoarray();
