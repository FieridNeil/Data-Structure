/*
Properties:
    - First In First Out

Time complexity:
    - Access: O(1) assuming only accessing from front/back
    - Search: O(n) 
    - Insert: O(1)
    - Delete: O(1)

Use case:
	- Manage threads in multithreading
	- Implement queuing system, priority queues, message queue, scheduling
*/

const DLL = require('./dll');
const { assert } = require('chai');

class Queue {
	#list = new DLL();
	length = 0;
	#capacity = 10;

	constructor(cap) {
		this.#capacity = cap;
	}

	//Enqueue
	insert(val) {
		if (this.isFull()) return null;
		this.#list.insertFront(val);
		this.length++;
	}

	//Dequeue
	delete() {
		if (this.isEmpty()) return null;
		this.length--;
		return this.#list.deleteBack();
	}

	peek() {
		return this.#list.getBack();
	}

	clear() {
		while (this.#list.length > 0) {
			this.#list.deleteFront();
			this.length--;
		}
	}

	isFull() {
		return this.length > this.#capacity;
	}

	isEmpty() {
		return this.length < 1;
	}
}

// TEST
describe('QUEUE', () => {
	let q;
	beforeEach(() => {
		q = new Queue();
	});

	it('insert', () => {
		for (let i = 0; i < 10; i++) {
			q.insert(i);
		}

		assert.equal(q.length, 10, 'Length should be 10');

		assert.equal(q.insert(100), null, 'Should return null, capacity full');
	});

	it('delete', () => {
		for (let i = 0; i < 5; i++) {
			q.insert(i);
		}

		assert.equal(q.delete(), 0, 'Should return 0');
		assert.equal(q.delete(), 1, 'Should return 1');
		assert.equal(q.delete(), 2, 'Should return 2');
		assert.equal(q.delete(), 3, 'Should return 3');
		assert.equal(q.delete(), 4, 'Should return 4');
		assert.equal(q.delete(), null, 'Should return null');
	});

	it('peek', () => {
		for (let i = 0; i < 5; i++) {
			q.insert(i);
		}

		assert.equal(q.peek(), 0, 'Should return 0');
	});

	it('clear', () => {
		q.clear();
		assert.equal(q.length, 0, 'Length should be 0');
		assert.equal(q.peek(), null, 'Should return null');
	});
});
