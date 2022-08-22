import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-casa-hogwarts',
  templateUrl: './formulario-casa-hogwarts.component.html',
  styleUrls: ['./formulario-casa-hogwarts.component.css']
})


export class FormularioCasaHogwartsComponent {



        nome !: String;
        bomcoracao!: String;
        etico!: String;
        especial!: String;
        pesquisar!: String;
        resposta!: String;

  resultado(){

    if((this.etico=="s" && this.bomcoracao=="s" && this.especial=="s" && this.pesquisar=="s")
    || (this.etico=="s" &&this.bomcoracao=="s" && this.especial=="n" && this.pesquisar=="s")
    || (this.etico=="s" &&this.bomcoracao=="n" && this.especial=="n" && this.pesquisar=="s")
    || (this.etico=="n" &&this.bomcoracao=="n" && this.especial=="n" && this.pesquisar=="s")){
      this.resposta="Grifinoria";
    }

    else if( (this.etico=="n" &&this.bomcoracao=="s" && this.especial=="n" && this.bomcoracao=="n") ||
    (this.etico=="n" && this.bomcoracao=="s" && this.especial=="s" && this.pesquisar=="n") ||
    (this.etico=="n" && this.bomcoracao=="n" && this.especial=="n" && this.pesquisar=="n") ||
    (this.etico=="n" &&this.bomcoracao=="n" && this.especial=="s" && this.pesquisar=="n") ||
    (this.etico=="n" &&this.bomcoracao=="s" && this.especial=="n" && this.pesquisar=="s")){
      this.resposta="Sonserina";
    }

    else if( (this.etico=="n" && this.bomcoracao=="n" && this.especial=="s" && this.pesquisar=="s") ||
    (this.etico=="s" && this.bomcoracao=="s" && this.especial=="s" && this.pesquisar=="n")||
    (this.etico=="s" &&this.bomcoracao=="n" && this.especial=="s" && this.pesquisar=="n")||
      (this.etico=="n" &&this.bomcoracao=="s" && this.especial=="s" && this.pesquisar=="s")){
      this.resposta="Corvinal";
    }

    else if( (this.etico=="s" && this.bomcoracao=="n" && this.especial=="n" && this.pesquisar=="s") ||
    (this.etico=="s" && this.bomcoracao=="n" && this.especial=="s" && this.pesquisar=="s")||
    (this.etico=="s" &&this.bomcoracao=="s" && this.especial=="n" && this.pesquisar=="n")){
      this.resposta="Lufa-lufa";
    }


    // const casaHogwarts ={
    //   nome: this.nome,
    //   resposta: this.resposta
    // }
  }




  }

  // resultado(e: Event){
  //   e.preventDefault();
  //   console.log(this.fistName);
  // }





