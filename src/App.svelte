<script>
	import Header from "./components/atoms/Header.svelte";
	import { name, gameStatus } from "./lib/store.js";
	import Game from "./pages/Game.svelte";
	import Ranking from "./pages/Ranking.svelte";
	import Result from "./pages/Result.svelte";
	import Start from "./pages/Start.svelte";

	let keyStrokeSound;
	let getCardSound;
	let failSound;
	let whistleSound;

	function playSound(sound) {
		sound.currentTime = 0;
		sound.play();
	}
</script>

<!-- 画面描画 -->
<Header />

<main on:keydown={playSound(keyStrokeSound)}>
	{#if $gameStatus === "START"}
		<Start on:playCardSound={playSound(getCardSound)} />
	{:else if $gameStatus === "PLAYING"}
		<Game
			on:playKeyStrokeSound={playSound(keyStrokeSound)}
			on:playGetCardSound={playSound(getCardSound)}
			on:playFailSound={playSound(failSound)}
			on:playWhistleSound={playSound(whistleSound)}
		/>
	{:else if $gameStatus === "RESULT"}
		<Result />
	{:else if $gameStatus === "RANKING"}
		<Ranking />
	{/if}
	<a href="https://www.instagram.com/taiyo_farmland/">
		<img class="qr-code" src={"/taiyo_farmland.png"} alt="instagram_yohei" />
	</a>
</main>

<audio src="/sounds/keyStroke.mp3" bind:this={keyStrokeSound} preload="auto" />
<audio src="/sounds/getCard.mp3" bind:this={getCardSound} preload="auto" />
<audio src="/sounds/failed.mp3" bind:this={failSound} preload="auto" />
<audio src="/sounds/whistle.mp3" bind:this={whistleSound} preload="auto" />

<!-- CSS -->
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			height: calc(100% - 2rem - 90px);
		}
	}
</style>
