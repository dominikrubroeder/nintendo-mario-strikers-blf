export enum Editions {
  standardId = 'standard',
  standard = 'Standard',
  teamId = 'team',
  team = 'Team',
}

export type Edition = {
  id: string;
  title: string;
  price: number;
  details: string[];
  moreDetails?: string[];
};

const editions: Edition[] = [
  {
    id: Editions.standardId,
    title: Editions.standard,
    price: 59.99,
    details: ['Digitaler Download und Hardcover'],
  },
  {
    id: Editions.teamId,
    title: Editions.team,
    price: 89.99,
    details: [
      'Digitaler Download und Hardcover',
      '3 Monate Nintendo Switch Online – Digitaler Downloadcode',
      'amiibo™ Nintendo Charakter Tischfigur für extra freischaltbare Spielinhalte',
    ],
    moreDetails: [
      "Schalte das 'Geheimteam' frei (extra Content)",
      "Schalte die Legacy Arenen aus 'Mario Strikers: Charged Football (Wii)' und 'Mario Smash Football (GameCube)' frei",
      'Merchandise: Hoodie',
      'Merchandise: T-Shirt',
    ],
  },
];

export default editions;
