# Kata: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

#Examples:
# move_zeroes([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]) => [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
# move_zeroes([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) => [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
# move_zeroes([0, 0]) => [0, 0]
# move_zeroes([0]) => [0]
# move_zeroes([]) => []

def move_zeroes(list):
    zeroes = []
    numbers = []
    for num in list:
        if num != 0:
            numbers.append(num)
        else:
            zeroes.append(0) 
    return numbers + zeroes




# Test Case #1:
print(move_zeroes([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) # [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]


# Test Case #2:
print(move_zeroes([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])) # [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


# Test Case #3:
print(move_zeroes([0, 0])) # [0, 0]


# Test Case #4:
print(move_zeroes([0])) # [0]


# Test Case #5:
print(move_zeroes([])) # []

