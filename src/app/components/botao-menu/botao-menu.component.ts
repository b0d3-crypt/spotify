import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input() message: string;
  @Input() classSelected: boolean;
  @Output() click = new EventEmitter<void>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  }

}
