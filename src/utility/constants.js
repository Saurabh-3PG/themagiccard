export const NONE_TEXT = "None";
export const HOMEPAFE_DISCLAIMER_TEXTS = [
  {
    text:
      'Default color is "Cyan" - This is being used if no color is coming from API.',
  },
];
export const ERROR_MSG = 'No is no result found for the selected filter, Please change filter or use clear filter reaset it.'
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
      '10',
      '12',
      '25', 
      '50', 
      '60'
    ],
    type: "pageSize",
    label: "Page Size"
  }
]