import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iplayer } from '../../module/interface';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input()ShowPlayers!:Iplayer[]
@Output()editedObj: EventEmitter<Iplayer> = new EventEmitter<Iplayer>();
@Output() deletedId = new EventEmitter<string>();



OnDelete(id: string) {
  this.deletedId.emit(id);
}





OnEdit(id:Iplayer){
 
  
  this.editedObj.emit(id)

}

}
