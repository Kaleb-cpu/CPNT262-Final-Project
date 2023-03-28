<script>
  import { players } from '$lib/components/players.js';
	import Players from '$lib/components/Players.svelte';
</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<main>
  <section class="title">
    <h1>The Worlds Greatest Soccer Players</h1>
    <h2>Click on each card to see each player in more detail</h2>
  </section>
  <div class="player-card">
        {#each players as player}
        <a href="/gallery/{player.id}">
          <Players {player} />
        </a>
    {/each}
  </div>
</main>


<style>

  .player-card{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0.5em;
  }
  
  .title{
    text-align: center;
  }
  main{
    flex: auto;
    background-color: rgb(250, 235, 215);
  }

  .title{
    color: rgb(81, 95, 95);
    margin-left: 0.5em;
    font-size: clamp(1rem, 10vw, 2rem); 
    margin-bottom: 1em;

  }
</style>