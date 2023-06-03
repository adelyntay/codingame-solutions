import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())  # the number of temperatures to analyse
temps =[]

if n == 0 :
    print("0") 
else: 
    for i in input().split():
    # t: a temperature expressed as an integer ranging from -273 to 5526
        t = int(i)
        temps.append(t)

close_to_zero = min(temps, key=lambda x: (abs(x), -x))

# Write an answer using print
# To debug: print("Debug messages...", file=sys.stderr, flush=True)

print(close_to_zero)