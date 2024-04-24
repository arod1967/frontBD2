import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongoDBService } from '../../services/mongo-db.service';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrl: './heroe-edit.component.css'
})
export class HeroeEditComponent {
idHeroe!:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private dataBD: MongoDBService
  ){
    this.activatedRoute.params.subscribe((params) => {
      this.idHeroe = params['id'];
       console.log('IDHEROE', this.idHeroe);
    });



  }

}
