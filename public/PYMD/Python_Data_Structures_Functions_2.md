### **Python Data Structures & Functions - Chapter 2**

In this chapter, we will cover Python's built-in data structures and functions.

---

### **1. Lists**

Lists are ordered, mutable collections.
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple
fruits.append("orange")  # Adding an element
print(len(fruits))  # Output: 4
```

#### **List Methods**
```python
fruits.remove("banana")  # Remove item
fruits.pop()  # Remove last item
fruits.sort()  # Sort list
```

---

### **2. Tuples**

Tuples are immutable sequences.
```python
coordinates = (10, 20)
print(coordinates[0])  # Output: 10
```

Tuples are faster and safer than lists when immutability is needed.

---

### **3. Dictionaries**

Dictionaries store key-value pairs.
```python
person = {"name": "Alice", "age": 25}
print(person["name"])  # Output: Alice
person["city"] = "New York"  # Adding a new key-value pair
```

#### **Dictionary Methods**
```python
person.keys()  # Get all keys
person.values()  # Get all values
person.items()  # Get all key-value pairs
```

---

### **4. Sets**

Sets store unique elements.
```python
unique_numbers = {1, 2, 3, 3, 2}
print(unique_numbers)  # Output: {1, 2, 3}
unique_numbers.add(4)
```

#### **Set Operations**
```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))  # {1, 2, 3, 4, 5}
print(set1.intersection(set2))  # {3}
```

---

### **5. Functions**

Functions allow reusability and modularity.
```python
def greet(name):
    return f"Hello, {name}"

print(greet("Alice"))  # Output: Hello, Alice
```

#### **Lambda Functions**
```python
square = lambda x: x ** 2
print(square(5))  # Output: 25
```

---

### **6. Scope of Variables**

#### **Local vs Global Scope**
```python
x = 10  # Global variable

def my_function():
    x = 5  # Local variable
    print(x)  # Output: 5

my_function()
print(x)  # Output: 10 (global scope remains unchanged)
```

Use `global` keyword to modify a global variable inside a function.

---

### **7. Recursion**

A function calling itself.
```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120
```

---

### **Conclusion**

This chapter covered Python's core data structures and functions. Next, we'll explore **Object-Oriented Programming in Python**.

---

### **Next Topic: Object-Oriented Programming in Python**
