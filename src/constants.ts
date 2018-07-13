type Color = "black" | "blue" | "brown" | "green" | "grey" | "olive" | "orange" | "pink" | "purple" | "red" | "yellow" | "teal" | "violet"

export interface IProject {
    color: Color;
    desc: string;
    description: string;
    img: string;
    link: string;
    technology: string[];
    title:string;
}

export const projects: IProject[] = [{
    color: 'pink',
    desc: 'Aid plaform for my neighbourhood',
    description: "Project made for Openclassrooms Full Stack Path. Api",
    img: "neighborhood.jpg",
    link: "https://neighboorhelp.herokuapp.com/",
    technology: ["Rails", "React", "Redux", "Google maps" ],
    title:"Neighborhood",
},{
    color: 'green',
    desc: "Website for Mountain Bike Race",
    description: "Project for OpenClassrooms Full-stack Developer Path. The goal of this project was to learn using external api and create own",
    img: "bbt.jpg",
    link: "https://boulderbiketour.herokuapp.com",
    technology: ["Rails", "React", "flickr-api", "Google maps"],
    title:"Boulder Bike Tour",
},{
    color: "blue",
    desc: "Fitness Tracker",
    description: "Project made for Openclassrooms Full-stack Developer path. Website allow to register and add activities to user profile",
    img: "mandg.jpg",
    link: "https://mandgruby.herokuapp.com/",
    technology: ["Rails", "Devise gem", "Bootstrap" ],
    title:"Move and Groove",
},{
    color: 'yellow',
    desc: "Website for Real Estate Agency",
    description: "Project for OpenClassrooms Full-stack Developer Path. Website made using wordpress and some additional plugins",
    img: "Chalets.jpg",
    link: "http://dev-daniel-project2.pantheonsite.io/",
    technology: ["wordpress"],
    title:"Chalets and Caviar",
},{
    color: 'teal',
    desc: 'Website prototype for Film Festival',
    description: 'Project for OpenClassrooms Full-stack Developer Path. Frontend made using bootstrap and svg for diagonal sections',
    img: 'Festival.jpg',
    link: 'projects/prototype/index.html',
    technology: ['bootstrap', "html", "js", 'svg'],
    title: "Brooklyn Outdoor Film Festival",
},{
    color: "purple",
    desc: 'Chat app written in node.js' ,
    description: "Project for Andrew Mead's Complete node.js Developer Course. Application uses node.js express and socket.io. A couple of users can login to the same room and chat.",
    img: 'chat.png',
    link: 'https://chat-node-by-kuku.herokuapp.com/',
    technology: ["node.js", "socket.io", 'express'],
    title: 'Chat app',
},{
    color: "orange",
    desc: 'Simple todo app',
    description: "Project for Colt Steel's The Web Developer Bootcamp extended by me",
    img: 'todo.png',
    link: 'https://github.com/dkuku/todo-list-jQuery',
    technology: ['jQuery', 'html', 'css', 'js'],
    title: 'Todo App',
},{
    color: 'red',
    desc: 'Asteroids Clone' ,
    description: 'Game made using python and codeskulptor for Interactive Python course on Coursera',
    img: 'Asteroids.jpg',
    link: 'http://www.codeskulptor.org/#user16_T5YN7P0gBI_6.py',
    technology: ["object oriented python", "codeskulptor", 'simple gui'],
    title: 'Rice Rocks',
},{
    color: 'brown',
    desc: 'Color guessing game',
    description: "Project for Colt Steel's The Web Developer Bootcamp. Game made using html, css and javascript",
    img: 'rgb-game.png',
    link: 'projects/rgb-color-game.html',
    technology: ['js', 'html', 'css'],
    title: 'RGB Game',
}, {
    color: 'violet',
    desc: 'Portfolio site',
    description: 'Project for OpenClassrooms Full-stack Developer Path. Made using react, react-router and semantic-ui',
    img: 'portfolio.jpg',
    link: 'https://github.com/dkuku/portfolio-website',
    technology: ['react', 'react-router', 'semantic-ui'],
    title: 'Portfolio',
}
]
