# Geração de Massa de teste - Desafio 1

<p>
  
  <img alt="Desenvolvimento" longdesc="node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Font_Awesome_5_brands_node-js.svg/105px-Font_Awesome_5_brands_node-js.svg.png?20181017222047" style="width:30" />
</p>

	Desafio 1	
		
	Maristela Borges	
Projeto	SoWe - Um app de previsão do tempo	
Equipe de Desenvolvimento 	 Builders	
 Documentação	https://vagas-builders.readme.io/reference/paymentpix	
	https://www.figma.com/file/mTFeT33yjTBhq7Ot2Me44x/Desafio-Weather-App-%5BBuilders%5D?node-id=55%3A16598	
	https://github.com/platformbuilders/challenge-qa.git	
Descritivos		
entregas	" Cenários de testes
 Relatório com os problemas encontrados com evidências
 evidências dos testes(videos/imagens)"	
![image](https://user-images.githubusercontent.com/91573895/195939680-0c981d0a-a84f-4137-9fe1-576038c0f856.png)

## 🚀 How to use

```node
programa para utiizandoo apis para gerar massa de dados
node gerardados
```


## 📝 Notes

critérios	observações		Pontuação
Integridade			
integridade/robustez/escape	não existe a opção		0
integridade/robustez/undo	não existe a  opção		0
integridade/robustez/stop	não existe a opção para o usuário não continuar.		0
integridade/segurança	não validado		-
Manipulabilidade			
Manipulabilidade/disponibilidade	não oferece uma ajuda ao usuário em qualquer situação		0
Manipulabilidade/interação	Uma interação muito fácil que pode ser entendida por qualquer pessoa mesmo sem experiência.		1
Manipulabilidade/adaptabilidade	atende as necessidades determinadas pelo usuário :  o aplicativo deve consumir a localização atual do usuário e exibir na interface o endereço atual e os dados climáticos da região.		1
Compreensibilidade			
Compreensibilidade/simplicidade	De fácil entendimento 		1
Compreensibilidade/facilidade de aprendizado	De fácil aprendizado		1
Comunicabilidade			
Comunicabilidade/forma de apresentacao	alinhamento do texto com a imagem.		1
Comunicabilidade/adequação simbolica	alinhamentos das imagens com os textos; 		0,5
Operacionalidade			
operacionalidade/adequação estilo de diálogo	simbolos de acordo 		1
operacionalidade/controle do dialogo	não se aplica - necessidade de validação com o usuário final		-
operacionalidade/portabilidade	não foi possível realizar, porém apresenta as opções logo considero de acordo		1
operacionalidade/eficiência	não foi possível teste performance.		-
			63%
![image](https://user-images.githubusercontent.com/91573895/195939827-fe9a5a93-f82a-49a9-b12f-33cd6790f18e.png)

- arquivo excell com cenários, planos e criterios.

-  Objetivo: Gerar nomes e numeros aleatórios para o primeiro desafio.
Arquivos existentes são atualizados.

Identificador	Teste - 01/1022/0xx		
Sistema	Android		
Massa	telefone 		
	nome		
	localidade	não disponibilizado	
	sms	não disponbilizado	
Ação esperada			realizado
recebimento do sms com o código - não se aplica	recebimento		n
validação do número	formatação de número		n
validação do nome			n
mensagem			n
opção de retorno			n
API	// Data:11/10/22		
	// faker.js gerar nome,sobrenome,nome do meio, username e telefones aleatorios (9 em formatos e tamanhos diferentes).		
	https://github.com/MarEstrela/testeB1.git		
			
telefone			
// 1. números de telefone com ddi ddd +55 com formato			
// 2. numero de telefone com ddi semformato			
// 3. números de telefone com posicoes de ddi sem formato			
// 4. numero de telefone com ddd + 9 digitos com formato			
// 5. numero de telefone com ddd +8 digitos com formato			
// 6. números de telefone com ddd+9 sem formato 			
// 7. números de telefone com ddd+8 sem formato em			
// 8. numeros de telefone maior que 9 sem formato			
// 9. numeros de telefone maior que 8 sem formato			
// 10.String			
// 11.String com caracter especial			
Nome			
// 1. nome aleatorios masculinos e femininos 			
// 2. primeiro nome, ultimo nome ou username			
// 3. inserção de caracteres especiais			
![image](https://user-images.githubusercontent.com/91573895/195939896-a2522a42-b637-4683-b629-5394569dd60f.png)

-  APIS
faker.js - gerar nome,sobrenome e telefones aleatorios.
https://fakerjs.dev/api/

ObjectstoCsv - gerar arquivo csv
https://www.npmjs.com/package/objects-to-csv
