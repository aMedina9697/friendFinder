// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================

let friends = [
  {
    name: "The Grinch",
    photo:
      "https://media1.tenor.com/images/6cd46e6c9be2d1b2211b508f3a1860ce/tenor.gif?itemid=3576986",
    scores: ["5", "4", "1", "5", "2", "5", "4", "2", "1", "5"]
  },
  {
    name: "Santa Claus",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEIrmP9NttyLUN9zmDYAA1VFcVZUcj8L06UwCV-NpKszslf2dtg",
    scores: ["1", "3", "5", "1", "4", "2", "1", "2", "5", "1"]
  },
  {
    name: "Ebenezer Scrooge",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAwIrszzi7C4TR-ZbiXoc52TdQjRxlWOSBK0YRaTZjWxB04rj",
    scores: ["3", "2", "1", "5", "3", "4", "5", "2", "1", "2"]
  },
  {
    name: "Rudolph",
    photo:
      "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/rudolph-the-red-nosed-reindeer-poster.jpg?itok=ZD3d4jTY",
    scores: ["2", "4", "4", "2", "5", "3", "3", "1", "4", "4"]
  },
  {
    name: "Buddy the Elf",
    photo:
      "https://www.papercards.com/images/american-greetings/CD9215-elf-christmas-card.jpg",
    scores: ["1", "1", "1", "5", "1", "1", "1", "5", "1", "4"]
  },
  {
    name: "Cindy Lou Hou",
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/81a-WL%2BKSsL._SX425_.jpg",
    scores: ["4", "5", "3", "4", "2", "2", "4", "3", "3", "3"]
  }
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
