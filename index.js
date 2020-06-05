// Given a list of rectangles in the number plane where each element as the form [x, y, width, height], calculate the range of shadows on the x-axis.

// For example:

// Input: [[12, 15, 1, 6], [4, 11, 6, 3], [19, 11, 4, 2], [7, 6, 2, 2], [13, 8, 7, 2]]
// Output: [[4, 10], [12, 23]]
function shadow(rectangles) {
  var boxes = [];
  for (let i = 0; i < rectangles.length; i++) {
    let temp = [];
    temp.push(rectangles[i][0]);
    temp.push(rectangles[i][0] + rectangles[i][2]);
    boxes.push(temp);
  }
  // console.log(boxes);
  boxes = boxes.sort((a, b) => a[0] - b[0]);
  // console.log(boxes);
  for (let i = 0; i < boxes.length - 1; i++) {
    if (boxes[i][1] >= boxes[i + 1][0]) {
      boxes = mergingBoxes(boxes, i);
      //  console.log("after merge boxes=");
      //  console.log(boxes);
      i--;
    }
  }
  return boxes;
}
function mergingBoxes(boxes, i) {
  //  console.log("merging boxes");
  let temp = [];
  temp.push(boxes[i][0]);
  temp.push(boxes[i + 1][1] > boxes[i][1] ? boxes[i + 1][1] : boxes[i][1]);
  boxes.splice(i, 2);

  boxes.push(temp);
  boxes = boxes.sort((a, b) => a[0] - b[0]);
  //  console.log(boxes);
  return boxes;
}
console.log(
  shadow([
    [12, 15, 1, 6],
    [4, 11, 6, 3],
    [19, 11, 4, 2],
    [7, 6, 2, 2],
    [13, 8, 7, 2],
  ])
);

// use .map to generate boxes list
// use destructuring wherever you are accessing 0 and 1 index.
// splice and push on line 27 and 29 can be merged.