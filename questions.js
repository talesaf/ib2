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

// Le tableau des questions, réponses, options et explications
var units = new Array(
	new question("a","Ábaco","Primeiro instrumento inventado para realizar cálculos.","Ábaco","Pascalina","Z1","Mark I"),
new question("b","Pascalina","Primeira calculadora mecânica.","Ábaco","Pascalina","Z1","Mark I"),
new question("c","Z1","Primeiro computador eletromecânico.","Ábaco","Pascalina","Z1","Mark I"),
new question("a","ENIAC","Primeiro computador eletrônico.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("b","Tradic","Primeiro computador 100% transistorizado.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("c","Lisa","Primeiro computador com mouse e interface gráfica.","ENIAC","Tradic","Lisa","IBM 1401"),
new question("a","Charles Babbage","Conhecido como pai da Informática.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("b","Ada Lovelace","Primeira programadora da história.","Charles Babbage","Ada Lovelace","Alan Turing","Joan Clarke"),
new question("c","Alan Turing","Desenvolveu conceitos de algoritmos e inteligência artificial.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("d","Von Neumann","Responsável pela arquitetura dos computadores.","Charles Babbage","Ada Lovelace","Alan Turing","Von Neumann"),
new question("a","Válvulas, enormes, fiação exposta.","São características da 1ª Geração.","Válvulas, enormes, fiação exposta.","Transistores, armazenamento em disco.","Circuitos integrados, teclado, monitor.","Microprocessador, mouse, interface gráfica."),
new question("b","Transistores, armazenamento em disco.","São características da 2ª Geração.","Válvulas, enormes, fiação exposta.","Transistores, armazenamento em disco.","Circuitos integrados, teclado, monitor.","Inteligência artificial, computação nas nuvens."),
new question("c","Circuitos integrados, teclado, monitor.","São características da 3ª Geração.","Válvulas, enormes, fiação exposta.","Microprocessador, mouse, interface gráfica.","Circuitos integrados, teclado, monitor.","Inteligência artificial, computação nas nuvens."),
new question("d","Inteligência artificial, computação nas nuvens.","São características da 5ª Geração.","Circuitos integrados, teclado, monitor.","Microprocessador, mouse, interface gráfica.","Transistores, armazenamento em disco.","Inteligência artificial, computação nas nuvens."),
new question("b","Microprocessador, mouse, interface gráfica.","São características da 4ª Geração.","Válvulas, enormes, fiação exposta.","Microprocessador, mouse, interface gráfica.","Transistores, armazenamento em disco.","Inteligência artificial, computação nas nuvens."),
new question("b","Alan Turing","Qual o personagem principal do filme O Jogo da Imitação?","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("d","decifrou o código enigma.","No filme Alan Turing","localizou a base de Penemonde.","coordenou o Projeto Manhatan.","identificou o Bunker.","decifrou o código enigma."),
new question("c","Hugh Alexander","Campeão britânico de xadrez.","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("a","Joan Clarke","Excelente em cruzadinha.","Joan Clarke","Alan Turing","Hugh Alexander","Christopher Morcom"),
new question("a","Hardware","Parte física do computador.","Hardware","Software","Peopleware","Firmware"),
new question("c","Peopleware","Usuário do computador.","Hardware","Software","Peopleware","Firmware"),
new question("b","Software","Parte lógica do computador.","Hardware","Software","Peopleware","Firmware"),
new question("a","Desktop","Famosos computadores de mesa, ideais para casas, escritórios e escolas.","Desktop","Notebook","Smartphone","Tablet"),
new question("c","Smartphone","Celulares com funcionalidades avançadas.","Desktop","Notebook","Smartphone","Tablet"),
new question("b","Notebook","Computadores portáteis conhecidos como laptops.","Desktop","Notebook","Smartphone","Tablet"),
new question("a","Bit","Menor unidade da informação.","Bit","Byte","Caractere","KB"),
new question("b","Byte (B)","Conjunto de 8 bits ou 1 caractere.","Bit (b)","Byte (B)","Kilobyte (KB)","Megabyte (MB)"),
new question("c","KB - MB - GB - TB","Qual opção da escala de BIT está em ordem crescente.","TB - GB - MB - KB","TB - KB - GB - MB","KB - MB - GB - TB","KB - TB - MB - GB"),
new question("b","7 B","Qual a quantidade de bytes da palavra Revisão?","0,007 B","7 B","7000 B","0,7 bytes"),
new question("b","7 filmes","Quantos filmes de 1 GB posso colocar em um cartão de memória de 7450 MB?","0,007 filmes","7 filmes","7,45 filmes","7000 filmes"),
new question("d","Processador","Conhecido como cérebro do computador.","Barramento","Chipstet","Placa mãe","Processador"),
new question("c","Placa mãe","Responsável por conectar e interligar todos os dispositivos quem compõem o computador.","Barramento","Chipset","Placa mãe","Processador"),
new question("b","Chipset","Divide-se em ponte norte e ponte sul.","Barramento","Chipset","Placa mãe","Processador"),
new question("a","Barramento","Conjunto de trilhas que permitem a interligação entre os componentes do PC.","Barramento","Chipset","Placa mãe","Processador"),
new question("d","Barramento","Responsáveis pela execução de cálculos, decisões lógicas e instruções.","Barramento","Chipset","Placa mãe","Processador"),
new question("c","Memória RAM","Armazena todos os programas e dados que estão em uso.","Memória auxiliar","Memória cache","Memória RAM","Memória ROM"),
new question("d","Memória ROM","Memória somente leitura.","Memória auxiliar","Memória cache","Memória RAM","Memória ROM"),
new question("a","Memória auxiliar","Memória de armazenamento permanente.","Memória auxiliar","Memória cache","Memória RAM","Memória ROM"),
new question("b","Cache","Memória de alta velocidade que armazena os dados mais frequentemente solicitados.","Auxiliar","Cache","RAM","ROM"),
new question("d","Registradores","Memória mais rápida que existe.","HD","Cache","RAM","Registradores"),
new question("b","HD","Tipo de memória auxiliar mais utilizado, também conhecido como disco rígido.","CD/DVD/BD","HD","Pendrive","SSD"),
new question("b","Placa de som","Dispositivo que envia e recebe sinais sonoros entre equipamentos de som e um computador,","Placa de rede","Placa de som","Placa de vídeo","Placa mãe"),
new question("c","Placa de vídeo","Dispositivo que envia sinais do computador para o monitor.","Placa de rede","Placa de som","Placa de vídeo","Placa mãe"),
new question("a","Placa de rede","Dispositivo de hardware responsável pela comunicação entre os computadores.","Placa de rede","Placa de som","Placa de vídeo","Placa mãe"),
new question("b","Fonte de alimentação","Responsável por receber a energia da rede elétrica e gerenciar a mesma para o computador.","Estabilizador","Fonte de alimentação","Módulo Isolador","Nobreak"),
new question("d","Nobreak","Equipamento de proteção qeue mantém o PC funcionando em caso de falta de energia.","Estabilizador","Fonte de alimentação","Módulo Isolador","Nobreak"),
new question("d","Monitor CRT; caixa de som; Plotter.","Dispositivos somente de saída de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de código de barras; webcam.","Caneta óptica; impressora; cartão de memória.","Monitor CRT; caixa de som; Plotter."),
new question("b","Microfone; leitor de código de barras; webcam.","Dispositivos somente de entrada de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de código de barras; webcam.","Caneta óptica; impressora; cartão de memória.","Monitor CRT; caixa de som; Plotter."),
new question("a","Monitor touchscreen; HD externo; modem.","Dispositivos de entrada e saída de dados.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de código de barras; webcam.","Caneta óptica; impressora; cartão de memória.","Monitor CRT; caixa de som; Plotter."),
new question("c","Caneta óptica; impressora; cartão de memória.","São dispositivos só de entrada; só de saída; de entrada e saída, respectivamente.","Monitor touchscreen; HD externo; modem.","Microfone; leitor de código de barras; webcam.","Caneta óptica; impressora; cartão de memória.","Monitor CRT; caixa de som; Plotter."),
new question("a","Blaise Pascal","Desenvolveu a primeira calculadora mecânica.","Blaise Pascal","Alan Turing","Ada Lovelace","Charles Babbage"),
new question("c","executar, estudar, redistribuir e aperfeiçoar.","As 4 liberdades do software livre","fabricar, desenvolver, oferecer e vender.","distribuir, conectar, vender e fechar.","executar, estudar, redistribuir e aperfeiçoar.","abrir, conectar, utilizar e fechar."),
new question("a","Windows","Fácil aprendizagem de uso, interface simples e facilidade de adquirir códigos maliciosos.","Windows","iOS","Linux","Android"),
new question("c","Linux","Segurança, software livre e incompatibilidade com diversos softwares populares.","Windows","iOS","Linux","Android"),
new question("b","iOS","Design otimizado, ótimo desempenho e preço de compra elevado.","Windows","iOS","Linux","Android"),
new question("d","Android","Código aberto, grande variedade de aplicativos e desvalorização dos dispositivos.","Windows","iOS","Linux","Android"),
new question("a","Software comercial","Uso condicionado a pagamento prévio (compra).","Software comercial","Demo","Adware","Software livre"),
new question("c","Adware","Uso condicionado a exibição de propagandas e anúncios.","Software comercial","Demo","Adware","Software livre"),
new question("b","Demo","Uso limitado, normalmente para avaliação.","Software comercial","Demo","Adware","Software livre"),
new question("d","Microsoft Windows","Exemplos de aplicativos, exceto.","Google Chrome","Microsoft Excel","Windows Movie Maker","Microsoft Windows"),
new question("a","VLC Media Player","Exemplos de softwares básicos, exceto.","VLC Media Player","Linux Ubuntu","macOS Monterey","Android"),
new question("d","iOS 15","Exemplos de aplicativos, exceto.","Microsoft Word","Internet Explorer","Mozilla Firefox","iOS 15")

	);
