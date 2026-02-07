import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "TxPipe",
    description:
      "Open-source software for a decentralized world. We believe that blockchain adoption can be accelerated by improving developer experience. We develop blockchain tools, leveraging the open-source community and its methodologies.",
    technologies: ["Rust", "K8S"],
    url: "https://txpipe.io/",
  },
  {
    name: "Cardano Warriors",
    description:
      "Cardano Warriors emerged with the goal of creating an exceptional NFT minting experience on the Cardano Blockchain. After the success of the initial launch, we decided to embark on the development of an immersive RPG game with native integration into the Cardano Blockchain. To achieve this, we initiated the development of a platform that enables the purchase of land within the world of Cardano Warriors. Following the successful launch of the platform, we introduced the first gameplay experience called Time Attack. From that stage onward, we focused our efforts on enhancing and developing the platform, creating a new minting engine and transaction management system specifically tailored for Cardano. We utilized Rust to implement the services, rabbitMQ for communication and messaging, Redis for cache storage, and Postgresql as the transactional database. The initial version of the game was built on the Unity Engine. After completing this revamp, our final major delivery was the implementation of a hybrid on-chain/off-chain store and inventory. In this store, players had the opportunity to acquire a game item called Stardust, a magical crystal that, when activated, releases randomly generated items with varying levels of rarity.",
    technologies: ["Rust", "Nodejs", "VueJS", "C#", "AWS"],
    url: "https://cardanowarriors.io/",
  },
  {
    name: "Batatais Food",
    description:
      "The Batatais Food is an application that runs on top of the Orionlabs platform. The platform development involves a distributed architecture with over 20 services, including Core API, Backend API, Socket Server, and Print Server. These services were developed using NodeJS with MongoDB, Golang, and C#. The desktop Point of Sale (POS) and Print Client were developed using C# Windows Form, while the mobile POS and Marketplace APP were developed using Flutter. The administrative panels were built using VueJS, and finally, the ecommerce section, which required good SEO, was developed using NuxtJS. Currently, the platform has over 200 clients. In addition to B2C functionality, the platform also offers B2B capabilities for partners who wish to replicate our use case and resell our systems under their own brand.",
    technologies: ["VueJS", "NodeJS", "Golang", "C#", "GCP"],
    url: "https://www.batataisfood.com.br/",
  },
  {
    name: "Horus people flow counter",
    description:
      "Horus was created with the aim of counting the flow of people in physical stores. Therefore, a neural network model was used to detect people entering and exiting the stores, utilizing the store's security cameras with OpenCV to manipulate the frame. Thus, the input data of people was sent to a database, which was later transferred to Google's DataLake for analysis and cross-referencing with other data, such as sales data, generating analyses of promotional campaign results conducted in physical stores, as well as determining peak days or hours of store traffic, among other insights.",
    technologies: ["OpenCV", "TensorFlow", "Python"],
  },
  {
    name: "Chromecast Discovery",
    description:
      "The Chromecast Discovery was developed with the purpose of assisting salespeople in physical stores to demonstrate products on larger screens through a sales application. In addition to enabling product streaming, the device also featured an idle function that activated after a few minutes of inactivity, displaying campaign media on the screens. Each physical store had a Linux server running an internal Python service responsible for managing all the Chromecasts in the store, allowing sales applications to transmit via an HTTP API. The server also operated a Multicast DNS service, eliminating the need for server IP configuration in the sales applications. To configure the campaigns to be displayed during idle times, an administrative panel was created, enabling the configuration of images and videos to be shown in each section of the store.",
    technologies: ["Python"],
  },
  {
    name: "Remote seller",
    description:
      "The Remote Salesperson was created to enable salespeople to work remotely during the Covid-19 pandemic. This allowed customers to access the nearest virtual store and choose a salesperson for assistance and making a purchase. The solution was developed using NuxtJS for the front-end and NodeJS for the Web API.",
    technologies: ["VueJS", "NodeJS"],
    url: "https://lojas.magazineluiza.com.br/nossos-vendedores",
  },
  {
    name: "Maga Chat",
    description:
      "Maga Chat was created to centralize conversations from a single WhatsApp number to multiple sellers. A single WhatsApp number was provided for customers to contact the sellers, so an API called Kraken was developed to validate the idea of sales through WhatsApp. This API was written in NodeJS and had direct integration with the WhatsApp Business service.",
    technologies: ["NodeJS", "MongoDB"],
  },
];
