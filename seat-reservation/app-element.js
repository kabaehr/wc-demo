import { LitElement, html } from 'lit-element';
import { ReservationService } from './reservation-service.js';
import './seat-reservation.js';
import './seat-element.js';

class AppElement extends LitElement {

	constructor() {
		super();
		this.reservationService = new ReservationService();
		this.seats = this.reservationService.getSeats();
	}

	handleReserveEvent(e) {
        console.log('bubbled up');
		this.reservationService.setReservations(e.detail.seats);
		this.seats = this.reservationService.getSeats();
		this.requestUpdate();
	}

	render() {
		return html`
            <seat-reservation>
			${this.seats.map(
				seat =>
					html`
						<seat-element .seat=${seat} @reserve-seats="${this.handleReserveEvent}"></seat-element>
					`
				)}
            
            </seat-reservation>
		`;
	}
}

customElements.define('app-element', AppElement);
