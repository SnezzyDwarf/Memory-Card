export const cards = [
  { id: 1, name: "Spell Frost" },
  { id: 2, name: "Spell Fire" },
  { id: 3, name: "Spell Burst" },
  { id: 4, name: "Spell Upgrade" },
  { id: 5, name: "Spell Nature" },
  { id: 6, name: "Spell Death" },
  { id: 7, name: "Spell Mana" },
  { id: 8, name: "Spell Shield" },
  { id: 9, name: "Spell Light" },
  { id: 10, name: "Spell Dark" },
];

export async function fetchData(url) {
  if (url === "/cards") {
    return cards;
  }
}

fetchData();
