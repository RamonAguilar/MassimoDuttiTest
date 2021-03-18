import { Component, OnInit, Input } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  urlImg: string = 'https://starwars-visualguide.com/assets/img/starships/';
  
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor( private shipsService: ShipsService ) { 
  }
  
  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }

  setPageConfig(count){
    this.config["totalItems"] = count;
    return this.config;
  }

  getStarshipId(url) {
    this.shipId = url.replace(/^\D+|\D+$/g, "");
    const urlImage = `${this.urlImg}${this.shipId}.jpg`;
    return urlImage;
  }

  pageChanged(event){
    this.config.currentPage = event;
    this.shipsService.getShipsByPage(event).subscribe((ships) => {
      this.dataList = ships;
    })
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
