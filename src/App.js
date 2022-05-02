import './App.css';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiGooglePlay, mdiApple } from '@mdi/js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mt-5 text-center" style={{ fontSize: 50 + 'px' }}>I'm Tom Fong</h1>
        <span className="text-center" style={{ fontSize: 250 + 'px', color: '#00a5aa', fontWeight: 500 }}>TF</span>
        <h4 className="mt-3 mx-4 text-center">Welcome to view my profile and projects</h4>
        <div className="mt-3 mb-5 d-flex justify-content-between">
          <a href="https://github.com/tomfong"  target="_blank" rel="noreferrer"><Icon className="mx-4" path={mdiGithub} size={2} color="white"></Icon></a>
          <a href="https://www.linkedin.com/in/tom-lh-fong"  target="_blank" rel="noreferrer"><Icon className="mx-4" path={mdiLinkedin} size={2} color="white"></Icon></a>
          <a href="https://apps.apple.com/us/developer/lam-hang-fong/id1621121555"  target="_blank" rel="noreferrer"><Icon className="mx-4" path={mdiApple} size={2} color="white"></Icon></a>
          <a href="https://play.google.com/store/apps/dev?id=7271828593012906629"  target="_blank" rel="noreferrer"><Icon className="mx-4" path={mdiGooglePlay} size={2} color="white"></Icon></a>
        </div>
        <h5 className="mt-4 mx-4 text-center">If you want to support me or my projects, welcome to buy me a Coffee or Milk Tea ☕</h5>
        <div className="mt-3">
          <p><a href="https://www.buymeacoffee.com/tomfong" target="_blank" rel="noreferrer"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="tomfong" /></a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
