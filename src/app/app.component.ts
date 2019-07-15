import { Checkin, Pessoa } from './model';
import { Component, OnInit } from '@angular/core';
import { CarregarJsonService } from './carregar-json.service';
import { FormGroup } from '@angular/forms';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private carregarJsonService: CarregarJsonService){}

  title = 'Hotel-Front';

  checkin: any;
  pessoa: any;

  resumo = [];
  foraHotel = [];
  noHotel = [];
  pessoas = [];

  newCheckin: Checkin;

  filtro = "noHotel";

  display: boolean = false;

  msgs: Message[] = [];

  showDialog() {
    this.display = true;
  }
    
  ngOnInit(){
    this.checkin = {};
    this.checkin.adicionalVeiculo = false;

    this.pessoa = {};

    this.carregarJsonService.carregarDadosForaHotel()
        .then(dados => {
          this.foraHotel = dados;
          this.filtrar();
        });
      
    this.carregarJsonService.carregarDadosNoHotel()
        .then(dados => {
          this.noHotel = dados;          
          this.filtrar();
        });


    this.carregarJsonService.carregarPessoas()
        .then(dados => {          
          this.pessoas = dados
            .map(p => ({ label: p.nome, value: p }));
        })
  }

  salvar(frm: FormGroup){    
    this.newCheckin = new Checkin(this.checkin.pessoa,
       this.checkin.dataEntrada,this.checkin.dataSaida,this.checkin.adicionalVeiculo);
  
    if (this.checkin.dataSaida == '' || this.checkin.dataSaida == undefined){
      this.noHotel.push(this.newCheckin)
    } else {
      this.foraHotel.push(this.newCheckin)
    } 
    frm.reset();
    this.filtrar();
    this.msgs.push({severity:'success', summary:'Check in com sucesso', detail:''});
  }

  filtrar(){    
    let dataEntrada: Date
    let dataSaida: Date    
    let qtdeDias: number
    let valor: number
    let usaGaragem: boolean

    if (this.filtro == 'foraHotel'){
      this.resumo = [];
      
      for (var i = 0; i < this.foraHotel.length; i++) {
        dataEntrada = new Date(this.foraHotel[i].dataEntrada);
        dataSaida = new Date(this.foraHotel[i].dataSaida);       
        qtdeDias = dataSaida.getDate() - dataEntrada.getDate();        
        valor = 0;
        usaGaragem = this.foraHotel[i].adicionalVeiculo;

        let horaSaida = dataSaida.getHours();
        let minSaida = dataSaida.getMinutes();
        
        for (var ii = 0; ii < qtdeDias; ii++) {
          let data = new Date;
          
          data.setDate(dataEntrada.getDate() + ii);
          if (data.getUTCDay() == 0 || data.getUTCDay() == 6) {
            valor += 150.00; 
            if (usaGaragem){
              valor += 20.00
            }                       
          } else {
            valor += 120.00;
            if (usaGaragem){
              valor += 15.00
            } 
          }
        } 

        if (horaSaida >= 16 && minSaida > 30){
          if (dataSaida.getUTCDay() == 0 || dataSaida.getUTCDay() == 6) {
            valor += 150.00;                        
          } else {
            valor += 120.00;
          }
        }
        
        this.resumo.push({        
          nome: this.foraHotel[i].pessoa.nome, documento: this.foraHotel[i].pessoa.documento, valor: valor.toFixed(2)
        })
     }
    
    }
    if (this.filtro == 'noHotel'){
      this.resumo = this.noHotel
        .map(p => ({
          nome: p.pessoa.nome, documento: p.pessoa.documento, valor: 'Em aberto'
        }))
      }
  }

  salvarPessoa(frmpessoa: FormGroup){
    this.pessoas.push ({
      label: this.pessoa.nome, value: this.pessoa      
    }); 
    this.msgs.push({severity:'success', summary:'Pessoa salva com sucesso', detail:''});
    this.display = false;
  }

  
}
