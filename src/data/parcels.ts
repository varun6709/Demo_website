import meadowline from "@/assets/plot-meadowline.jpg";
import ridgeline from "@/assets/plot-ridgeline.jpg";
import riverbank from "@/assets/plot-riverbank.jpg";
import stonegate from "@/assets/plot-stonegate.jpg";
import valleyfold from "@/assets/plot-valleyfold.jpg";
import acclivity from "@/assets/plot-acclivity.jpg";

export type Parcel = {
  id: string;
  name: string;
  region: string;
  price: number;
  sqft: number;
  acres: number;
  notes: string;
  image: string;
  alt: string;
};

export const regions = ["Hyderabad", "Bengaluru", "Pune", "Jaipur"] as const;

export const parcels: Parcel[] = [
  {
    id: "shamirpet-14",
    name: "Shamirpet Plot 14",
    region: "Hyderabad",
    price: 4200000,
    sqft: 4820,
    acres: 0.11,
    notes: "HMDA approved, 30 ft road frontage, clear title.",
    image: meadowline,
    alt: "Flat open land plot with wooden boundary stakes at golden hour",
  },
  {
    id: "devanahalli-ridge",
    name: "Devanahalli Ridge",
    region: "Bengaluru",
    price: 12800000,
    sqft: 43560,
    acres: 1.0,
    notes: "East-facing, borewell on site, gated layout.",
    image: ridgeline,
    alt: "Hillside land plot at dusk with survey stakes and a tree line",
  },
  {
    id: "mula-riverfront",
    name: "Mula Riverfront Parcel",
    region: "Pune",
    price: 2380000,
    sqft: 2600,
    acres: 0.06,
    notes: "Riverside, low-lying, septic-ready.",
    image: riverbank,
    alt: "Riverbank plot with mown grass and orange boundary flags",
  },
  {
    id: "amer-corner",
    name: "Amer Road Corner",
    region: "Jaipur",
    price: 1560000,
    sqft: 3900,
    acres: 0.09,
    notes: "Two-road access, electricity pole on site.",
    image: stonegate,
    alt: "Land lot bordered by a dry-stone wall beside a gravel path",
  },
  {
    id: "mulshi-valley-7",
    name: "Mulshi Valley 7",
    region: "Pune",
    price: 6840000,
    sqft: 29000,
    acres: 0.66,
    notes: "Sloped, mature mango trees, drainage in place.",
    image: valleyfold,
    alt: "Grassy valley plot with a low stone wall and survey flag",
  },
  {
    id: "nandi-hills-view",
    name: "Nandi Hills View",
    region: "Bengaluru",
    price: 19400000,
    sqft: 87000,
    acres: 2.0,
    notes: "Panoramic, BMRDA cleared, 120 ft frontage.",
    image: acclivity,
    alt: "Wide open highland parcel with a survey stake and distant hills",
  },
  {
    id: "chandan-orchard-3",
    name: "Chandan Orchard 3",
    region: "Jaipur",
    price: 3490000,
    sqft: 12500,
    acres: 0.29,
    notes: "Fruit trees retained, municipal water at boundary.",
    image: valleyfold,
    alt: "Orchard land parcel with mature trees in warm light",
  },
  {
    id: "kollur-long-acre",
    name: "Kollur Long Acre",
    region: "Hyderabad",
    price: 7950000,
    sqft: 48000,
    acres: 1.1,
    notes: "Level ground, borewell tested, private lane.",
    image: meadowline,
    alt: "Level open land parcel with staked boundary at sunrise",
  },
  {
    id: "jagatpura-brow",
    name: "Jagatpura Brow",
    region: "Jaipur",
    price: 2280000,
    sqft: 8100,
    acres: 0.19,
    notes: "Elevated corner, JDA pre-approval filed.",
    image: acclivity,
    alt: "Elevated corner plot overlooking rolling hills",
  },
  {
    id: "hoskote-copse",
    name: "Hoskote Copse",
    region: "Bengaluru",
    price: 1320000,
    sqft: 5400,
    acres: 0.12,
    notes: "Woodland edge, kutcha road access, conversion pending.",
    image: ridgeline,
    alt: "Small woodland-edge plot with survey markers at dusk",
  },
];
