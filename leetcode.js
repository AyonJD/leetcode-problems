/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
EX- Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

let numsArray = [5, 3, 20, 8], target = 28;
function getTwoSum(nums, target) {
    for (let i = 0; i <= nums.length; i++){
        for (let j = i + 1; j <= nums.length - 1; j++){
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}
console.log(getTwoSum(numsArray,target))



/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

function maxPro(prices) {
    let profit = 0;
    let min = prices[0];
    
    for(let i = 1; i < prices.length; ++i) { 
        if(min > prices[i]) {
            min = prices[i];
        } else if(profit < (prices[i] - min)) {
            profit = prices[i] - min;
        }
    }
    return profit;
};
let pricesArray = [7,1,5,3,6,4];
console.log(maxPro(pricesArray))
