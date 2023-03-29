<svelte:head>
	<title>About</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<main>
	<section class="about-us">
		<div class="about">
			<img class="pic" src="./images/about.jpg" alt="man kicking a soccer ball" />
			<div class="text">
				<h2>About Us</h2>
				<h5>Football Journalists</h5>
				<p>
					We are football journalists. We really love the game of Football or soccer depending on
					where you live. We have had the privilege of meeting one of the greatest soccer players
					and we also had the opportunity to talk with them and ask them some personal questions. We
					also have met coaches, managers, presidents and team captains. And we continue to meet
					with more and engage everything we learn and we encounter we release in this website. If
					you have any questions feel free to contact us!!
				</p>
				<div class="data">
					<a href="./contact" class="hire">Contact Us</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		flex: auto;
		background-color: rgb(250, 235, 215);
	}
	.about-us {
		height: 100vh;
		width: 100%;
		padding: 90px 0;
		background: #ddd;
	}
	.pic {
		height: auto;
		width: 302px;
	}
	.about {
		width: 1130px;
		max-width: 85%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.text {
		width: 540px;
		color: rgb(19, 18, 18);
	}
	.text h2 {
		font-size: 90px;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.text h5 {
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 20px;
	}

	.text p {
		font-size: 18px;
		line-height: 25px;
		letter-spacing: 1px;
	}
	.data {
		margin-top: 30px;
	}
	.hire {
		font-size: 18px;
		background: #4070f4;
		color: #fff;
		text-decoration: none;
		border: none;
		padding: 8px 25px;
		border-radius: 6px;
		transition: 0.5s;
	}
	.hire:hover {
		background: #000;
		border: 1px solid #4070f4;
	}
</style>
