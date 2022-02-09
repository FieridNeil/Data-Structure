# Technologies

-   [NodeJS](https://nodejs.org/en/)
-   [MochaJS](https://mochajs.org/) - JS test framework
-   [ChaiJS](https://www.chaijs.com/) - BDD/TDD assertion library

# List of Data Structures

-   ✅ [Array](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#array)
-   ✅ [Singly Linked List](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#list-sll-dll-cll)
-   ✅ [Doubly Linked List](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#list-sll-dll-cll)
-   ✅ [Stack](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#stack)
-   ✅ [Queue](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#queue)
-   ✅ [Hash Map](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#hashmap)
-   ✅ [MinHeap](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#minheap)
-   ✅ [Binary Search Tree](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#binary-search-tree)
-   ✅ [Trie](https://github.com/FieridNeil/Data-Structure/tree/master/JavaScript#trie)
-   [ ] Tree
-   [ ] AVL Tree
-   [ ] Treap
-   [ ] Graph

# Array

<details><summary>Click to expand</summary>  
        
### Description:

-   Used to store objects in a continguous space in memory
-   Length: the number of elements currently in the array
-   Capacity: the TOTAL number of elements the array can have
-   Might have to increase capacity when length = capacity

### Time complexity:

| Operation | Time Complexity |
| --------- | :-------------: |
| 🔑 Access |      O(1)       |
| 🔎 Search |      O(n)       |
| ➕ Insert |      O(n)       |
| ➖ Delete |      O(n)       |

### Use case:

-   Very quick to access an element within an array if the position is known
-   Collect and store data of the same type
-   Foundation data structure that is used by other data structures
</details>

# List (SLL, DLL, CLL)

<details><summary>Click to expand</summary>  
        
### Description:

-   Used to store objects in a random places in memory
-   Length: the number of elements currently in the linked list
-   No need to increase capcity

### Time complexity:

| Operation | Time Complexity | Notes                                |
| --------- | :-------------: | ------------------------------------ |
| 🔑 Access |      O(n)       |                                      |
| 🔎 Search |      O(n)       |                                      |
| ➕ Insert |      O(1)       | assuming insert front/back           |
| ➖ Delete |      O(1)       | assuming we found the node to delete |

### Use case:

-   Quick insert and delete operation if have a reference to location
-   Useful when a lot of insertions and deletions but not a lot of look up
-   Splitting and joining lists
-   No reallocation issue like array
-   Used to implement queue (DLL) or stack (SLL)
-   Media playlist looping (CLL)
</details>

# Stack

<details><summary>Click to expand</summary>  
        
### Description

-   Last In First Out

### Time complexity:

| Operation | Time Complexity | Notes                                        |
| --------- | :-------------: | -------------------------------------------- |
| 🔑 Access |      O(1)       | assuming accessing only from top (or bottom) |
| 🔎 Search |      O(n)       |                                              |
| ➕ Insert |      O(1)       |                                              |
| ➖ Delete |      O(1)       |                                              |

### Use case:

-   Bracket matching problem, testing symmetry
-   Reversing order
-   Undo/Redo command
-   Function recursion (the stack!!)
-   Keep track of most recently used/viewed
-   Convert notation (infix to postfix)
-   Back tracking algorithms
</details>

# Queue

<details><summary>Click to expand</summary>  
        
### Description:

-   First In First Out

### Time complexity:

| Operation | Time Complexity | Notes                                   |
| --------- | :-------------: | --------------------------------------- |
| 🔑 Access |      O(1)       | assuming only accessing from front/back |
| 🔎 Search |      O(n)       |                                         |
| ➕ Insert |      O(1)       |                                         |
| ➖ Delete |      O(1)       |                                         |

### Use case:

-   Manage threads in multithreading
-   Implement queuing system
-   Priority queues
-   Message queue
-   Scheduling
</details>

# HashMap

<details><summary>Click to expand</summary>  
        
### Description:

-   Dictionary type of data structure
-   Store key, value pair data

### Time complexity:

| Operation | Time Complexity | Notes                 |
| --------- | :-------------: | --------------------- |
| 🔑 Access |      O(1)       | assuming no collision |
| 🔎 Search |      O(1)       | assuming no collision |
| ➕ Insert |      O(1)       | assuming no collision |
| ➖ Delete |      O(1)       | assuming no collision |

### Use case:

-   Implement associative array
-   Quick lookup data structure
</details>

# Binary Search Tree

<details><summary>Click to expand</summary>  
        
### Description:

-   Each node can have a maximum of 2 children, left and right
-   Does not need to be balanced
-   Left child value < parent value < right child value
-   Preorder traversal: read parent nodes first then read left nodes and then right nodes (P-L-R)
-   Inorder traversal: read all the left child first then read parent node then right nodes (L-P-R)
-   Postorder traverssal: read all the left child and then right child then parent (L-R-P)

### Time complexity:

| Operation | Time Complexity | Notes |
| --------- | :-------------: | ----- |
| 🔑 Access |    O(log n)     |       |
| 🔎 Search |    O(log n)     |       |
| ➕ Insert |    O(log n)     |       |
| ➖ Delete |    O(log n)     |       |

Note: The above operations can be all log n if the input is sorted (ie. 1,2,3,4,5,6)

### Use case:

-   Fast when searching
-   Used in Huffman Coding Algorithm
-   Used to implement multilevel indexing in database
-   Implement routing table in router
-   Data compression
</details>

# Heap

<details><summary>Click to expand</summary>  
        
### Description:

-   There are a maximum of 2 child nodes for any given node
-   All levels of tree must be completely filled, except the last level
-   Nodes must be filled from left to right.
-   For min heap: the child nodes have to have larger value than their parent
-   For max heap: the child nodes have to have smaller value than their parent
-   For a node i, to get the left child use: 2i + 1, right child use: 2i + 2
-   For a node i, to get to the parent use: floor(i / 2)

### Time complexity:

| Operation | Time Complexity | Notes |
| --------- | :-------------: | ----- |
| Find min  |      O(1)       |       |
| search    |      O(n)       |       |
| ➕ Insert |    O(log n)     |       |
| ➖ Delete |    O(log n)     |       |

### Use case:

-   Priority queue, scheduler
-   Instant access to min/max node
</details>

# Trie

<details><summary>Click to expand</summary>  
        
### Description:

-   A type of n-ary tree
-   Each node stores a letter of a word in the alphabet, or string
-   Quick search, insert, and delete
-   Faster alternative to hash table since there's no hash function to compute and no collision and BST
-   Not memory efficient

### Time complexity:

| Operation | Time Complexity | Notes |
| --------- | :-------------: | ----- |
| 🔑 Access |      O(n)       |       |
| 🔎 Search |      O(n)       |       |
| ➕ Insert |      O(n)       |       |
| ➖ Delete |      O(n)       |       |

### Use case:

-   Store predictive text or autocomplete words
-   Spell checker
-   Lexicographic sorting using preorder traversal
-   Longest prefix matching (in router)
-   Detect string pattern/most used word
</details>
