// I assume PlumGuide would use Next.js and all this data would be available on server render, so I just store this data locally without mocking a REST API
const listings = {
  '1': {
    title: 'Monsieur Didot',
    imageSource: 'https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d',
    pricePerNight: 345,
    capacity: 4,
    bedroomsNum: 2,
    bathroomsNum: 2,
    perks: ["Private terrasse", "Peaceful"],
    location: {
      area: "Notthing Hill",
      city: "London",
      country: "England"
    },
    closestTransport: {
      type: "Tube",
      name: "Westbourne Park Station",
      walk: 6
    },
    accessibility: "Stairs"
  },
  '2': {
    title: 'Rural Shack',
    imageSource: 'https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d',
    pricePerNight: 1500,
    capacity: 0.5,
    bedroomsNum: 1,
    bathroomsNum: -1,
    perks: ["No neighbours", "Remote"],
    location: {
      area: "Simitli",
      city: "Blagoevgrad",
      country: "Bulgaria"
    },
    closestTransport: {
      type: "Horse",
      name: "Horse carriage",
      walk: 20
    },
    accessibility: "Dirt path"
  }
}

export default listings