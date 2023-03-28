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
      "amiibo™ Figur für extra freischaltbare Spielinhalte",
      "Merchandise: Team Shirt",
    ],
    team: "mario",
  },
];

export default editions;
