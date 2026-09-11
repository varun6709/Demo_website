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

export const regions = ["Riverbend", "Highfield", "Marlow", "Stonegate"] as const;

export const parcels: Parcel[] = [
  {
    id: "meadowline-14",
    name: "Meadowline Plot 14",
    region: "Riverbend",
    price: 412000,
    sqft: 4820,
    acres: 0.11,
    notes: "Road access, 30m frontage, clear title.",
    image: meadowline,
    alt: "Flat open land plot with wooden boundary stakes at golden hour",
  },
  {
    id: "highfield-ridgeline",
    name: "Highfield Ridgeline",
    region: "Highfield",
    price: 1280000,
    sqft: 43560,
    acres: 1.0,
    notes: "South-facing, water tap, gated.",
    image: ridgeline,
    alt: "Hillside land plot at dusk with survey stakes and a tree line",
  },
  {
    id: "riverbank-a",
    name: "Riverbank Parcel A",
    region: "Marlow",
    price: 238000,
    sqft: 2600,
    acres: 0.06,
    notes: "Waterfront, low-lying, septic-ready.",
    image: riverbank,
    alt: "Riverbank plot with mown grass and orange boundary flags",
  },
  {
    id: "stonegate-corner",
    name: "Stonegate Corner",
    region: "Stonegate",
    price: 156000,
    sqft: 3900,
    acres: 0.09,
    notes: "Two-road access, utility pole on site.",
    image: stonegate,
    alt: "Land lot bordered by a dry-stone wall beside a gravel path",
  },
  {
    id: "valley-fold-7",
    name: "Valley Fold 7",
    region: "Riverbend",
    price: 684000,
    sqft: 29000,
    acres: 0.66,
    notes: "Sloped, mature oaks, drainage in place.",
    image: valleyfold,
    alt: "Grassy valley plot with a low stone wall and survey flag",
  },
  {
    id: "highfield-acclivity",
    name: "Highfield Acclivity",
    region: "Highfield",
    price: 1940000,
    sqft: 87000,
    acres: 2.0,
    notes: "Panoramic, pre-approved build, 120m frontage.",
    image: acclivity,
    alt: "Wide open highland parcel with a survey stake and distant hills",
  },
  {
    id: "marlow-orchard-3",
    name: "Marlow Orchard 3",
    region: "Marlow",
    price: 349000,
    sqft: 12500,
    acres: 0.29,
    notes: "Fruit trees retained, mains water at boundary.",
    image: valleyfold,
    alt: "Orchard land parcel with mature trees in warm light",
  },
  {
    id: "riverbend-long-acre",
    name: "Riverbend Long Acre",
    region: "Riverbend",
    price: 795000,
    sqft: 48000,
    acres: 1.1,
    notes: "Level ground, borehole tested, private lane.",
    image: meadowline,
    alt: "Level open land parcel with staked boundary at sunrise",
  },
  {
    id: "stonegate-brow",
    name: "Stonegate Brow",
    region: "Stonegate",
    price: 228000,
    sqft: 8100,
    acres: 0.19,
    notes: "Elevated corner, planning pre-application filed.",
    image: acclivity,
    alt: "Elevated corner plot overlooking rolling hills",
  },
  {
    id: "highfield-copse",
    name: "Highfield Copse",
    region: "Highfield",
    price: 132000,
    sqft: 5400,
    acres: 0.12,
    notes: "Woodland edge, footpath access, no build consent yet.",
    image: ridgeline,
    alt: "Small woodland-edge plot with survey markers at dusk",
  },
];
