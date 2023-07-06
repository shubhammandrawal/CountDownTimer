import './App.css';
import { useEffect , useState} from 'react';

function App() {
  const [time, setTime] = useState(0);

  const handleClick = (e) =>{
    if(e.key === "Enter"){
      const inputTime = Math.floor(e.target.value);
      if(isNaN(inputTime)){
        setTime(0)
      } else{
        setTime(inputTime)
      }
    }
  }

  useEffect(()=>{
    let intervalId;
    if(time > 0){
      intervalId = setInterval(()=>{
        setTime(prevTime => prevTime - 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [time])

  return <div className="App">
    <input type="text" onKeyDown={handleClick} />
    <div>{time}</div>
  </div>
}

export default App;
