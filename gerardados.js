//
// Objetivo: Gerar nomes e numeros aleatórios para o primeiro desafio.
// 
// Data:11/10/22
// faker.js - gerar nome,sobrenome e telefones aleatorios.
// ObjectstoCsv - gerar arquivo csv


//  Desafio 1

//se usar o modulo
//import { faker } from '@faker-js/faker';

const { faker } = require('@faker-js/faker');
const ObjectsToCsv = require('objects-to-csv');
var qtd;

// 1. números de telefone com ddi ddd +55 com formato
// 2. numero de telefone com ddi semformato
// 3. números de telefone com posicoes de ddi sem formato
// 4. numero de telefone com ddd + 9 digitos com formato
// 5. numero de telefone com ddd +8 digitos com formato
// 6. números de telefone com ddd+9 sem formato 
// 7. números de telefone com ddd+8 sem formato em
// 8. numeros de telefone maior que 9 sem formato
// 9. numeros de telefone maior que 8 sem formato

dadostelefone();



// 1. nome aleatorios masculinos e femininos 
// 2. primeiro nome, ultimo nome ou username
// 3. inserção de caracteres especiais

dadosnome(10);





function dadosnome(qtd){
   // adição de caracter especial
   var caracterespecial=[" ","@","#","-","*","&","$","%","()","=","+"]

   // dados para geração do Arquivo Json.
   var testes="";
   var inicio = '{ "dadostestes" : [';
   var fim = ']}';

   // dados para geração do arquivo csv
   var csvdadosNome=[];

   for (var i=0;i<qtd;i++){
      const sex = faker.name.sexType();
      const firstName = faker.name.firstName(sex);
      const lastName = faker.name.lastName();
      const nometeste = firstName+" "+caracterespecial[Math.floor(Math.random()* 10)]+lastName;
      
      if (i>1 && i<qtd){
         testes = testes+","+'{"Nome":'+'"'+nometeste+'"'+'}';
      }else{
         testes = '{"Nome":'+'"'+nometeste+'"'+'}'
      }
      csvdadosNome.push({ nome: nometeste })
   }

   for (var i=0;i<qtd;i++){
      const middleName = faker.name.middleName();
      const nometeste = middleName+caracterespecial[Math.floor(Math.random()* 10)];
      testes = testes+","+'{"Nome":'+'"'+nometeste+'"'+'}';
      csvdadosNome.push({ nome: nometeste })
   }

   for (var i=0;i<qtd;i++){
      const userName = faker.internet.userName()
      const nometeste = userName+caracterespecial[Math.floor(Math.random()* 10)];
      testes = testes+","+'{"Nome":'+'"'+nometeste+'"'+'}';
      csvdadosNome.push({ nome: nometeste })
   }
   

   var arquivojson = inicio+testes+fim;
   const objj = JSON.parse(arquivojson);

   //console.log(arquivojson);
   new ObjectsToCsv  ( csvdadosNome ) . toDisk ( './testeNome.csv', {  append : true } ) ;
}





function dadostelefone(){
   var fone=[];
   var testesJsonFone;
   var csvdadosTelefone=[];
   var inicio = '{ "dadostelefone" : [';
   var fim = ']}';

    fone[0]= faker.phone.number('+55-##-#####-####');
    fone[1]= faker.phone.number('+55###########');
    fone[2]= faker.phone.number('##############');
    fone[3]= faker.phone.number('##-#####-####');
    fone[4]= faker.phone.number('##-####-####');
    fone[5]= faker.phone.number('###########');
    fone[6]= faker.phone.number('##########');
    fone[7]= faker.phone.number('#########');
    fone[8]= faker.phone.number('#########');

   for (i=0;i<fone.length;i++){     
        if (i>1 && i<fone.length){
         testesJsonFone = testesJsonFone+","+'{"Phone":'+'"'+fone[i]+'"'+'}';
        }else{
         testesJsonFone = '{"Phone":'+'"'+fone[i]+'"'+'}'
        }
        csvdadosTelefone.push({ Phone:fone[i]});
   }
   var arquivojson = inicio+testesJsonFone+fim;
   const objj = JSON.parse(arquivojson);

   //console.log(arquivojson);
   new ObjectsToCsv  ( csvdadosTelefone ) . toDisk ( './testetelefone.csv', {  append : true } ) ;


}
