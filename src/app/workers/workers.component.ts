import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  @Input() workers:any[];
  @Output() onSelect = new EventEmitter();
  constructor() { }
  
  selectWorker(worker){
    
    this.workers.forEach((worker)=>worker.isActive = false);
    worker.isActive=true;
    this.onSelect.emit(worker);

  }
  ngOnInit() {

  }

}
