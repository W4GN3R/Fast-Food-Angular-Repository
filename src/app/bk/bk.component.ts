import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bk',
  templateUrl: './bk.component.html',
  styleUrls: ['./bk.component.css']
})
export class BkComponent implements OnInit {

  lanches = [
    {
      name: "WHOPPER MONSTRO",
      image: "../src/assets/images/Whoppercomqueijo_thumb.png",
    },
    {
      name: "WHOPPER JR.",
      image: "../src/assets/images/Whoppercomqueijo_thumb.png",
    },
    {
      name: "WHOPPER FURIOSO",
      image: "../src/assets/images/WhopperFurioso_thumb.png",
    },
    {
      name: "MEGA STACKER RODEIO 3.0",
      image: "../src/assets/images/MS-rodeio_3.0.jpg",
    },
    {
      name: "MEGA STACKER CATUPIRY 4.0",
      image: "../src/assets/images/MS-Catupiry_4.0.png",
    },
    {
      name: "MEGA STACKER CHEDDAR 2.0",
      image: "../src/assets/images/_BK_CHEDDAR.png",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
