<script>
  import { page } from '$app/stores';
  import { players } from '$lib/players.js';
  import Players from "$lib/components/Players.svelte";

  let getPlayer;
  
  for (let player of players) {
    if (player.name === $page.params.singlePlayer) {
      getPlayer = player;
      break;
    }
    // else: do nothing and move on to the next player
  }
</script>
 <h1>Player Details</h1>
  <section>
    {#if getPlayer}
    <a href="{getPlayer.link}" target="_blank">
      <Players player={getPlayer} />
    </a>
    {:else}
    <h3>Player not found</h3>
    {/if}
  </section>