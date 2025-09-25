// 605. Can Place Flowers
// Easy
// Topics
// premium lock iconCompanies

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

//     1 <= flowerbed.length <= 2 * 104
//     flowerbed[i] is 0 or 1.
//     There are no two adjacent flowers in flowerbed.
//     0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let seeds = n;
  // Iterate over the flowerbed
  console.log('amount of seeds ', seeds);

  for (let i = 0; i <= flowerbed.length - 1; i++) {
    // Look for an empty spot, surrounded by empty plots
    if (seeds === 0) {
      console.log('there are no more seeds', seeds, 'returning true');
      return true;
    }
    if (flowerbed[i] === 0) {
      let empty_left_plot = flowerbed[i - 1] === 0 || i === 0;
      let empty_right_plot = flowerbed[i + 1] === 0 || i === flowerbed.length - 1;

      if (empty_left_plot && empty_right_plot) {
        console.log('we have an empty plot at ', i);
        flowerbed[i] = 1;
        console.log('planting a seed', seeds);
        seeds--;
        console.log('remaining seeds', seeds);
        console.log('Here is our flowerbed', flowerbed);
      }
    }
  }
  // If we evaluate the whole flower bed and there are remaining seeds, return false.
  if (seeds === 0) {
    return true;
  } else {
    return false;
  }
};

/* TESTS */

let flowerbed = [2, 3, 5, 1, 3];
let n = 3;

console.log('test1', canPlaceFlowers(flowerbed, n));
// apbqcr

flowerbed = [4, 2, 1, 1, 2];
n = 1;

console.log('test2', canPlaceFlowers(flowerbed, n));
// "apbqrs"

flowerbed = [12, 1, 12];
n = 10;

console.log('test3', canPlaceFlowers(flowerbed, extraCandies));
// "apbqcd"
