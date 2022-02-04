// The above implementation used recursive approach
// There are 6 functions/methods:
// - Insert
// - Search
// - Delete
// - Inorder
// - Preorder
// - Postorder

class Node {
	data;
	left = null;
	right = null;

	constructor(val) {
		this.data = val;
	}
}

class BST {
	#root = null;

	insert(val) {
		this.#root = this.#insertHelper(this.#root, val);
	}

	#insertHelper(root, val) {
		if (root === null) {
			root = new Node(val);
			return root;
		}
		if (val > root.data) {
			root.right = this.#insertHelper(root.right, val);
		}
		if (val < root.data) {
			root.left = this.#insertHelper(root.left, val);
		}
		return root;
	}

	preorder() {
		const arr = [];
		this.#preorderHelper(this.#root, arr);
		return arr;
	}

	#preorderHelper(root, arr) {
		if (root === null) {
			return null;
		}

		// console.log(root.data);
		arr.push(root.data);
		this.#preorderHelper(root.left, arr);
		this.#preorderHelper(root.right, arr);
	}

	inorder() {
		let arr = [];
		this.#inorderHelper(this.#root, arr);
		return arr;
	}

	#inorderHelper(root, arr) {
		if (root === null) {
			return null;
		}

		this.#inorderHelper(root.left, arr);
		arr.push(root.data);
		this.#inorderHelper(root.right, arr);
	}

	postorder() {
		let arr = [];
		this.#postorderHelper(this.#root, arr);
		return arr;
	}

	#postorderHelper(root, arr) {
		if (root === null) {
			return null;
		}

		this.#postorderHelper(root.left, arr);
		this.#postorderHelper(root.right, arr);
		arr.push(root.data);
	}

	search(val) {
		return this.#searchHelper(this.#root, val);
	}

	#searchHelper(root, val) {
		if (root === null) {
			return null;
		}

		if (val === root.data) {
			return val;
		}
		if (val > root.data) {
			return this.search(root.right, val);
		}
		if (val < root.data) {
			return this.search(root.left, val);
		}
	}

	delete(val) {
		return this.#deleteHelper(this.#root, val);
	}

	#deleteHelper(root, val) {
		if (root === null) {
			return null;
		}

		if (val < root.data) {
			root.left = this.#deleteHelper(root.left, val);
		} else if (val > root.data) {
			root.right = this.#deleteHelper(root.right, val);
		} else {
			if (root.left === null) {
				let temp = root.right;
				root = null;
				return temp;
			}

			if (root.right === null) {
				let temp = root.left;
				root = null;
				return temp;
			}

			let min = this.findMinValue(root.right);
			root.data = min.data;
			root.right = this.#deleteHelper(root.right, min.data);
		}
		return root;
	}

	findMinValue(root) {
		while (root.left !== null) {
			root = root.left;
		}

		return root;
	}

	clear() {}
}

let tree = new BST();
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(5);
tree.insert(2);
tree.insert(9);
tree.insert(10);

console.log(tree.search(7));
console.log(tree.search(10));

console.log(tree.delete(4));
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());
