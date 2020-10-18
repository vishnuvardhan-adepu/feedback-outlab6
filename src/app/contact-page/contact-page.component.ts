import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class contactpagecomponent {

  constructor() { }

  names: string[]=["Satwik","Vishnuvardhan"];
  rollnos: string[]=["190050107","190050130"];
  emails: string[]=["pandu.satwik@gmail.com", "adepuvishnuvardhan111@gmail.com"];

}
