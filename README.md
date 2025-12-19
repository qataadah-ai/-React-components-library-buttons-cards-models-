# React UI Component Library

A simple and reusable **React UI Component Library** built for learning and practical use.
This project includes commonly used components like **Button**, **Card**, and **Model**, designed with clean structure and reusable patterns.

---

## 📌 Project Description

This library helps you avoid writing the same UI code again and again.
Each component is:

* Reusable
* Easy to customize using props
* Beginner‑friendly
* Suitable for small to medium React projects

The goal of this project is to understand **component reusability, props, and layout separation** in React.

---

## ⚙️ Installation Instructions

### 1️⃣ Clone the project

```bash
git clone (https://github.com/qataadah-ai/-React-components-library-buttons-cards-models-)
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

---

## 🚀 Usage Guidelines

### Import components

```jsx
import { Button, Card, Modal } from "./index";
```

---

### Button Component

```jsx
<Button
  text="Click Me"
  type="primary"
  onClick={() => alert("Button clicked")}
/>
```

**Props:**

* `text` → Button label
* `type` → primary | secondary | danger
* `onClick` → click handler

---

### Card Component

```jsx
<Card
  title="My Card"
  img="https://example.com/image.jpg"
>
  <p>This is card content</p>
</Card>
```

**Props:**

* `title` → Card heading
* `img` → Optional image URL
* `children` → Card content

---

### Modal Component

```jsx
<Modal isOpen={open} onClose={() => setOpen(false)}>
  <h3>Hello Modal</h3>
  <p>This modal is reusable</p>
</Modal>
```

**Props:**

* `isOpen` → Controls visibility
* `onClose` → Close handler
* `children` → Modl content

---

