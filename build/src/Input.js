import React from 'react';

export default function Input() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1ur9b0.jpg',
  });

  function changeState(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setMeme(function (prevState) {
      return { ...prevState, [name]: value };
    });
  }

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  function returnUrl() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme(function (prev) {
      return { ...prev, randomImage: url };
    });
  }

  return (
    <div className="container">
      <div className="input--container">
        <input
          type="text"
          onChange={changeState}
          name="topText"
          placeholder="Top caption"
          value={meme.topText}
        />
        <input
          type="text"
          onChange={changeState}
          name="bottomText"
          placeholder="Bottom caption"
          value={meme.bottomText}
        />
      </div>
      <button onClick={returnUrl}>Get a new meme</button>
      <div className="meme">
        <img alt="" src={meme.randomImage} className="meme--image" />
        <p className="meme--text top--text">{meme.topText}</p>
        <p className="meme--text bottom--text">{meme.bottomText}</p>
      </div>
    </div>
  );
}
