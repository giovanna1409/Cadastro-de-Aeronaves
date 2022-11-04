import { AircraftModelEnum } from '../models/aircraft.dto';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AircraftDto } from '../models/aircraft.dto';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  aircraftsKey: string ='7';    //chave que referencia o array de aircrafts
  currentNumberControlKey: string = 'currentNumberControl';  //key que faz referencia ao numberControl atual  

  constructor(private localStorageService : LocalStorageService) { }

  private get currentNumberControl() : string {
    let value = this.localStorageService.get(this.currentNumberControlKey);
    if (!value) {
      value = 1; 
    }
    value = ("000000" + value).slice(-6);   //tranforma em uma string de 6 caracteres
    this.localStorageService.set(this.currentNumberControlKey, (parseInt(value) + 1).toString()); //salva o próx numControl no locStor
    return value;  
  }

  insert(name: string, model: AircraftModelEnum) : void {

    let newAircraft : AircraftDto = {
      name: name,
      model: model,
      numberControl: this.currentNumberControl
    };

    let aircrafts : AircraftDto[] = this.getAll();  
    aircrafts.push(newAircraft);   //insere a nova aircraft no array

    this.localStorageService.set(this.aircraftsKey, aircrafts);  //salva o array no localStorage
  }

  getAll() : AircraftDto[] {
    let aircraftsArr = this.localStorageService.get(this.aircraftsKey);
    if (!aircraftsArr) {
      aircraftsArr = [];
    }
    return aircraftsArr;  //retorna o array com todas as aircrafts salvas
  }

  getByKey(numberControl: string) : AircraftDto | undefined {
    let arr : AircraftDto[] = this.getAll();

    return arr.find((arrElement) => arrElement.numberControl === numberControl);  //retorna o elemento c esse numControl
  }

  update(numberControl: string, name: string, model : AircraftModelEnum) : void {
    let arr : AircraftDto[] = this.getAll();

    let element = arr.find((arrElement) => arrElement.numberControl === numberControl);  //encontra o elemento c esse num

    if (element) {
      element.name = name;
      element.model = model;

      this.localStorageService.set(this.aircraftsKey, arr);  //salva as alterações no localStorage
    }
  }

  delete(numberControl: string) : void {
    let arr : AircraftDto[] = this.getAll();

    let element = arr.find((arrElement) => arrElement.numberControl === numberControl);  //elemento do tipo aeronave que tem esse numberControl

    if (element) {
      let i : number = arr.indexOf(element);

      arr.splice((i), 1);   //remove elemento do array

      this.localStorageService.set(this.aircraftsKey, arr);  //salva array modificado no localStorage
    }
  }

  clearAll() : void {   
    let arr : AircraftDto[]  = this.getAll(); 

    while (arr.length > 0) {   //remove o último elemento enquanto o tamanho for > 0
      arr.splice((arr.length - 1), 1);
    }

    this.localStorageService.set(this.aircraftsKey, arr);  //salva o array vazio no localStorage
  }

}
