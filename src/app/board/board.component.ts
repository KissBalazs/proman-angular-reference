import {Component, Input, OnInit} from '@angular/core';
import {Board} from "../entity/board";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input()
  public board?: Board;

  constructor() {
  }

  ngOnInit(): void {
  }

}