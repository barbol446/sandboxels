elements.melpar = {
  color: "#00ff00",
  behavior: behaviors.STURDYPOWDER,
  category: "life",
  state: "solid",
  tempHigh: 100,
  stateHigh: "ash",
  reactions: {
    "human": { elem1: "explosion", elem2: "explosion" }
  }
};

elements.vabbol = {
  color: "#a100a1",
  behavior: behaviors.BOUNCY,
  category: "special",
  state: "solid",
  tempHigh: 340,
  breakInto: "oil",
  burn: "12%",
};

elements.blue_mip = {
  color: "#3775ab",
  behavior: behaviors.CRAWLER,
  category: "life",
  state: "solid",
  reactions: {
    "potato": { elem1: "blue_mip", elem2: "null" }
  }
};
