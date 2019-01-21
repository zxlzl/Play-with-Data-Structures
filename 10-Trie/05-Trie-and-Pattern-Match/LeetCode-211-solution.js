class TrieNode{
    constructor(){
        this.next = new Map();
        this.isWorld = false;
    }
}

var WordDictionary = function() {
    this.root = new TrieNode(null);
};

WordDictionary.prototype.addWord = function(word) {
    let cur = this.root,c;
    for (let i = 0; i < word.length; i++) {
        c = word.charAt(i);
        if(!cur.next.get(c)){
            cur.next.set(c,new TrieNode(c));
        }
        cur = cur.next.get(c);
    }
    if (!cur.isWorld) {
        cur.isWorld = true;
        this.size++;
    }
};

WordDictionary.prototype.search = function(word) {
    let cur = this.root;
    return this.match(cur,word,0)
};

WordDictionary.prototype.match = function(node,word,index){
    if(index == word.length){
        return node.isWorld;
    }

    let c = word.charAt(index);
    if(c != '.'){
        if(!node.next.has(c)){
            return false;
        }
        return this.match(node.next.get(c),word,index+1);
    }else{
        for (let key of node.next.keys()) {
            if(this.match(node.next.get(key),word,index+1)){
                return true;
            }
        }
        return false;
    }
}