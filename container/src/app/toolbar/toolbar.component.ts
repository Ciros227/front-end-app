import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

export interface Stores {
  logo: string;
  name: string;
}

interface Categories {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredStores: Observable<Stores[]>;

  categories: Categories[] = [
    {value: 'stores', viewValue: 'Tutti i negozi'},
    {value: 'articles', viewValue: 'Tutte le categorie'},
    {value: 'abbigliamento-1', viewValue: 'Abbigliamento'},
    {value: 'elettronica-2', viewValue: 'Elettronica'},
    {value: 'informatica-3', viewValue: 'Informatica'},
    {value: 'alimentari-4', viewValue: 'Alimentari'},
    {value: 'bellezza-5', viewValue: 'Bellezza'},
    {value: 'fai-da-te-6', viewValue: 'Fai da te'},
    {value: 'cura-casa-7', viewValue: 'Cura della casa'},
    {value: 'auto-moto-8', viewValue: 'Auto & Moto'},
    {value: 'gioelli-9', viewValue: 'Gioielli'},
    {value: 'giardino-10', viewValue: 'Giardino'},
    {value: 'illuminazione-11', viewValue: 'Illuminazione'},
    {value: 'sport-12', viewValue: 'Sport'}
  ];

  stores: Stores[] = [
    {
      name: 'Americanino',
      logo: 'https://banner2.cleanpng.com/20180512/coe/kisspng-logo-united-states-americanino-brand-5af751c5a80864.5163461415261577656883.jpg'
    },
    {
      name: 'PAM Panorama',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_panorama_PAM.svg'
    }
  ];

  constructor() {
    this.filteredStores = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(store => store ? this._filterStores(store) : this.stores.slice())
      );
  }

  ngOnInit(){
  }

  private _filterStores(value: string): Stores[] {
    const filterValue = value.toLowerCase();
    return this.stores.filter(store => store.name.toLowerCase().indexOf(filterValue) === 0);
  }


  searchIt() {
    console.log("Ciao");
  }
}
