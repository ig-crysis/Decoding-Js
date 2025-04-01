### **CSS Flexbox**

Flexbox (Flexible Box Layout) is a CSS layout model that allows responsive arrangement of elements within a container.

---

### **1. Defining a Flex Container**

Use `display: flex;` on a parent element to enable Flexbox.
```css
.container {
    display: flex;
}
```

---

### **2. Main and Cross Axis**

Flexbox works with two axes:
- **Main Axis**: Defined by `flex-direction` (`row` or `column`).
- **Cross Axis**: Perpendicular to the main axis.

```mermaid
graph LR;
    A[Main Axis (Row)] --> B[Item 1] --> C[Item 2] --> D[Item 3];
    subgraph Cross Axis
    E[Vertical Alignment]
    end
```

---

### **3. Flex Direction (`flex-direction`)**

Defines the direction of items inside the flex container.
```css
.container {
    flex-direction: row; /* row | column | row-reverse | column-reverse */
}
```

---

### **4. Justify Content (`justify-content`)**

Controls horizontal alignment along the main axis.
```css
.container {
    justify-content: space-between; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
}
```

---

### **5. Align Items (`align-items`)**

Controls vertical alignment along the cross axis.
```css
.container {
    align-items: center; /* flex-start | flex-end | center | stretch | baseline */
}
```

---

### **6. Align Self (`align-self`)**

Aligns a specific item within the flex container.
```css
.item {
    align-self: flex-end;
}
```

---

### **7. Flex Wrap (`flex-wrap`)**

Defines whether items wrap onto multiple lines.
```css
.container {
    flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
}
```

---

### **8. Flex Grow, Shrink & Basis**

#### **Flex Grow (`flex-grow`)**
Specifies how much an item grows relative to others.
```css
.item {
    flex-grow: 1; /* Default is 0 */
}
```

#### **Flex Shrink (`flex-shrink`)**
Determines how items shrink when space is limited.
```css
.item {
    flex-shrink: 2; /* Default is 1 */
}
```

#### **Flex Basis (`flex-basis`)**
Sets an initial size before flexing.
```css
.item {
    flex-basis: 100px; /* Can be px, %, auto */
}
```

---

### **9. Shorthand: `flex`**

Combines `flex-grow`, `flex-shrink`, and `flex-basis`.
```css
.item {
    flex: 1 1 100px; /* flex-grow flex-shrink flex-basis */
}
```

---

### **10. Align Content (`align-content`)**

Controls spacing between multiple flex lines.
```css
.container {
    align-content: space-around;
}
```

---

### **Conclusion**

CSS Flexbox is a powerful tool for creating responsive layouts by controlling element alignment, spacing, and sizing.

---

### **Next Topic: CSS Grid**
