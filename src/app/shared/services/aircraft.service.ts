import { AircraftModelEnum } from '../models/aircraft.dto';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AircraftDto } from '../models/aircraft.dto';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  aircraftsKey: string ='7';  
  currentNumberControlKey: string = 'currentNumberControl';

  constructor(private localStorageService : LocalStorageService) { }

  private get currentNumberControl() : string {
    let value = this.localStorageService.get(this.currentNumberControlKey);
    if (!value) {
      value = '1';
    }
    this.localStorageService.set(this.currentNumberControlKey, (parseInt(value) + 1).toString());
    return value;
  }

  insert(name: string, model: AircraftModelEnum) : void {

    let newAircraft : AircraftDto = {
      name: name,
      model: model,
      numberControl: this.currentNumberControl
    };

    let aircrafts : AircraftDto[] = this.getAll();
    aircrafts.push(newAircraft);

    this.localStorageService.set(this.aircraftsKey, aircrafts);
  }

  getAll() : AircraftDto[] {
    let aircraftsArr = this.localStorageService.get(this.aircraftsKey);
    if (!aircraftsArr) {
      aircraftsArr = [];
    }
    return aircraftsArr;
  }

  getByKey(numberControl: string) : AircraftDto | undefined {
    let arr : AircraftDto[] = this.getAll();

    return arr.find((arrElement) => arrElement.numberControl === numberControl);
  }

  update(numberControl: string, name: string, model : AircraftModelEnum) : void {
    let arr : AircraftDto[] = this.getAll();

    let element = arr.find((arrElement) => arrElement.numberControl === numberControl);

    if ( typeof(element) != "undefined" ) {
      element.name = name;
      element.model = model;
    }
  }

  delete(numberControl: string) : void {
    let arr : AircraftDto[] = this.getAll();

    let element = arr.find((arrElement) => arrElement.numberControl === numberControl);  //elemento do tipo aeronave que tem esse numberControl

    if ( typeof(element) != "undefined" ) {
      let i : number = parseInt(element.numberControl) - 1;  //index do elemento no array
      arr.splice((i), 1);

      //atualiza os numberControls dos elementos que estavam depois do elem. removido
      for(let j = i; j < arr.length; j++) {
        arr[j].numberControl = (parseInt(arr[j].numberControl) - 1).toString(); 
      }
      //atualiza o currentNumberControl
      this.localStorageService.set(this.currentNumberControlKey, (parseInt(this.currentNumberControlKey) - 1).toString()); 
    }
  }

  clearAll() : void {    //deixa o array vazio
    let arr = this.getAll();

    while (arr.length > 0) {
      arr.splice((arr.length - 1), 1);
    }

    this.localStorageService.set(this.currentNumberControlKey, '1');  
  }

}
