const { assert, expect } = require('chai');

class HashMap {
	#bucket;
	length = 0;

	constructor(cap) {
		this.#bucket = Array(cap).fill(null);
	}

	#hashFunction = (key) => {
		let sum = 0;
		for (let i = 0; i < key.length; i++) {
			sum += key[i].charCodeAt();
		}

		return sum % this.#bucket.length;
	};

	#findNextSlot(key) {
		let hashedKey = this.#hashFunction(key);
		while (this.#bucket[hashedKey] !== null) {
			if (hashedKey === this.#bucket.length - 1) {
				hashedKey = 0;
			}
			hashedKey++;
		}
		return hashedKey;
	}

	insert(key, val) {
		if (this.isFull()) return null;

		let idx = this.#findNextSlot(key);
		this.#bucket[idx] = { key, val };
		this.length++;
	}

	delete(key) {
		if (this.isEmpty()) return null;
		let hashedKey = this.#hashFunction(key);

		if (this.#bucket[this.#hashFunction(key)] === null) return null;
		while (this.#bucket[hashedKey] !== null) {
			if (this.#bucket[hashedKey].key === key) {
				break;
			}
			hashedKey++;
		}
		let data = this.#bucket[hashedKey].val;
		this.#bucket[hashedKey] = null;
		this.length--;
		return data;
	}

	getValue(key) {
		if (this.isEmpty()) return null;
		let hashedKey = this.#hashFunction(key);
		while (this.#bucket[hashedKey] !== null) {
			if (hashedKey === this.#bucket.length - 1) {
				hashedKey = 0;
			}
			if (this.#bucket[hashedKey].key === key) {
				return this.#bucket[hashedKey].val;
			}
			hashedKey += 1;
		}
		return null;
	}

	getKey(val) {
		if (this.isEmpty()) return null;
		for (let i = 0; i < this.#bucket.length; i++) {
			if (this.#bucket[i]?.val === val) {
				return this.#bucket[i].key;
			}
		}
		return null;
	}

	isEmpty() {
		return this.length < 1;
	}

	isFull() {
		return this.length === this.#bucket.length;
	}
}

describe('Hashmap', () => {
	let hm;
	beforeEach(() => {
		hm = new HashMap(10);
		hm.insert('name', 'Fierid');
		hm.insert('age', 20);
		hm.insert('gender', 'male');
		hm.insert('job', 'seeking');
	});

	it('Insert', () => {
		assert.equal(hm.length, 4, 'Length should be 4');
	});

	it('Delete', () => {
		assert.equal(hm.delete('name'), 'Fierid', 'Should return Fierid');
		assert.equal(hm.delete('age'), 20, 'Should return 20');
		assert.equal(hm.delete('address'), null, 'Should return null');
		assert.equal(hm.length, 2, 'Length should be 2');
	});

	it('Get Value', () => {
		expect(hm.getValue('name')).to.be.a('string');
		expect(hm.getValue('age')).to.be.a('number');
		expect(hm.getValue('address')).to.be.a('null');
	});

	it('Find Value', () => {
		assert.equal(hm.getKey('Fierid'), 'name', 'should return Fierid');
		assert.equal(hm.getKey(20), 'age', 'Should return 20');
		assert.equal(hm.getKey('address'), null, 'Should return null');
	});
});
