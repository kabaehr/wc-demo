const template = document.createElement('template');
template.innerHTML = `
	<style>
		.counter-text {
			font-size: 32px;
		}
		.add-popcorn {
			cursor: pointer;
		}
	</style>
	<div class="counter-text">Popcorn Count:
		<span class="count"></span>
	</div>
	<img class="add-popcorn" src="popcorn.png" alt="picture of a popcorn bag">
`;

class PopcornCounter extends HTMLElement {
	constructor() {
		super();
		this.popcornCounter = 0;
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(template.content.cloneNode(true));

	}

	//will be called when the element gets attached to the DOM
	connectedCallback() {
		
		const add = this.shadowRoot.querySelectorAll('.add-popcorn')[0];
		const countElement = this.shadowRoot.querySelectorAll('.count')[0];
		countElement.innerHTML = this.popcornCounter;
		add.addEventListener('click', (event) => {
			this.popcornCounter++;
			countElement.innerHTML = this.popcornCounter;
		});
	}
}

customElements.define('popcorn-counter', PopcornCounter);