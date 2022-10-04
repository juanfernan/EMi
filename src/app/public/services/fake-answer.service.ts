import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Answer } from "../models/entities/answer";
import { AnswerType } from "../models/enums/answer-type";

@Injectable({
    providedIn: 'root'
})
export class FakeAnswerService {

    GetAnswerById(size: number, id: AnswerType, trueAnswer: string) {
        switch (id) {
            case (AnswerType.Date):
                return this.GenerateDateRandom(size, trueAnswer);
            case (AnswerType.Name):
                return this.GenerateListRandom(size, this.returnNameList(environment.country), trueAnswer);
            case (AnswerType.Address):
                return this.GenerateListRandom(size, this.returnAdressList(environment.country), trueAnswer);
            case (AnswerType.Email):
                return this.GenerateEmailRandom(size, trueAnswer);
            case (AnswerType.Phone):
                return this.GeneratePhoneRandom(size, trueAnswer);
        }
    }

    private GenerateDateRandom(size: Number, trueAnswer: string): Array<Answer> {
        let response = new Array<Answer>();
        for (var i = 0; i < size; i++) {
            let fecha = this.ConverterStringToDate(trueAnswer);
            let answer: Answer = new Answer();
            if ((i % 2) == 0) {
                if (i == 0)
                    fecha.setDate(fecha.getDate() + 1 * 2);
                else
                    fecha.setDate(fecha.getDate() + i * 2);
            }
            else {
                if (i == 0)
                    fecha.setDate(fecha.getDate() - (1 * 2));
                else
                    fecha.setDate(fecha.getDate() - (i * 2));
            }
            answer.GroupName = null;
            answer.Answer = this.ConverterDateToString(fecha);
            response.push(answer);
        }
        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer: Answer = new Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);

        response.splice(indexRand, 0, _answer);

        //retornamos el listado completo
        return response;
    }

    private GenerateListRandom(size: Number, lista: Array<Answer>, trueAnswer: string): Array<Answer> {
        let response: Array<Answer> = new Array<Answer>();
        for (var i = 0; i < size; i++) {
            const ind = this.Between(0, lista.length - 1);
            let answer = new Answer();
            if (lista[ind].Answer !== trueAnswer) {
                if (response.length > 0) {
                    let a = response.find(x => x.Answer == lista[ind].Answer);
                    if (!a) {
                        answer.Answer = lista[ind].Answer;
                        answer.GroupName = null;
                        response.push(answer);
                        var index = lista.findIndex(x => x.Answer == lista[ind].Answer);
                        if (index > 1)
                            lista.splice(index, 1);
                    }
                    else {
                        i--;
                    }
                }
                else {
                    answer.Answer = lista[ind].Answer;
                    answer.GroupName = null;
                    response.push(answer);
                    var index = lista.findIndex(x => x.Answer == lista[ind].Answer);
                    if (index > 1)
                        lista.splice(index, 1);
                }

            }
            else
                i--;
        }

        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer: Answer = new Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);

        response.splice(indexRand, 0, _answer);

        //retornamos el listado completo
        return response;

    }

    private GenerateEmailRandom(size: Number, trueAnswer: string): Array<Answer> {
        let response: Array<Answer> = new Array<Answer>();
        let email = trueAnswer.split('@');
        if (email.length > 0) {
            for (var i = 0; i < size; i++) {
                let emailAux: string;
                let answer = new Answer();
                if ((i % 2) == 0) {
                    if (i == 0)
                        emailAux = email[0] + (1 * 2).toString();
                    else
                        emailAux = email[0] + (i * 2).toString();
                }
                else {
                    if (i == 0)
                        emailAux = email[0] + "0" + (1 * 2).toString();
                    else
                        emailAux = email[0] + "0" + (i * 2).toString();
                }
                answer.Answer = emailAux + "@" + email[1];
                response.push(answer);
            }
        }

        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer: Answer = new Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);

        response.splice(indexRand, 0, _answer);

        //retornamos el listado completo
        return response;
    }

    private GeneratePhoneRandom(size: Number, trueAnswer: string): Array<Answer> {
        let response: Array<Answer> = new Array<Answer>();
        let phoneNumber = Number(trueAnswer);
        const firstCharacter = trueAnswer.charAt(0);

        for (var i = 0; i < size; i++) {
            let number: Number;
            let answer = new Answer();
            if ((i % 2) == 0) {
                if (i == 0)
                    number = phoneNumber + (1 * 2);
                else
                    number = phoneNumber + (i * 2);
            }
            else {
                if (i == 0)
                    number = phoneNumber - (1 * 2);
                else
                    number = phoneNumber - (i * 2);
            }

            answer.Answer = number.toString();
            if (firstCharacter === "0") answer.Answer = firstCharacter + answer.Answer;
            response.push(answer);
        }

        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer: Answer = new Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);

        response.splice(indexRand, 0, _answer);

        //retornamos el listado completo
        return response;
    }

    private Between(min: any, max: any) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }

    //convierte de 30/01/2020 a "2020-01-30"
    private ConverterDateToFormat(stringFecha: string): string {
        let dia = stringFecha.substr(0, 2);
        let mes = stringFecha.substr(3, 2);
        let año = stringFecha.substr(6, 4);
        const date = año + "-" + mes + "-" + dia;
        return date;
    }

    private ConverterStringToDate(stringFecha: string): Date {
        stringFecha = this.ConverterDateToFormat(stringFecha);
        let date = new Date(stringFecha);
        date.setDate(date.getDate() + 1);
        return date;
    }

    private ConverterDateToString(date: Date): string {
        let response = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        return response;
    }

    private returnNameList(country: string) : Array<Answer> {
       if (country === 'co') {return this.ReturnEmiNameList()} else {return this.ReturnUcmNameList();}  
    }

    private returnAdressList(country: string) : Array<Answer> {
        if (country === 'co') {return this.ReturnEmiAddressList()} else {return this.ReturnUcmAddressList();}  
    }

    private ReturnEmiNameList(): Array<Answer> {
        const list = new AnswerEmiNamesList();
        return list.answerNameList;
    }

    private ReturnUcmNameList(): Array<Answer> {
        const list = new AnswerUcmNamesList();
        return list.answerNameList;
    }

    private ReturnEmiAddressList(): Array<Answer> {
        const list = new AnswerEmiAddressList();
        return list.answerAddressList
    }

    private ReturnUcmAddressList(): Array<Answer> {
        const list = new AnswerUcmAddressList();
        return list.answerAddressList
    }
}

