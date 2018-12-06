// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================

let friends = [
  {
    name: "Grinch",
    photo: "images/grinch.jpg",
    scores: ["5", "4", "1", "5", "2", "5", "4", "2", "1", "5"]
  },
  {
    name: "Santa Claus",
    photo: "images/santa.jpg",
    scores: ["1", "3", "5", "1", "4", "2", "1", "2", "5", "1"]
  },
  {
    name: "Ebenezer Scrooge",
    photo: "images/scrooge.jpg",
    scores: ["3", "2", "1", "5", "3", "4", "5", "2", "1", "2"]
  },
  {
    name: "Rudolph",
    photo: "images/rudolf.jpg",
    scores: ["2", "4", "4", "2", "5", "3", "3", "1", "4", "4"]
  },
  {
    name: "Buddy the Elf",
    photo: "images/buddy.jpg",
    scores: ["1", "1", "1", "5", "1", "1", "1", "5", "1", "4"]
  },
  {
    name: "Cindy Lou Hou",
    photo: "images/cindy.jpg",
    scores: ["4", "5", "3", "4", "2", "2", "4", "3", "3", "3"]
  }
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
