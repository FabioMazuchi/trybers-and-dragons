import Fighter, { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints: number;

  constructor() {
    super();
    this._lifePoints = 999;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public set lifePoints(value: number) {
    this._lifePoints = value;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}
