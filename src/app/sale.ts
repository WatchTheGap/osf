export class Sale {
  user_id: number;
  vendor_id: number;
  tickets: number;
  amount: string;
  user: any;

  constructor(user_id: number, vendor_id: number, tickets: number, amount: string, user: any) {
    this.user_id = user_id;
    this.vendor_id = vendor_id;
    this.tickets = tickets;
    this.amount = amount;
    this.user = user;

  }
}

// Tickets/raffle entries can be calculated later based on total amount spent?
