export class PricingService {

    calculatePriceSummary(allSelectedSeats) {
        const reducer = (priceSummary, currentSeat) => priceSummary + currentSeat.price;
        return allSelectedSeats.reduce(reducer, 0);
    }

}