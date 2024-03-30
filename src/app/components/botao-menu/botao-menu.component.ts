import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input() message: string;
  @Input() typeIcon: IconDefinition;
  @Input() classSelected: boolean;
  @Output() click = new EventEmitter<void>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  }

}
