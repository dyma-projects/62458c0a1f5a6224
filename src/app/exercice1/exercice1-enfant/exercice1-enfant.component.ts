import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output("changeNumber") public changeNumber = new EventEmitter();

  ngOnInit() {}

  add() {
    this.compteur++;
    this.changeNumber.emit({ value: this.compteur });
  }

  less() {
    this.compteur--;
    this.changeNumber.emit({ value: this.compteur });
  }
}
