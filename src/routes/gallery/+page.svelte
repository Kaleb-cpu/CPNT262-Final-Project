<script>
	import Players from "$lib/components/Players.svelte";
  import { players } from '$lib/players.js'
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
  

        <Players />
</main>


<style>

  .title{
    color: lightcyan;
    margin-left: 0.5em;

  }
  main{
    flex: auto;
  }
</style>