import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ColorType } from '../enums/enumerations';



@Injectable({
    providedIn: 'root'
})
export class ColorService {

    constructor() { }

    getColor(typeColor: ColorType): any {
        if (typeColor == undefined)
            return 'white';
        else {
            switch (typeColor) {
                case ColorType.Primary:
                    if (environment.country === 'fk')
                        return '#66182a'
                    else return '#00466c';
                case ColorType.Secundary:
                    if (environment.country === 'fk')
                        return '#046aaf';
                    else return '#ff1e2d';
                default:
                    return 'white';
            }
        }
    }
}