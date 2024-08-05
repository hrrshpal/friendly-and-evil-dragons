// Your code here
class Dragon{
  constructor(name,color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons){
    let arr = []
    for(let dragon of dragons){
      arr.push(dragon.name)
    }
    return arr
  }
}

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
