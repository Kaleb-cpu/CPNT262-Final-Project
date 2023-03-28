<script>
	import PlayerCard from "$lib/components/PlayerCard.svelte";
  import { players } from '$lib/components/players.js';
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
        <PlayerCard {player} />
      </a>
    {/each}
  </div>
</main>


<style>

  .title{
    color: lightcyan;
    margin-left: 0.5em;

  }
  main{
    flex: auto;
    background-color: #377888;
  }
</style>