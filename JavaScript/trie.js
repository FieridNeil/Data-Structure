const { assert } = require('chai');

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

	#deleteHelper(root, word, level, str) {
		// In case the word does not exist or tree is empty
		if (root === null) {
			str.splice(0, str.length);
			return null;
		}
		// Base case, if we reach the end of word
		if (level == word.length) {
			// Check if there is any more children after (this string is a prefix)
			if (this.#hasChildren(root.children)) {
				root.isEnd = false;
			} else {
				root = null;
			}

			return root;
		}

		let idx = word[level].charCodeAt() - 'a'.charCodeAt();
		str.push(String.fromCharCode(97 + idx));
		root.children[idx] = this.#deleteHelper(root.children[idx], word, level + 1, str);

		if (!this.#hasChildren(root.children) && root.isEnd === false) {
			root = null;
		}

		return root;
	}

	delete(word) {
		if (this.#root === null) {
			return null;
		}
		let str = [];
		this.#deleteHelper(this.#root, word, 0, str);
		return str.length > 0 ? str.join('') : null;
	}

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
					str = str.slice(0, str.length - 1);
				} else {
					visited.push(str);
					if (this.#hasChildren(root.children[i].children) === true) {
						this.#printHelper(visited, root.children[i], str);
						str = str.slice(0, str.length - 1);
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

describe('Trie', () => {
	let t;
	beforeEach(() => {
		t = new Trie();
		t.insert('hello');
		t.insert('height');
		t.insert('fish');
		t.insert('fishing');
		t.insert('he');
	});
	it('Insert', () => {
		t.insert('world');
		t.insert('word');
		t.insert('wording');
		t.insert('boat');
		t.insert('icecream');
		t.insert('worry');

		assert.sameDeepMembers(
			t.print(),
			['hello', 'height', 'boat', 'fish', 'fishing', 'he', 'world', 'word', 'wording', 'worry', 'icecream'],
			'Should be the same'
		);
		assert.equal(t.search('worry'), true, 'Should be true');
		assert.equal(t.search('world'), true, 'Should be true');
	});

	it('search', () => {
		assert.equal(t.search('hello'), true, 'Should be true');
		assert.equal(t.search('hi'), false, 'Should be false');
		assert.equal(t.search(''), false, 'Should be false');
	});

	it('delete', () => {
		assert.equal(t.delete('bomb'), null, 'Should return null');
		assert.equal(t.delete('hello'), 'hello', 'should return hello');
		assert.equal(t.search('he'), true, 'should return true, he should be in there');
		assert.equal(t.delete('fish'), 'fish', 'Should return fish');
		assert.equal(t.search('fishing'), true, 'should return true, fishing should be in there');
	});
});
