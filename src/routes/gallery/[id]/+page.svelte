<script>
  import { page } from '$app/stores';
  import { players } from '$lib/components/players.js';
  import SinglePlayer from '$lib/components/SinglePlayer.svelte';

  let getPlayer;
  
  for (let player of players) {
    if (player.id === $page.params.id) {
      getPlayer = player;
      break;
    }
    // else: do nothing and move on to the next player
  }
  console.log(getPlayer)

</script>

<main>
<section>
  {#if getPlayer}
        <a href="{getPlayer.link}" target="_blank"><h1>{getPlayer.name}</h1></a>
      <p><SinglePlayer player={getPlayer} /></p>
    {:else}
    <h3>Player not found</h3>
    {/if}
</section>
</main> 

<style>


  main{
    flex: auto;
    background-color: rgb(250, 235, 215);
  }
  h1 {
	font-size: clamp(1rem, 10vw, 3rem);
	text-align: center;
	color: #292c34;
	margin-bottom: 2em;
	font-weight: bold;
}

a:hover{
  opacity: 80%;
}
</style>