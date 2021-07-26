export class Currency {
  public id!: number;
  public from: string;
  public to: string;
  public conversionMultiple!: number;
  public quantity: number;
  public totalCalculatedAmount!: number;

  constructor(from: string, to: string, quantity: number) {
    this.to = to;
    this.from = from;
    this.quantity = quantity;
  }

}
