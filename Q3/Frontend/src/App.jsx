import React from 'react';

// Create a Higher-Order Component (HOC) to add styling
const applyTailwindStyles = (BaseComponent) => {
  // Return a new component with additional styling
  return (props) => {
    const styleClasses = "bg-green-600 text-white py-3 px-5 rounded-lg shadow-lg";
    return <BaseComponent {...props} className={styleClasses} />;
  };
};

// Define a basic functional component
const Message = ({ className, children }) => {
  return <div className={className}>{children || "Welcome to the HOC example!"}</div>;
};

// Enhance the Message component with Tailwind styles
const StyledMessage = applyTailwindStyles(Message);

// Main application component
const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <StyledMessage />
    </div>
  );
};

export default App;
