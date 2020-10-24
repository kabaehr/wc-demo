import { LitElement, html, css } from 'lit-element';

class SeatElement extends LitElement {
	static get properties() {
		return {
			seat: { type: Object },
			isSelected: { type: Boolean }
		};
	}

	static get styles() {
		return css`
				:host {
					width: 30px;
					height: 32px;
					display: flex;
					margin: 5px 3px 3px;
				}

				.seat-container {
					background-color: #ccc;
					width: 100%;
					cursor: pointer;
					border-radius: 10px 10px 36px 36px;
				}

				.seat-container:active {
					background-color: #bbb;
				}

				.reserved {
					background-color: #f45e5e;
				}

				.selected {
					background-color: #69d369;
				}

				.pair-seat {
					width: 60px;
				}
			`;
	}

	constructor() {
		super();
		this.seat = undefined;
		this.isSelected = false;
	}

	emitClickEvent(e) {
		if (!this.seat.hasReservation) {
			this.isSelected = !this.isSelected;
		}

		var event = new CustomEvent('seat-selected', {
			detail: {
				seat: this.seat,
				isSelected: this.isSelected
			},
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(event);
	}

	render() {
		return html`<div
			class="seat-container ${this.seat.hasReservation ? 'reserved' : ''} ${this.isSelected ? 'selected' : ''}"
			@click="${this.emitClickEvent}">
		</div>`;
	}
}

customElements.define('seat-element', SeatElement);
