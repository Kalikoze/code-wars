# Kata: https://www.codewars.com/kata/54da5a58ea159efa38000836

# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
from collections import Counter

def find_it(seq):
    num_data = Counter(seq)
    for key, val in num_data.items():
        if val % 2:
            return key

# Test Case 1:
print(find_it([7]))

# Test Case 2:
print(find_it([0]))

# Test Case 3:
print(find_it([1, 1, 2]))

# Test Case 4:
print(find_it([0,1,0,1,0]))

# Test Case 5:
print(find_it([1,2,2,3,3,3,4,3,3,3,2,2,1]))
