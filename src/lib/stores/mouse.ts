import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Mouse = 'on' | 'off';

const userMouse = browser && localStorage.getItem('mouse-cursor');

export const mouse = writable(userMouse ?? 'on');

export function toggleMouse() {
	mouse.update((currentMouse): Mouse => {
		const customMouse = currentMouse === 'on' ? 'off' : 'on';

		document.documentElement.setAttribute('mouse-cursor', customMouse);

		localStorage.setItem('mouse-cursor', customMouse);

		return customMouse;
	});
}

export function setMouse(isOn: Mouse) {
	mouse.set(isOn);
}
