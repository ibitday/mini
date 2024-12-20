import { useEffect } from 'react';
import { init, backButton, useLaunchParams, retrieveLaunchParams } from '@telegram-apps/sdk-react';

import './App.css';

function App() {
  init()
  const lp = useLaunchParams()
 
const {initDataRaw } = retrieveLaunchParams()

console.log(initDataRaw)

  backButton.mount()
  useEffect(() => {
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <h2>start parameter: {lp.startParam}</h2>
    </div>
  );
}

export default App;
