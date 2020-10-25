import { Component, OnInit ,Input,Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit,OnChanges {
  @Input() flights:any[];
  @Output() onSelectFlight = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   
  }

  ngOnInit() {
  }
  onSelect(flight:any){
    this.onSelectFlight.emit(flight);
  }

}
