import Zelda from "./media/zelda.gif";
import Amazon from "./media/amazon.gif";
import Disney from "./media/disney.gif";
import Arcade from "./media/arcade.gif";
import Visualizer from "./media/visualizer.gif";
export const Projects = [
  {
    id: 1,
    title: "Adventure Game",
    description:
      "Use your arrow keys to find the grail in every level. Player learns to swim and unlock doors. Built with OOP & pure JS. Uses a Canvas element and clock to render levels. Dynamic camera scrolls as player moves.",
    img: Zelda,
    url: "https://ddjr.github.io/adventureGame/",
  },
  {
    id: 5,
    title: "Algorithm Visualizer",
    description:
      "Visualize Dijkstras algorithm.Watch as it moves through a weighted plain. Add walls to see how the algorithm finds another way. See the highlighted shortest path at the end!",
    img: Visualizer,
    url: "https://pathfinding-visualizer-82ae6.firebaseapp.com/",
  },
  {
    id: 2,
    title: "Amazon Rebuild",
    description:
      "Login. Fill your shopping cart. Review your order. Check out using stripe. Built with React, Sass, and Stripe API. Firebase for auth, database, and hosting.",
    img: Amazon,
    url: "https://clone-22885.firebaseapp.com/",
  },
  {
    id: 3,
    title: "Disney Plus Rebuild",
    description:
      "Search for your favorite movie and view previews before watching. Built with React, Redux, and Firebase for Auth, database, and hosting.",
    img: Disney,
    url: "https://disney-clone-8bff4.firebaseapp.com/",
  },
  {
    id: 4,
    title: "Arcade Adventure",
    description:
      "Play 6 classic arcade games, right in the browser. Built with Pure JS and OOP. Play Pong, Brick Brake, Runner, Snake, Space Invader, and Flappy Bird.",
    img: Arcade,
    url: "https://ddjr.github.io/arcade-games/",
  },
];
