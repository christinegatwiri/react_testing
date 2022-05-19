import React, {useState} from 'react';

function MovieChoice() {
  const [user] = useState(true);

  //mapping function
  const myMovies = ['shawshank','fight club', 'dark knight'];

  const movie_list = myMovies.map(movie =>
    <li>{movie}</li>);

  const is_user = <p>you are a user who likes neil breene</p>;
  const not_user = <h1>you aren't a user</h1>;

  let finishing_message;

  if(!user){
    finishing_message = <h5>okay, that is all, you have horrid taste</h5>
  } else{
    finishing_message = <h5>okay, that is all, you have good taste</h5>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Movies I like </h2>
        <ul>{movie_list}</ul>
        <br/>
        <h2>Movies i dont like</h2>
        {/* conditional testing */}
        <ul>
          <li>eternals</li>
          {user && <li>fateful findings</li>}
          {!user ? not_user : is_user}
        </ul>
        {finishing_message}
      </header>
    </div>
  );
}

export default MovieChoice;
