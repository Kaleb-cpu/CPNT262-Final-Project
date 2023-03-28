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
        <a href="{getPlayer.link}" target="_blank">
      <SinglePlayer player={getPlayer} />
    </a>
    {:else}
    <h3>Player not found</h3>
    {/if}
</section>
</main> 

<style>
  main{
    flex: auto;
  }
</style>