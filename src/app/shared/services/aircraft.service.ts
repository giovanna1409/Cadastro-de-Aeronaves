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
      value = '1';     //LEMBRAR DE GERAR UM NUMBER_CONTROL STRING COM 6 CARACTERES!!!
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

    if (element) {
      element.name = name;
      element.model = model;

      /*let i_element : number = parseInt(element.numberControl) - 1;
      arr[i_element] = element;*/   //não precisa disso, porque o objeto é guardado por referência no array, 
      //                    então o array já vai ter o elemento sempre atualizado, por ter a referência

      this.localStorageService.set(this.aircraftsKey, arr);
    }
  }

  delete(numberControl: string) : void {
    let arr : AircraftDto[] = this.getAll();

    let element = arr.find((arrElement) => arrElement.numberControl === numberControl);  //elemento do tipo aeronave que tem esse numberControl

    if (element) {
      let i : number = arr.indexOf(element);
      console.log(i);

      arr.splice((i), 1);

      this.localStorageService.set(this.aircraftsKey, arr);
    }
  }

  clearAll() : void {   
    let arr : AircraftDto[]  = this.getAll();

    while (arr.length > 0) {
      arr.splice((arr.length - 1), 1);
    }

    this.localStorageService.set(this.aircraftsKey, arr);  
  }

}
