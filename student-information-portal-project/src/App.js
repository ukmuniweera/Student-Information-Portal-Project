import { useState } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import {students} from './data/StudentsDb'

function App() {
  const [fntSize, setFontSize] = useState(16);
  return (
    <div className="App">
      <h1>Student Information Portal</h1>
      <hr/>
      <div align="left" >
        Font Size:
        <button onClick={()=>{setFontSize(16)}}>S</button>
        <button onClick={()=>{setFontSize(20)}}>M</button>
        <button onClick={()=>{setFontSize(24)}}>L</button>
      </div>
      <hr/>
      <table width="100%" style={{ fontSize: `${fntSize}px`}}>
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
