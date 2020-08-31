// Given a list of rectangles in the number plane where each element as the form [x, y, width, height], calculate the range of shadows on the x-axis.

// For example:

// Input: [[12, 15, 1, 6], [4, 11, 6, 3], [19, 11, 4, 2], [7, 6, 2, 2], [13, 8, 7, 2]]
// Output: [[4, 10], [12, 23]]


function shadow(rectangles) {
  let boxes=rectangles.map(([x, y, width, height])=>[x,x+width]);
  boxes = boxes.sort(([start1,end1], [start2,end2]) => start1 - start2);
  for (let i = 0; i < boxes.length - 1; i++) {
    if (boxes[i][1] >= boxes[i + 1][0]) {
      boxes = mergeBoxes(boxes, i);
      i--;
    }
  }
  return boxes;
}
function mergeBoxes(boxes,i) {
  boxes.splice(i, 2,[boxes[i][0],Math.max(boxes[i + 1][1], boxes[i][1])]); 
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