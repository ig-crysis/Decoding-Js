### **Python for Data Analysis & Science - Chapter 5**

Python is widely used for data analysis and scientific computing due to its powerful libraries and easy-to-use syntax.

---

### **1. Popular Libraries for Data Analysis**

- **NumPy** - Numerical computing
- **Pandas** - Data manipulation and analysis
- **Matplotlib** - Data visualization
- **Seaborn** - Statistical data visualization
- **Scikit-learn** - Machine learning

---

### **2. NumPy: Handling Numerical Data**

NumPy provides support for arrays and mathematical functions.

#### **Creating a NumPy Array**
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)  # Output: [1 2 3 4 5]
```

#### **Basic Operations**
```python
arr2 = arr * 2  # Element-wise multiplication
print(arr2)  # Output: [ 2  4  6  8 10]
```

---

### **3. Pandas: Data Analysis**

Pandas provides powerful tools for working with structured data.

#### **Creating a DataFrame**
```python
import pandas as pd

data = {"Name": ["Alice", "Bob", "Charlie"], "Age": [25, 30, 35]}
df = pd.DataFrame(data)
print(df)
```

#### **Reading CSV Files**
```python
df = pd.read_csv("data.csv")
print(df.head())  # Display first 5 rows
```

#### **Filtering Data**
```python
filtered_df = df[df["Age"] > 25]
print(filtered_df)
```

---

### **4. Data Visualization with Matplotlib & Seaborn**

#### **Matplotlib Example**
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

plt.plot(x, y, marker='o')
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Simple Line Chart")
plt.show()
```

#### **Seaborn Example**
```python
import seaborn as sns

sns.histplot(df["Age"], kde=True)
plt.show()
```

---

### **5. Working with Large Datasets**

- **Use Pandas `read_csv()` with chunksize**
- **Use Dask for parallel processing**
- **Optimize data types to save memory**

#### **Example: Processing Large CSV Files**
```python
chunk_size = 1000
for chunk in pd.read_csv("large_data.csv", chunksize=chunk_size):
    print(chunk.head())  # Process each chunk
```

---

### **6. Basic Data Cleaning**

- Handle missing values
- Remove duplicates
- Normalize data

#### **Example: Handling Missing Values**
```python
df.fillna(df.mean(), inplace=True)  # Replace NaNs with column mean
```

---

### **7. Introduction to Machine Learning with Scikit-learn**

#### **Example: Training a Simple Model**
```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

X = df[["Age"]]
y = df["Salary"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

print(model.predict([[30]]))  # Predict salary for age 30
```

---

### **Conclusion**

This chapter introduced data analysis with Python. Next, we will explore **Machine Learning with Python**.

---

### **Next Topic: Machine Learning with Python**
