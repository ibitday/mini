import {useEffect} from 'react';
import { backButton } from '@telegram-apps/sdk-react';
import './App.css';

function App() {
  useEffect(() => {
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, [])
  
  return (
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
  );
}

export default App;
