import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [val1, setval1] = useState("")
  let [temp, settemp] = useState("")
  let [ans, setans] = useState("")


  return (
    <>
      <div className='main'>
        <div>
          <input type="text" name="" id="" style={{ padding: "20px 0", width: "100%", border: "0", fontSize: "33px", textAlign: "right" }} value={ans} />
        </div>
        <div className='border'></div>
        <div className='value'>
          <input type="button" name="" id="" value={7} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={8} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={9} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={"*"} onClick={(e) => {
            setval1(ans)
            setans('')
            settemp(e.target.value)
          }} />
        </div>
        <div className='value'>
          <input type="button" name="" id="" value={4} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={5} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={6} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={"-"} onClick={(e) => {
            setval1(ans)
            setans('')
            settemp(e.target.value)
          }} />
        </div>
        <div className='value'>
          <input type="button" name="" id="" value={1} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={2} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={3} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={"+"} onClick={(e) => {
            setval1(ans)
            setans('')
            settemp(e.target.value)
          }} />
        </div>
        <div className='value'>
          <input type="button" name="" id="" value={"CLR"} onClick={(e) => { setans('') }} />
          <input type="button" name="" id="" value={0} onClick={(e) => { setans(ans + e.target.value) }} />
          <input type="button" name="" id="" value={"/"} onClick={(e) => {
            setval1(ans)
            setans('')
            settemp(e.target.value)
          }} />
          <input type="button" value={"="} onClick={(e) => {
            if (temp === '+') {
              setans(Number(val1) + Number(ans))
            }
            else if (temp === '-') {
              setans(Number(val1) - Number(ans))
            }
            else if (temp === '*') {
              setans(Number(val1) * Number(ans))
            }
            else if (temp === '/') {
              if(Number(ans) == 0)
              {
                setans("Can't Divide By 0")
              }
              else
              {
                setans(Number(val1) / Number(ans))
              }
            }
          }} />
        </div>
      </div>
    </>
  );
}

export default App;
