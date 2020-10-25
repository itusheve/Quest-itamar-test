import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent{
  @Input() flight:any={};
  currentFlight:any={};
  constructor() { }
  

}
