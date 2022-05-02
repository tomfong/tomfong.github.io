import './App.css';
import linktree from './img/linktree.png';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiGooglePlay, mdiApple } from '@mdi/js';

function App() {
  return (
    <div className="App">
      <header className="App-header mt-sm-4 pt-sm-4">
        <h1 className="mt-5 text-center" style={{ fontSize: 50 }}>I'm Tom Fong</h1>
        <span className="text-center" style={{ fontSize: 250, color: '#00a5aa', fontWeight: 500 }}>TF</span>
        <h4 className="mx-3 text-center">View my projects and talk to me in</h4>
        <div className="d-flex justify-content-between">
          <a href="https://linktr.ee/tomfonghk" target="_blank" rel="noreferrer">
            <img src={linktree} style={{maxWidth: 250}} />
          </a>
        </div>
        <h5 className="mt-5 mx-4 text-center">If you want to support me or my projects, welcome to buy me a Coffee or Milk Tea ☕</h5>
        <div className="">
          <p><a href="https://www.buymeacoffee.com/tomfong" target="_blank" rel="noreferrer"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="tomfong" /></a></p>
        </div>
      </header>
      <footer className='App-footer'>
        <span>© 2022 Tom Fong</span>
      </footer>
    </div>
  );
}

export default App;
