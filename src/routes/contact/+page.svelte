<svelte:head>
	<title>Contact</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>
<main>
	<h1>Contact US</h1>
	<div class="contact">
		<h3>Online Customer Service</h3>
		<p>Drop us a line through the form below, and we will get back to you ASAP</p>
		<form action="https://formspree.io/f/xqkodero" method="POST">
			<label for="fullname">Full Name</label>
			<input type="name" name="name" />

			<label for="email">Email Address</label>
			<input type="email" name="email" />

			<label for="message">Message</label>
			<input type="text" name="message" />

			<button type="submit">Send</button>
		</form>
	</div>
</main>

<style>
	/* main class element */
	.contact {
		height: 100vh;
	}
	/* main */
	main {
		background: #90b8f8;
		flex: auto;
	}
	/* texts */
	h1,
	h3,
	p {
		text-align: center;
		color: #26282b;
	}
	/* contact form */
	form {
		width: 25ch;
		background: #353941;
		border-radius: 17px;
		padding: 20px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		margin-left: 2em;
		font-size: clamp(1.5rem, 2vw, 4rem);
	}
	/* form label class */
	label {
		display: block;
		text-align: start;
		color: #f2f2f2;
		font-weight: 600;
		font-size: clamp(1rem, 1.5vw, 2rem);
		cursor: pointer;
		padding-bottom: 0.5em;
		padding-top: 0.3em;
	}
	/* where people would write */
	input {
		width: max-content;
		border: 3px solid #292c34;
		border-radius: 5px;
		padding: 0.2em;
		font-size: clamp(1rem, 1.5vw, 2rem);
	}
	input[type='text']:focus,
	input[type='email']:focus {
		border: 3px solid white;
	}
	/* submit button */
	button {
		border: none;
		height: 50px;
		width: 100%;
		font-size: clamp(1.5rem, 2vw, 4rem);
		background-color: rgb(17, 59, 71);
		border: none;
		border-radius: 5px;
		color: hsl(170, 30%, 80%);
		transition: transform 0.5s;
		margin-top: 0.6em;
	}
	/* button hover */
	button:hover {
		background-color: rgb(21, 25, 26);
		color: rgba(235, 235, 235, 0.733);
		cursor: pointer;
		transform: scale(1.03);
	}
	/* responsive on mobile */
	@media only screen and (max-width: 60em) {
		form {
			display: grid;
			grid-template-rows: auto;
			padding-left: 1rem;
			width: 15ch;
		}
	}
</style>