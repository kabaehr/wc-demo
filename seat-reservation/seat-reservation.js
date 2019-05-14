import { LitElement, html, css } from 'lit-element';

class SeatReservation extends LitElement {
	static get properties() {
		return {
			seats: { type: Array },
			selectedSeats: { type: Array }
		};
	}

	static get styles() {
		return [
			css`
				:host {
					max-width: 700px;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}

				.cinema-canvas {
					width: 100%;
					padding: 5px;
					color: white;
					margin: 0px 20px 40px;
					background-color: #555;
					text-align: center;
					font-weight: bold;
					border-radius: 0px 0px 25px 25px;
				}

				.seat-choice {
					width: 100%;
					height: auto;
					min-height: 50px;
					margin-top: 100px;
					padding: 20px;
					background-color: #ddd;
				}

				.seat-choice .title {
					font-size: 20px;
				}

				.seat-choice.hide {
					display: none;
				}

				.buy-button {
					width: 100px;
					height: 40px;
					background-color: #4c82ff;
					color: white;
					border: none;
					border-radius: 8px;
					height: 40px;
					cursor: pointer;
					font-size: 18px;
				}

				.buy-button:active {
					background-color: #f09191;
				}

				.buy-button:focus {
					outline: none;
				}

				.order-summary {
					display: flex;
					justify-content: flex-end;
					line-height: 40px;
				}

				ul {
					list-style-type: square;
    				padding-inline-start: 20px;
				}

				li {
					line-height: 1.8;
				}

				.selection-item {
					justify-content: space-between;
					display: flex;
				}

				.selection-item .details {
					min-width: 160px;
				}

				.total-price {
					margin-right: 124px;
				}
			`
		];
	}

	constructor() {
		super();
		this.selectedSeats = [];

		this.addEventListener('seat-selected', e => {
			this.handleSelectionEvent(e);
		});
	}

	handleSelectionEvent(e) {
		if (e.detail.isSelected) {
			this.selectedSeats.push(e.detail.seat);
		} else {
			const index = this.selectedSeats.indexOf(e.detail.seat);
			this.selectedSeats.splice(index, 1);
		}

		this.requestUpdate();
	}

	calculatePriceSummary() {
		const reducer = (priceSummary, currentSeat) => priceSummary + currentSeat.price;
		return this.selectedSeats.reduce(reducer, 0);
	}

	reserveSeats(e) {
		var event = new CustomEvent('reserve-seats', {
			detail: {
				seats: this.selectedSeats
			},
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(event);
	}

	render() {
		return html`
			<div class="cinema-canvas">
				Leinwand
			</div>
			<slot></slot>
			<div class="seat-choice ${this.selectedSeats.length < 1 ? 'hide' : ''}">
				<b class="title">Ausgewählte Plätze</b>
				<ul>
					${this.selectedSeats.map(
						seat => html`
							<li>
								<div class="selection-item">
									<span class="details">Reihe ${seat.row}, Platz ${seat.number}</span>
									<span>${seat.price}€</span>
									<i></i>
								</div>
							</li>
						`
					)}
				</ul>
				<div class="order-summary">
					<span class="total-price"><b>Gesamtpreis:</b> ${this.calculatePriceSummary()} €</span>
					<button class="buy-button" @click=${this.reserveSeats}>Kaufen</button>
				</div>
			</div>
		`;
	}
}

customElements.define('seat-reservation', SeatReservation);
