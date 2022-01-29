/*
Properties:
    - Used to store objects in a continguous space in memory
    - Length: the number of elements currently in the array
    - Capacity: the TOTAL number of elements the array can have
    - Might have to increase capacity when length = capacity

Time complexity:
    - Access: O(1)
    - Search: O(n) 
    - Insert: O(n)
    - Delete: O(n)

Use case:
    - Very quick to access an element within an array if the position is known 
    - Collect and store data of the same type
    - Foundation data structure that is used by other data structures
*/

const assert = require('chai').assert;

// Definition
class Array {
	#arr = [];
	length = 0;
	capacity = 5;

	at(index) {
		return this.#arr[index];
	}

	insert(val) {
		this.length++;
		this.#arr.push(val);
	}

	delete(index) {
		this.length--;
		return this.#arr.splice(index, 1)[0];
	}

	find(val) {
		// 1 liner
		// return this.#arr.find(val)

		// manual
		for (let v of this.#arr) {
			if (v === val) {
				return v;
			}
		}
		return undefined;
	}
}

// Test
describe('Array', function () {
	let testArr;
	this.beforeEach(() => {
		testArr = new Array();
		for (let i = 1; i <= 5; i++) {
			testArr.insert(i);
		}
	});
	it('Retrieve array elements', () => {
		assert(testArr.at(0) === 1);
		assert(testArr.at(1) === 2);
		assert(testArr.at(2) === 3);
		assert(testArr.at(3) === 4);
		assert(testArr.at(4) === 5);
	});

	it('Insert elements into array', () => {
		let currentLength = testArr.length;
		let val = 10;
		testArr.insert(val);
		assert(testArr.length === currentLength + 1, 'length is incorrect');
		assert(testArr.at(testArr.length - 1) === val, 'value is incorrect');
	});

	it('Delete elements from array', () => {
		let currentLength = testArr.length;
		assert(testArr.delete(3) === 4, 'incorrect return element');
		assert(testArr.length === currentLength - 1, 'length is incorrect');
	});

	it('Find elements in array', () => {
		assert(testArr.find(1) === 1);
		assert(testArr.find(10) === undefined);
	});
});
