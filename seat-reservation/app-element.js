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
		this.reservationService.setReservations(e.detail.seats);
		this.seats = this.reservationService.getSeats();
		this.requestUpdate();
	}

	render() {
		return html`
            <seat-reservation @reserve-seats=${this.handleReserveEvent}>
			${this.seats.map(
				seat =>
					html`
						<seat-element .seat=${seat}></seat-element>
					`
				)}
            
            </seat-reservation>
		`;
	}
}

customElements.define('app-element', AppElement);
