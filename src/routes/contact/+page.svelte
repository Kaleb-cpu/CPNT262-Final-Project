	<svelte:head>
		<title>Contact</title>
		<meta name="robots" content="noindex nofollow" />
	</svelte:head>
<script lang="ts">
	import FormField from '@smui/form-field';
	import Switch from '@smui/switch';

	let agreed = false;
</script>

<main>
	<h1 class="text-6xl font-bold leading-normal mt-0 mb-2 text-slate-600">Contact US</h1>
	<div class="contact">
		<h3 class="text-4xl font-semibold leading-normal mt-0 mb-2 text-slate-600">
			Online Customer Service
		</h3>
		<p class="text-2xl font-normal leading-normal mt-0 mb-2 text-slate-600">
			Drop us a line through the form below, and we will get back to you ASAP
		</p>
		<form action="https://formspree.io/f/xqkodero" method="POST">
			<label for="fullname">Full Name</label>
			<input type="name" name="name" />

			<label for="email">Email Address</label>
			<input type="email" name="email" />

			<label for="message">Message</label>
			<input type="text" name="message" />

			<span class="termsInput"><input type="checkbox" name="terms" bind:checked={agreed} /></span>

			<div class="agreeTerms">
				<FormField>
					<Switch bind:checked={agreed} />
					<span slot="label">
						I agree to the terms and conditions of the software, <small style="opacity: .4;"
							>and hereby sign away my rights just to use this app.</small
						>
					</span>
				</FormField>

				<pre class="status">Agreed: {agreed ? 'Yes!' : 'Not yet.'}</pre>
			</div>
			<button type="submit">Send</button>
		</form>
	</div>
</main>

<style>
	.termsInput {
		display: none;
	}

	/* main class element */
	.contact {
		height: 100vh;
		margin-top: 2em;
	}
	/* main */
	main {
		background: rgb(250, 235, 215);
		flex: auto;
	}
	/* texts */
	h1,
	h3,
	p {
		text-align: center;
	}
	/* contact form */
	form {
		width: 25ch;
		background: #353941;
		border-radius: 17px;
		padding: 20px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		margin-left: 2em;
		margin: auto;
		margin-top: 2em;
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

	.agreeTerms {
		margin-top: 1.3em;
	}
	/* where people would write */
	input {
		width: max-content;
		border: 3px solid #16191f;
		border-radius: 5px;
		padding: 0.2em;
		color: rgb(47, 44, 44);
		font-size: clamp(1rem, 1.5vw, 2rem);
	}

	input[type='text']:focus,
	input[type='email']:focus {
		border: 3px solid rgb(134, 83, 83);
	}
	/* submit button */
	button {
		border: none;
		height: 50px;
		width: 100%;
		font-size: clamp(1.5rem, 2vw, 4rem);
		background-color: rgb(250, 235, 215);
		border: none;
		border-radius: 5px;
		color: #353941;
		font-weight: bold;
		transition: transform 0.5s;
		margin-top: 1em;
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
