import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
 
    constructor() {
        this._apiURI = 'http://demo-gbscinc.azurewebsites.net/hrisservice/';
     }
 
     getApiURI() {
         return this._apiURI;
     }    
}
 