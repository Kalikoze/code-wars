# Kata: https://www.codewars.com/kata/51b6249c4612257ac0000005/train/python

# Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

# Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

# Example:
# "MM"      -> 2000
# "MDCLXVI" -> 1666
# "M"       -> 1000
# "CD"      ->  400
# "XC"      ->   90
# "XL"      ->   40
# "I"       ->    1

# Help:
# Symbol    Value
# I          1
# V          5
# X          10
# L          50
# C          100
# D          500
# M          1,000


def decode_roman_numbers(roman):
    roman_values = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    }
    total = 0
    length = len(roman)
    
    for i in range(length):
        current_value = roman_values[roman[i]]
        next_value = roman_values[roman[i + 1]] if i + 1 < length else 0
        
        if current_value < next_value:
            total -= current_value
        else:
            total += current_value

    return total

# Test Cases:
print(decode_roman_numbers('MMMCMXCIX')) # 3999
print(decode_roman_numbers('MMMDCCCLXXXVIII')) # 3888
print(decode_roman_numbers('MM')) # 2000
print(decode_roman_numbers('MDCLXVI')) # 1666
print(decode_roman_numbers('M')) # 1000
print(decode_roman_numbers('CD')) # 400
print(decode_roman_numbers('XC')) # 90
print(decode_roman_numbers('XL')) # 40
print(decode_roman_numbers('I')) # 1
