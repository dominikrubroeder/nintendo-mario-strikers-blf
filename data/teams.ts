export type Team = {
  id: string;
  name: string;
  sound: string[];
  image: string;
  images: string[];
  videos: string[];
  gifs: string[];
  gear: string[];
  merch: string[];
  baseText: string;
  teamText: string;
  specialAbility: string;
  specialAbilityVideoURL: string;
  stats: {
    Kraft: number;
    Tempo: number;
    Schuss: number;
    Passen: number;
    Technik: number;
  };
};

export const teams: Team[] = [
  {
    id: "mario",
    name: "Mario",
    sound: [
      "/audio/sound-mario-0.mp3",
      "/audio/sound-mario-1.mp3",
      "/audio/sound-mario-2.mp3",
    ],
    image: "/images/teams/mario.png",
    images: [
      "/images/teams/mario.png",
      "/images/teams/mario.png",
      "/images/teams/mario.png",
      "/images/teams/mario.png",
      "/images/teams/mario.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/mario.JPG"],
    merch: ["/images/teams/tshirt/mario.jpg"],
    baseText:
      "Roter Hut, blaue Latzhose und der für ihn typische Schnurrbart. Mario ist immer fröhlich und gut gelaunt. Er liebt Prinzessin Peach und bildet mit seinem Zwillingsbruder Luigi ein tolles Team. Er ist ein guter Sportler und kann alles, von Tennis, Baseball und Fußball bis hin zu Kartrennen. Er ist von Beruf Klempner. Aber das ist nicht alles, was er tut. Sie nutzen ihre speziellen Sprünge und verschiedene Power-Ups, um ihren Erzfeind Bowser zu bekämpfen.",
    teamText:
      "Auf Mario ist stets Verlass! Er ist ein vielseitiger Spieler mit beeindruckender Technik.",
    specialAbility: "Feuerzyklon",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 11 / 25,
      Tempo: 12 / 25,
      Schuss: 14 / 25,
      Passen: 10 / 25,
      Technik: 16 / 25,
    },
  },
  {
    id: "peach",
    name: "Peach",
    sound: [
      "/audio/sound-peach-0.mp3",
      "/audio/sound-peach-1.mp3",
      "/audio/sound-peach-2.mp3",
    ],
    image: "/images/teams/peach.png",
    images: [
      "/images/teams/peach.png",
      "/images/teams/peach.png",
      "/images/teams/peach.png",
      "/images/teams/peach.png",
      "/images/teams/peach.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/peach.JPG"],
    merch: ["/images/teams/tshirt/peach.jpg"],
    baseText:
      "Prinzessin des Pilzkönigreichs. Sie ist sehr freundlich und will immer, dass alle glücklich sind. Sie backt gerne Kuchen, kocht gerne und treibt alle möglichen Sportarten. Sie und Mario stehen sich sehr nahe und verlassen sich aufeinander. Sie sieht sehr hübsch aus in ihrem rosa Kleid.",
    teamText:
      "Dank ihrer Schnelligkeit und ihrer guten Technik kann Peach den Verteidigern des gegnerischen Teams bestens ausweichen.",
    specialAbility: "Herzenstanz",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 9 / 25,
      Tempo: 17 / 25,
      Schuss: 9 / 25,
      Passen: 13 / 25,
      Technik: 15 / 25,
    },
  },
  {
    id: "luigi",
    name: "Luigi",
    sound: [
      "/audio/sound-luigi-0.mp3",
      "/audio/sound-luigi-1.mp3",
      "/audio/sound-luigi-2.mp3",
    ],
    image: "/images/teams/luigi.png",
    images: [
      "/images/teams/peach.png",
      "/images/teams/luigi.png",
      "/images/teams/mario.png",
      "/images/teams/waluigi.png",
      "/images/teams/yoshi.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/luigi.JPG"],
    merch: ["/images/teams/tshirt/luigi.jpg"],
    baseText:
      "Der Zwillingsbruder von Mario. Er ist etwas schüchtern, hat aber ein freundliches Wesen. Seine größte Schwäche sind Geister. Eigentlich kann er alles genauso gut wie Mario. Außerdem sind Mario und Luigi eine Macht, mit der man rechnen muss, wenn sie zusammen sind. Sein Markenzeichen sind der grüne Hut und das grüne Hemd. Im Vergleich zu Mario ist Luigi etwas größer, und wenn du genau hinsiehst, kannst du sehen, dass auch sein Bart etwas anders aussieht.",
    teamText:
      "Ein Spieler mit guter Technik, der herausragend gut passen kann. Luigi ist hervorragend als Spielmacher geeignet.",
    specialAbility: "Wirbeltornado",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 11 / 25,
      Tempo: 11 / 25,
      Schuss: 10 / 25,
      Passen: 14 / 25,
      Technik: 17 / 25,
    },
  },
  {
    id: "toad",
    name: "Toad",
    sound: [
      "/audio/sound-toad-0.mp3",
      "/audio/sound-toad-1.mp3",
      "/audio/sound-toad-2.mp3",
    ],
    image: "/images/teams/toad.png",
    images: [
      "/images/teams/toad.png",
      "/images/teams/toad.png",
      "/images/teams/toad.png",
      "/images/teams/toad.png",
      "/images/teams/toad.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/toad.JPG"],
    merch: ["/images/teams/tshirt/toad.jpg"],
    baseText:
      "Bewohner des Pilzkönigreichs, die für Prinzessin Peach arbeiten. Es gibt auch blaue, grüne und andere andersfarbige Freunde, die alle sehr fröhlich und fleißig sind. Sie versuchen ihr Bestes, um das Pilzkönigreich vor Bowser zu schützen, aber sie scheitern immer wieder... Manchmal helfen sie Mario und manchmal erleben sie gemeinsam Abenteuer.",
    teamText:
      "Toad weist gute Werte für Tempo und Passen auf und ist deshalb gut geeignet, um schnelle Konter einzuleiten.",
    specialAbility: "Granatenkopfball",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 9 / 25,
      Tempo: 17 / 25,
      Schuss: 11 / 25,
      Passen: 15 / 25,
      Technik: 11 / 25,
    },
  },
  {
    id: "bowser",
    name: "Bowser",
    sound: [
      "/audio/sound-bowser-0.mp3",
      "/audio/sound-bowser-1.mp3",
      "/audio/sound-bowser-2.mp3",
    ],
    image: "/images/teams/bowser.png",
    images: [
      "/images/teams/bowser.png",
      "/images/teams/bowser.png",
      "/images/teams/bowser.png",
      "/images/teams/bowser.png",
      "/images/teams/bowser.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/bowser.JPG"],
    merch: ["/images/teams/tshirt/bowser.jpg"],
    baseText:
      "Der große Dämonenkönig des Schildkröten-Clans, der den Weltfrieden stört und die ewige Nemesis von Mario und seinen Freunden ist. Er hat viele Untergebene, wie den Sägezahn, Kribo, Killer und Hey-Ho. Er greift das Pilzkönigreich mit seinen zahlreichen Schergen an. Mario und seine Freunde haben es immer versäumt, sie aufzuhalten... Er ist ein mächtiger Mann, und die Flammen, die er aus seinem Mund spuckt, sind mächtig.",
    teamText:
      "Ein richtiges Kraftpaket! Bowser kann nicht nur richtig gut schießen, sondern auch harte Tacklings ausführen.",
    specialAbility: "Flammenkugel",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 17 / 25,
      Tempo: 9 / 25,
      Schuss: 17 / 25,
      Passen: 11 / 25,
      Technik: 9 / 25,
    },
  },
  {
    id: "rosalina",
    name: "Rosalina",
    sound: [
      "/audio/sound-rosalina-0.mp3",
      "/audio/sound-rosalina-1.mp3",
      "/audio/sound-rosalina-2.mp3",
    ],
    image: "/images/teams/rosalina.png",
    images: [
      "/images/teams/rosalina.png",
      "/images/teams/rosalina.png",
      "/images/teams/rosalina.png",
      "/images/teams/rosalina.png",
      "/images/teams/rosalina.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/rosalina.JPG"],
    merch: ["/images/teams/tshirt/rosalina.jpg"],
    baseText:
      "Eine geheimnisvolle Frau, die mit dem Sternenkind Chico durch den Weltraum reist. Sie sieht zwar cool aus, hat aber eine freundliche Persönlichkeit und ist die Mutterfigur für Chico und seine Freunde, die keine Eltern haben. Manchmal geht sie mit Mario und seinen Freunden auf Abenteuer.",
    teamText:
      "Rosalina ist technisch sehr versiert und kann den Ball in einer Kurve um jeden noch so resoluten Verteidiger herum schießen.",
    specialAbility: "Allkrawall",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 14 / 25,
      Tempo: 9 / 25,
      Schuss: 17 / 25,
      Passen: 10 / 25,
      Technik: 13 / 25,
    },
  },
  {
    id: "yoshi",
    name: "Yoshi",
    sound: [
      "/audio/sound-yoshi-0.mp3",
      "/audio/sound-yoshi-1.mp3",
      "/audio/sound-yoshi-2.mp3",
    ],
    image: "/images/teams/yoshi.png",
    images: [
      "/images/teams/yoshi.png",
      "/images/teams/yoshi.png",
      "/images/teams/yoshi.png",
      "/images/teams/yoshi.png",
      "/images/teams/yoshi.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/yoshi.JPG"],
    merch: ["/images/teams/tshirt/yoshi.jpg"],
    baseText:
      "Marios treuer Begleiter von der Yoshi-Insel. Er hat ein sanftes, entspanntes Wesen. Mit seiner langen Zunge verschluckt er Früchte und feindliche Personen ganz und verwandelt sie in Eier. Neben dem grünen Yoshi gibt es auch rote, hellblaue, pinke und andere verschiedenfarbige Yoshi.",
    teamText:
      "Dank seiner hervorragenden Ballkontrolle kann Yoshi fantastisch passen. Er ist für jedes Team ein äußerst wertvoller Mitspieler.",
    specialAbility: "Eiertanz",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 10 / 25,
      Tempo: 10 / 25,
      Schuss: 17 / 25,
      Passen: 17 / 25,
      Technik: 9 / 25,
    },
  },
  {
    id: "donkey-kong",
    name: "Donkey Kong",
    sound: [
      "/audio/sound-donkey-kong-0.mp3",
      "/audio/sound-donkey-kong-1.mp3",
      "/audio/sound-donkey-kong-2.mp3",
    ],
    image: "/images/teams/donkey-kong.png",
    images: [
      "/images/teams/donkey-kong.png",
      "/images/teams/donkey-kong.png",
      "/images/teams/donkey-kong.png",
      "/images/teams/donkey-kong.png",
      "/images/teams/donkey-kong.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/donkey-kong.JPG"],
    merch: ["/images/teams/tshirt/donkey-kong.jpg"],
    baseText:
      "Der König des Dschungels, dessen Markenzeichen eine rote Krawatte mit dem DK-Symbol ist. Er hat eine so ungeheure Kraft, dass er mit Leichtigkeit einen riesigen Teer vom Boden werfen und ein gewaltiges Beben verursachen kann, wenn er auf den Boden trifft. Er liebt Bananen und hat immer reichlich davon zu Hause.",
    teamText:
      "Als Kraftpaket und blendender Passspieler kann Donkey Kong gut Bälle erobern, um dann sofort entscheidende Pässe nach vorn zu spielen.",
    specialAbility: "Bananenkracher",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 16 / 25,
      Tempo: 9 / 25,
      Schuss: 13 / 25,
      Passen: 16 / 25,
      Technik: 9 / 25,
    },
  },
  {
    id: "wario",
    name: "Wario",
    sound: [
      "/audio/sound-wario-0.mp3",
      "/audio/sound-wario-1.mp3",
      "/audio/sound-wario-2.mp3",
    ],
    image: "/images/teams/wario.png",
    images: [
      "/images/teams/wario.png",
      "/images/teams/wario.png",
      "/images/teams/wario.png",
      "/images/teams/wario.png",
      "/images/teams/wario.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/wario.JPG"],
    merch: ["/images/teams/tshirt/wario.jpg"],
    baseText:
      "Selbsternannter Jugendfreund und größter Rivale von Mario. Er trägt einen gelben Hut, eine lila Latzhose und seinen typischen gezackten Schnurrbart. Er ist dynamisch und kümmert sich nicht um Details. Mag Knoblauch. Er verdient gerne Geld.",
    teamText:
      "Die Schüsse, die Tacklings, der Körpergeruch – an Wario ist alles stark.",
    specialAbility: "Bandenschocker",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 17 / 25,
      Tempo: 9 / 25,
      Schuss: 15 / 25,
      Passen: 13 / 25,
      Technik: 9 / 25,
    },
  },
  {
    id: "waluigi",
    name: "Waluigi",
    sound: [
      "/audio/sound-waluigi-0.mp3",
      "/audio/sound-waluigi-1.mp3",
      "/audio/sound-waluigi-2.mp3",
    ],
    image: "/images/teams/waluigi.png",
    images: [
      "/images/teams/waluigi.png",
      "/images/teams/waluigi.png",
      "/images/teams/waluigi.png",
      "/images/teams/waluigi.png",
      "/images/teams/waluigi.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/waluigi.JPG"],
    merch: ["/images/teams/tshirt/waluigi.jpg"],
    baseText:
      "Warios Handlanger. Er glaubt, dass Luigi sein Rivale ist. Um die Kraft für den Kampf gegen Mario und Luigi zu sammeln. Er hat eine fleißige Seite, die an versteckten Orten hart arbeitet, um die Kraft für den Kampf gegen Mario und Luigi zu sammeln. Manchmal benutzt er seine langen Arme und Beine, um Sport zu treiben.",
    teamText:
      "Waluigi ist ein geschickter Verteidiger, der mit hohem Tempo und guter Technik Gegenspieler verfolgen und ihnen den Ball abnehmen kann.",
    specialAbility: "Rosenkavallerie",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 15 / 25,
      Tempo: 16 / 25,
      Schuss: 9 / 25,
      Passen: 9 / 25,
      Technik: 14 / 25,
    },
  },
  {
    id: "daisy",
    name: "Daisy",
    sound: [
      "/audio/sound-daisy-0.mp3",
      "/audio/sound-daisy-1.mp3",
      "/audio/sound-daisy-2.mp3",
    ],
    image: "/images/teams/daisy.png",
    images: [
      "/images/teams/daisy.png",
      "/images/teams/daisy.png",
      "/images/teams/daisy.png",
      "/images/teams/daisy.png",
      "/images/teams/daisy.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/daisy.JPG"],
    merch: ["/images/teams/tshirt/daisy.jpg"],
    baseText:
      "Sie hat zwar ein Kleid und eine Krone, aber diese freundliche Prinzessin ist ganz bodenständig. Daisy ist immer bereit für eine Herausforderung, ob sie nun Tennisbälle zerschlägt oder über Hürden springt. Die Herrscherin von Sarasaland liebt auch den Nervenkitzel bei Verfolgungsjagden - vor allem, wenn sie auf einem Gokart durch die Gegend saust.",
    teamText:
      "Mit ihrer exzellenten Technik und einem Auge für präzise Pässe ist Daisy eine fantastische Spielmacherin.",
    specialAbility: "Blumenspirale",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 13 / 25,
      Tempo: 9 / 25,
      Schuss: 10 / 25,
      Passen: 13 / 25,
      Technik: 18 / 25,
    },
  },
  {
    id: "shy-guy",
    name: "Shy Guy",
    sound: [
      "/audio/sound-toad-1.mp3",
      "/audio/sound-mario-1.mp3",
      "/audio/sound-mario-2.mp3",
    ],
    videos: [],
    gifs: [],
    image: "/images/teams/shy-guy.png",
    images: [
      "/images/teams/shy-guy.png",
      "/images/teams/shy-guy.png",
      "/images/teams/shy-guy.png",
      "/images/teams/shy-guy.png",
      "/images/teams/shy-guy.png",
    ],
    gear: ["/images/teams/gear/shy-guy.JPG"],
    merch: ["/images/teams/tshirt/shy-guy.jpg"],
    baseText:
      "Wer sind diese maskierten Schurken, die Yoshi und Mario so viel Ärger machen? Es scheint, als wären die Shy Guys immer in der Nähe, egal ob du Kart fährst, einen Tennisball schlägst, eine Party feierst oder ein Baby vor einem bebrillten Magikoopa rettest.",
    teamText:
      "Bei einem Allrounder wie Shy Guy bietet es sich an, diverse Ausrüstungskombinationen auszuprobieren.",
    specialAbility: "Propellerkopfball",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 13 / 25,
      Tempo: 12 / 25,
      Schuss: 13 / 25,
      Passen: 13 / 25,
      Technik: 12 / 25,
    },
  },
  {
    id: "pauline",
    name: "Pauline",
    sound: [
      "/audio/sound-peach-2.mp3",
      "/audio/sound-peach-1.mp3",
      "/audio/sound-peach-2.mp3",
    ],
    image: "/images/teams/pauline.png",
    images: [
      "/images/teams/pauline.png",
      "/images/teams/pauline.png",
      "/images/teams/pauline.png",
      "/images/teams/pauline.png",
      "/images/teams/pauline.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/pauline.JPG"],
    merch: ["/images/teams/tshirt/pauline.jpg"],
    baseText: "TBD",
    teamText:
      "Kraft und Tempo - damit ist Pauline perfekt geeignet, um den Ball in der Verteidigung zu gewinnen und dann blitzschnell zu kontern.",
    specialAbility: "Gassenhauer",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 20 / 25,
      Tempo: 16 / 25,
      Schuss: 9 / 25,
      Passen: 9 / 25,
      Technik: 9 / 25,
    },
  },
  {
    id: "diddy-kong",
    name: "Diddy Kong",
    sound: [
      "/audio/sound-diddy-kong-0.mp3",
      "/audio/sound-diddy-kong-1.mp3",
      "/audio/sound-diddy-kong-2.mp3",
    ],
    image: "/images/teams/diddy-kong.png",
    images: [
      "/images/teams/diddy-kong.png",
      "/images/teams/diddy-kong.png",
      "/images/teams/diddy-kong.png",
      "/images/teams/diddy-kong.png",
      "/images/teams/diddy-kong.png",
    ],
    videos: [],
    gifs: [],
    gear: ["/images/teams/gear/diddy-kong.JPG"],
    merch: ["/images/teams/tshirt/diddy-kong.jpg"],
    baseText:
      "Für die Bösewichte des Dschungels sieht er vielleicht harmlos aus, aber dieser kleine Kong ist ein Erdnuss-Kraftpaket! Oft sitzt er auf dem Rücken von Donkey Kong, aber Diddy Kong ist keine Last - er kann seinen großen Kumpel mit seinem Rocket Barrel Boost in neue Höhen katapultieren! ",
    teamText:
      "Dank seiner flinken Beinen und seines guten Passspiels macht sich Diddy Kong sehr gut als Mittelfeldmotor.",
    specialAbility: "Gassenhauer",
    specialAbilityVideoURL:
      "https://www.youtube-nocookie.com/embed/fmvzfwj85Vo",
    stats: {
      Kraft: 9 / 25,
      Tempo: 16 / 25,
      Schuss: 9 / 25,
      Passen: 16 / 25,
      Technik: 13 / 25,
    },
  },
];

export default teams;

export const teamNames = teams.map((team) => team.name);

export const teamImages = teams.map((chararcter) => chararcter.image);
