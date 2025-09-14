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
