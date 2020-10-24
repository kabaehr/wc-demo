const template = document.createElement('template');
template.innerHTML = `
	<style>
		.counter-text {
			font-size: 32px;
			text-align: center;
		}
		.add-coffee {
			cursor: pointer;
		}
	</style>
	<div class="counter-text">Coffee count:
		<span class="count"></span>
	</div>
	<img class="add-coffee" src="img_coffee.png" alt="picture of a coffee mug">
`;

class CoffeeCounter extends HTMLElement {
	constructor() {
		super();
		this.coffeeCounter = 0;
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(template.content.cloneNode(true));
	}

	//will be called when the element gets attached to the DOM
	connectedCallback() {
		const add = this.shadowRoot.querySelectorAll('.add-coffee')[0];
		const countElement = this.shadowRoot.querySelectorAll('.count')[0];
		countElement.innerHTML = this.coffeeCounter;
		add.addEventListener('click', _ => {
			this.coffeeCounter++;
			countElement.innerHTML = this.coffeeCounter;
		});
	}
}

customElements.define('coffee-counter', CoffeeCounter);