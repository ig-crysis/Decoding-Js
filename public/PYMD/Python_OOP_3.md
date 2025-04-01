### **Object-Oriented Programming in Python - Chapter 3**

Object-Oriented Programming (OOP) is a programming paradigm based on objects and classes.

---

### **1. What is OOP?**

OOP focuses on:

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

---

### **2. Classes and Objects**

A class is a blueprint for objects.
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name}."

p1 = Person("Alice", 25)
print(p1.greet())  # Output: Hello, my name is Alice.
```

---

### **3. Encapsulation**

Encapsulation hides internal details.
```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private variable

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # Output: 1500
```

---

### **4. Inheritance**

Inheritance allows a class to derive properties from another class.
```python
class Animal:
    def speak(self):
        return "Animal sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

dog = Dog()
print(dog.speak())  # Output: Woof!
```

---

### **5. Polymorphism**

Polymorphism allows different classes to use the same method name.
```python
class Cat:
    def speak(self):
        return "Meow!"

class Bird:
    def speak(self):
        return "Chirp!"

animals = [Cat(), Bird()]
for animal in animals:
    print(animal.speak())
```
Output:
```
Meow!
Chirp!
```

---

### **6. Abstraction**

Abstraction hides implementation details.
```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

class Car(Vehicle):
    def start(self):
        return "Car starting..."

car = Car()
print(car.start())  # Output: Car starting...
```

---

### **7. Magic Methods (Dunder Methods)**

Python provides special methods like `__str__` and `__len__`.
```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"Book: {self.title}"

    def __len__(self):
        return self.pages

book = Book("Python 101", 300)
print(book)  # Output: Book: Python 101
print(len(book))  # Output: 300
```

---

### **Conclusion**

This chapter covered the fundamentals of OOP. Next, we will explore **Using Python in Software Development**.

---

### **Next Topic: Using Python in Software Development**
