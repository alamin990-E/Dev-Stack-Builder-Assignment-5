 Name of my project is "Dev Stack Builder"

A litte description - Dev Stack Builder is a simple web application based on React and TypeScript. It allows users to explore different technologies. Users can also add technologies to their stack, remove them, and easily manage their selected technologies.
 
Techonology I used 
1. React.js
2. TypeScript
3. Tailwind CSS
4. DaisyUI
5. React Icons
6. React-Toastify
7. Vite
8. JSON

3 features abour my project -
1. Users can add technologies to their stack and remove them when they want
2. Users can remove all selected technologies from their stack at once.
3. Users can get toast messages when they add, remove, or try to add the same technology again.

Answering the React Question

1. What is JSX, and why is it used in React?
JSX is a syntax where we can write HTML-like code inside JavaScript or TypeScript. I use JSX to create different UIs for my components.

2. What is the difference between Props and State?
With the help of props, we can send data from a parent component to a child component. State is the data of a component. State can change, but a child component cannot change props directly.

3. What does the useState hook do, and where did you use it in this project?
With the help of useState, we can store changeable data and change the data. I use useState to store selected technologies. When I click the "Add to Stack" button, the selected technology is added to the state. When I remove a technology or click "Remove All", the state is updated accordingly.

4. What does the useEffect hook do, and did you use it in this project?
useEffect helps to create side effects in React components, such as loading data from an API. I didn’t use useEffect because I used React 19’s use hook with Suspense to load data from a JSON file and display it dynamically.

5. Why does every item in a map() list need a unique key prop?
With the help of key, React can understand which item it is and when an item changes, which item needs to be updated. So, every item in a map() needs a unique key.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing something conditionally in the UI. I used conditional rendering in the "Your Stack" section. When "Your Stack" is empty, it shows a message "Your stack is empty", and when users select a technology, it shows the technology cards.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
I pass data from a parent component to a child component with the help of props. A child can send something back to the parent by calling a function passed from the parent through props.














