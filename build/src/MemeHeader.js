import React from 'react';

export default function MemeHeader() {
  return (
    <header className="header">
      <div className="header--text--image">
        <img src="memelogo.png" alt="" className="logo" />
        <h1 className="page--title">Meme Generator</h1>
      </div>
    </header>
  );
}
