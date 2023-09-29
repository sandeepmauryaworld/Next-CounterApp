
import {useState}  from 'react';
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  // Toggle dark mode and update the cookie 
  // edit - remove cookie code , coz its error while npm i cookie-next
  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
  };
  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;

 

  
   

