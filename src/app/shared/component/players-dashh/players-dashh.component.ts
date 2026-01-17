import { Component, OnInit } from '@angular/core';
import { Iplayer } from '../../module/interface';
import { footballPlayers } from '../../const/data';

@Component({
  selector: 'app-players-dashh',
  templateUrl: './players-dashh.component.html',
  styleUrls: ['./players-dashh.component.scss']
})
export class PlayersDashhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

PlayersArr:Array<Iplayer>=footballPlayers

DefinationUpdate(b:Iplayer){
  let getindex = this.PlayersArr.findIndex(z=>z.id === b.id)
  this.PlayersArr[getindex]=b

}
DeleteDefination(id: string) {
  this.PlayersArr = this.PlayersArr.filter(p => p.id !== id);
}




AddDefination(add:Iplayer){
  this.PlayersArr.unshift(add)
}

EditedOBJ!: Iplayer;

EditDefination(player: Iplayer) {
  this.EditedOBJ = player;
}







}
