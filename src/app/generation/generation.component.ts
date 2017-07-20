import {Component, OnInit} from "@angular/core";
import {Person} from "./Person.model";
import {Subject} from "rxjs/Rx";
import {GenerationService} from "./generation.service";

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {
  persons: Person[];
  dtTrigger: Subject<any> = new Subject();
  private errorMessage: any;

  constructor(private generationService: GenerationService) { }

  ngOnInit() {
    this.getUsersList();
  }

  private getUsersList() {
    this.generationService.getAllUsers()
        .subscribe(
            persons => {
              this.persons = persons;
              this.dtTrigger.next();
            },
            error   => {
              this.errorMessage = <any>error
            }
        );
  }
}
