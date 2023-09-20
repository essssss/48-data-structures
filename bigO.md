# BigO:

Big O attempts to solve "how we determine which version of a function is best"

There are so many ways to do things in JavaScript (ie reverse a string). How do we know which one is the fastest? least memory intense? etc?

-   It is important to have precise vocabulary about how code performs.
-   It is Useful to discuss performance trad-offs between different approaches
-   It is important to be able to identify inefficient parts of code
-   It comes up in interviews!!!

---

### Another example.

a function that sums all numbers up to and including some number _n_

```js
function addUpToFirst(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpToSecond(n) {
    return (n * (n + 1)) / 2;
}
```

### What does better mean?

-   Faster?
-   Less memory-intensive?
-   More Readable?
-   We will focus on SPEED

### Timers are inaccurate!

-   Instead, count the number of Simple operations that the computer has to perform

---

## Look at this function:

```js
function addUpToSecond(n) {
    return (n * (n + 1)) / 2;
}
```

Only Three Simple Operations regardless of _n_!

### Now this one:

```js
function addUpToFirst(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```

The number of loops is determined by _n_ and for very large numbers, it will be a lot of simple operations!

---

### It can be hard to "count" exact operations,

but all we know is that as _n_ grows, the number of operations grows roughly proportionately

# **_Big O_** Definition:

An algorithm is **_O(f(n))_** if number of simple operations is eventually less than a constant times **_f(n)_** as **_n_** increases

-   Big O is like assigning a function to _describe_ the line created by increasing _**n**_
    -   f(n) could be linear: _f(n) = n_
    -   f(n) could be quadratic: _f(n) = n²_
    -   f(n) could be constant: _f(n) = 1_
    -   Could be different

---

## Back to the adding:

### addUpToSecond()

-   Always 3 operations
-   O(1)
-   constant time

### addUpToFirst()

-   as _n_ grows, the number of operations is bounded by a multiple of _n_ (ie 10n)
-   O(n)
-   linear time

---

### Say a nested loop function:

```js
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

This is an O(n) function INSIDE an O(n) function. Therefore **O(n<sup>2</sup>)**

-   **O(n<sup>2</sup>)** is bad.

---

## Big O is a measure of Worst Case performance and Big Picture trends

-   If like, a search function is looking by random, it MAY find the searched item on the first try, but that is not **Worst Case**.

---

# Simplifying Big O:

-   Constants do not matter
    -   always 3 or always 30 operations is irrelevant
-   Smaller terms do not matter (ie n<sup>2</sup> + n) is basically the same as n<sup>2</sup>
-   Arithmetic operations are constant
-   Variable assignment is constant
-   Accessing elments in an array _by index_ or in an object _by key_ is constant
-   Loops are NOT constant time
    -   Take the length of the loop, times the complexity of whatever happens in the loop

---

# Logarithms in Big O

-   We are living in Base 2 world (computers innit.)
-   log<sub>2</sub>8 = 3 (2 to the power of _what_ gives me 8?)
-   The logarithm of a number roughly measures how many times you can divide a number by to before you get a value that's less than or equal to 1

### Special must-knows:

-   A loop doesn't automatically mean O(n)
-   Same with nested loops
    -   Because you might just always loop 5 times
-   Best runtime for sorting is O(n log n)

---

# Space Complexity:

So far we've been focusing on **Time Complexity**  
But, we can also use it to talk about **Space Complexity**

### Rules of Thumb in JavaScript:

-   Most primitives: constant space
-   Strings: O(n) space (where _n_ is the stirng length)
-   Reference types: generally O(n) where _n_ is the length of the array or the number of keys in an object
