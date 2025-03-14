export const trips = [
  {
    country: "Italy",
    places: "Rome - Bergamo <br /> Venice - Tropea",
    years: "2018 - 2025",
    image: "italy.jpg",
  },
  {
    country: "Switzerland",
    places:
      "Zermatt - Montreaux - Bern - Thun - Interlaken<br/> Wengen - Lauterbrunnen - Interlaken - Grindelwald",
    years: "2023 - 2024",
    image: "switzerland.png",
  },
  {
    country: "France",
    places: "Colmar - Strasbourg <br/> Nancy - Metz - Paris",
    years: "2016 - 2024",
    image: "paris.jpg",
  },
  {
    country: "Greece",
    places: "Athens - Paros - Antiparos - Naxos - Amorgos",
    years: "2024",
    image: "greece.jpg",
  },
  {
    country: "Spain",
    places: "Madrid - Seville <br/> Cudillero - Santander - Bilbao - Barcelona",
    years: "2012 - 2024",
    image: "madrid.jpg",
  },
  {
    country: "Albania",
    places: "Himarë - Saranda - Ksamil - Gjirokastër - Berat - Tirana",
    years: "2023",
    image: "albania.png",
  },
  {
    country: "Luxembourg",
    places: "Luxembourg - Ettelbruck - Diekirch",
    years: "2022 - 2023",
    image: "luxembourg.png",
  },
  {
    country: "Germany",
    places: "Berlin - Munich - Dresden - Leipzig - Trier",
    years: "2019 - 2023",
    image: "berlin.jpg",
  },
  {
    country: "Denmark",
    places: "Copenhagen",
    years: "2022",
    image: "copenhagen.png",
  },
  {
    country: "Sweden",
    places: "Malmö",
    years: "2022",
    image: "malmo.png",
  },
  {
    country: "Ireland",
    places: "Dublin - Galway - Sligo - Limerick",
    years: "2022",
    image: "ireland.jpg",
  },
  {
    country: "Slovenia",
    places: "Ljubljana - Bled - Bohinj",
    years: "2022",
    image: "slovenia.jpg",
  },
  {
    country: "Montenegro",
    places: "Kotor - Budva - Perast",
    years: "2022",
    image: "montenegro.jpg",
  },
  {
    country: "Croatia",
    places: "Split - Hvar - Dubrovnik - Zagreb",
    years: "2022",
    image: "croatia.jpg",
  },
  {
    country: "United Kingdom",
    places: "London",
    years: "2015 - 2022",
    image: "london.jpg",
  },
  {
    id: "polandModalContent",
    country: "Poland",
    places:
      "Auschwitz - Zakopane - Warsaw - Gdansk <br /> Poznan - Krakow - Wroclaw",
    years: "2019 - 2020",
    image: "zakopane.jpg",
  },
  {
    country: "Austria",
    places: "Salzburg",
    years: "2019",
    image: "austria.jpg",
  },
  {
    country: "Czech Republic",
    places: "Prague",
    years: "2019",
    image: "prague.jpg",
  },
  {
    country: "Hungary",
    places: "Budapest",
    years: "2019",
    image: "budapest.jpg",
  },
  {
    country: "Norway",
    places: "Oslo",
    years: "2019",
    image: "oslo.jpg",
  },
  {
    id: "netherlandsModalContent",
    country: "The Netherlands",
    places: "Amsterdam - Rotterdam - Utrecht",
    years: "2019",
    image: "amsterdam.jpg",
  },
  {
    id: "belgiumModalContent",
    country: "Belgium",
    places:
      "Antwerp - Brussels - Gent - Bruges <br /> Lovaina - Lier - Mechelen",
    years: "2019",
    image: "belgium.jpg",
  },
  {
    id: "usaModalContent",
    country: "USA - Route 66",
    places:
      "Chicago - Springfield IL - St. Louis - Springfield MO <br /> Tulsa - Oklahoma - Amarillo - Tucumcari - Santa Fe <br /> Albuquerque - Gallup - Flagstaff - Grand Canyon <br /> Kingman - Las Vegas - Needles - Los Angeles",
    years: "2017",
    image: "route66.jpg",
  },
];

export const modals = {
  netherlandsModalContent: {
    title: "The Netherlands 2019",
    flag: "netherlands-flag.png",
    tabs: ["Rotterdam", "Amsterdam", "Utrecht"],
    content: "netherlands",
  },
  polandModalContent: {
    title: "Poland 2019-20",
    flag: "poland-flag.svg",
    tabs: [
      "Wroclaw",
      "Kraków",
      "Poznań",
      "Gdańsk",
      "Warsaw",
      "Zakopane",
      "Auschwitz",
    ],
    content: "poland",
  },
  belgiumModalContent: {
    title: "Belgium 2019",
    flag: "belgium-flag.svg",
    tabs: ["Antwerp", "Brussels", "Bruges", "Ghent"],
    content: "belgium",
  },
  usaModalContent: {
    title: "USA 2017: Route 66",
    flag: "usa-flag.webp",
    tabs: ["IL", "MO", "OK", "NM", "TX", "AZ", "NV", "CA"],
    content: "usa",
  },
};
