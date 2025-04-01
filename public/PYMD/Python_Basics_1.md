### **Python Basics - Chapter 1**

Python is a high-level, interpreted programming language known for its simplicity and readability.

---

### **1. Why Python?**

- Easy to learn and use
- Versatile (Web, AI, Data Science, etc.)
- Large community and extensive libraries

---

### **2. Installing Python**

Download and install Python from [python.org](https://www.python.org/).

Check installation:
```sh
python --version
```

Run Python interactively:
```sh
python
```

---

### **3. Writing and Running Python Code**

#### **Using the Python Shell**
```python
print("Hello, World!")
```

#### **Writing a Python Script**
Create `script.py`:
```python
print("This is a Python script.")
```
Run it:
```sh
python script.py
```

---

### **4. Python Syntax**

- Python uses indentation instead of braces `{}`.
```python
if True:
    print("Indented block")  # Correct
```

- Comments:
```python
# This is a comment
```

- Multi-line comments:
```python
"""
This is a multi-line comment.
"""
```

---

### **5. Variables and Data Types**

Python has dynamic typing.
```python
x = 10  # Integer
y = 3.14  # Float
z = "Hello"  # String
```

#### **Checking Types**
```python
print(type(x))  # <class 'int'>
```

#### **Basic Input & Output**
```python
name = input("Enter your name: ")
print("Hello,", name)
```

---

### **6. Basic Data Structures**

#### **Lists**
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # apple
```

#### **Tuples**
```python
coordinates = (10, 20)
```

#### **Dictionaries**
```python
person = {"name": "Alice", "age": 25}
print(person["name"])
```

#### **Sets**
```python
unique_numbers = {1, 2, 3, 3, 2}
print(unique_numbers)  # {1, 2, 3}
```

---

### **7. Basic Operators**

| Operator | Example | Result |
|----------|---------|--------|
| `+` | `2 + 3` | `5` |
| `-` | `5 - 2` | `3` |
| `*` | `3 * 2` | `6` |
| `/` | `6 / 2` | `3.0` |
| `//` | `7 // 2` | `3` (Floor division) |
| `%` | `7 % 2` | `1` (Modulo) |
| `**` | `2 ** 3` | `8` (Exponentiation) |

---

### **8. Conditional Statements**

```python
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")
```

---

### **9. Loops**

#### **For Loop**
```python
for i in range(5):
    print(i)
```

#### **While Loop**
```python
x = 0
while x < 5:
    print(x)
    x += 1
```

---

### **10. Functions**

```python
def greet(name):
    return "Hello, " + name

print(greet("Alice"))
```

---

### **Conclusion**

This chapter covered Python basics. Next, we'll explore **Data Structures and Functions in Python**.

---

### **Next Topic: Python Data Structures & Functions**
