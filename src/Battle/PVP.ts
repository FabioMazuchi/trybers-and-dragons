import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _p1: Fighter, private _p2: Fighter) {
    super(_p1);
    this._p2 = _p2;
  }

  public get p1(): Fighter {
    return this._p1;
  }

  public set p1(value: Fighter) {
    this._p1 = value;
  }

  public get p2(): Fighter {
    return this._p2;
  }

  public set p2(value: Fighter) {
    this._p2 = value;
  }

  fight(): number {
    this._p1.attack(this._p2);
    this._p2.attack(this._p1);
  
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
