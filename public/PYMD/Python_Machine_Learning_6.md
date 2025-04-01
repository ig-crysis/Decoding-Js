### **Machine Learning with Python - Chapter 6**

Python is one of the most widely used languages for Machine Learning (ML) due to its extensive libraries and community support.

---

### **1. What is Machine Learning?**

Machine Learning is a subset of Artificial Intelligence (AI) that enables systems to learn from data and improve performance over time.

Types of Machine Learning:
- **Supervised Learning** (Labeled Data)
- **Unsupervised Learning** (Unlabeled Data)
- **Reinforcement Learning** (Learning from Environment)

---

### **2. Key Libraries for ML in Python**

- **Scikit-learn**: General-purpose ML library
- **TensorFlow** / **PyTorch**: Deep Learning frameworks
- **Pandas & NumPy**: Data manipulation
- **Matplotlib & Seaborn**: Data visualization

---

### **3. Building a Simple ML Model**

#### **Step 1: Import Libraries**
```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
```

#### **Step 2: Load Dataset**
```python
df = pd.read_csv("data.csv")
X = df[["Experience"]]  # Feature
y = df["Salary"]  # Target
```

#### **Step 3: Train-Test Split**
```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

#### **Step 4: Train Model**
```python
model = LinearRegression()
model.fit(X_train, y_train)
```

#### **Step 5: Make Predictions**
```python
predictions = model.predict(X_test)
print("Mean Squared Error:", mean_squared_error(y_test, predictions))
```

---

### **4. Classification with Scikit-learn**

#### **Example: Predicting if an Email is Spam**
```python
from sklearn.naive_bayes import MultinomialNB

X_train = [[1, 0, 1], [1, 1, 0], [0, 1, 1]]  # Example feature vectors
y_train = [0, 1, 0]  # 0 = Not spam, 1 = Spam

model = MultinomialNB()
model.fit(X_train, y_train)

print(model.predict([[1, 0, 0]]))  # Predict for a new email
```

---

### **5. Decision Trees and Random Forests**

#### **Example: Decision Tree Classifier**
```python
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X_train, y_train)
```

#### **Example: Random Forest Classifier**
```python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
```

---

### **6. Deep Learning with TensorFlow & Keras**

#### **Example: Neural Network with Keras**
```python
import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(10, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid")
])

model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
```

---

### **7. Model Evaluation & Hyperparameter Tuning**

- **Cross-validation**: Avoids overfitting
- **Grid Search**: Finds optimal parameters
- **Evaluation Metrics**: Accuracy, Precision, Recall, F1-score

#### **Example: Grid Search for Hyperparameter Tuning**
```python
from sklearn.model_selection import GridSearchCV

param_grid = {"n_estimators": [10, 50, 100]}
grid_search = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)
grid_search.fit(X_train, y_train)
print(grid_search.best_params_)
```

---

### **Conclusion**

This chapter introduced Machine Learning with Python. You can now explore deep learning and real-world ML projects.

