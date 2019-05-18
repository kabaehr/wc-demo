import { LitElement, html } from 'lit-element';

class PopcornCounterLit extends LitElement {
	static get properties() {
		return {
			popcornCounter: { type: Number }
		};
	}

	constructor() {
		super();
		this.popcornCounter = 0;
	}

	increaseCounter(event) {
		this.popcornCounter++;
	}

	render() {
		return html`
			<style>
				.counter-text {
					font-size: 32px;
				}
				.add-popcorn {
					cursor: pointer;
				}
			</style>
			<div class="counter-text">
				Popcorn Count:
				<span class="count">${this.popcornCounter}</span>
			</div>
			<img class="add-popcorn" src="popcorn.png" @click="${this.increaseCounter}" alt="picture of a popcorn bag" />
		`;
	}
}

customElements.define('popcorn-counter-lit', PopcornCounterLit);
