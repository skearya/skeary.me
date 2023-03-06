<script>
	import { onDestroy, onMount } from 'svelte';

	let container, i1, i2;
	let colors = [
		'#E36D6D',
		'#FCA669',
		'#FADD75',
		'#61D67E',
		'#7EEAF6',
		'#5D8DEE',
		'#8066F5',
		'#DF81CF'
	];
	let colorIndex = 0;

	onMount(() => {
		createFish();

		i1 = setInterval(() => {
			const fishes = document.getElementsByClassName('fish');

			for (let i = 0; i < fishes.length; i++) {
				let pos = parseInt(fishes[i].style.left.slice(0, -1));
				if (pos >= 97) {
					fishes[i].remove();
				} else {
					fishes[i].style.left = `${(pos += 1)}%`;
				}
			}
		}, 300);

		i2 = setInterval(() => {
			createFish();
		}, 2000);
	});

	onDestroy(() => {
		clearInterval(i1);
		clearInterval(i2);
	});

	function createFish() {
		const child = document.createElement('div');

		child.textContent = '><>';
		child.style.position = 'absolute';
		child.style.top = `${Math.floor(Math.random() * 95)}%`;
		child.style.left = '0%';
		child.style.zIndex = -10;
		child.classList.add('fish');
		child.style.color = colors[colorIndex];
		if (colorIndex >= 7) colorIndex = -1;
		colorIndex += 1;

		container.appendChild(child);
	}
</script>

<div class="overflow-hidden" bind:this={container} />
