### **3. HTML Elements and Tags**

#### **What are Elements?**
Elements are the building blocks of HTML. An element usually consists of:

1. **Opening Tag**: `<tagname>`
2. **Content**: Text or nested elements
3. **Closing Tag**: `</tagname>`

Example:
```html
<p>This is a paragraph.</p>
```

#### **Void Elements**
These are self-closing elements and do not have a closing tag. Examples include:
- `<br>`: Line break
- `<img>`: Image
- `<input>`: Input field

---

### **4. HTML Attributes**

Attributes provide additional information about an element. They are written inside the opening tag.

#### **Common Attributes**
- **`id`**: Unique identifier for an element.
- **`class`**: Groups elements with similar styles.
- **`src`**: Specifies the source of an external file.
- **`href`**: Specifies the URL for a link.

#### **Example**
```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
<img src="image.jpg" alt="Description" width="200">
```
---

### **5. HTML Forms and Input**

Forms allow users to input data and send it to a server.

#### **Form Elements**
1. **`<form>`**: Defines the form.
2. **`<input>`**: Collects user data.
3. **`<button>`**: Submits the form.

#### **Example**
```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Submit</button>
</form>
```
---

### **6. HTML Semantic Elements**

Semantic elements provide meaning to the content, making it easier for browsers and search engines to understand.

#### **Examples of Semantic Elements**
1. `<header>`: Represents the header section.
2. `<nav>`: Defines navigation links.
3. `<article>`: Represents an independent piece of content.
4. `<footer>`: Represents the footer section.

#### **Example Layout**
```html
<header>
    <h1>Website Title</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<main>
    <article>
        <h2>Article Title</h2>
        <p>This is an article.</p>
    </article>
</main>
<footer>
    <p>&copy; 2025 My Website</p>
</footer>
