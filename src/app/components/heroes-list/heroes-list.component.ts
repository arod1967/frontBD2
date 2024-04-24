import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { MongoDBService } from '../../services/mongo-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  Heroes!: Heroe[];

  constructor(
    private dataBD: MongoDBService,
    private router: Router,
  ) {
    
  }

  ngOnInit(){
    this.cargarHeroesBD();
  }

  async cargarHeroesBD() {
    //this.cargando = true;
    await this.dataBD
    .getHeroes()
    .toPromise()
    .then((data:any) =>{
      this.Heroes = data.resp;
      console.log(this.Heroes)
    });

    /*
      .getHeroes()
      .toPromise()
      .then((data: any) => {
        this.heroes = data.resp;

        console.log('DATOSNUEVOS', this.heroes);

        this.cargando = false;
      });
      */
  }

  editarHeroe(unIdHeroe:any){
    this.router.navigate(['/heroeedit', unIdHeroe]);
  }

  eliminarHeroe(unHeroe:any){

  }

  editarFotos(unHeroe:any){

  }


}
