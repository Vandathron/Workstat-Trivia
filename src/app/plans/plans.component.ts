import { Component, OnInit } from '@angular/core';
import { IPlan } from '../models/IPlan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   onclick(): void{

  }
  toggleGold(){
    this.showGold = !this.showGold;
    
  }

  toggleBronze(){
    this.showBronze = !this.showBronze;
  }

  toggleSilver(){
    this.showSilver = !this.showSilver;
  }

  showGold:boolean = false;
  showSilver:boolean = false;
  showBronze:boolean = false;


  firstRow: IPlan[] = [
    {
      title: "Investment",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },

    {
      title: "Smart Travel Savings",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: true
    },

    {
      title: "Security",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },
  ]

  secondRow: IPlan[] = [
    {
      title: "Visa",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },

    {
      title: "Ticket",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: true
    },

    {
      title: "Escort",
      isBronzeSupported: false,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },
  ]


  thirdRow: IPlan[] = [
    {
      title: "Tour Package",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },

    {
      title: "Hotel Reservation",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: true
    },

    {
      title: "24/7 Customer Success Expert",
      isBronzeSupported: false,
      isSilverSupported: false,
      isGoldSupported: true,
      hasColor: false
    },
    {
      title: "Travel shows",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: true
    },
    {
      title: "Event",
      isBronzeSupported: false,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },
    {
      title: "Games",
      isBronzeSupported: false,
      isSilverSupported: false,
      isGoldSupported: true,
      hasColor: true
    },
  ]

  fourthRow: IPlan[] = [
    {
      title: "Start Up",
      isBronzeSupported: false,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: true
    },

    {
      title: "Give a Meal",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: false
    },

    {
      title: "Cargo",
      isBronzeSupported: true,
      isSilverSupported: true,
      isGoldSupported: true,
      hasColor: true
    },
  ]

}
