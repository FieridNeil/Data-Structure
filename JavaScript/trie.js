const ENG_ALP = 26;
class Node {
	constructor(val) {
		this.isEnd = false;
		this.occurrence = 0;
		this.children = new Array(ENG_ALP).fill(null);
	}
}

class Trie {
    #root = null

	insert(word) {
        let curr = this.#root;
        for(let level = 0; level < word.length; level++){
            let idx = word[level].charCodeAt() - 'a'.charCodeAt()
            if(curr.children[idx] === null){
                curr.children[idx] = new Node()
                curr.children[idx].occurrence++
            }

            curr = curr.children[idx]
        }

        curr.isEnd = true

    }

	delete(word) {}

	search(word) {}

    #printHelper(root, str){
       let curr = this.#root
        for(let i = 0; i < ENG_ALP; i++){
            if(root.children[i].isEnd === false){
                this.#printHelper(root.children[i])
                str += 
            }
            if(root.children[i] !== null){
                str += String.fromCharCode(97 + i)
            }else{
                this.#printHelper(root.children)
            }
        }

    }

	print() {
       if(this.#root === null){
           return null
       }
       let str = ''
       this.#printHelper(this.#root, str)

    }
}
