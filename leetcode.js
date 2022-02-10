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


