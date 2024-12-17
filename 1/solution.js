const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const leftList = [];
const rightList = [];

input.forEach(line => {
  const [left, right] = line.split('   ').map(Number);
  leftList.push(left);
  rightList.push(right);
});

// Part 1
function calculateTotalDistance(leftList, rightList) {
  const sortedLeft = [...leftList].sort((a, b) => a - b);
  const sortedRight = [...rightList].sort((a, b) => a - b);
  let totalDistance = 0;
  for (let i = 0; i < sortedLeft.length; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
  }
  return totalDistance;
}

// Part 2
function calculateSimilarityScore(leftList, rightList) {
  const frequencyMap = new Map();
  rightList.forEach(num => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  let similarityScore = 0;
  leftList.forEach(num => {
    const count = frequencyMap.get(num) || 0;
    similarityScore += num * count;
  });
  return similarityScore;
}

const totalDistance = calculateTotalDistance(leftList, rightList);
console.log('Part 1 - Total Distance:', totalDistance);
const similarityScore = calculateSimilarityScore(leftList, rightList);
console.log('Part 2 - Similarity Score:', similarityScore);
