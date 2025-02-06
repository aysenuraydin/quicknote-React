# Quick Note <img src="https://www.svgrepo.com/show/504665/notes.svg" width="40"> 
## React - Tailwind CSS Project

This project is a web application developed using **React** and **Tailwind CSS**. The application leverages modern, efficient technologies to build a responsive and user-friendly interface.

## Project Overview

This project utilizes React's functional components and Tailwind CSS for fast, customizable styling to create a clean and modern web experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A highly customizable and modular CSS framework.
- **React Hooks**: React features for managing state and side effects in functional components.
- **React Router**: Declarative routing for React applications.

## React Hooks Used

1. **`useState`**
   - **Description**: This hook is used for local state management within a component. It triggers a re-render when the state changes.
   - **Example Usage**:
     ```javascript
     const [count, setCount] = useState(0);
     const increment = () => setCount(count + 1);
     ```

2. **`useReducer`**
   - **Description**: Used as an alternative to `useState` for more complex state logic. It is useful for managing larger, more complex states.
   - **Example Usage**:
     ```javascript
     const initialState = { count: 0 };
     function reducer(state, action) {
       switch (action.type) {
         case 'increment':
           return { count: state.count + 1 };
         default:
           throw new Error();
       }
     }
     const [state, dispatch] = useReducer(reducer, initialState);
     ```

3. **`useContext`**
   - **Description**: Allows sharing a global state across components without prop drilling.
   - **Example Usage**:
     ```javascript
     const ThemeContext = React.createContext('light');
     const theme = useContext(ThemeContext);
     ```

4. **`useEffect`**
   - **Description**: Used for managing side effects like data fetching, API calls, or DOM manipulation after rendering.
   - **Example Usage**:
     ```javascript
     useEffect(() => {
       console.log('Component mounted or updated');
     }, [dependency]);  // Runs when the dependency changes
     ```

5. **`useRef`**
   - **Description**: Provides a way to access DOM elements directly and keep track of mutable values without causing a re-render.
   - **Example Usage**:
     ```javascript
     const inputRef = useRef(null);
     const focusInput = () => {
       inputRef.current.focus();
     };
     ```

## Project Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aysenuraydin/quicknote-React.git
   ```




