export class Users {
  public id: number;
  public name: string;
  public birthDate: string;

  constructor( id: number, name: string, birthDate: string) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
  }
}
