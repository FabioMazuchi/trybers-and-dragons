import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;

  constructor(
    private _name: string, 
  ) {
    this._name = _name;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public set special(value: number) {
    this._special = value;
  }

  public get cost(): number {
    return this._cost;
  }

  public set cost(value: number) {
    this._cost = value;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}
