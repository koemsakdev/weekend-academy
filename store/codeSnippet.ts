export const firstPython = `print("Hello, World!")`;
export const singleComment = `# This is a single-line comment
print("Hello, World!")  # You can also put a comment at the end of a line`;
export const multiComment = `# This is a multi-line comment
# Line 2 of the comment
# Line 3 of the comment

"""
This can also serve as a multi-line comment,
but it is technically a string not assigned to any variable.
"""`;
export const creatingVariable = `# Creating and reassigning variables (ការបង្កើត និងការកំណត់តម្លៃឡើងវិញ)
my_age = 30
print("My age is: ", my_age)

my_age = "thirty" # Now my_age is a string
print("My age is: ", my_age)

# Multiple variables in one line (អថេរច្រើនក្នុងបន្ទាត់តែមួយ)
a, b, c = 1, 2.5, "hi"
print("The value of a: ", a)
print("The value of b: ", b)
print("The value of c: ", c)`;

export const pythonNamingVariable = `# Valid variable names (ឈ្មោះអថេរត្រឹមត្រូវ)
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

# Invalid variable names (ឈ្មោះអថេរមិនត្រឹមត្រូវ)
# 2myvar = "John"
# my-var = "John"
# my var = "John"`;

export const pythonMultipleValueToVariable = `# Assigning multiple values (ការកំណត់តម្លៃច្រើន)
x, y, z = "Orange", "Banana", "Cherry"
print("The value of x:", x)
print("The value of y:", y)
print("The value of z:", z)

# Assigning the same value to multiple variables (ការកំណត់តម្លៃដូចគ្នាទៅអថេរច្រើន)
a = b = c = "Apple"
print("The value of a:", a)
print("The value of b:", b)
print("The value of c:", c)`;

export const pythonLocalVariable = `def myfunc():
  x = "I am a local variable."
  print(x)

myfunc()
# print(x) # This will cause an error because x is local (នេះនឹងបង្កឱ្យមានកំហុសព្រោះ x ជាអថេរតំបន់)`;

export const pythonGlobalVariable = `y = "I am a global variable."

def myfunc_global():
  print(y)
  global z
  z = "I am also a global variable."

myfunc_global()
print(y)
print(z)`;


// ============================= Example Data Type ==========================
export const pythonFirstDataType = `num = 24
print(num, 'is of type', type(num))`;


export const pythonNumericeDataType = `num1 = 5
print(num1, 'is of type', type(num1))
num2 = 2.0
print(num2, 'is of type', type(num2))
num3 = 1+2j
print(num3, 'is of type', type(num3))`;

export const pythonListDataType = `languages = ["Swift", "Java", "Python"]
print(languages)`;

// Creating List example
export const pythonCreatingListUsingBracket = `a = [1, 2, 3, 4, 5] # List of integers
b = ['apple', 'banana', 'cherry'] # List of strings
c = [1, 'hello', 3.14, True] # Mixed data types

print(a)
print(b)
print(c)`;

export const pythonCreatingListUsingListConstructor = `a = list((1, 2, 3, 'apple', 4.5))  
print(a)

b = list("GFG")
print(b)`;

export const pythonCreatingListUsingStar = `a = [2] * 5
b = [0] * 7

print(a)
print(b)`;

// Accesing List element example
export const pythonAccessElementPositiveIndex = `fruits = ['apple', 'banana', 'cherry']
first_fruit = fruits[0]  # Gets 'apple'
second_fruit = fruits[1] # Gets 'banana'
print(first_fruit)
print(second_fruit)`;

export const pythonAccessElementNegativeIndex = `fruits = ['apple', 'banana', 'cherry']
last_fruit = fruits[-1] # Gets 'cherry'
second_to_last = fruits[-2] # Gets 'banana'
print(last_fruit)
print(second_to_last)`;

export const pythonAccessListRangBasicSlicing = `numbers = [1, 2, 3, 4, 5, 6, 7]
subset = numbers[2:5] # Gets [3, 4, 5]
print(subset)`;
export const pythonAccessListRangBeginningSlicing = `numbers = [1, 2, 3, 4, 5, 6, 7]
subset = numbers[:4] # Gets [1, 2, 3, 4]
print(subset)`;
export const pythonAccessListRangEndSlicing = `numbers = [1, 2, 3, 4, 5, 6, 7]
subset = numbers[3:] # Gets [4, 5, 6, 7]
print(subset)`;

export const pythonAccessListRangeOfNegativeIndex = `numbers = [10, 20, 30, 40, 50, 60, 70]
subset = numbers[-4:-1] # Gets [40, 50, 60]
print(subset)`;

export const pythonCheckItemExist = `fruits = ['apple', 'banana', 'cherry']
if 'banana' in fruits:
    print("Banana is in the list.")

if 'grape' not in fruits:
    print("Grape is not in the list.")`;

