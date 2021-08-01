export default {
  currency: "EUR",
  commutes: [
    {
      transport: "Train",
      from: "London",
      to: "Paris",
      duration: {
        h: "02",
        m: "15"
      },
      cost: 100,
      reference: "AB123"
    },
    {
      transport: "Bus",
      from: "Paris",
      to: "Berlin",
      duration: {
        h: "04",
        m: "30"
      },
      cost: 90,
      reference: "PB99"
    },
    {
      transport: "Plane",
      from: "Berlin",
      to: "Moscow",
      duration: {
        h: "01",
        m: "30"
      },
      cost: 290,
      reference: "RU1337"
    }
  ],
  total: {
    duration: {
      h: "08",
      m: "15"
    },
    cost: 480
  }
};
