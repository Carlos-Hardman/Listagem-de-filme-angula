import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ... (código existente)

  categoriaEscolhida: string = '';
  
  // Lista de filmes por categoria
  filmesAcao = [
    { titulo: 'Batman', descricao: 'Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg' },
    { titulo: 'Vingadores', descricao: 'Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg' },
    { titulo: 'Avatar: O Caminho da Água', descricao: 'Jake Sully (Sam Worthington) ficou paraplégico após um combate na Terra. Ele é selecionado para participar do programa Avatar em substituição ao seu irmão gêmeo, falecido. Jake viaja a Pandora, uma lua extraterrestre', imagem: 'https://th.bing.com/th/id/OIP.vwTPUoXOm20SbW7MzZgAJgHaKj?rs=1&pid=ImgDetMain' },
    { titulo: 'Extraction 2', descricao: 'Apesar de o filme começar com o objetivo de realizar o resgate de uma criança, a trama acaba por se tornar numa luta pela sobrevivência de ambos. É explorada a relação entre o mercenário', imagem: 'https://th.bing.com/th/id/OIP.ZqUiSQfLHriv0eTJKvgJYQHaKh?rs=1&pid=ImgDetMain' },
    { titulo: 'Bastados', descricao: 'Conner (Paul Walker) é forçado a participar de uma nova missão: se infiltrar no crime organizado de Miami', imagem: 'https://a-static.mlcdn.com.br/800x560/superposter-cinema-e-series-velozes-e-furiosos-10/livrariamartinsfontespaulista/1048480/7462960f153e58cb3439d3db73be991c.jpeg' },
  ];

  filmesComedia = [
    { titulo: 'Gente Grande', descricao: 'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram ', imagem: 'https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg' },
    { titulo: 'Mistério em Paris', descricao: 'Mistério em Paris é a sequência de Mistério no Mediterrâneo. Prepare seu passaporte e mochila de aventuras, Nick Spitz (Adam Sandler) e Audrey Spitz (Jennifer Aniston) estão de malas prontas para resolver outro mistério internacional. ', imagem: 'https://br.web.img3.acsta.net/pictures/23/04/03/16/27/2188262.jpg' },
    { titulo: 'Que Horas Eu Te Pego?', descricao: 'Percy (Andrew Barth Feldman) é um jovem de 19 anos que está prestes a ir para a faculdade, mas nunca teve experiências amorosas na adolescência. Por isso, seus pais resolvem fazer um anúncio na internet à procura de uma garota experiente que aceite sair com ele em troca de dinheiro. ', imagem: 'https://pbs.twimg.com/media/F1Prw3ZXsAEki5c.jpg' },
    { titulo: 'Free Guy - Assumindo o Controle', descricao: 'Sinopse. Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto. ', imagem: 'https://br.web.img2.acsta.net/pictures/21/06/10/20/47/1652456.jpg' },
    { titulo: 'Inatividade Paranormal', descricao: 'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram ', imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/94/14/75/20420264.jpg' },


    // Adicione mais filmes conforme necessário
  ];

  filmesBesterol = [
    { titulo: 'As Branquelas', descricao: 'Os irmãos Marcus (Marlon Wayans) e Kevin (Shawn Wayans) são detetives do FBI escalados para escoltar as irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek). No entanto, um acidente impede que as irmãs compareçam a um evento onde seriam usadas de isca para capturar um criminoso. Para salvar seus empregos, Marcus e Kevin decidem assumir a identidade das irmãs.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg' },
    { titulo: 'Superbad — É Hoje', descricao: 'Superbad (2007), assim como American Pie (1999), traz como premissa principal a tentativa de dois adolescentes que desejam perder a virgindade antes de ir para a faculdade. A comédia adolescente foi responsável por lançar muitos talentos no mercado, como Jonah Hill, Michael Cera, Emma Stone e Christopher Charles Mintz-Plasse, como o lendário McLovin.', imagem: 'https://media.fstatic.com/GV5Hdau7-RBwLHbw-o20xVgueh8=/322x478/smart/filters:format(webp)/media/movies/covers/2013/10/superbad-e-hoje_t3581.jpg' },
    { titulo: 'Até que a Sorte nos Separe', descricao: 'Hassum interpreta Tino, um pai de família que vê sua vida comum se transformar da noite para o dia quando ganha na loteria. Ao lado da esposa Jane (Danielle Winits), Tino passa a ter uma vida de ostentação, como se não houvesse amanhã. Resultado: gasta todo o dinheiro em 15 anos. Ele aceita ajuda do vizinho Amauri (Kiko Mascarenhas), um consultor de finanças. O detalhe é que Tino tenta evitar que Jane descubra que eles estão quebrados. Assim, ele passará por situações engraçadas para fingir que tudo continua bem. ', imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/ad/Cartaz_AQASNS.jpg' },
    { titulo: 'Cine Holliúdy', descricao: 'Não podemos desprezar as produções nacionais, que têm feito sucesso entre o público brasileiro. A história de Cine Holliúdy acontece no interior do Ceará, na década de 1970. O ator Edmilson Filho vive Francisgleydisson, um homem que abriu um cinema na cidade, mas com a chegada da televisão seu negócio vai mal.', imagem: 'https://m.media-amazon.com/images/M/MV5BNWY0MmEyMmMtZTRhMS00N2Q2LWI4OGQtZTc3YmQwM2U1MDRjXkEyXkFqcGdeQXVyMTUwNjg3NTUw._V1_.jpg' },
    { titulo: 'De Férias da Família', descricao: 'Kevin Hart é Sonny e Mark Wahlberg é Huck. Eles protagonizam a história de dois amigos que se afastaram com o passar do tempo por levarem vidas bem diferentes. Enquanto Sonny casou e teve filhos, Huck, apesar de quarentão, continuou vivendo como solteiro. ', imagem: 'https://br.web.img2.acsta.net/pictures/22/09/09/19/36/5197060.png' },

  
    // Adicione mais filmes conforme necessário
  ];

  // Adicione mais categorias e suas respectivas listas de filmes conforme necessário
}