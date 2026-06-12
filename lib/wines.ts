export type Wine = {
  id: string;
  winery: string;
  name: string;
  vintage: number;
  grape: string;
  region: string;
  country: string;
  price: number;
  rating: number;
  location: string;
  people: string;
  foodPairing: string;
  occasion: string;
  notes: string;
  labelTheme: "burgundy" | "rioja" | "gold";
  tastedOn: string;
};

export const wines: Wine[] = [
  {
    id: "willamette-evening-pinot",
    winery: "Morrow & Vale",
    name: "Evening Slope Pinot Noir",
    vintage: 2021,
    grape: "Pinot Noir",
    region: "Willamette Valley",
    country: "United States",
    price: 42,
    rating: 92,
    location: "Home",
    people: "Maya and Chris",
    foodPairing: "Mushroom risotto",
    occasion: "First cool night of fall",
    notes:
      "Silky cherry, rose petal, and a little forest floor. The bottle made dinner slow down in the best way.",
    labelTheme: "burgundy",
    tastedOn: "Oct 14, 2025"
  },
  {
    id: "rioja-sunday-reserve",
    winery: "Casa Lumbre",
    name: "Sunday Reserve",
    vintage: 2018,
    grape: "Tempranillo",
    region: "Rioja",
    country: "Spain",
    price: 36,
    rating: 89,
    location: "Back patio",
    people: "Family dinner",
    foodPairing: "Grilled lamb and peppers",
    occasion: "Birthday weekend",
    notes:
      "Warm oak, dried cherry, and tobacco. A generous bottle that felt made for passing plates around.",
    labelTheme: "rioja",
    tastedOn: "May 4, 2025"
  },
  {
    id: "loire-garden-chenin",
    winery: "Domaine Aster",
    name: "Garden Row Chenin Blanc",
    vintage: 2022,
    grape: "Chenin Blanc",
    region: "Loire Valley",
    country: "France",
    price: 28,
    rating: 91,
    location: "Picnic table",
    people: "Just us",
    foodPairing: "Goat cheese, pears, baguette",
    occasion: "Lazy Saturday lunch",
    notes:
      "Beeswax, crisp apple, and lemon peel. Bright enough for sunshine, textured enough to remember.",
    labelTheme: "gold",
    tastedOn: "Jun 21, 2025"
  }
];

export function getWineById(id: string) {
  return wines.find((wine) => wine.id === id);
}
