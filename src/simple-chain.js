const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value===''){
      this.chain.push(`(  )`);
    }else{
      this.chain.push(`( ${value} )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    if(isNaN(position)||position>this.chain.length||position<1){
      this.chain=[];
      throw new NotImplementedError("You can't remove incorrect link!");
    }
    this.chain.splice(position-1,1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let temp=this.chain.join('~~');
    this.chain=[]
    return temp;
  }
};
module.exports = {
  chainMaker
};
