import { useState } from 'react';
import './App.css';

function App() {
  const [kiyim, setKiyim] = useState([
    'erkak kiyim taklif',
    'surxon oshhona',
    'js urganish',
  ]);
  const [zur, setZur] = useState(0);
  const [modal, setModal] = useState(false);

  function zurr() {
    setZur((e) => e + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>MyBlog</h4>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {kiyim[0]} <span onClick={() => zurr()}>👍</span> {zur}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{kiyim[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{kiyim[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );

  function Modal() {
    return (
      <div className="modal">
        <h4>mavzu</h4>
        <p>chislo</p>
        <p>oydinlik</p>
      </div>
    );
  }
}

export default App;
