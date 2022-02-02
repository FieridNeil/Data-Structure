/*
Properties:
    - Last In First Out

Time complexity:
    - Access: O(1) assuming accessing only from top (or bottom)
    - Search: O(n) 
    - Insert: O(1)
    - Delete: O(1)

Use case:
    - Bracket matching problem, testing symmetry
    - Reversing order
    - Undo/Redo command
    - Function recursion (the stack!!)
    - Keep track of most recently used/viewed
    - Convert notation (infix to postfix)
    - Back tracking algorithms 
*/

const SLL = require('./sll');
const { assert } = require('chai');

class Stack {
	#list = new SLL();
	length = 0;

	peek() {
		return this.#list.at(0);
	}

	pop() {
		if (this.length < 1) {
			return null;
		}
		this.length--;
		return this.#list.delete();
	}

	insert(val) {
		this.length++;
		this.#list.insert(val);
	}

	clear() {
		while (this.length > 0) {
			this.length--;
			this.pop();
		}
	}
}

describe('Stack', () => {
	let s;
	beforeEach(() => {
		s = new Stack();
		for (let i = 0; i < 5; i++) {
			s.insert(i);
		}
	});
	it('Insert', () => {
		s.insert(10);
		assert.equal(s.length, 6, 'Length should be equal');
	});

	it('Peek', () => {
		s.insert(20);
		s.insert(30);
		assert.equal(s.peek(), 30, 'Peek should return 30');
	});

	it('Pop', () => {
		s.insert(40);
		s.insert(50);
		assert.equal(s.pop(), 50, 'Pop should return 50');
		assert.equal(s.pop(), 40, 'Pop should return 40');

		s.clear();
		assert.equal(s.length, 0, 'Length should be 0 after a clear');

		assert.equal(s.pop(), null, 'Should return null since no item in the list');
	});
});
