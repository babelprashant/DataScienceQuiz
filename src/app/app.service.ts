import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
export class UserInfo{
    constructor(
    public email_Id : any,
    public quiz_Id : any,
    public score : any){}
}
@Injectable()
export class AppService{

    url = "http://localhost/DemoDir/DbConnection.php";    
    constructor(private http:Http){}
        
    getUser() : any{
        
        return this.http.get(this.url)
        .map((response:Response) => response.json())
        .catch(this.handleError)
    }

    handleError(error : Response){
        console.log(error);
        return Observable.throw(error)
    }
            
    
}