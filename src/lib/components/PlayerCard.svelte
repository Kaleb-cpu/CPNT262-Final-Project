<script>
	export let player;
</script>

<main>
	<div class="gallery">
			<div class="player-card">
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
</main>

<style>
	.gallery{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	img{
		object-fit:fill;
		width: 180px;
		height: 200px;
	}
	a {
		text-decoration: none;
	}
	.player-card {
		border: 5px solid rgb(4, 37, 50);
		width: min-content;
		margin: auto;
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
		margin: 0%;
	}

	.player-name {
		color: rgb(209, 208, 246);
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
		color: rgb(177, 192, 167);
		margin: 0.4em;
	}

	.player-description {
		width: 30ch;
		font-size: 1.1em;
		color: rgb(40, 40, 40);
		padding: 0.3em;
	}
</style>
