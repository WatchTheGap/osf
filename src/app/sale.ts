export class Sale {
  user_id: number;
  vendor_id: number;
  tickets: number;
  amount: string;

  constructor(user_id: number, vendor_id: number, tickets: number, amount: string) {
    this.user_id = user_id;
    this.vendor_id = vendor_id;
    this.tickets = tickets;
    this.amount = amount;

  }
}

// Tickets/raffle entries can be calculated later based on total amount spent?
