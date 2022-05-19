import React, { useState } from 'react';

function MovieChoice() {
  const [user] = useState(true);

  // mapping function
  const myMovies = ['shawshank', 'fight club', 'dark knight'];

  // eslint-disable-next-line react/jsx-filename-extension
  const movieList = myMovies.map((movie) => <li>{movie}</li>);

  const isUser = <p>you are a user who likes neil breene</p>;
  const notUser = <h1>you arent a user</h1>;

  let finishingMessage;

  if (!user) {
    finishingMessage = <h5>okay, that is all, you have horrid taste</h5>;
  } else {
    finishingMessage = <h5>okay, that is all, you have good taste</h5>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Movies I like </h2>
        <ul>{movieList}</ul>
        <br />
        <h2>Movies i dont like</h2>
        {/* conditional testing */}
        <ul>
          <li>eternals</li>
          {user && <li>fateful findings</li>}
          {!user ? notUser : isUser}
        </ul>
        {finishingMessage}
      </header>
    </div>
  );
}

export default MovieChoice;
