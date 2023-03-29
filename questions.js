// Pour construire de nouveaux objets
function question(answer, support, question, a, b, c, d) {
	this.answer = answer;
    this.support = support;
	this.question = question;
	this.a = a;
	this.b = b; 
	this.c = c;
	this.d = d;
	return this;
	}

// Le tableau des questions, r鰯nses, options et explications
var units = new Array(
	new question("a","Ábaco","Primeiro instrumento inventado para realizar cᬣulos.","Ábaco","Pascalina","Z1","Mark I"),
new question("b","Pascalina","Primeira calculadora mec⮩ca.","Ábaco","Pascalina","Z1","Mark I"),
new question("c","Z1","Primeiro computador eletromec⮩co.","Ábaco","Pascalina","Z1","Mark I"),
new question("a","ENIAC","Primeiro computador eletr��o.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("b","Tradic","Primeiro computador 100% transistorizado.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("c","Lisa","Primeiro computador com mouse e interface grᦩca.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("a","Charles Babbage","Conhecido como pai da Informᴩca.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("b","Ada Lovelace","Primeira programadora da hist󲩡.","Charles Babbage","Ada Lovelace","Alan Turing","Joan Clarke"),
new question("c","Alan Turing","Desenvolveu conceitos de algoritmos e inteligꮣia artificial.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("d","Von Neumann","Responsᶥl pela arquitetura dos computadores.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("a","Vᬶulas, enormes, fia磯 exposta.","S㯠caracter�icas da 1ª Gera磯.","Vᬶulas, enormes, fia磯 exposta.","Transistores, armazenamento em disco.","Circuitos integrados, teclado, monitor.","Microprocessador, mouse, interface grᦩca."),
new question("b","Transistores, armazenamento em disco.","S㯠caracter�icas da 2ª Gera磯.","Vᬶulas, enormes, fia磯 exposta.","Transistores, armazenamento em disco.","Circuitos integrados, teclado, monitor.","Inteligꮣia artificial, computa磯 nas nuvens."),
new question("c","Circuitos integrados, teclado, monitor.","S㯠caracter�icas da 3ª Gera磯.","Vᬶulas, enormes, fia磯 exposta.","Microprocessador, mouse, interface grᦩca.","Circuitos integrados, teclado, monitor.","Inteligꮣia artificial, computa磯 nas nuvens."),
new question("d","Inteligꮣia artificial, computa磯 nas nuvens.","S㯠caracter�icas da 5ª Gera磯.","Circuitos integrados, teclado, monitor.","Microprocessador, mouse, interface grᦩca.","Transistores, armazenamento em disco.","Inteligꮣia artificial, computa磯 nas nuvens."),
new question("b","Microprocessador, mouse, interface grᦩca.","S㯠caracter�icas da 4ª Gera磯.","Vᬶulas, enormes, fia磯 exposta.","Microprocessador, mouse, interface grᦩca.","Transistores, armazenamento em disco.","Inteligꮣia artificial, computa磯 nas nuvens."),
new question("b","Alan Turing","Qual o personagem principal do filme O Jogo da Imita磯?","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("d","decifrou o c󤩧o enigma.","No filme Alan Turing","localizou a base de Penemonde.","coordenou o Projeto Manhatan.","identificou o Bunker.","decifrou o c󤩧o enigma."),
new question("c","Hugh Alexander","Campe㯠brit⮩co de xadrez.","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("a","Joan Clarke","Excelente em cruzadinha.","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("a","Hardware","Parte f�ca do computador.","Hardware","Software","Peopleware","Firmware"),
new question("c","Peopleware","UsuᲩo do computador.","Hardware","Software","Peopleware","Firmware"),
new question("b","Software","Parte l󧩣a do computador.","Hardware","Software","Peopleware","Firmware"),
new question("a","Desktop","Famosos computadores de mesa, ideais para casas, escrit󲩯s e escolas.","Desktop","Notebook","Smartphone","Tablet"),
new question("c","Smartphone","Celulares com funcionalidades avan硤as.","Desktop","Notebook","Smartphone","Tablet"),
new question("b","Notebook","Computadores portᴥis conhecidos como laptops.","Desktop","Notebook","Smartphone","Tablet"),
new question("a","Bit","Menor unidade da informa磯.","Bit","Byte","Caractere","KB"),
new question("b","Byte (B)","Conjunto de 8 bits ou 1 caractere.","Bit (b)","Byte (B)","Kilobyte (KB)","Megabyte (MB)"),
new question("c","KB - MB - GB - TB","Qual op磯 da escala de BIT estᠥm ordem crescente.","TB - GB - MB - KB","TB - KB - GB - MB","KB - MB - GB - TB","KB - TB - MB - GB"),
new question("b","7 B","Qual a quantidade de bytes da palavra Revis㯿","0,007 B","7 B","7000 B","0,7 bytes"),
new question("b","7 filmes","Quantos filmes de 1 GB posso colocar em um cart㯠de mem󲩡 de 7450 MB?","0,007 filmes","7 filmes","7,45 filmes","7000 filmes"),
new question("d","Processador","Conhecido como c鲥bro do computador.","Barramento","Chipstet","Placa m㥢,"Processador"),
new question("c","Placa m㥢,"Responsᶥl por conectar e interligar todos os dispositivos quem compõem o computador.","Barramento","Chipset","Placa m㥢,"Processador"),
new question("b","Chipset","Divide-se em ponte norte e ponte sul.","Barramento","Chipset","Placa m㥢,"Processador"),
new question("a","Barramento","Conjunto de trilhas que permitem a interliga磯 entre os componentes do PC.","Barramento","Chipset","Placa m㥢,"Processador"),
new question("d","Barramento","Responsᶥis pela execu磯 de cᬣulos, decisões l󧩣as e instru絥s.","Barramento","Chipset","Placa m㥢,"Processador"),
new question("c","Mem󲩡 RAM","Armazena todos os programas e dados que est㯠em uso.","Mem󲩡 auxiliar","Mem󲩡 cache","Mem󲩡 RAM","Mem󲩡 ROM"),
new question("d","Mem󲩡 ROM","Mem󲩡 somente leitura.","Mem󲩡 auxiliar","Mem󲩡 cache","Mem󲩡 RAM","Mem󲩡 ROM"),
new question("a","Mem󲩡 auxiliar","Mem󲩡 de armazenamento permanente.","Mem󲩡 auxiliar","Mem󲩡 cache","Mem󲩡 RAM","Mem󲩡 ROM"),
new question("b","Cache","Mem󲩡 de alta velocidade que armazena os dados mais frequentemente solicitados.","Auxiliar","Cache","RAM","ROM"),
new question("d","Registradores","Mem󲩡 mais rᰩda que existe.","HD","Cache","RAM","Registradores"),
new question("b","HD","Tipo de mem󲩡 auxiliar mais utilizado, tamb魠conhecido como disco r�do.","CD/DVD/BD","HD","Pendrive","SSD"),
new question("b","Placa de som","Dispositivo que envia e recebe sinais sonoros entre equipamentos de som e um computador,","Placa de rede","Placa de som","Placa de v�o","Placa m㥢),
new question("c","Placa de v�o","Dispositivo que envia sinais do computador para o monitor.","Placa de rede","Placa de som","Placa de v�o","Placa m㥢),
new question("a","Placa de rede","Dispositivo de hardware responsᶥl pela comunica磯 entre os computadores.","Placa de rede","Placa de som","Placa de v�o","Placa m㥢),
new question("b","Fonte de alimenta磯","Responsᶥl por receber a energia da rede el鴲ica e gerenciar a mesma para o computador.","Estabilizador","Fonte de alimenta磯","M󤵬o Isolador","Nobreak"),
new question("d","Nobreak","Equipamento de prote磯 qeue mant魠o PC funcionando em caso de falta de energia.","Estabilizador","Fonte de alimenta磯","M󤵬o Isolador","Nobreak"),
new question("d","Monitor CRT; caixa de som; Plotter.","Dispositivos somente de sa� de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c󤩧o de barras; webcam.","Caneta 󰴩ca; impressora; cart㯠de mem󲩡.","Monitor CRT; caixa de som; Plotter."),
new question("b","Microfone; leitor de c󤩧o de barras; webcam.","Dispositivos somente de entrada de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c󤩧o de barras; webcam.","Caneta 󰴩ca; impressora; cart㯠de mem󲩡.","Monitor CRT; caixa de som; Plotter."),
new question("a","Monitor touchscreen; HD externo; modem.","Dispositivos de entrada e sa� de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c󤩧o de barras; webcam.","Caneta 󰴩ca; impressora; cart㯠de mem󲩡.","Monitor CRT; caixa de som; Plotter."),
new question("c","Caneta 󰴩ca; impressora; cart㯠de mem󲩡.","S㯠dispositivos s󠤥 entrada; s󠤥 sa�; de entrada e sa�, respectivamente.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de c󤩧o de barras; webcam.","Caneta 󰴩ca; impressora; cart㯠de mem󲩡.","Monitor CRT; caixa de som; Plotter."),
new question("a","Blaise Pascal","Desenvolveu a primeira calculadora mec⮩ca.","Blaise Pascal","Alan Turing","Ada Lovelace","Charles Babbage"),
new question("c","executar, estudar, redistribuir e aperfei篡r.","As 4 liberdades do software livre","fabricar, desenvolver, oferecer e vender.","distribuir, conectar, vender e fechar.","executar, estudar, redistribuir e aperfei篡r.","abrir, conectar, utilizar e fechar."),
new question("a","Windows","Fᣩl aprendizagem de uso, interface simples e facilidade de adquirir c󤩧os maliciosos.","Windows","iOS","Linux","Android"),
new question("c","Linux","Seguran硬 software livre e incompatibilidade com diversos softwares populares.","Windows","iOS","Linux","Android"),
new question("b","iOS","Design otimizado, 󴩭o desempenho e pre篠de compra elevado.","Windows","iOS","Linux","Android"),
new question("d","Android","C󤩧o aberto, grande variedade de aplicativos e desvaloriza磯 dos dispositivos.","Windows","iOS","Linux","Android"),
new question("a","Software comercial","Uso condicionado a pagamento pr鶩o (compra).","Software comercial","Demo","Adware","Software livre"),
new question("c","Adware","Uso condicionado a exibi磯 de propagandas e anúncios.","Software comercial","Demo","Adware","Software livre"),
new question("b","Demo","Uso limitado, normalmente para avalia磯.","Software comercial","Demo","Adware","Software livre"),
new question("d","Microsoft Windows","Exemplos de aplicativos, exceto.","Google Chrome","Microsoft Excel","Windows Movie Maker","Microsoft Windows"),
new question("a","VLC Media Player","Exemplos de softwares bᳩcos, exceto.","VLC Media Player","Linux Ubuntu","macOS Monterey","Android"),
new question("d","iOS 15","Exemplos de aplicativos, exceto.","Microsoft Word","Internet Explorer","Mozilla Firefox","iOS 15")

	);
