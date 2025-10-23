// List of 32 globally recognised biodiversity hotspots.
window.hotspots = [
  {
    id: 'tropical-andes',
    name: 'Tropical Andes',
    region: 'South America',
    latitude: -15.6,
    longitude: -70.0,
    summary: 'Stretching along the Andes mountains from Venezuela to Bolivia, this hotspot hosts the planet\'s greatest diversity of endemic plants.'
  },
  {
    id: 'tumbes-choco-magdalena',
    name: 'Tumbes-Choco-Magdalena',
    region: 'South America',
    latitude: 3.5,
    longitude: -77.0,
    summary: 'Humid forests from Panama to northern Peru that shelter unique birds, amphibians, and rare primates.'
  },
  {
    id: 'mesoamerica',
    name: 'Mesoamerica',
    region: 'Central America',
    latitude: 15.3,
    longitude: -91.0,
    summary: 'A corridor of cloud forests and mangroves connecting Mexico to Panama with high endemism and cultural richness.'
  },
  {
    id: 'caribbean',
    name: 'Caribbean Islands',
    region: 'Caribbean',
    latitude: 18.0,
    longitude: -66.0,
    summary: 'Island biodiversity shaped by isolation, featuring hundreds of endemic reptiles, birds, and plants.'
  },
  {
    id: 'atlantic-forest',
    name: 'Atlantic Forest',
    region: 'South America',
    latitude: -22.9,
    longitude: -43.2,
    summary: 'Fragmented coastal forests of Brazil, Paraguay, and Argentina with remarkable primate and tree diversity.'
  },
  {
    id: 'cerrado',
    name: 'Cerrado',
    region: 'South America',
    latitude: -15.0,
    longitude: -47.0,
    summary: 'Brazil\'s vast savanna mosaic, home to giant anteaters, maned wolves, and thousands of endemic plants.'
  },
  {
    id: 'chilean-valdivian',
    name: 'Chilean Winter Rainfall-Valdivian Forests',
    region: 'South America',
    latitude: -39.0,
    longitude: -73.0,
    summary: 'Temperate rainforests with ancient alerce trees and a profusion of ferns and mosses.'
  },
  {
    id: 'california-floristic',
    name: 'California Floristic Province',
    region: 'North America',
    latitude: 37.0,
    longitude: -122.0,
    summary: 'Mediterranean-climate shrublands and forests stretching from California to Baja California.'
  },
  {
    id: 'madrean-pine-oak',
    name: 'Madrean Pine-Oak Woodlands',
    region: 'North America',
    latitude: 30.0,
    longitude: -108.0,
    summary: 'Sky island mountain ranges between the United States and Mexico with oak-pine mosaics rich in endemic plants.'
  },
  {
    id: 'maputaland-pondoland',
    name: 'Maputaland-Pondoland-Albany',
    region: 'Africa',
    latitude: -29.0,
    longitude: 30.5,
    summary: 'Subtropical forests and grasslands along South Africa and Mozambique that protect rare cycads and birds.'
  },
  {
    id: 'cape-floristic',
    name: 'Cape Floristic Region',
    region: 'Africa',
    latitude: -33.6,
    longitude: 19.0,
    summary: 'A floral kingdom of exceptionally diverse fynbos shrublands located at Africa\'s southern tip.'
  },
  {
    id: 'succulent-karoo',
    name: 'Succulent Karoo',
    region: 'Africa',
    latitude: -31.0,
    longitude: 20.0,
    summary: 'Semi-arid landscapes boasting the highest succulent plant diversity anywhere on Earth.'
  },
  {
    id: 'coastal-forests-eastern-africa',
    name: 'Coastal Forests of Eastern Africa',
    region: 'Africa',
    latitude: -6.0,
    longitude: 39.0,
    summary: 'A chain of forest patches from southern Somalia to Mozambique with many endemic primates and birds.'
  },
  {
    id: 'eastern-afromontane',
    name: 'Eastern Afromontane',
    region: 'Africa',
    latitude: -1.0,
    longitude: 37.0,
    summary: 'Discontinuous mountain habitats around the Great Rift Valley famed for montane forests and lakes.'
  },
  {
    id: 'guinean-forests',
    name: 'Guinean Forests of West Africa',
    region: 'Africa',
    latitude: 6.0,
    longitude: -5.0,
    summary: 'Rainforests stretching from Guinea to Togo, sheltering chimpanzees, pygmy hippos, and rare flora.'
  },
  {
    id: 'horn-of-africa',
    name: 'Horn of Africa',
    region: 'Africa',
    latitude: 9.0,
    longitude: 45.0,
    summary: 'Arid and semi-arid habitats rich in succulents and pastoral cultures centered in Ethiopia and Somalia.'
  },
  {
    id: 'madagascar',
    name: 'Madagascar and the Indian Ocean Islands',
    region: 'Africa',
    latitude: -18.9,
    longitude: 47.5,
    summary: 'An island hotspot whose isolation produced lemurs, baobabs, and more than eleven thousand endemic plants.'
  },
  {
    id: 'mediterranean-basin',
    name: 'Mediterranean Basin',
    region: 'Europe / North Africa / Middle East',
    latitude: 36.0,
    longitude: 15.0,
    summary: 'Mediterranean-climate woodlands and scrublands touching three continents with deep cultural history.'
  },
  {
    id: 'caucasus',
    name: 'Caucasus',
    region: 'Europe / Western Asia',
    latitude: 42.0,
    longitude: 45.0,
    summary: 'Mountain systems between the Black and Caspian Seas featuring unique temperate rainforests.'
  },
  {
    id: 'irano-anatolian',
    name: 'Irano-Anatolian',
    region: 'Western Asia',
    latitude: 34.0,
    longitude: 51.0,
    summary: 'High plateaus and mountain ranges across Turkey, Iran, and Armenia rich in endemic bulbs and shrubs.'
  },
  {
    id: 'mountains-central-asia',
    name: 'Mountains of Central Asia',
    region: 'Central Asia',
    latitude: 39.0,
    longitude: 71.0,
    summary: 'Pamir, Tien Shan, and Hindu Kush mountains with juniper forests and wild relatives of fruit crops.'
  },
  {
    id: 'himalaya',
    name: 'Himalaya',
    region: 'Asia',
    latitude: 28.0,
    longitude: 87.0,
    summary: 'High-elevation ecosystems from Bhutan to Pakistan supporting snow leopards and rhododendrons.'
  },
  {
    id: 'indo-burma',
    name: 'Indo-Burma',
    region: 'Asia',
    latitude: 21.0,
    longitude: 96.0,
    summary: 'Floodplains, mangroves, and mountains extending from northeastern India through Myanmar to Vietnam.'
  },
  {
    id: 'western-ghats-sri-lanka',
    name: 'Western Ghats and Sri Lanka',
    region: 'Asia',
    latitude: 10.0,
    longitude: 76.0,
    summary: 'Moist forests along India\'s western coast and Sri Lanka that harbour many amphibians and endemic plants.'
  },
  {
    id: 'sundaland',
    name: 'Sundaland',
    region: 'Asia',
    latitude: 0.0,
    longitude: 110.0,
    summary: 'The Malay Peninsula, Borneo, Sumatra, and Java, containing orangutans and towering dipterocarp forests.'
  },
  {
    id: 'wallacea',
    name: 'Wallacea',
    region: 'Asia',
    latitude: -2.0,
    longitude: 121.0,
    summary: 'Islands between Asia and Australia with remarkable bird and marsupial endemism.'
  },
  {
    id: 'philippines',
    name: 'Philippines',
    region: 'Asia',
    latitude: 12.0,
    longitude: 123.0,
    summary: 'A nation of more than seven thousand islands featuring extensive coral reefs and forest endemics.'
  },
  {
    id: 'mountains-southwest-china',
    name: 'Mountains of Southwest China',
    region: 'Asia',
    latitude: 30.0,
    longitude: 102.0,
    summary: 'Gorge and plateau habitats that host giant pandas, golden snub-nosed monkeys, and diverse flora.'
  },
  {
    id: 'japan',
    name: 'Japan',
    region: 'Asia',
    latitude: 36.0,
    longitude: 138.0,
    summary: 'An archipelago with temperate to subtropical climates supporting unique amphibians and broadleaf forests.'
  },
  {
    id: 'polynesia-micronesia',
    name: 'Polynesia-Micronesia',
    region: 'Oceania',
    latitude: -15.0,
    longitude: -150.0,
    summary: 'A constellation of Pacific islands where isolation has produced high levels of coral reef and terrestrial endemism.'
  },
  {
    id: 'new-caledonia',
    name: 'New Caledonia',
    region: 'Oceania',
    latitude: -21.3,
    longitude: 165.6,
    summary: 'Ultramafic soils and rainforests that nurture ancient conifers and endemic birds.'
  },
  {
    id: 'southwest-australia',
    name: 'Southwest Australia',
    region: 'Oceania',
    latitude: -34.0,
    longitude: 116.0,
    summary: 'Mediterranean-climate woodlands around Perth containing thousands of endemic wildflowers.'
  }
];
