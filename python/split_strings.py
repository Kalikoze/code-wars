# Kata: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Examples:

# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']

def solution(s):
    split_strings = [f"{s[i:i+2]}" for i in range(0, len(s), 2)]
    if len(s) % 2:
        split_strings[-1] += '_'
    return split_strings

# Test Case 1:
print(solution('abc'))

# Test Case 2:
print(solution('abcdef'))