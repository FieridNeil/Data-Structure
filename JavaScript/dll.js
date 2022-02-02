const { assert } = require('chai');

class Node {
	#data;
	next;
	prev;
	constructor(val) {
		this.#data = val;
		this.next = null;
		this.prev = null;
	}

	getData() {
		return this.#data;
	}
}

class DLL {
	#head;
	#tail;
	length;
	constructor() {
		this.length = 0;
		this.#head = null;
		this.#tail = null;
	}

	insertFront(val) {
		let n = new Node(val);
		n.prev = null;
		if (this.length === 0) {
			n.next = null;
			this.#head = n;
			this.#tail = n;
		} else {
			n.next = this.#head;
			this.#head.prev = n;
			this.#head = n;
		}
		this.length++;
	}

	insertBack(val) {
		let n = new Node(val);
		n.next = null;
		if (this.length === 0) {
			n.prev = null;
			this.#head = n;
			this.#tail = n;
		} else {
			n.prev = this.#tail;
			this.#tail.next = n;
			this.#tail = n;
		}
		this.length++;
	}

	deleteFront() {
		if (this.isEmpty()) return null;
		let curr = this.#head;
		let data = curr.getData();
		this.#head = this.#head.next;
		curr = null;
		this.length--;
		return data;
	}

	deleteBack() {
		if (this.isEmpty()) return null;
		let curr = this.#tail;
		let data = curr.getData();
		this.#tail = this.#tail.prev;
		curr = null;
		this.length--;
		return data;
	}

	getFront() {
		if (this.isEmpty()) return null;
		return this.#head.getData();
	}

	getBack() {
		if (this.isEmpty()) return null;
		return this.#tail.getData();
	}

	find(val) {
		if (this.isEmpty()) return null;
		let curr = this.#head;
		while (curr !== null) {
			if (curr.getData() === val) {
				return curr.getData();
			}
			curr = curr.next;
		}
		return null;
	}

	isEmpty() {
		return this.length < 1;
	}
}

// TEST
describe('DLL', () => {
	let dll;

	beforeEach(() => {
		dll = new DLL();
	});

	it('insert front', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertFront(i);
		}
		assert.equal(dll.length, 5, 'Length should be 5');
	});

	it('insert back', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertBack(i);
		}
		assert.equal(dll.length, 5, 'Length should be 5');
	});

	it('delete front', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertFront(i);
		}

		assert.equal(dll.deleteFront(), 4, 'Should return 4');
		assert.equal(dll.length, 4, 'Length should be 4');
		assert.equal(dll.deleteFront(), 3, 'Should return 3');
		assert.equal(dll.length, 3, 'Length should be 3');
		assert.equal(dll.deleteFront(), 2, 'Should return 2');
		assert.equal(dll.length, 2, 'Length should be 2');
		assert.equal(dll.deleteFront(), 1, 'Should return 1');
		assert.equal(dll.length, 1, 'Length should be 1');
		assert.equal(dll.deleteFront(), 0, 'Should return 0');
		assert.equal(dll.length, 0, 'Length should be 0');
		assert.equal(dll.deleteFront(), null, 'Should return null');
		assert.equal(dll.length, 0, 'Length should be 0');
	});

	it('delete back', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertFront(i);
		}

		assert.equal(dll.deleteBack(), 0, 'Should return 0');
		assert.equal(dll.length, 4, 'Length should be 4');
		assert.equal(dll.deleteBack(), 1, 'Should return 1');
		assert.equal(dll.length, 3, 'Length should be 3');
		assert.equal(dll.deleteBack(), 2, 'Should return 2');
		assert.equal(dll.length, 2, 'Length should be 2');
		assert.equal(dll.deleteBack(), 3, 'Should return 3');
		assert.equal(dll.length, 1, 'Length should be 1');
		assert.equal(dll.deleteBack(), 4, 'Should return 4');
		assert.equal(dll.length, 0, 'Length should be 0');
		assert.equal(dll.deleteBack(), null, 'Should return null');
		assert.equal(dll.length, 0, 'Length should be 0');
	});

	it('get front', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertFront(i);
		}

		assert.equal(dll.getFront(), 4, 'This should return 4');
	});

	it('get back', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertFront(i);
		}

		assert.equal(dll.getBack(), 0, 'This should return 0');
	});

	it('find', () => {
		for (let i = 0; i < 5; i++) {
			dll.insertBack(i);
		}

		assert.equal(dll.find(0), 0, 'This should return 0');
		assert.equal(dll.find(10), null, 'This should return null');
	});
});

module.exports = DLL;
