<script>
  import { page } from '$app/stores';
  import { players } from '$lib/components/players.js';
  import PlayerCard from '$lib/components/PlayerCard.svelte';

  let getPlayer = 'h';
  
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
  <h1>Player Details</h1>

 
<section>
  {#if getPlayer}
    <h1>found</h1>

    {:else}
    <h3>Player not found</h3>
    {/if}
</section>
</main> 