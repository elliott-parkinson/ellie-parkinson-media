import { asset } from "$fresh/runtime.ts";

export const experience = [
  {
    title: "Inaudible - web",
    url: "",
    date: "2026",
    pictureSrc: asset("images/inaudible.png"),
    iconSrc: "",
    content: [
      "An alternative frontend for Audiobookshelf, a shelf hosted audiobook metadata manager and player. Built as a personal project because I wanted to resolve performance and UI issues with the original frontend.",
      "Designed to use service workers and indexedDB to cache data and improve performance.",
    ],
    skills: ["react", "webcomponents", "typescript", "audiobookshelf"]
  },
  {
    title: "Droppy Blocky",
    url: "",
    date: "2026",
    pictureSrc: asset("images/projects/droppy-blocky.png"),
    iconSrc: "",
    content: [
      "A personal project built because I missed playing Super Collapse! 3. This game is no longer available to purcahse and play without played some derrived version fo the game for facebook which requires you to share with friends for extra playtime and spin / loot to keep playing. I wanted to have the uninterrupted fun that I used to without any of the gamified mechanics that (for me) ruined the modern iterations of the game.",
      "Designed to use service workers and indexedDB to cache data and improve performance.",
    ],
    skills: ["react", "webcomponents", "typescript", "canvas", "web-audio"]
  },
  {
    title: "Smartworkx",
    url: null,
    date: "2025 - 2026",
    pictureSrc: asset("images/projects/smartworkx.png"),
    iconSrc: "",
    content: [
	    "A new web portal for Smartworkx. Written to replace the legacy php codebase, with the intent of making what was previously an internal tool a multi-tenant application that can be sold to other companies.",
	    "I worked closely with the CTO of the company building the portal whilst he worked on the backend (a REST API written in dotnet). ",
      	"Smartworkx is an callout manmagement and scheduling platform for skilled companmies and contractors to use for performing maintenence and repairs on properties.",
    ],
    skills: ["typescript", "nextjs", "react", "shadcn", "tailwindcss"]
  },
  {
    title: "Communication South West",
    url: "",
    date: "2026",
    pictureSrc: asset("images/skeleton.png"),
    iconSrc: "",
    content: [
      "A simple website and blog to advertise an agency that provides communication support workers to the local area for sign language interpretation.",
      "",
    ],
    skills: ["deno", "fresh", "webcomponents", "typescript"]
  },
  {
    title: "Aptec IT Rebuild",
    url: "https://www.aptecitsolutions.co.uk",
    date: "2026",
    pictureSrc: asset("images/projects/aptec.png"),
    iconSrc: "",
    content: [
      "A small frontend rebuild of Aptec IT Solutions website - an independent IT systems management company.",
      "This was also a small docker / caddy server setup and deployment of Nextcloud, Meshcentral and Rustdesk.",
    ],
    skills: ["dotnet", "c#", "nextjs", "typescript", "azure", "nodejs"]
  },
  {
    title: "Water Outside",
    url: null,
    date: "2025",
    pictureSrc: asset("images/water-outside.jpg"),
    iconSrc: "",
    content: [
      "A different project from my previous work, where I chose to focus on a more physical and hands on job. Restoring the Framica Too (and renaming it to the Water Outside) to glory after 17 years out of the water.",
      "Focused instead of financial gain and software development, but a dream of restoring and living aboard a sailing catamaran.",
      "This job involved building from scratch an electrical system, plumbing, heating, fibreglassing and a whole host of other work.",
      "Having previously been condemned, I restored the boat fully and had her sailing within only 3 months of work.",
    ],
    skills: ["plumbing", "fibreglassing", "electronics", "shipwrighting"]
  },
  {
    title: "Shawbrook Bank",
    url: "",
    date: "2023 - 2025",
    pictureSrc: asset("images/companies/shawbrook.jpg"),
    iconSrc: "",
    content: [
      "Working in the Data & Integration, Payment Holidays and Product Config teams. I’ve had a variety of roles and responsibilities that have spanned multiple teams. Working with React, NextJS, Typescript, dotnet8, apim and a variety of other azure based technologies. ",
      "",
    ],
    skills: ["dotnet", "c#", "nextjs", "typescript", "azure", "nodejs"]
  },
  {
    title: "Hotbuyer",
    url: "",
    date: "2023",
    pictureSrc: asset("images/projects/hotbuyer.png"),
    iconSrc: "",
    content: [
      "A US based marketplace designed to currate items from various online shops for products made in the USA. ",
      "I wrote the frontend from scratch, with the intent on writing something small, fast and optimised for search engines.",
    ],
    skills: ["nodejs", "typescript", "react"]
  },
  {
    title: "CTO at Fixzy Assist",
    url: "",
    date: "Early 2020 - late 2022",
    pictureSrc: asset("images/projects/fixzy.png"),
    iconSrc: "",
    content: [
      "For just under two years I was the CTO at Fixzy.I was responsible for building team, overseeing all of the companies projects, IT infrastructure, software architecture and devops. ",
      "During that time, I helped to get the first version of the software fully developed and released to get the companies first customers. I then architected a full version 2.0 of the software and brought the right team on board to complete the project. I was responsible for project management, standups, and also for developing several pieces of software.",
      "Fixzy was a very interesting company with the goal of reducing carbon emissions and making it possible for people in physical professions to enjoy the ability to work from home more frequently (closing the gap between physical labour professions and the tech industry). ",
    ],
    skills: ["azure", "typescript", "react", "nodejs", "uno", "scrum", "management"]
  },
  {
    title: "Fixzy Assist 2D Floorplan Renderer ",
    url: "",
    date: "2021",
    pictureSrc: asset("images/projects/fixzy-floorplan.png"),
    iconSrc: "",
    content: [
      "A custom html element written in typescript and lit 2.0. Designed to be imported by any framework (in this case embeded in reactjs). This took the data we supplied to render 3D rooms and rendered it as a 2D top down projection. It was required to toggle the showing of the grid lines, specific measurements, and also to be able to modify the room whilst working with a model that could change externally (in this case the 3D renderer).",
    ],
    skills: ["nodejs", "typescript", "lit", "webcomponents"]
  },
  {
    title: "Fixzy Assist Portal",
    url: "",
    date: "2021",
    pictureSrc: asset("images/projects/fixzy-portal.png"),
    iconSrc: "",
    content: [
      "A web portal built with reactjs, typescript, service workers and axios. The portal had the requirements of being a small, lightweight download an with separate business logic.",
      "The business logic was written in it’s own library as a service which used axios to connect to the rest API that was powering it. This could be imported into projects in either nodejs or the react portal itself. A service worker was then used to serve this data to multiple tabs at the same time, cache certain requests, serve data offline, and deal with request queues performed offline upon reconnection.",
    ],
    skills: ["nodejs", "typescript", "react", "serviceworkers", "axios"]
  },
  /*
  {
    title: "ConnexOne Omnichannel",
    url: "",
    date: "2020",
    pictureSrc: asset("images/projects/connexone.png"),
    iconSrc: "",
    content: [
      "",
      "",
    ],
    skills: []
  },
  */
  {
    title: "Recruitment Panda Website Redesign",
    url: "",
    date: "2020",
    pictureSrc: asset("images/projects/recruitment-panda.png"),
    iconSrc: "",
    content: [
      "A redesign of a website for a codebase based on Symfony 2.0. With the frontend built with sass, bootstrap4, typescript and elements of reactjs.",
      "This was a solo freelance project whereby after consulting with the client, and being presented with their new branding I designed and built the new front-end.",
      "There’s a lot I would change about this build if the client had the budget. However there is a balance to be made when it comes to meeting a clients budget as well as requirements.",
    ],
    skills: ["typescript", "react", "bootstrap", "php", "symfony"]
  },
  {
    title: "Smartpics Portal (Firstcall)",
    url: "",
    date: "2020",
    pictureSrc: asset("images/projects/smartpics-portal.png"),
    iconSrc: "",
    content: [
      "A PWA portal for uploading and training an AI learning system built in Node.js, React, and Mobx.",
      "",
    ],
    skills: ["typescript", "react", "nodejs", "mobx"]
  },
  {
    title: "Fixzitfast Website (Firstcall)",
    url: "",
    date: "2020",
    pictureSrc: asset("images/projects/fixzitfast-website.png"),
    iconSrc: "",
    content: [
      "A website and portal for accessing accounts related to home repair and maintenance services built in Node.js, React, and Mobx.",
      "Fixzitfast needed a brand new bespoke website and portal for their customers to be able to access their service.",
    ],
    skills: ["typescript", "react", "nodejs", "mobx"]
  },
  {
    title: "Conservatory Creation App (Ultraframe)",
    url: "",
    date: "2019",
    pictureSrc: asset("images/projects/ultraframe-conservatory.png"),
    iconSrc: "",
    content: [
      "Software designed to create flat roof conservatory configurations. Built in Node.js,React, ThreeJS and Mobx.",
      "Working in a modest team of two we rebuilt a failed attempt at this project by another company to get it over the line for the November deadline.",
    ],
    skills: ["typescript", "react", "nodejs", "mobx", "threejs"]
  },
  {
    title: "Website re build (Eversmart Energy)",
    url: "",
    date: "2019",
    pictureSrc: asset("images/projects/eversmart-energy.png"),
    iconSrc: "",
    content: [
      "Working in a team of 4 I was tasked with the maintenance of the current Laravel codebase and a rebuild of the front-end in pure ReactJS and Typescript and no backend. The main focus was SEO, performance and user experience.",
      "",
    ],
    skills: ["typescript", "nodejs", "react", "laravel"]
  },
  {
    title: "Advert delivery service (Fluid Ads)",
    url: "",
    date: "2019",
    pictureSrc: asset("images/projects/fluidads-delivery-service.png"),
    iconSrc: "",
    content: [
      "Linked tightly with the wysiwyg editor below, I (the sole developer) built a service that was designed to render adverts on the server side. Build in NodeJS and Typescript, it used the npm module to render adverts using the same code as the client used to edit them.",
      "Before rendering, adverts were processed and their images and fonts were optimizedto reduce the filesize of the overall advert.",
    ],
    skills: ["nodejs", "typescript", "preact"]
  },
  {
    title: "Advert wysiwyg builder (Fluid Ads)",
    url: "",
    date: "2019",
    pictureSrc: asset("images/projects/fluidads-wysiwyg.png"),
    iconSrc: "",
    content: [
      "Working in a team of 6, I was a senior developer in a Typescript¸ ReactJS, Redux / AngularJS project. I focused on the react / redux based canvas / editor for the adverts.",
      "I focused on building the component which allowed for the rendering and manipulation of all of the shapes, working to an interface so we could work in tandem without depending on each other to finish tasks.",
      "Finally the component and rendering code for the adverts was modified to allow for server side rendering and exported into it’s own npm module (to be used by the Advert delivery service above).",
    ],
    skills: ["nodejs", "typescript", "react", "preact", "redux", "angular"]
  },
  {
    title: "Ladbible website & cms maintenance and support",
    url: "",
    date: "2018",
    pictureSrc: asset("images/projects/ladbible.png"),
    iconSrc: "",
    content: [
      "After the entire dev team had resigned, it was my job to document and understand the various codebases so that we could hand over to the upcoming employees. I was also responsible for the maintenance of the software during this time.",
      "Working on static generated sites and a custom cms (build using ReactJS and Laravel), I helped to roll out several of their social good campaigns.",
    ],
    skills: ["laravel", "nextjs", "reactjs", "typescript"]
  },

  {
    title: "BCL Legal C# Rebuild",
    url: "",
    date: "2018",
    pictureSrc: asset("images/projects/bcl-cs-rebuild.png"),
    iconSrc: "",
    content: [
      "This is a project I am currently mid-way through. As BCL have grown they have decided that they would like to go down the route of a more enterprise level solution with higher security. We went for a domain model solution with webservices to access it and a separate front-end (C#, Typescript, KnockoutJS, .NET Core).",
      "I was the lead developer on this project, with only one other developer joining me for sections of it. I am currently working on this project.",
    ],
    skills: ["c#", "dotnet", "typescript", "knockoutjs"]
  },
  {
    title: "BCL Jobstreamer Application",
    url: "",
    date: "2018",
    pictureSrc: asset("images/projects/bcl-jobstreamer.png"),
    iconSrc: "",
    content: [
      "As BCL have grown they have decided that they would like to go down the route of a more enterprise level solution with higher security. We went for a domain model solution with webservices to access it and a separate front-end (C#, Typescript, KnockoutJS, .NET Core).",
      "The jobstreamer application sends alert emails to clients, and is the primary endpoint for jobs and other data.",
    ],
    skills: ["c#", "dotnet", "typescript", "knockoutjs"]
  },
  {
    title: "Video Poker Prototypes Web portal",
    url: "",
    date: "2018",
    pictureSrc: asset("images/projects/video-poker-portal.png"),
    iconSrc: "",
    content: [
      "A backend for the developers at Indiespring to use to upload new versions of our videopoker based games and notify subscribers of the game uploads. (NodeJS, Typescript, ReactJS).",
      "I was the sole developer for this project.",
    ],
    skills: ["typescript", "nodejs", "react"]
  },
  {
    title: "Video Poker Prototypes",
    url: "",
    date: "2018",
    pictureSrc: asset("images/projects/video-poker-prototypes.png"),
    iconSrc: "",
    content: [
      "An internal project to assist testers of the videopoker side of Indiespring. Consisting of a UWP app (written in C#), a REST server and a web server (NodeJS, Typescript, ReactJS).",
      "",
    ],
    skills: ["typescript", "nodejs", "react", "UWP", "c#", "dotnet"]
  },
  {
    title: "The Cake Nest",
    url: "www.cakenest.co.uk",
    date: "2017",
    pictureSrc: asset("images/projects/the-cake-nest.png"),
    iconSrc: "",
    content: [
      "A website I started working on the maintenance for in 2016. A web based shop, originally built on Magento.",
      "ecently I worked with another developer to bring this over to Magento2.The end result is a much faster site that is significantly easier for the customer to manage.",
    ],
    skills: ["php", "magento"]
  },
  {
    title: "Recruitment Panda Job Alerts",
    url: "www.recruitmentpanda.com",
    date: "2017",
    pictureSrc: asset("images/projects/panda-job-alerts.png"),
    iconSrc: "",
    content: [
      "Similar to the BCL Job Alerts system, I built from scratch a system which alerts candidates of new jobs added to the system.",
      "This was a command line NodeJS app built in Typescript, and using ReactJS as the templating system for the emails.",
    ],
    skills: ["typescript", "nodejs", "react"]
  },
  {
    title: "LBS Secure Instructions Portal",
    url: "",
    date: "2017",
    pictureSrc: asset("images/projects/lbs-instructions-portal.png"),
    iconSrc: "",
    content: [
      "Towards the end of the project, after other developers had their time taken away for new endeavors, I was tasked with finishing off a few key feature in the Secure Instructions Portal for LBS.",
      "The C#.NET based portal deals with account changes for customers on the LBS main website.",
    ],
    skills: ["c#", "dotnet"]
  },
  {
    title: "TV Licensing Call Handler System",
    url: "",
    date: "2017",
    pictureSrc: asset("images/projects/tv-licensing.png"),
    iconSrc: "",
    content: [
      "Looking for a more modern way to take the details of customers and make changes to accounts over the phone – and to make several processes easier. The catch was that they could not risk having any modification to the current unix spectrum based system.",
      "Working in a team of 9 as a senior developer I helped by working with Fuse to create a web service that wrapped around the unix spectrum application, before building the backend to a C#.NET application that communicated with the unix spectrum service and a web based front-end for agents to use.",
    ],
    skills: ["c#", "dotnet", "fuse"]
  },
  {
    title: "MatalanCard Service Replacement",
    url: "www.matalancard.co.uk",
    date: "2016",
    pictureSrc: asset("images/projects/matalan-card.png"),
    iconSrc: "",
    content: [
      "When the dated ESB went out of it’s support phase for the MatalanCard website, I was the lead developer, tasked with the creation of a new, drop-in replacement.",
      "Created in C# and integrating with the original codebase, I produced a like-for like that is now in service.",
    ],
    skills: ["c#", "dotnet"]
  },
  {
    title: "Saga Travel Buying and Loading Portal",
    url: "",
    date: "2016",
    pictureSrc: asset("images/projects/saga.png"),
    iconSrc: "",
    content: [
      "Working as a senior developer in a team of 5 to build a portal to manage the business to business contracts for a package holiday company.",
      "With a completely bespoke C# codebase to manage many aspects of their operation (and to in fact replace their current paper based system), my core responsibility was to build the overarching systems around many of the modules. One of which included the generation of PDF based contracts from the dataset, and passing those contracts into DocuSign for all of the parties to agree upon; before processing the results and updating the contracts.",
    ],
    skills: ["c#", "dotnet", "docusign"]
  },
  {
    title: "Job Alerts Email System",
    url: "www.bcllegal.com",
    date: "2016",
    pictureSrc: asset("images/projects/bcl-job-alerts.png"),
    iconSrc: "",
    content: [
      "As the sole developer in the re-write of a pre-existing Ruby codebase, using NodeJS, Typescript, and React; I built a command line application that had two parts.",
      "The first part was to import a list of candidates from an XML file (provided by a third party called IQX) into the database used by BCL Legal’s website.",
      "The second part was to match those candidates up to new jobs, and email those jobs to the candidates. ReactJS was used as the templating system for the emails.",
    ],
    skills: ["nodejs", "typescript", "react"]
  },
  {
    title: "AID Training Trainers App",
    url: "www.aid-training.co.uk",
    date: "2016",
    pictureSrc: asset("images/projects/aid-training.png"),
    iconSrc: "",
    content: [
      "A mobile application built for the trainers at AID Training to record the progress of a course and upload the results for the production of the course certifications. I was the lead developer in this project.",
      "There were two projects as part of this solution. The first was the mobile app; written for iOS and Android as a Cordova based app using Typescript and React as the templating engine.",
      "The second was a backend system designed to accept and print the certificates from the mobile app. Written as a Wordpress system with bespoke plugins to handle certificate generation and the abnormal data set.",
    ],
    skills: ["wordpress", "php", "react", "typescript", "cordova"]
  },
  {
    title: "Bahama Telecom Mobile App",
    url: "www.btcbahamas.com",
    date: "2015 - 2016",
    pictureSrc: asset("images/projects/btc-mobile.png"),
    iconSrc: "",
    content: [
      "Like the Web Portal, the mobile app was also inherited, and I was also the sole developer. Maintaining the Cordova codebase for both iOS and Android for two years.",
    ],
    skills: ["cordova", "typescript", "react"]
  },
  {
    title: "Bahama Telecom Customer Web Portal ",
    url: "www.btcbahamas.com",
    date: "2015",
    pictureSrc: asset("images/projects/btc-portal.png"),
    iconSrc: "",
    content: [
      "I was the sole developer on an inherited PHP, Yii based project; which was split into two parts.",
      "The first part being the web portal, which was a login for BTC customers to manage their accounts, bills, and to top up their mobile phones.",
      "The second part was the ADA layer, designed to be the primary interface between the database, payment services, the web portal and the mobile app.",
    ],
    skills: ["php", "yii"]
  },
  {
    title: "Royal Hunt",
    url: "www.videopoker.com",
    date: "2014",
    pictureSrc: asset("images/companies/royal-hunt.jpg"),
    iconSrc: "",
    content: [
      "I worked as a senior developer in a team of 10 building games for videopoker.com. I was personally tasked with the building of a game called Royal Hunt. Key features of this game included the additional hands of cards, and the animations of the suits of armor. The game was built on a node server (express based), and using FabricJS as the front-end graphics rendering library. ",
      "As we were working on top of a pre-existing template for the codebases, we were stuck with the limitations of FabricJS (an SVG rendering framework being used for the games), and a key part of my role was the optimization of the animations.",
    ],
    skills: ["typescript", "javascript", "fabricjs"]
  },
  {
    title: "Family Days Out",
    url: "www.familydaysout.com",
    date: "2014",
    pictureSrc: asset("images/projects/family-days-out.png"),
    iconSrc: "",
    content: [
      "I worked as head of a team of three to build a search tool for child-friendly attractions in the US, Canada and Australia. The site was built using the PHP based concrete5 CMS system over the course of a few months."
    ],
    skills: ["php", "concrete5"]
  },
  /*
  {
    title: "Helpdesk (VisionsLive)",
    url: "",
    date: "2013",
    pictureSrc: "",
    iconSrc: "",
    content: [
      ""
    ],
    skills: ["hesk", "typescript", "angular"]
  },
  {
    title: "NextGen Boards (VisionsLive)",
    url: "",
    date: "2013",
    pictureSrc: "",
    iconSrc: "",
    content: [
      ""
    ],
    skills: ["c#", "dotnet"]
  },
  {
    title: "Interactive Whiteboard (VisionsLive)",
    url: "",
    date: "2013",
    pictureSrc: "",
    iconSrc: "",
    content: [
      ""
    ],
    skills: []
  },
  {
    title: "Aptec IT Website",
    url: "",
    date: "2012",
    pictureSrc: "",
    iconSrc: "",
    content: [
      ""
    ],
    skills: []
  },

  {
    title: "University Catering",
    url: "",
    date: "2011 - 2013",
    pictureSrc: "",
    iconSrc: "",
    content: [
      ""
    ],
    skills: []
  },
  */
  {
    title: "Ocarina of Time 2D Map Project",
    url: "",
    date: "2008 - 2012",
    pictureSrc: asset("images/oot2d-map.png"),
    iconSrc: "",
    content: [
      "My first ever large scale project - born out of a passionate love for video games and The Legend of Zelda game series. ",
      "I meticulously mapped out and created every single area from the Ocarina of Time overworld in the 2D Style of A Link to the Past.",
      "I ended up getting featured in several major gaming  web news sites."
    ],
    skills: ["mspaint", "gimp"]
  },
  {
    title: "Rink Marshall (Rushden Roller Rink)",
    url: "",
    date: "",
    pictureSrc: asset("images/companies/rushden-roller-rink.jpg"),
    iconSrc: "",
    content: [
      "This was an amazing role. After attending a local skating rink for nearly 6 months me and my brother were offered a position of rink marshall to help out.",
      "This ended up becoming something far bigger, and two years in my father was the chairman of the club, and we were spending 16+ hours per week in our evenings and weekends teaching adults and children how to skate, running the roller hockey team, running the roller disco and just generally having the time of our lives ourselves.",
      "This wasn't just a job, but probably the best family bonding you could ask for, and brought us all together in a way that hadn't previously been possible.",
      "Like all good things, this came to an unfortunate end as both I and my brother left for our respective universities. However would likely still be doing this to this day had that not been the case."
    ],
    skills: []
  },
  /*
  {
    title: "IT Repair",
    url: "",
    date: "2008 - 2010",
    pictureSrc: "",
    iconSrc: "",
    content: [
      "I ran a small venture fixing computers in my local area. After handing out leaflets, setting up a phone line I was able to perform computer and laptop repairs (from screen repair, to spyware removal, tuning and bug fixes, to tutoring).",
      "During this time I served hundreds of happy customers and did not recieve a single complaint."
    ],
    skills: []
  },
  */
  {
    title: "Normal Global Logistics",
    url: "",
    date: "2006 - 2008",
    pictureSrc: asset("images/companies/norman-global.jpg"),
    iconSrc: "",
    content: [
      "Starting off as a warehouse worker in a logistics environment, I eventually moved into the office and became responsible for site backup and interacting with customers on the phones. I became the 'link' between the office and the warehouse, bridging the previous social gap and bringing the two together."
    ],
    skills: []
  },
  {
    title: "Alsace Fish and Chips",
    url: "",
    date: "2003 - 2006",
    pictureSrc: asset("images/companies/alsace-fish-and-chips.png"),
    iconSrc: "",
    content: [
      "One of my favourite jobs, working in a small Fish and Chips during my evenings and serving local customers.",
      "The job entailed the usual cooking, cleaning, mentally tallying orders and interacting with the customers.",
      "I loved this job purely because of the friendly staff I worked with and the fun challenge of working with a Canontese gentleman who spoke not a word of English. We were able to have some rather elaborate conversations by the end of the despite not speaking a word of each others language!"
    ],
    skills: []
  },
  {
    title: "Herald and Post",
    url: "",
    date: "2002 - 2003",
    pictureSrc: asset("images/companies/heraldpost.jpg"),
    iconSrc: "",
    content: [
      "A paper round I got to help give me some 'pocket money' as it were at the time. Every Wednesday night I would recieve several hundred newspapers and up to 15 leaflets / advertisments for each one. I would arrange the adverts, place them in the newspapers and then get ready to set off Thursday morning to deliver the papers to the houses in the local area."
    ],
    skills: []
  },
]
