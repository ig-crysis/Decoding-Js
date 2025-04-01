### **Using Python in Software Development - Chapter 4**

Python is widely used in software development due to its simplicity, flexibility, and vast ecosystem of libraries.

---

### **1. Why Use Python for Development?**

- **Cross-platform compatibility** (Windows, macOS, Linux)
- **Extensive libraries and frameworks**
- **Readable and maintainable code**
- **Rapid development cycle**

---

### **2. Python Development Environments**

Some popular Python development environments:

- **IDEs**: PyCharm, VS Code, Spyder
- **Text Editors**: Sublime Text, Atom
- **Jupyter Notebooks**: Ideal for data science and research

---

### **3. Virtual Environments**

Virtual environments help manage dependencies.

#### **Creating a Virtual Environment**
```sh
python -m venv myenv
source myenv/bin/activate  # macOS/Linux
myenv\Scripts\activate   # Windows
```

#### **Installing Dependencies**
```sh
pip install flask requests numpy
```

---

### **4. Web Development with Python**

Python is widely used in web development with frameworks like:

- **Flask** (Lightweight web framework)
- **Django** (Full-featured web framework)

#### **Example: Flask Web App**
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)
```

Run the script and visit `http://127.0.0.1:5000` in your browser.

---

### **5. Database Integration**

Python can connect to databases using libraries like:

- **SQLite** (`sqlite3`)
- **PostgreSQL** (`psycopg2`)
- **MySQL** (`mysql-connector-python`)

#### **Example: SQLite Database**
```python
import sqlite3

conn = sqlite3.connect("example.db")
cursor = conn.cursor()
cursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")
conn.commit()
conn.close()
```

---

### **6. API Development**

APIs allow communication between different applications.

#### **Example: Flask REST API**
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/data", methods=["GET"])
def get_data():
    return jsonify({"message": "Hello, API!"})

if __name__ == "__main__":
    app.run(debug=True)
```

---

### **7. Testing and Debugging**

Python provides built-in tools for testing:

- **`unittest`** - Standard unit testing framework
- **`pytest`** - Popular third-party testing framework

#### **Example: Unit Test**
```python
import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == "__main__":
    unittest.main()
```

Run tests using:
```sh
python -m unittest test_script.py
```

---

### **8. Packaging and Deployment**

To distribute Python applications:

- Create a package using `setuptools`
- Use **Docker** for containerized deployment
- Deploy to **cloud services** (AWS, Heroku, Google Cloud)

#### **Example: Creating a Python Package (`setup.py`)**
```python
from setuptools import setup, find_packages

setup(
    name="mypackage",
    version="0.1",
    packages=find_packages(),
    install_requires=[],
)
```

Install the package locally:
```sh
pip install .
```

---

### **Conclusion**

This chapter covered how Python is used in software development. Next, we'll explore **Python for Data Analysis & Science**.

---

### **Next Topic: Python for Data Analysis & Science**