export class EmiNamesList {
    nameList: Array<string>;
    constructor() {
        this.nameList =
            [
                "Juana Chafrat",
                "Romina Sosa",
                "Esteban Sosa",
                "Pablo Ramirez",
                "Carlos Ramirez",
                "Guistavo Ramirez",
                "Martin Sosa",
                "Jorge Chafrat",
                "Isabel Chafrat",
                "Aruel Sosa"
            ]
    }
}

export class AnswerEmiNamesList {
    nameList = new EmiNamesList();
    answerNameList: Array<Answer> = new Array<Answer>();
    constructor() {
        this.nameList.nameList.forEach(element => {
            element = element.toUpperCase();
            this.answerNameList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}

export class UcmNamesList {
    nameList: Array<string>;
    constructor() {
        this.nameList =
            [
                "Juana Chafrat",
                "Romina Sosa",
                "Esteban Sosa",
                "Pablo Ramirez",
                "Carlos Ramirez",
                "Guistavo Ramirez",
                "Martin Sosa",
                "Jorge Chafrat",
                "Isabel Chafrat",
                "Aruel Sosa"
            ]
    }
}

export class AnswerUcmNamesList {
    nameList = new UcmNamesList();
    answerNameList: Array<Answer> = new Array<Answer>();
    constructor() {
        this.nameList.nameList.forEach(element => {
            element = element.toUpperCase();
            this.answerNameList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}

export class EmiAddressList {
    addressList: Array<string>;
    constructor() {
        this.addressList = [
            "Calle 27 d sur # 27 c 51",
            "Diagonal 40 # 41 61",
            "KR 23 # 35 - 48",
            "CALLE 35 # 33-09",
            "Carrera 53 # 70 - 86",
            "AC 13 # 21 - 91",
            "avenida carrera 19 # 127 d -55",
            "Avenida el dorado # 68D - 35",
            "TRANSVERSAL 78 I BIS # 41 A 16 SUR",
            "AV 6 A # 20 NORTE - 20",
        ]
    }
}

export class AnswerEmiAddressList {
    addressList = new EmiAddressList();
    answerAddressList: Array<Answer> = new Array<Answer>();
    constructor() {
        this.addressList.addressList.forEach(element => {
            element = element.toUpperCase();
            this.answerAddressList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}

export class UcmAddressList {
    addressList: Array<string>;
    constructor() {
        this.addressList = [
            "Calle Libertad 2738, Montevideo",
            "11600 Montevideo",
            "Avda. Tomás Giribaldi 2290 Montevideo 11300",
            "c/ Justino Muniz 772",
            "c/ Santísima Trinidad, 59",
            "Avda. 18 de Julio, 708",
            "c/ Dr. Fosalba, 524.",
            "c/ Leandro Gómez 1192",
            "c/ Treinta y Tres 1317",
            "c/ Francisco Araúcho 1186",
        ]
    }
}

export class AnswerUcmAddressList {
    addressList = new UcmAddressList();
    answerAddressList: Array<Answer> = new Array<Answer>();
    constructor() {
        this.addressList.addressList.forEach(element => {
            element = element.toUpperCase();
            this.answerAddressList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}