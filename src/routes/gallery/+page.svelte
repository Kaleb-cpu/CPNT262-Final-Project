<script>
	import Players from "$lib/components/Players.svelte";
</script>

<main>
  <section class="title">
    <h1>Worlds Comptent Players</h1>
    <h2>Click on each card to see each player in more details</h2>
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