// Change list item example
export const pythonChangeListByReplacingRangeWithSameItems = `# Replacing a range with the same number of items
my_list = ['apple', 'banana', 'cherry']
my_list[1] = 'kiwi'
print(my_list)
# Output: ['apple', 'kiwi', 'cherry']`;

export const pythonChangeListByReplacingRangeWithMoreItems = `# Replacing a range with more items
my_list = ['apple', 'banana', 'cherry']
my_list[1:2] = ['kiwi', 'pineapple', 'grape']
print(my_list)
# Output: ['apple', 'kiwi', 'pineapple', 'grape', 'cherry']`;

export const pythonChangeListByReplacingRangeWithFewerItems = `# Replacing a range with fewer items
my_list = ['apple', 'banana', 'cherry', 'orange']
my_list[1:4] = ['kiwi']
print(my_list)
# Output: ['apple', 'kiwi']`;

export const pythonInsertItem = `my_list = ['apple', 'banana', 'cherry']
my_list.insert(1, 'kiwi')
print(my_list)
# Output: ['apple', 'kiwi', 'banana', 'cherry']`;

// Add list items
export const pythonAddListByAppend = `fruits = ['apple', 'banana', 'cherry']
fruits.append('orange')
print(fruits)
# Output: ['apple', 'banana', 'cherry', 'orange']`;

export const pythonAddListByInsert = `fruits = ['apple', 'banana', 'cherry']
fruits.insert(1, 'kiwi')
print(fruits)
# Output: ['apple', 'kiwi', 'banana', 'cherry']`;

export const pythonAddListByExtend = `fruits = ['apple', 'banana', 'cherry']
tropical_fruits = ['mango', 'pineapple', 'guava']
fruits.extend(tropical_fruits)
print(fruits)
# Output: ['apple', 'banana', 'cherry', 'mango', 'pineapple', 'guava']`;

export const pythonAddListByAnyExtend = `fruits = ['apple', 'banana']
more_fruits = ('grape', 'strawberry')
fruits.extend(more_fruits)
print(fruits)
# Output: ['apple', 'banana', 'grape', 'strawberry']`;

export const pythonAddListByAnyPlus = `list1 = [1, 2, 3]
tuple1 = (4, 5, 6)
new_list = list1 + list(tuple1)
print(new_list)
# Output: [1, 2, 3, 4, 5, 6]`;

// Remove List Items
export const pythonRemoveListByRemove = `fruits = ['apple', 'banana', 'cherry', 'banana']
fruits.remove('banana')
print(fruits)
# Output: ['apple', 'cherry', 'banana']`;

export const pythonRemoveListByPopWithIndex = `# Example 1 (by index)
fruits = ['apple', 'banana', 'cherry']
removed_item = fruits.pop(1)
print(removed_item)  # Output: banana
print(fruits)       # Output: ['apple', 'cherry']`;

export const pythonRemoveListByPopWithoutIndex = `# Example 2 (without index)
fruits = ['apple', 'banana', 'cherry']
removed_item = fruits.pop()
print(removed_item)  # Output: cherry
print(fruits)       # Output: ['apple', 'banana']`;

export const pythonRemoveListByDelWithIndex = `# Example 1 (by index)
fruits = ['apple', 'banana', 'cherry']
del fruits[0]
print(fruits)
# Output: ['banana', 'cherry']`;

export const pythonRemoveListByDelWithSlice = `# Example 2 (by slice)
fruits = ['apple', 'banana', 'cherry', 'orange']
del fruits[1:3]
print(fruits)
# Output: ['apple', 'orange']`;

export const pythonRemoveListByClear = `fruits = ['apple', 'banana', 'cherry']
fruits.clear()
print(fruits)
# Output: []`;

// Loop Lists
export const pythonLoopThroughListWithFor = `fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)`;

export const pythonLoopThroghtListWithIndex = `fruits = ["apple", "banana", "cherry"]
for i in range(len(fruits)):
  print(fruits[i])`;

export const pythonLoopListWithWhile = `fruits = ["apple", "banana", "cherry"]
i = 0
while i < len(fruits):
  print(fruits[i])
  i = i + 1`;

export const pythonLoopListWithComprehension = `fruits = ["apple", "banana", "cherry"]
newlist = [x for x in fruits if "a" in x]
print(newlist)
# Output: ['apple', 'banana']`;

// Python Tuple Data Type Example
export const creatingTuple = `my_tuple = ("Apple", 10, 3.14)
print(my_tuple)`;

export const accessingElement = `my_tuple = ("Apple", 10, 3.14)
print(my_tuple[0])  # Output: Apple
print(my_tuple[1])  # Output: 10
print(my_tuple[2])  # Output: 3.14`;

export const immutabilityTuple = `my_tuple = ("Apple", 10, 3.14)
my_tuple[1] = 20
print(my_tuple)`;

export const unpackingTuple = `my_tuple = ("Apple", 10, 3.14)
name, count, price = my_tuple
print(name)  # Output: Apple
print(count)  # Output: 10
print(price)  # Output: 3.14`;

