// Birthday Cake Customization Options
export const birthdayCakeOptions = {
  bases: [
    { id: 'vanilla', nameKey: 'bases.vanilla' },
    { id: 'chocolate', nameKey: 'bases.chocolate' }
  ],
  frostings: {
    mainCategories: [
      { id: 'naked', nameKey: 'frostings.naked' },
      { id: 'buttercream', nameKey: 'frostings.buttercreamMain' },
      { id: 'brigadeiro', nameKey: 'frostings.brigadeiroMain' }
    ],
    subcategories: {
      buttercream: [
        { id: 'buttercream_mascarpone', nameKey: 'frostings.mascarpone', price: 4 },
        { id: 'buttercream_american', nameKey: 'frostings.americanButtercream' },
        { id: 'buttercream_swiss', nameKey: 'frostings.swissButtercream' }
      ],
      brigadeiro: [
        { id: 'brigadeiro_milk', nameKey: 'frostings.brigadeiroGanacheMilk' },
        { id: 'brigadeiro_dark', nameKey: 'frostings.brigadeiroGanacheDark' },
        { id: 'brigadeiro_white', nameKey: 'frostings.brigadeiroGanacheWhite' }
      ]
    }
  },
  decorationStyles: [
    { id: 'vintage', nameKey: 'decorationStyles.vintage' },
    { id: 'plain', nameKey: 'decorationStyles.plain' }
  ],
  flowers: [
    { id: 'none', nameKey: 'flowers.none', price: 0 },
    { id: 'withFlowers', nameKey: 'flowers.withFlowers', price: 8 }
  ]
};

// Custom Cake Flavor Options
export const customCakeFlavors = [
  { id: 'brigadeiro', nameKey: 'flavors.brigadeiro' },
  { id: 'pineappleCoconut', nameKey: 'flavors.pineappleCoconut' },
  { id: 'doceDeLeite', nameKey: 'flavors.doceDeLeite' },
  { id: 'beijinho', nameKey: 'flavors.beijinho' }
];

export const products = [
  // Fixed Menu
  {
    id: 1,
    nameKey: 'fixedMenu.boloGelado',
    category: 'fixedMenu',
    basePrice: 18.99,
    sizes: [
      { id: 'small', nameKey: 'sizes.small', price: 18.99, serves: '3-4' },
      { id: 'medium', nameKey: 'sizes.medium', price: 28.99, serves: '4-8' },
      { id: 'large', nameKey: 'sizes.large', price: 38.99, serves: '8-12' }
    ],
    descriptionKey: 'fixedMenu.boloGeladoDesc',
    fullDescriptionKey: 'fixedMenu.boloGeladoFull',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    nameKey: 'fixedMenu.boloMilho',
    category: 'fixedMenu',
    basePrice: 16.99,
    sizes: [
      { id: 'small', nameKey: 'sizes.small', price: 16.99, serves: '3-4' },
      { id: 'medium', nameKey: 'sizes.medium', price: 26.99, serves: '4-8' },
      { id: 'large', nameKey: 'sizes.large', price: 36.99, serves: '8-12' }
    ],
    descriptionKey: 'fixedMenu.boloMilhoDesc',
    fullDescriptionKey: 'fixedMenu.boloMilhoFull',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    nameKey: 'fixedMenu.boloCenoura',
    category: 'fixedMenu',
    basePrice: 19.99,
    sizes: [
      { id: 'small', nameKey: 'sizes.small', price: 19.99, serves: '3-4' },
      { id: 'medium', nameKey: 'sizes.medium', price: 29.99, serves: '4-8' },
      { id: 'large', nameKey: 'sizes.large', price: 39.99, serves: '8-12' }
    ],
    descriptionKey: 'fixedMenu.boloCenouraDesc',
    fullDescriptionKey: 'fixedMenu.boloCenouraFull',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    nameKey: 'fixedMenu.empadao',
    category: 'fixedMenu',
    basePrice: 22.99,
    sizes: [
      { id: 'small', nameKey: 'sizes.small', price: 22.99, serves: '3-4' },
      { id: 'medium', nameKey: 'sizes.medium', price: 32.99, serves: '4-8' },
      { id: 'large', nameKey: 'sizes.large', price: 42.99, serves: '8-12' }
    ],
    descriptionKey: 'fixedMenu.empadaoDesc',
    fullDescriptionKey: 'fixedMenu.empadaoFull',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop',
    variants: ['chicken', 'mushroom', 'ricottaSpinach']
  },
  {
    id: 5,
    nameKey: 'fixedMenu.salpicao',
    category: 'fixedMenu',
    basePrice: 24.99,
    sizes: [
      { id: 'small', nameKey: 'sizes.small', price: 24.99, serves: '3-4' },
      { id: 'medium', nameKey: 'sizes.medium', price: 34.99, serves: '4-8' },
      { id: 'large', nameKey: 'sizes.large', price: 44.99, serves: '8-12' }
    ],
    descriptionKey: 'fixedMenu.salpicaoDesc',
    fullDescriptionKey: 'fixedMenu.salpicaoFull',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  },

  // Birthday Cakes
  {
    id: 6,
    nameKey: 'birthdayCakes.brigadeiro',
    category: 'birthdayCakes',
    price: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.brigadeiroDesc',
    fullDescriptionKey: 'birthdayCakes.brigadeiroFull',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    nameKey: 'birthdayCakes.pineappleCoconut',
    category: 'birthdayCakes',
    price: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.pineappleCoconutDesc',
    fullDescriptionKey: 'birthdayCakes.pineappleCoconutFull',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    nameKey: 'birthdayCakes.doceDeLeite',
    category: 'birthdayCakes',
    price: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.doceDeLeiteDesc',
    fullDescriptionKey: 'birthdayCakes.doceDeleiteFull',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    nameKey: 'birthdayCakes.beijinho',
    category: 'birthdayCakes',
    price: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.beijinhoDesc',
    fullDescriptionKey: 'birthdayCakes.beijinhoFull',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    nameKey: 'birthdayCakes.customCake',
    category: 'birthdayCakes',
    price: 55.99,
    customizable: true,
    hasFlavorCombination: true,
    descriptionKey: 'birthdayCakes.customCakeDesc',
    fullDescriptionKey: 'birthdayCakes.customCakeFull',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop',
  }
];
