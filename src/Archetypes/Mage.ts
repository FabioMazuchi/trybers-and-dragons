import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public set energyType_(value: EnergyType) {
    this._energyType = value;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}
