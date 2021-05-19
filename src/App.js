import { useState } from 'react'
import './App.css';
import Header from './containers/Header/index'
import Main from './containers/Main/index'
import SuccessPage from './pages/SuccessPage';

function App() {
  const [onSuccess, setOnSuccess] = useState(false)

  return (
    <div className="App">
      {onSuccess 
        ? ''
        : <Header />
      }

      <Main onSuccess={(status) => {status === true ? setOnSuccess(true) : setOnSuccess(false)}}/>
    </div>
  );
}

export default App;
