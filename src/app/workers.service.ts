import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private _WORKERS_API_URL='https://interview-mock.herokuapp.com/api/workers/'
  private _WORKER_FLIGHT_API_URL='https://interview-mock.herokuapp.com/api/workers/'

  constructor(private http:HttpClient) { }
  getWorkers(){
    console.log("i am in service");
    return this.http.get(this._WORKERS_API_URL);
  }
  getFlightsByWorker(workerID:number){
    return this.http.get(this._WORKER_FLIGHT_API_URL+workerID);
  }
  
}
