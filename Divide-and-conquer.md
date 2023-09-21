## Linear Search

-   loops through an array and if it finds the element, it returns the index!
-   Very simple!
-   If we are looking through a very large array, we will have to look through all indeces
-   This is the best for **unsorted** data

## Binary Search

-   If our array is **SORTED** we can do better!
    -   Look at the middle value and decide if that is correct, too small, or too large
    -   Eliminates half the possibilities in one go!

## Comparison of searches:

| Array size | Linear search             | Binary Search      |
| ---------- | ------------------------- | ------------------ |
| 3          | Max 3 comparisons         | Max 2 comparisons  |
| 7          | Max 7 comparisons         | Max 3 comparisons  |
| 15         | Max 15 comparisons        | Max 4 comparisons  |
| 31         | Max 31 comparisons        | Max 5 comparisons  |
| 1,023      | Max 1,023 comparisons     | Max 10 comparisons |
| 1,048,575  | Max 1,048,575 comparisons | Max 20 comparisons |

### Time Complexity: O(log n)
