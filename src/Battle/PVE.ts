import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _p1: Character | Fighter,
    private _enemy: Array<Monster | Fighter | SimpleFighter>,
  ) {
    super(_p1);
    this._enemy = _enemy;
  }

  public get enemy(): Array<Monster | Fighter | SimpleFighter> {
    return this._enemy;
  }

  public set enemy(value: Array<Monster | Fighter | SimpleFighter>) {
    this._enemy = value;
  }

  public get p1(): Character | Fighter {
    return this._p1;
  }

  public set p1(value: Character | Fighter) {
    this._p1 = value;
  }

  fight(): number {
    this._enemy.forEach((enem) => this.player.attack(enem));
    this._enemy.forEach((enem) => enem.attack(this.player));
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
