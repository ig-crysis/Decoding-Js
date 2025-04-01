### **CSS Typography**

Typography in CSS controls how text appears on a webpage. It includes properties like font selection, size, weight, line spacing, and text alignment.

---

### **1. Font Family (`font-family`)**

Defines the typeface for text. Use multiple font names as fallbacks.
```css
p {
    font-family: "Arial", sans-serif;
}
```

Common font families:
- `serif` (e.g., Times New Roman)
- `sans-serif` (e.g., Arial, Helvetica)
- `monospace` (e.g., Courier New)
- `cursive` (e.g., Brush Script MT)

---

### **2. Font Size (`font-size`)**

Controls text size. Can be specified in:
- Pixels (`px`): `font-size: 16px;`
- Relative (`em`, `%`): `font-size: 1.2em;`
- Viewport (`vw`, `vh`): `font-size: 2vw;`

Example:
```css
h1 {
    font-size: 24px;
}
```

---

### **3. Font Weight (`font-weight`)**

Defines thickness of text.
```css
p {
    font-weight: bold;
}
```
Values: `normal`, `bold`, `lighter`, `bolder`, `100-900`

---

### **4. Font Style (`font-style`)**

Sets text as normal, italic, or oblique.
```css
p {
    font-style: italic;
}
```

---

### **5. Line Height (`line-height`)**

Controls space between lines of text.
```css
p {
    line-height: 1.5;
}
```

---

### **6. Text Alignment (`text-align`)**

Aligns text horizontally.
```css
p {
    text-align: center;
}
```

Options: `left`, `right`, `center`, `justify`

---

### **7. Text Decoration (`text-decoration`)**

Adds styles like underline or strikethrough.
```css
a {
    text-decoration: none;
}
```

Options: `underline`, `overline`, `line-through`, `none`

---

### **8. Text Transformation (`text-transform`)**

Changes text case.
```css
p {
    text-transform: uppercase;
}
```

Options: `uppercase`, `lowercase`, `capitalize`

---

### **9. Letter and Word Spacing**

Adjusts spacing between letters and words.
```css
p {
    letter-spacing: 2px;
    word-spacing: 5px;
}
```

---

### **10. Using Google Fonts**

You can use custom fonts from Google Fonts.
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
```

---

### **Conclusion**

CSS Typography is crucial for readability and aesthetics. Understanding fonts, sizes, spacing, and alignment helps create a better user experience.

---

### **Next Topic: CSS Flexbox**
