<script>
  import { page } from '$app/stores';
  import { players } from '$lib/components/players.js';
  import PlayerCard from '$lib/components/PlayerCard.svelte';

    let getPlayer;
  
  for (let player of players) {
    if (player.id === $page.params.id) {
      getPlayer = player;
      break;
    }
    // else: do nothing and move on to the next player
  }

</script>

<main>
  <h1>Player Details</h1>
<section>
  {#if getPlayer}
    <a href="{getPlayer.link}" target="_blank">
      <PlayerCard player={getPlayer} />
    </a>
    <h1>found player</h1>
    {:else}
    <h3>Player not found</h3>
    {/if}
</section>
</main> 