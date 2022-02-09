const { assert } = require('chai');

/*
Description:
- There are a maximum of 2 child nodes for any given node
- ALl levels of tree must be completely filled, except the last level
- Nodes must be filled from left to right.
- For min heap: the child nodes have to have larger value than their parent
- For max heap: the child nodes have to have smaller value than their parent
- For a node i, to get the left child use: 2i + 1, right child use: 2i + 2
- For a node i, to get to the parent use: floor(i / 2)
*/
class MinHeap {
	#heapArray = [];

	insert(key) {
		let currentLength = this.#heapArray.length - 1;
		this.#heapArray.push(key);

		while (currentLength > 0 && this.#heapArray[currentLength] < this.#heapArray[Math.floor(currentLength / 2)]) {
			this.#swap(currentLength, Math.floor(currentLength / 2));
			currentLength = Math.floor(currentLength / 2);
		}
	}

	#swap(a, b) {
		let temp = this.#heapArray[a];
		this.#heapArray[a] = this.#heapArray[b];
		this.#heapArray[b] = temp;
	}

	findMin() {
		return this.#heapArray[0];
	}

	deleteMin() {
		// Swap the root with the last element in the array (or the right most child of the last level)
		this.#swap(0, this.#heapArray.length - 1);
		this;

		// Delete the last element or last child
		this.#heapArray.splice([this.#heapArray.length - 1]);

		let idx = 0;

		while (idx < this.#heapArray.length) {
			if (this.#heapArray[idx] > this.#heapArray[idx * 2 + 1]) {
				this.#swap(idx, idx * 2 + 1);
				idx = idx * 2 + 1;
			} else if (this.#heapArray[idx] > this.#heapArray[idx * 2 + 2]) {
				this.#swap(idx, idx * 2 + 2);
				idx = idx * 2 + 2;
			} else {
				break;
			}
		}
	}

	print() {
		return this.#heapArray;
	}
}

describe('Min Heap', () => {
	let h;
	beforeEach(() => {
		h = new MinHeap();
		h.insert(60);
		h.insert(70);
		h.insert(80);
		h.insert(90);
		h.insert(10);
		h.insert(20);
		h.insert(30);
		h.insert(40);
		h.insert(50);
	});

	it('insert', () => {
		h.insert(12);
		assert.sameDeepMembers(h.print(), [10, 12, 20, 30, 40, 50, 60, 70, 80, 90], 'Should be the same');
	});

	it('Find min', () => {
		assert.equal(h.findMin(), 10, 'Min should be 10');
	});

	it('delete min', () => {
		h.deleteMin();
		assert.equal(h.findMin(), 20, 'New min should be 20');
		h.insert(12);
		h.deleteMin();
		assert.equal(h.findMin(), 12, 'New min should be 12');
	});
});
