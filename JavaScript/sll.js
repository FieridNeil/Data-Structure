/*
Properties:
    - Used to store objects in a random places in memory
    - Length: the number of elements currently in the linked list 
    - No need to increase capcity

Time complexity:
    - Access: O(n)
    - Search: O(n) 
    - Insert: O(1) assuming insert where the pointer is
    - Delete: O(1) assuming we found the node to delete

Use case:
    - Quick insert and delete operation if have a reference to location
    - Collect and store data of multiple type
*/

const { assert } = require('chai');

class Node {
	#data = 0;
	#right = null;
	constructor(val) {
		this.#data = val;
	}

	getRight() {
		return this.#right;
	}

	getData() {
		return this.#data;
	}

	setRight(node) {
		this.#right = node;
	}
}

// This SLL will follow the following rules
// - insert and delete will be at the head
class SLL {
	#head = null;
	length = 0;
	constructor() {
		this.#head = null;
		this.length = 0;
	}

	insert(val) {
		const n = new Node(val);
		if (this.length === 0) {
			n.setRight(null);
			this.#head = n;
		} else {
			n.setRight(this.#head);
			this.#head = n;
		}

		this.length++;
	}

	delete() {
		if (this.length === 0) return null;
		let curr = this.#head;
		const data = curr.getData();
		this.#head = this.#head.getRight();
		curr = null;
		this.length--;
		return data;
	}

	find(val) {
		let curr = this.#head;
		while (curr !== null) {
			if (curr.getData() === val) {
				return curr.getData();
			}
			curr = curr.getRight();
		}
		return null;
	}

	at(index) {
		if (index > this.length - 1) return null;
		let curr = this.#head;
		for (let i = 0; i < index; i++) {
			curr = curr.getRight();
		}
		return curr.getData();
	}
}

// TEST

describe('SLL', () => {
	let sll = new SLL();
	beforeEach(() => {
		sll = new SLL();
	});
	it('Insert', () => {
		for (let i = 0; i < 5; i++) {
			sll.insert(i);
		}

		assert.equal(sll.length, 5, 'Length is incorrect');
	});

	it('Delete', () => {
		assert(sll.delete() === null, 'delete an empty list');
		for (let i = 0; i < 5; i++) {
			sll.insert(i);
		}
		let currlength = sll.length;

		assert(sll.delete(), 0, 'data is incorrect');
		assert(sll.length === currlength - 1, 'length is incorrect');
	});

	it('Find', () => {
		for (let i = 0; i < 5; i++) {
			sll.insert(i);
		}
		assert.equal(sll.find(0), 0, 'Find should return a value');
		assert.equal(sll.find(10), null, 'Find should return null');
	});

	it('At', () => {
		for (let i = 0; i < 5; i++) {
			sll.insert(i);
		}

		assert.equal(sll.at(4), 0, 'Should return a result');
		assert.equal(sll.at(0), 4, 'Should return a result');
		assert.equal(sll.at(10), null, 'Should return null');
	});
});
