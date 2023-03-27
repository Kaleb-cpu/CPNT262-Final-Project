<script>
  import { page } from '$app/stores';
  import { players } from '$lib/components/players.js';
  import PlayerCard from '$lib/components/PlayerCard.svelte';

  players.find()
  
 const  getPlayer = function(item) {
    if (item.id === $page.params.item) {
      // array.find() returns the current item and stops the loop
      return true;
    } else {
      // array.find() moves on to the next item in the array
      return false;
    }
  }
  
</script>

<div class="card">
  {#if getPlayer}
    <a href="{getPlayer.link}" target="_blank">
      <PlayerCard player={getPlayer} />
    </a>
    {:else}
    <h3>Player not found</h3>
    {/if}
</div>
 