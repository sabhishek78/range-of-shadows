// Given a list of rectangles in the number plane where each element as the form [x, y, width, height], calculate the range of shadows on the x-axis.

// For example:

// Input: [[12, 15, 1, 6], [4, 11, 6, 3], [19, 11, 4, 2], [7, 6, 2, 2], [13, 8, 7, 2]]
// Output: [[4, 10], [12, 23]]
function shadow(rectangles) {
  let boxes=rectangles.map(([x, y, width, height])=>[x,x+width]);
  boxes = boxes.sort(([start1,end1], [start2,end2]) => start1 - start2);
  for (let boxNumber = 0; boxNumber < boxes.length - 1; boxNumber++) {
    if (boxes[boxNumber][1] >= boxes[boxNumber + 1][0]) {
      boxes = mergeBoxes(boxes, boxNumber);
      boxNumber--;
    }
  }
  return boxes;
}
function mergeBoxes(boxes,boxNumber) {
  boxes.splice(boxNumber, 2,[boxes[boxNumber][0],boxes[boxNumber + 1][1] > boxes[boxNumber][1] ? boxes[boxNumber + 1][1] : boxes[boxNumber][1]]);
 boxes = boxes.sort(([start1,end1], [start2,end2]) => start1 - start2);
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