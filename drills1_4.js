const Array = require("./Array");

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();
  //----drill 2----

  arr.push("tauhida");
  //   arr.push(3);
  //   arr.push(5);
  //   arr.push(15);
  //   arr.push(19);
  //   arr.push(45);
  //   arr.push(10);
  //----drill 3-----
  //   arr.pop();
  //   arr.pop();
  //   arr.pop();

  console.log(arr);

  //----drill 4 -----
  console.log(arr.get(0));
  //   arr.length = 0;
  //   arr.push(25);
  //   console.log(arr.get(0));
}

return main();