export const nestedTuple = `nested = (1, 2, (3, 4))
print(nested[2][1])
print(nested[0])`;

export const tupleWithOneElement = `single = (5,)
print(type(single))
print(single)`;

export const tupleOpertion = `my_tuple = (1, 2, 3, 4, 5)
print(my_tuple * 2)
print(my_tuple + (4, 5))`;

export const tupleFunction = `nums = (2, 5, 1, 5)
print(len(nums)) # length
print(max(nums)) # maximum
print(nums.count(5)) # count value`;

// Python String Data Type Example
export const creatingString = `greeting = "Hello World"
print(greeting)`;

export const accessingString = `greeting = "Hello World"
print(greeting[0])  # Output: H
print(greeting[1])  # Output: e
print(greeting[2])  # Output: l
print(greeting[3])  # Output: l
print(greeting[4])  # Output: o`;

export const slicingString = `greeting = "Hello Cambodia"
print(greeting[6:14])`;

export const concatenationString = `greeting = "Hello"
name = "World"
print(greeting + ", " + name)  # Output: Hello, World
print(greeting, name)  # Output: Hello World
print(greeting + " " + name + "!")  # Output: Hello World!`;

export const lengthString = `greeting = "Hello World"
print(len(greeting))  # Output: 11`;

export const immutabilityString = `greeting = "Hello World"
greeting[0] = "h"
print(greeting)`;

export const repetitionString = `greeting = "Hello"
print(greeting * 3)  # Output: HelloHelloHello`;

export const membershipTestString = `greeting = "Hello World"
print("Hello" in greeting)  # Output: True
print("World" not in greeting)  # Output: False`;

export const stringFunction = `greeting = "Hello World"
print(greeting.upper())  # Output: HELLO WORLD
print(greeting.lower())  # Output: hello world
print(greeting.title())  # Output: Hello World
print(greeting.strip())  # Output: Hello World (removes leading/trailing spaces)`;


// Python Set Data Type Example
export const creatingSet = `my_set = {1, 2, 3, 4, 5}
print(my_set)`;

export const noDuplicateAllowOfSet = `my_set = {1, 2, 3, 4, 5, 5}
print(my_set)`;

export const mixedDataTypeSet = `my_set = {1, "Apple", 3.14, True}
print(my_set)`;

export const addingElementInSet = `my_set = {1, 2, 3, 4, 5}
my_set.add(6)
print(my_set)`;

export const updateElementInSet = `my_set = {1, 2, 3, 4, 5}
my_set.update([6, 7, 8])
print(my_set)`;

export const removeElementDiscardInSet = `my_set = {1, 2, 3, 4, 5}
my_set.discard(3)
print(my_set)`;

export const removeElementRemoveInSet = `my_set = {1, 2, 3, 4, 5}
my_set.remove(4)
print(my_set)`;

export const setUnion = `set1 = {1, 2, 3}
set2 = {3, 4, 5} 
print(set1 | set2)`;

export const setIntersection = `set1 = {1, 2, 3}
set2 = {3, 4, 5} 
print(set1 & set2)`;

export const setDifference = `set1 = {1, 2, 3}
set2 = {3, 4, 5} 
print(set1 - set2)`;

export const setSymmetricDifference = `set1 = {1, 2, 3}
set2 = {3, 4, 5} 
print(set1 ^ set2)`;

export const setCheckingMembership = `set1 = {1, 2, 3}
set2 = {3, 4, 5} 
print(3 in set1)
print(6 not in set2)`;

export const lengthOfSet = `set1 = {1, 2, 3}
print(len(set1))`;

// Python Dictionary Data Type Example
export const creatingDictionary = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
print(my_dict)`;

export const accessingDictionary = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
print(my_dict["name"])  # Output: Sok
print(my_dict["age"])  # Output: 25
print(my_dict["country"])  # Output: Cambodia`;

export const addingNewKeyValuePair = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
my_dict["gender"] = "Male"
print(my_dict)`;

export const updateKeyValuePair = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
my_dict["age"] = 26
print(my_dict)`;

export const removeKeyValuePairPop = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
my_dict.pop("age")
print(my_dict)`;

export const removeLastInsertItem = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
my_dict.popitem()
print(my_dict)`;

export const checkKeyExist = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
print("name" in my_dict)  # Output: True
print("gender" not in my_dict)  # Output: True`;

export const loopDictionaryValues = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
for value in my_dict.values():
    print(value)`;

export const loopDictionaryKeys = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
for key in my_dict.keys():
    print(key)`;

export const loopDictionaryKeysAndValues = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
for key, value in my_dict.items():
    print(key, value)`;
  
export const lengthDictionary = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
print(len(my_dict))`;

export const nestedDictionary = `my_dict = {"name": "Sok", "age": 25, "country": "Cambodia"}
my_dict["address"] = {"street": "123 Main St", "city": "Cambodia"}
print(my_dict)`;