import { useState } from 'react';
import './App.css';
import OnGoing from './OnGoing';
import Completed from './Completed';
import Dropped from './Dropped';
import Important from './Important';

function App() {
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [todo, setTodo] = useState('');
  const [list, setList] = useState([{id: 1, text: "Reading"}]);
  const [completed, setCompleted] = useState([{id: 2, text: "Travelling"}]);
  const [drop, setDrop] = useState([{id:1, text:'Cooking'}]);
  const [important, setImportant] = useState([{id:1, text:'Assignment'}]);
  

  return (
    <div className="App">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>

      <div className='subHeading'>
        <h2>Hello, it's {weekDay[new Date().getDay()]} ! Focus on your day</h2>
      </div>

      <div className='todoinput'>
        <div className='left'>
          <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Add Item ...' />
        </div>

        <div className='right erase'>
          <i className='fas fa-eraser' title='clear' onClick={() => setTodo("")}></i>
        </div>

        <div className='rightEnd add'>
          {todo?
          <i className='fas fa-plus' onClick={() => {
            setList([...list, {id:Date.now(), text:todo}]);
            setTodo("");
          }}></i>
          :null}
        </div>
      </div>

      <div className='container done'>
        <h3>Completed ({completed.length})</h3>
        {
          completed.map((complete, index) => {
            return <Completed key={index} index={index} complete={complete} completed={completed} setCompleted={setCompleted} />
          })
        }
      </div>

      <div className='container important'>
        <h3>Important ({important.length})</h3>
        {
          important.map((imp, index) => {
            return <Important key={index} index={index} imp={imp} completed={completed} setCompleted={setCompleted} important={important} setImportant={setImportant} />
          })
        }
      </div>

      <div className='container onGoing'>
        <h3>On Going ({list.length})</h3>
        {
          list.map((obj, index) => {
            return <OnGoing key={index} index={index} obj={obj} list={list} setList={setList} completed={completed} setCompleted={setCompleted} important={important} setImportant={setImportant} drop={drop} setDrop={setDrop} />
          })
        }
      </div>

      <div className='container dropped'>
        <h3>Dropped ({drop.length})</h3>
        {
          drop.map((dropped, index) => {
            return <Dropped key={index} index={index} dropped={dropped} list={list} setList={setList} drop={drop} setDrop={setDrop} />
          })
        }
      </div>
    </div>
  );
}

export default App;
