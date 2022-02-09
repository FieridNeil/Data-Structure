const ENG_ALP = 26;
class Node {
	constructor(val) {
		this.isEnd = false;
		this.occurrence = 0;
		this.children = new Array(ENG_ALP).fill(null);
	}
}

class Trie {
	#root = null;

	insert(word) {
		if (this.#root === null) {
			this.#root = new Node();
		}
		let curr = this.#root;
		for (let level = 0; level < word.length; level++) {
			let idx = word[level].charCodeAt() - 'a'.charCodeAt();
			if (curr.children[idx] === null) {
				curr.children[idx] = new Node();
				curr.children[idx].occurrence++;
			}

			curr = curr.children[idx];
		}
		curr.isEnd = true;
	}

	delete(word) {}

	search(word) {
		let curr = this.#root;
		let idx = -1;

		for (let level = 0; level < word.length; level++) {
			idx = word[level].charCodeAt() - 'a'.charCodeAt();
			if (curr.children[idx] === null) {
				return false;
			}
			curr = curr.children[idx];
		}
		if (curr.isEnd === true) {
			return true;
		}

		return false;
	}

	#hasChildren(arr) {
		return arr.some((el) => el !== null);
	}

	#printHelper(visited, root, str) {
		for (let i = 0; i < ENG_ALP; i++) {
			if (root.children[i] !== null) {
				str += String.fromCharCode(i + 97);
				if (root.children[i].isEnd === false) {
					this.#printHelper(visited, root.children[i], str);
					str = str.slice(str.length);
				} else {
					visited.push(str);
					if (this.#hasChildren(root.children[i].children) === true) {
						this.#printHelper(visited, root.children[i], str);
						str = str.slice(str.length);
					}
				}
			}
		}
	}

	print() {
		if (this.#root === null) {
			return null;
		}
		const visited = [];
		let str = '';
		this.#printHelper(visited, this.#root, str);
		return visited;
	}
}

const t = new Trie();

t.insert('aaa');
t.insert('bbb');
t.insert('ccc');
console.log(t.print());
