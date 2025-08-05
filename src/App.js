import React from 'react';
import './App.css';
import NewsBoard from './components/NewsBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Devcourse News</h1>
        <p>최신 뉴스 요약 및 번역</p>
      </header>
      <main>
        <NewsBoard />
      </main>
      <footer className="App-footer">
        <p>© 2025 Devcourse News. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
