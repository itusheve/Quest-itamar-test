import { Component ,OnInit,OnDestroy,OnChanges, SimpleChanges} from '@angular/core';
import {WorkersService} from './workers.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit,OnDestroy,OnChanges{
  title = 'Worker Flights';
  workers:any[]=[];
  workerFlights:any[]=[];
  flightDetail:any = null;
  
  constructor(private service:WorkersService){}
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
  ngOnDestroy(): void {
    this.clearCurrentInterval();
  
  }
  intervalId:any;
  flightObj:any;
  
  ngOnInit(): void {
  this.service.getWorkers().subscribe((items:any[])=>{
    this.workers =items;
  });
  
  
}
clearCurrentInterval(){
  if(this.intervalId){
    clearInterval(this.intervalId);
  }
}
updateFlights(worker:any){
  this.clearCurrentInterval();
  this.flightDetail = null;
  this.getFlights(worker);
  this.intervalId =setInterval(()=>{
    this.getFlights(worker);
  
},1000*60);

}
getFlightDetails(flightObj:any){
  this.flightDetail = this.workerFlights.filter((flight)=>flight.num==flightObj.num)[0];
  this.flightObj = flightObj;
}

private getFlights(worker:any){
   this.service.getFlightsByWorker(worker.id).subscribe((flights:any[])=>{
    this.workerFlights = flights;
    if(this.flightObj){
      this.getFlightDetails(this.flightObj);
    }
   
  });
  
  
}

  
}
