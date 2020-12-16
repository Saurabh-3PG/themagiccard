export const NONE_TEXT = "None";
export const HOMEPAFE_DISCLAIMER_TEXTS = [
  {
    text:
      "Default color is \"Cyan\" - This is being used if no color is coming from API.",
  },
];
export const ERROR_MSG = "No is no result found for the selected filter, Please change filter or use clear filter reaset it.";
export const BASICLAND_BG = "https://lh3.googleusercontent.com/proxy/buSwDRxwnycEPu87z8AobEDGBBZQGrbh77dPngS9tmaH9V_zjW5KJnOY_1IoEslEZYSuQGRsdn0STdEcdL0wZX3OQ-xYxgELlyoY-WriR7_93bVWGGIRq-Ln";
export const SPECIAL_BG = "url(https://static.wixstatic.com/media/2cd43b_531b1585948142709aef870556331773~mv2.png/v1/fill/w_320,h_320,fp_0.50_0.50/2cd43b_531b1585948142709aef870556331773~mv2.png) no-repeat right top";
export const FILTERS = [
  {
    options: [
      "None",
      "Basic",
      "Legendary",
      "Ongoing",
      "Snow",
      "World"
    ],
    type: "supertypes",
    label: "Super types"
  },
  {
    options: [
      "None",
      "Common",
      "Uncommon",
      "Rare",
      "Mythic Rare",
      "Special",
      "Basic Land"
    ],
    type: "rarity",
    label: "Rarity"
  },
  {
    options: [
      "Red", 
      "Black", 
      "Blue", 
      "White", 
      "Green"
    ],
    type: "colors",
    label: "Colors"
  },
  {
    options: [
      "10",
      "12",
      "25", 
      "50", 
      "60"
    ],
    type: "pageSize",
    label: "Page Size"
  }
];