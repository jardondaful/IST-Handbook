// src/App.js

import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <h1>IST Handbook</h1>
      </header>
      <main>
        {currentPage === 'home' && (
          <section>
            <h2>Home</h2>
            <p>This is the home page.</p>
          </section>
        )}
        {currentPage === 'about' && (
          <section>
            <h2>About IST</h2>
            <p>This is the About IST page.</p>
          </section>
        )}
        {currentPage === 'resources' && (
          <section>
            <h2>Resources</h2>
            <p>This is the Resources page.</p>
          </section>
        )}
        {currentPage === 'forms' && (
          <section>
            <h2>Google Forms for Suggestions</h2>
            <p>This is the Google Forms for Suggestions page.</p>
          </section>
        )}
      </main>
      <footer>
        <button onClick={() => handlePageChange('home')}>Home</button>
        <button onClick={() => handlePageChange('about')}>About IST</button>
        <button onClick={() => handlePageChange('resources')}>Resources</button>
        <button onClick={() => handlePageChange('forms')}>Google Forms</button>
      </footer>
    </div>
  );
}

export default App;
