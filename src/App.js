import logo from './logo.svg';
import './App.css';

function App() {
  // var sum = 5;
  var name = 'Newton School'
  var num1  = 5;
  var num2 = 6;
  let obj = {
    name: 'name',
    age: 30
  }
  var arr = [1,2,3,4,5];

  const fn = () => {
    console.log('akuegf');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{name}</h2>
        Sum = {5+6}
        temp = {num1 + num2}
        {/* obj = {obj}
        arr = {arr} */}
        {/* {      js code    } */}

        {fn()}

        {/* {if else} */}
        {/* if - && = condition && execution
        if else - ternary opearator - consition ? true impl: false impl */}


        {arr.map((item) => (
          <div>{item}</div>
          ))}

        <a
          className="App-link"
          href="https://www.newtonschool.co/"
          target="_blank"
        >
          Newton School Website
        </a>
      </header>
    </div>
  );
}

export default App;

// JSX - JavaScript XML - // templating

// Snapshot - Rough Version of actual DOM
// New Snapshot (if any data chnages/re-render component)
// Diff - New - Old

// Render the changes/diff

// without refresh - page updated - (url, temp data, login check)
// data/bandwidth/internet usage - saved