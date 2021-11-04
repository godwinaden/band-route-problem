import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Client} from 'src/app/globals';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [
    {url: 'assets/images/1.jpg', name: 'The Bliss', desc: "The Bliss: A Music Tour Of Europe.",},
    {url: 'assets/images/2.jpg', name: 'TLC', desc: "TLC Original: A Tour Across Australia.",},
    {url: 'assets/images/3.jpg', name: 'Hillsong United', desc: "Hillsong United: Brazil In Need Of Christ Tour",},
    {url: 'assets/images/4.jpg', name: 'Casting Crowns', desc: "Casting Crowns: Africa Got Jesus Tour",},
    {url: 'assets/images/5.jpg', name: 'Mali Music', desc: "Mali Music: A Tour Across North America.",},
    {url: 'assets/images/6.jpg', name: 'Rend Collective', desc: "Rend Collective: Asia And The Kingdoms Tour.",},
  ];
  pauseOnHover: boolean = true;
  pauseOnFocus: boolean = true;
  @ViewChild('content', { static: false }) content: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSlide(event: any): void{

  }
}
