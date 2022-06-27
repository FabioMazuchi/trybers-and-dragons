export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    this.name = _name;
    this.dexterity = _dexterity;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  private set dexterity(value: number) {
    this._dexterity = value;
  }

  public get name(): string {
    return this._name;
  }

  private set name(value: string) {
    this._name = value;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
