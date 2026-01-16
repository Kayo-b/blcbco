// Birthday Cake Customization Options
export const birthdayCakeOptions = {
  bases: [
    { id: 'vanilla', nameKey: 'bases.vanilla' },
    { id: 'chocolate', nameKey: 'bases.chocolate' }
  ],
  frostings: [
    { id: 'buttercream', nameKey: 'frostings.buttercream' },
    { id: 'brigadeiro', nameKey: 'frostings.brigadeiro' },
    { id: 'naked', nameKey: 'frostings.naked' }
  ],
  decorationStyles: [
    { id: 'vintage', nameKey: 'decorationStyles.vintage' },
    { id: 'plain', nameKey: 'decorationStyles.plain' }
  ],
  flowers: [
    { id: 'none', nameKey: 'flowers.none', price: 0 },
    { id: 'withFlowers', nameKey: 'flowers.withFlowers', price: 5 }
  ]
};

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
      { id: 'familySmall', nameKey: 'sizes.familySmall', price: 38.99, serves: '8-12' },
      { id: 'familyLarge', nameKey: 'sizes.familyLarge', price: 48.99, serves: '12-16' }
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
      { id: 'familySmall', nameKey: 'sizes.familySmall', price: 36.99, serves: '8-12' },
      { id: 'familyLarge', nameKey: 'sizes.familyLarge', price: 46.99, serves: '12-16' }
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
      { id: 'familySmall', nameKey: 'sizes.familySmall', price: 39.99, serves: '8-12' },
      { id: 'familyLarge', nameKey: 'sizes.familyLarge', price: 49.99, serves: '12-16' }
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
      { id: 'familySmall', nameKey: 'sizes.familySmall', price: 42.99, serves: '8-12' },
      { id: 'familyLarge', nameKey: 'sizes.familyLarge', price: 52.99, serves: '12-16' }
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
      { id: 'familySmall', nameKey: 'sizes.familySmall', price: 44.99, serves: '8-12' },
      { id: 'familyLarge', nameKey: 'sizes.familyLarge', price: 54.99, serves: '12-16' }
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
    basePrice: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.brigadeiroDesc',
    fullDescriptionKey: 'birthdayCakes.brigadeiroFull',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    nameKey: 'birthdayCakes.pineappleCoconut',
    category: 'birthdayCakes',
    basePrice: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.pineappleCoconutDesc',
    fullDescriptionKey: 'birthdayCakes.pineappleCoconutFull',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    nameKey: 'birthdayCakes.doceDeLeite',
    category: 'birthdayCakes',
    basePrice: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.doceDeLeiteDesc',
    fullDescriptionKey: 'birthdayCakes.doceDeleiteFull',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    nameKey: 'birthdayCakes.beijinho',
    category: 'birthdayCakes',
    basePrice: 55.99,
    customizable: true,
    descriptionKey: 'birthdayCakes.beijinhoDesc',
    fullDescriptionKey: 'birthdayCakes.beijinhoFull',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop',
  }
];
