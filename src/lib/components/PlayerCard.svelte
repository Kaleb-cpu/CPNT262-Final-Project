<script>
	export let player;
</script>

<main>
	<div class="gallery">
			<div class="player-card">
				<div class="player-information">
				<div class="player-name">
					<img src={player.image} width="350" height="200" alt="messi's" />
					<h2>{player.name}</h2>
				</div>

				<div class="player-identity">
					<p><span style="font-weight: bold;">Age:</span> {player.age}</p>
					<p><span style="font-weight: bold;">Height:</span> {player.height}</p>
					<p><span style="font-weight: bold;">Country:</span> {player.country}</p>
					<p><span style="font-weight: bold;">Team:</span> {player.team}</p>
					<p><span style="font-weight: bold;">Position:</span> {player.position}</p>
					<p><span style="font-weight: bold;">Goals:</span> {player.goals}</p>
				</div>

				<div class="player-description">
					<p>{player.description}</p>
				</div>
			</div>
			</div>
			</div>

</main>

<style>

main{
	flex: auto;
}
	.gallery{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		display: block;
		margin-bottom: 1em;

	}
	img{
		object-fit:cover;
		width: 100%;
		height: initial;
		margin: auto;
		display: block;
	}

	.player-information{
		height: 100vh;
	}
	.player-card {
		border: 5px solid rgb(4, 37, 50);
		width: min-content;
		height: max-content;
		margin: auto;
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
	}
	.player-card h2 {
		text-align: center;
	}

	.player-name {
		color: rgb(29, 29, 32);
		font-size: 1.4em;
		text-align: center;
	}

	.player-identity {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0;
		text-align: center;
		font-size: 1rem;
	}

	.player-identity p {
		color: rgb(24, 25, 23);
		margin: 0.4em;
	}

	.player-description {
		width: 30ch;
		font-size: 1.1em;
		color: rgb(40, 40, 40);
		padding: 0.3em;
	}
</style>
