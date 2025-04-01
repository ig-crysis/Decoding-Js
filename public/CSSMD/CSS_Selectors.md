### **CSS Selectors**

CSS Selectors are used to target and apply styles to specific HTML elements. They help define which elements should be affected by a given CSS rule.

---

### **Types of CSS Selectors**

CSS provides several types of selectors to style elements efficiently.

#### **1. Universal Selector (`*`)**
Applies styles to all elements on the page.
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### **2. Element (Type) Selector**
Targets specific HTML elements.
```css
p {
    color: blue;
}
```

#### **3. Class Selector (`.`)**
Targets elements with a specific class.
```css
.my-class {
    font-size: 18px;
    color: green;
}
```
```html
<p class="my-class">This paragraph uses the class selector.</p>
```

#### **4. ID Selector (`#`)**
Targets an element with a unique ID.
```css
#header {
    background-color: black;
    color: white;
}
```
```html
<h1 id="header">This is a header.</h1>
```

#### **5. Grouping Selector (`,`)**
Applies the same style to multiple elements.
```css
h1, h2, p {
    font-family: Arial, sans-serif;
}
```

#### **6. Descendant Selector (` `)**
Targets elements inside a specific parent.
```css
div p {
    color: red;
}
```
```html
<div>
    <p>This paragraph inside a div will be red.</p>
</div>
```

#### **7. Child Selector (`>`)**
Targets direct child elements.
```css
div > p {
    font-weight: bold;
}
```
```html
<div>
    <p>This paragraph is a direct child and will be bold.</p>
</div>
```

#### **8. Adjacent Sibling Selector (`+`)**
Targets an element immediately following another.
```css
h1 + p {
    font-style: italic;
}
```
```html
<h1>Title</h1>
<p>This paragraph is right after the h1 and will be italic.</p>
```

#### **9. General Sibling Selector (`~`)**
Targets all siblings after a specified element.
```css
h1 ~ p {
    color: purple;
}
```

---

### **Combining Selectors**

You can combine selectors for more specificity:
```css
div.container p.highlight {
    background-color: yellow;
}
```

---

### **Specificity in CSS**

CSS follows a **specificity hierarchy** when applying styles:

```mermaid
graph TD;
    A[Universal Selector (*), Lowest Specificity] --> B[Element Selector]
    B --> C[Class, Attribute, and Pseudo-Class Selectors]
    C --> D[ID Selector]
    D --> E[Inline Styles (Highest Specificity)]
```

- **Inline styles (`style=""`)** have the highest priority.
- **ID selectors (`#id`)** are more specific than classes.
- **Classes (`.class`) and attributes** have medium specificity.
- **Element selectors (`p, h1`)** have lower specificity.
- **Universal selector (`*`)** has the lowest priority.

---

### **Conclusion**

CSS Selectors allow developers to target HTML elements efficiently. Understanding specificity helps in resolving style conflicts and writing maintainable CSS.

---

### **Next Topic: CSS Colors and Backgrounds**
