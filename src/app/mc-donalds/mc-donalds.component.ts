import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-donalds',
  templateUrl: './mc-donalds.component.html',
  styleUrls: ['./mc-donalds.component.css']['./app.component.css']
})
export class McDonaldsComponent implements OnInit {

  lanches = [
    {
      name: "TRIPLO QUARTERÃO",
      image: "../src/assets/images/triplo_quarterao.png",
    },
    {
      name: "EGG QUARTERÃO",
      image: "../src/assets/images/egg_quarterao.png",
    },
    {
      name: "TRIPLO TASTY",
      image: "../src/assets/images/triplo_tasty.png",
    },
    {
      name: "Big Tasty",
      image: "../src/assets/images/big_tasty.png",
    },
    {
      name: "McNÍFICO BACON",
      image: "../src/assets/images/mcnifico_bacon.png",
    },
    {
      name: "DUPLO QUARTERÃO",
      image: "../src/assets/images/duplo_quarterao.png",
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
