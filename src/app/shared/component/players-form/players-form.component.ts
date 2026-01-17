import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Iplayer } from '../../module/interface';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';





@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss']
})
export class PlayersFormComponent implements OnInit, OnChanges {
@ViewChild('Playersform')Playersform!:NgForm
@Output()emitAdd:EventEmitter<Iplayer> = new EventEmitter<Iplayer>();
@Input()EditedOBJ !: Iplayer
@Output()EmitedUpdateobj : EventEmitter<Iplayer> = new EventEmitter<Iplayer>();




  constructor(    private _uuidService : ServiceService
) { }
  ngOnChanges(changes: SimpleChanges): void {
  if(!!changes['EditedOBJ']['currentValue']){
    this.isInEditmode=true
    this.Playersform.form.patchValue
    (changes['EditedOBJ']['currentValue'])
  }
  }

  ngOnInit(): void {
  }

isInEditmode : boolean = false


OnUpdate(){
if(this.Playersform.valid){
  let Updated_obj:Iplayer={
    ...this.Playersform.form.value,
    id:this.EditedOBJ.id
  }
  this.Playersform.reset()
  this.isInEditmode=false
  this.EmitedUpdateobj.emit(Updated_obj)
}
}





OnSubmit(){
  if(this.Playersform.valid){
    let Player_obj:Iplayer={
      ...this.Playersform.form.value,
      id:this._uuidService.uuid
    }
    this.Playersform.reset()
    this.emitAdd.emit(Player_obj)
  }
}




}
