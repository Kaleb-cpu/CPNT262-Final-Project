<script>
  import { players } from '../players.js';
</script>

<main>
  <a href="{players[0].link}"><div class="player-card">
    <div class="player-name">
      <img src="{players[0].image}" width="350" height="200" alt="messi's">
      <h2>{players[0].name}</h2>
    </div>

    <div class= "player-identity">
      <p><span style="font-weight: bold;">Age:</span> {players[0].age}</p>
      <p><span style="font-weight: bold;">Height:</span> {players[0].height}</p>
      <p><span style="font-weight: bold;">Country:</span> {players[0].country}</p>
      <p><span style="font-weight: bold;">Team:</span> {players[0].team}</p>
      <p><span style="font-weight: bold;">Position:</span> {players[0].position}</p>
      <p><span style="font-weight: bold;">Goals:</span> {players[0].goals}</p>
    </div>

    <div class="player-description">
      <p>{players[0].description}</p>
    </div>
</div>
</a>
</main>

<style>
   a{
    text-decoration: none;
  }
  .player-card{
    border: 5px solid rgb(4, 37, 50);
    width: max-content;
    margin: auto;
    border-radius: 5px;
    -webkit-transition: background-color 2s ease-
    
    out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  }

  .player-card:hover{
      background-color: rgb(127, 115, 99);
      cursor: pointer;
    }
  .player-card h2{
    text-align: center;
    margin: 0%;
  }

  .player-name{
    color: rgb(209, 208, 246);
    font-size: 1.4em;
  }

  .player-identity{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1em 1em;
    font-size: 1.1rem;
  }

  .player-identity p{
    color: rgb(177, 192, 167);
  }

  .player-description{
    width: 30ch;
    margin: auto;
    font-size: 1.1em;
    color: rgb(40, 40, 40);
  }
</style>