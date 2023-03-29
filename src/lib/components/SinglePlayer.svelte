<script>
	export let player;
</script>

<main>
	<div class="player">
		<div class="player-card">
			<img src={player.imageFullshot} width="350" height="200" alt="{player.id}'s picture" />
			<div class="player-identity">
				<p><span style="font-weight: bold;">Age:</span> {player.age}</p>
				<p><span style="font-weight: bold;">Height:</span> {player.height}</p>
				<p><span style="font-weight: bold;">Country:</span> {player.country}</p>
				<p><span style="font-weight: bold;">Team:</span> {player.team}</p>
				<p><span style="font-weight: bold;">Position:</span> {player.position}</p>
				<p><span style="font-weight: bold;">Goals:</span> {player.goals}</p>
			</div>
		</div>

		<div class="player-description">
			<h2>Who is {player.name}?</h2>
			<p>{player.longDescription}</p>
		</div>
	</div>
</main>

<style>
	
	h2 {
		font-size: clamp(1rem, 10vw, 2rem);
		margin-bottom: 0.5em;
		font-weight: bold;
	}

	.player {
		margin-bottom: 3em;
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: initial;
		display: block;
		border-radius: 15px;
	}

	.player-card {
		margin: auto;
		width: clamp(10rem, 40vw, 40rem);
		padding: 0.5em;
		border-radius: 5px;
		-webkit-transition: background-color 2s ease- out;
		-moz-transition: background-color 2s ease-out;
		-o-transition: background-color 2s ease-out;
		transition: background-color 2s ease-out;
	}

	.player-card:hover {
		background-color: rgb(127, 115, 99);
		cursor: pointer;
		border-radius: 15px;
	}

	.player-identity {
		font-size: clamp(0.5rem, 2.5vw, 1.9rem);
		padding-top: 1em;
	}

	.player-identity p {
		color: rgb(59, 52, 43);
	}

	.player-description {
		width: 50ch;
		font-size: clamp(0.5rem, 2.5vw, 1.5rem);
		color: rgb(40, 40, 40);
	}

</style>
