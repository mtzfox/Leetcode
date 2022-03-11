/*
https://leetcode.com/problems/median-of-two-sorted-arrays/

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

function findMedianSortedArrays(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a,b) => a-b),
        isEven = (val) => (val % 2) === 0,
        half = ((merged.length / 2))

    return (isEven(merged.length)) 
      ? (merged[half-1]+merged[half]) / 2
      : merged[Math.floor((merged.length)/2)]
};