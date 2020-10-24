import { LitElement, html } from 'lit-element';

class CoffeeCounterLit extends LitElement {
	static get properties() {
		return {
			coffeeCounter: { type: Number }
		};
	}

	constructor() {
		super();
		this.coffeeCounter = 0;
	}

	increaseCounter(event) {
		this.coffeeCounter++;
	}

	render() {
		return html`
			<style>
				.counter-text {
					font-size: 32px;
					text-align: center;
				}
				.add-coffee {
					cursor: pointer;
				}
			</style>
			<div class="counter-text">
				Coffee count:
				<span class="count">${this.coffeeCounter}</span>
			</div>
			<img class="add-coffee" src="./assets/coffee_blue.png" @click="${this.increaseCounter}" alt="picture of a coffee mug" />
		`;
	}
}

customElements.define('coffee-counter-lit', CoffeeCounterLit);
