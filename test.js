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

    function log() {
        // console.log(head);
        console.log(JSON.stringify(head));
    }

    return {
        insert,
        log,
        head,
        tail,
    };
}

const x = createLinkedList();
x.insert(5);
x.insert(10);
x.insert(12)
x.insert(22)
x.insert(19)
x.insert(30)
x.log();
