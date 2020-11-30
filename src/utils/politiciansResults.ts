export enum PoliticianCategory {
  Featured,
  Politician,
  Commentator,
  Youth
}

interface PoliticiansResult {
  id: string;
  person: {
    name: string;
    imgName: string;
    description: string;
  };
  categories: PoliticianCategory[];
}

export const politiciansResults: PoliticiansResult[] = [
  {
    id: '5f167727a3e4ed0009100f96',
    person: {
      name: 'Paweł Kukiz',
      imgName: 'kukiz.png',
      description: 'Poseł na Sejm VIII i IX kadencji, inicjator ruchu Kukiz\'15 i współtwórca projektu politycznego Koalicja Polska.',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5f13cbf1da83620009eaa853',
    person: {
      name: 'Artur Dziambor',
      imgName: 'dziambor.png',
      description: 'Działa w polityce od około 20 lat, jest nauczycielem i przedsiębiorcą. Obecnie pełni rolę wiceprezesa partii KORWiN, a w IX kadencji Sejmu został posłem z list Konfederacji.',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5ec974300235ea0009f01dbf',
    person: {
      name: 'Dariusz Szczotkowski',
      imgName: 'szczotkowski.png',
      description: 'Wieloletni działacz, komentator sceny politycznej i prezes stowarzyszenia Niskie Składki.',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Commentator,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5f2b16f4eec02b00096e4738',
    person: {
      name: 'Jacek Czerniak',
      imgName: 'czerniak.png',
      description: 'Politolog i poseł na Sejm VII i IX kadencji. Od 2007 do 2010 był przewodniczącym sejmiku województwa lubelskiego.',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5f2dc1f8eec02b00096e4c92',
    person: {
      name: 'Szymon Pękala',
      imgName: 'pekala.png',
      description: 'Youtuber, prowadzi kanały "Wojna Idei" i "Szymon mówi". Promuje na nich ideę otwartego dialogu oraz publikuje w Internecie swoje przemyślenia na tematy tematy religijne, społeczne i polityczne.',
    },
    categories: [
      PoliticianCategory.Commentator,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5f40e4619a91c800090ec434',
    person: {
      name: 'Jakub Kulesza',
      imgName: 'kulesza.png',
      description: 'Z wykształcenia informatyk, w polityce działa od prawie 15 lat. Zaczynał od sekcji młodzieżowej Unii Polityki Realnej, następnie współtworzył kilka znanych projektów politycznych, z których dwukrotnie skutecznie ubiegał się o mandat. Obecnie jest posłem z ramienia Konfederacji.',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5d94cab254c34200042fdbf1',
    person: {
      name: 'Przemysław Wipler',
      imgName: 'wipler.png',
      description: 'Już nie jest zawodowo aktywny w polityce, ale nadal komentuje polską scenę na Twitterze. Przedsiębiorca, prawnik, były prezes Stowarzyszenia KoLiber i Fundacji Republikańskiej, a także poseł na Sejm VII kadencji.',
    },
    categories: [
      PoliticianCategory.Commentator,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5f295069eec02b00096e4439',
    person: {
      name: 'Cezary Świtała',
      imgName: 'switala.png',
      description: 'Politolog, ichtiolog, modelarz oraz socjolog, który obecnie studiuje w Górnośląskej Wyższej Szkole Handlowej. W 2018 roku bez powodzenia startował z list ŚPR - Śląska Partia Regionalna do Sejmiku Województwa Śląskiego. Jest libertarianinem oraz prezesem i założycielem partii o identycznej nazwie (Libertarianie).',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Youth,
    ],
  },
  {
    id: '5fa4a2457c30c000099a6ba8',
    person: {
      name: 'Marcin Kruszewski',
      imgName: 'kruszewski.png',
      description: 'Założyciel i przewodniczący Młodej Unii - młodzieżówki Unii Europejskich Demokratów. Ukończył prawo na Uniwersytecie Warszawskim, podczas studiów zajmował się działaniem w ruchu naukowym i doradztwem prawnym w ramach studenckiej poradni prawa. Specjalizuje się w prawie handlowym i filozofii prawa. Jest klasycznym liberałem, dla którego wolność jednostki zarówno w wymiarze politycznym jak i gospodarczym jest najwyższą wartością. Prywatnie interesuje się historią, kulturą klasyczną i Bundesligą.',
    },
    categories: [
      PoliticianCategory.Youth,
    ],
  },
  {
    id: '5fa95a5b73828e0009335b0c',
    person: {
      name: 'Andrzej Prendke',
      imgName: 'prendke.png',
      description: 'Andrzej Prendke, Przewodniczący Młodych .Nowoczesnych. Oprócz młodzieżówki, pełni funkcję członka Zarządu Krajowego .Nowoczesnej. Jest absolwentem prawa na Uniwersytecie im. Adama Mickiewicza w Poznaniu. Pracuje w międzynarodowej korporacji. Jest członkiem Młodzieżowej Rady Konsultacyjnej przy Prezydencie Miasta Poznania, a także licencjonowanym przewodnikiem po tym mieście. Kolekcjonuje płyty winylowe a w wolnym czasie gra na gitarze.',
    },
    categories: [
      PoliticianCategory.Youth,
    ],
  },
  {
    id: '5fb4188ebc01f700093fe6de',
    person: {
      name: 'Paweł Szramka',
      imgName: 'szramka.png',
      description: 'Logistyk, żołnierz zawodowy i poseł na Sejm VIII i IX kadencji. Angażował się w lokalną działalność akcji Zmieleni.pl i ruchu na rzecz JOW. W wyborach parlamentarnych w 2015 skutecznie kandydował do Sejmu z pierwszego miejsca na liście komitetu wyborczego wyborców Kukiz’15. W wyborach parlamentarnych w 2019 uzyskał poselską reelekcję w ramach list Koalicji Polskiej. W Sejmie IX kadencji został zastępcą przewodniczącego Komisji Obrony Narodowej.',
    },
    categories: [
      PoliticianCategory.Featured,
      PoliticianCategory.Politician,
    ],
  },
  {
    id: '5fb02864c567f70009a0174f',
    person: {
      name: 'Monika Rosa',
      imgName: 'rosa.png',
      description: 'Posłanka na Sejm VIII i IX kadencji, politolożka, z pochodzenia Ślązaczka. Początkowo działała m.in. w Młodym Centrum i stowarzyszeniu Projekt: Polska. Współtworzyła pismo „Liberté!”, a w okresie prezydentury Bronisława Komorowskiego była zatrudniona w jego kancelarii. Od 2015 r. członkini partii Nowoczesna, w październiku 2017 r. wybrana na przewodniczącą zarządu w regionie śląskim. Posłanka od 2015 r. (VIII-IX kadencja). Obecnie zasiada w komisjach: mniejszości i narodowych i etniczych; polityki społecznej i rodziny; zdrowia.',
    },
    categories: [
      PoliticianCategory.Featured,
      PoliticianCategory.Politician,
    ],
  },
  {
    id: '5faece57bc01f700093fda31',
    person: {
      name: 'Michał Urbaniak',
      imgName: 'urbaniak.png',
      description: 'Przedsiębiorca i poseł na Sejm IX kadencji. Ukończył bezpieczeństwo narodowe na Akademia Marynarki Wojennej. Prowadzi działalność gospodarczą w branży IT. Od 2014 r. działacz Ruchu Narodowego. Organizował m.in. Gdyński Marsz Pamięci Żołnierzy Wyklętych i spotkania Gdyńskiego Klubu Dyskusyjnego im. Antoniego Abrahama. ',
    },
    categories: [
      PoliticianCategory.Politician,
      PoliticianCategory.Featured,
    ],
  },
  {
    id: '5fa9b80f7c30c000099a76c6',
    person: {
      name: 'Błażej Parda',
      imgName: 'parda.png',
      description: 'Ekonomista, absolwent Szkoły Głównej Handlowej. Lektor radiowo-telewizyjny. Przedsiębiorca. W 2014 r. bez powodzenia kandydował w wyborach na prezydenta Piły. W wyborach parlamentarnych w 2015 z powodzeniem kandydował do Sejmu z pierwszego miejsca na liście komitetu Kukiz’15.',
    },
    categories: [
      PoliticianCategory.Politician,
    ],
  },
  {
    id: '5fa97a5e7c30c000099a7608',
    person: {
      name: 'Elżbieta Bińczycka',
      imgName: 'binczycka.png',
      description: 'Przewodnicząca UED oraz wiceprzewodnicząca Koalicji Polskiej. Krakowianka, absolwentka filologii polskiej – teatrologii UJ, sekretarz literacki w Narodowym Starym Teatrze. W polityce od 1990 r. związana z jedną formacją UD, UW, PD, UED. Wdowa po Jerzym Bińczyckim, aktorze, dyrektorze Starego Teatru Hobby: jazda na rowerze, pływanie w Bałtyku, ogrodnictwo Opiekunka kotki Marysi.',
    },
    categories: [
      PoliticianCategory.Politician,
    ],
  },
  {
    id: '5fc2a6b1e566610009892e94',
    person: {
      name: 'Kacper Parol',
      imgName: 'parol.png',
      description: 'Lider Wiosny w Gnieźnie. Zorganizował cykl "Pikniki dla Przyszłości", a także był współinicjatorem kolektywu "Nowa Fala Aktywizmu" - platformy dla młodych osób do wywierania wpływu w walce o ważne dla nich tematy. Kandydował w 2019 roku w wyborach do Sejmu z ramienia Lewicy jako najmłodsza osoba na listach w Polsce. Odpowiedzialny za wiele lokalnych inicjatyw, uczestniczył w wielu debatach eksperckich, aktywnie wspiera akcje charytatywne i edukacyjne. Jego celem jest zwiększanie udziału młodych w życiu publicznym, a także nagłaśnianie i rozwiązywanie problemów "Polski powiatowej". Studiuje na Uniwersytecie Ekonomicznym w Poznaniu. Prywatnie wielbiciel kina, muzyki alternatywnej oraz wyciszających spacerów. W młodości prowadził popularny kanał na Youtube, gdzie komentował gry z serii F1.',
    },
    categories: [
      PoliticianCategory.Youth,
    ],
  },
];
