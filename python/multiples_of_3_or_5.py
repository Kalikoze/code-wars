# Kata: https://www.codewars.com/kata/514b92a657cdc65150000006/train/python

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Additionally, if the number is negative, return 0.

# Note: If the number is a multiple of both 3 and 5, only count it once.

# Examples:
# solution(4) => 3
# solution(6) => 8
# solution(16) => 60


def solution(num):
    if num < 0:
        return 0
    multiples = [num for num in range(1, num) if num % 3 == 0 or num % 5 == 0]
    return sum(multiples)



# Test Case #1:
print(solution(4)) # 3

# Test Case #2:
print(solution(6)) # 8

# Test Case #2:
print(solution(16)) # 80
