export enum Editions {
  standardId = "standard",
  standard = "Standard",
  teamId = "team",
  team = "Team",
}

export type Edition = {
  id: string;
  title: string;
  price: number;
  details: string[];
};

const editions: Edition[] = [
  {
    id: Editions.standardId,
    title: Editions.standard,
    price: 59.99,
    details: ["Digitaler Download und Hardcover"],
  },
  {
    id: Editions.teamId,
    title: Editions.team,
    price: 89.99,
    details: [
      "Digitaler Download und Hardcover",
      "Mehr Content: Schalte die legacy Arenen aus 'Mario Strikers: Charged Football (Wii)' und 'Mario Smash Football (GameCube)' frei",
      "Mehr Content: Schalte das 'Geheimteam' frei",
      "Merchandise Hoodie",
      "Merchandise T-Shirt",
      "Merchandise Tischfigur",
      "Mario Strikers: Charged Football (Wii)",
      "Mario Smash Football (GameCube)",
      "...",
    ],
  },
];

export default editions;
