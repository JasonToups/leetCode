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
var canPlaceFlowers = function (flowerbed, n) {};

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
