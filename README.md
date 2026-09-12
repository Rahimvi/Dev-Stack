# 🚀 DevStack — Interactive Technology Explorer Dashboard

DevStack is a responsive web application designed for developers to explore modern software technologies, filter components by category, and dynamically assemble their ideal software stack.

---

## 🛠️ Built With

- **React 19** — UI Component Architecture
- **Tailwind CSS & DaisyUI** — Responsive Styling & Component System
- **TypeScript** — Type Safety & Data Models
- **React-Toastify** — User Notification System

---

## ✨ Key Features

- **Interactive Technology Grid**: Browse tech cards filtered by difficulty, category chips, ratings, and custom badges.
- **Real-Time Stack Management**: Add technologies to your personal panel with instant duplicate validation, disabling buttons for selected items.
- **Dynamic Feedback & Alerts**: Interactive notifications for adding, duplicate attempts, single removals, and clearing the entire stack.

---

## ❓ React Concepts Q&A

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript file. It is used in React because it makes component templates easy to read, write, and maintain while retaining the full programming power of JavaScript.

### 2. What is the difference between props and state?

- **Props (Properties)**: Read-only data passed down from a parent component to a child component. The child component cannot modify props directly.
- **State**: Data managed internally inside a component that can change over time. When state updates, the component automatically re-renders to display the new UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook creates local component state to store dynamic data. In this project, `useState<TechItem[]>([])` was used inside `Technologies.tsx` to store and manage the array of selected items in the "Your Stack" panel.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in React components, such as API calls or DOM interactions. In data-fetching scenarios, it triggers an asynchronous `fetch()` call once when the component mounts so that external JSON data loads smoothly without blocking the initial UI render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React relies on the `key` prop to identify which items in a list have changed, been added, or been removed. Unique keys ensure efficient DOM updates during re-renders and prevent unexpected state bugs in list rendering.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering is displaying different UI elements based on specific logical conditions (like `if`, `? :`, or `&&`).

**Example from this project**: Displaying the empty state message when the stack array length is zero:

```tsx
{
  selectedStack.length === 0 ? (
    <div className="text-center text-slate-400">Your stack is empty.</div>
  ) : (
    <div className="flex flex-col gap-3">{/* Map selected stack cards */}</div>
  );
}
```
