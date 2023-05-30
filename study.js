let a = {
    value: 10,
    next: {
        value: 20,
        next: null
    }
}

// const b = a.value
a=a.next

console.log(a);