export enum Editions {
  standardId = "standard",
  standard = "Standard",
  teamId = "team",
  team = "Team",
}

export type Edition = {
  name: "standard" | "team";
  nameUppercase: "Standard" | "Team";
  price: number;
  details: string[];
  moreDetails?: string[];
  team: null | string;
};

const editions: Edition[] = [
  {
    name: "standard",
    nameUppercase: "Standard",
    price: 59.99,
    details: ["Digitaler Download und Hardcover"],
    team: null,
  },
  {
    name: "team",
    nameUppercase: "Team",
    price: 89.99,
    details: [
      "Digitaler Download und Hardcover",
      "3 Monate Nintendo Switch Online [Digitaler Downloadcode]",
      "amiibo™ Tischfigur für extra freischaltbare Spielinhalte [externer Link]",
      "Merchandise: Team Shirt",
    ],
    moreDetails: [
      "Schalte das 'Geheimteam' frei",
      "Schalte die Legacy Arenen aus 'Mario Strikers: Charged Football (Wii)' und 'Mario Smash Football (GameCube)' frei",
    ],
    team: "mario",
  },
];

export default editions;
