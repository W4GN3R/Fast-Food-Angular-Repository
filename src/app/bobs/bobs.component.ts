import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bobs',
  templateUrl: './bobs.component.html',
  styleUrls: ['./bobs.component.css']
})
export class BobsComponent implements OnInit {

  lanches = [
    {
      name: "SUPREME ARTESANAL",
      image: "../src/assets/images/supreme-artesanal.png",
    },
    {
      name: "BIG BOB ARTESANAL",
      image: "../src/assets/images/big-bob-artesanal.png",
    },
    {
      name: "ARTESANAL BOURBON BACON",
      image: "../src/assets/images/artesanal-bourbon-bacon.png",
    },
    {
      name: "AUSTRALIANO CHEDDAR",
      image: "../src/assets/images/australiano-cheddar.png",
    },
    {
      name: "BOBS ARTESANAL",
      image: "../src/assets/images/bobs-artesanal.png",
    },
    {
      name: "BIG BOB",
      image: "../src/assets/images/big-bob.png",
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
