const { Min } = require('mocha/lib/reporters');

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

let h = new MinHeap();

h.insert(6);
h.insert(7);
h.insert(8);
h.insert(9);
h.insert(1);
h.insert(2);
h.insert(3);
h.insert(4);
h.insert(5);
console.log(h.print());
console.log('min: ', h.findMin());
h.deleteMin();
console.log(h.print());
console.log('min: ', h.findMin());
