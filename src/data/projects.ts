import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Tapper",
    description:
      "Integrated SaaS platform for food service businesses including restaurants, pizzerias, cafes, and bars. Combines a digital menu with QR code ordering, desktop and mobile POS with offline support, delivery management, and an AI-powered WhatsApp chatbot for automated customer service. Built on a distributed microservices architecture serving hundreds of establishments across Brazil.",
    technologies: ["Rust", "VueJS", "NodeJS", "Golang", "Python", "GCP"],
    url: "https://tapper.com.br/",
  },
  {
    name: "TxPipe",
    description:
      "Open-source developer tools for the Cardano blockchain ecosystem. Built Oura, a pipeline framework for processing on-chain data, and Demeter, an event-driven decentralized cloud platform offering blockchain infrastructure, services, and hosting on Kubernetes.",
    technologies: ["Rust", "K8S"],
    url: "https://txpipe.io/",
  },
  {
    name: "Cardano Warriors",
    description:
      "NFT collection and RPG game built on the Cardano blockchain, one of the first of its kind on the network. Architected the distributed platform for minting, on-chain asset management, an interactive game map, and a hybrid on-chain/off-chain marketplace. The critical path leveraged event-driven architecture with RabbitMQ, and the game launched as a real-time beta on Unity.",
    technologies: ["Rust", "Nodejs", "VueJS", "C#", "AWS"],
    url: "https://cardanowarriors.io/",
  },
  {
    name: "Batatais Food",
    description:
      "Business management platform for small and medium restaurants, featuring a digital menu, mobile and desktop POS, local marketplace, and an admin panel. Built on a distributed architecture with 20+ microservices using NodeJS, Golang, and C#, serving over 200 clients with B2B white-label capabilities for resellers.",
    technologies: ["VueJS", "NodeJS", "Golang", "C#", "GCP"],
    url: "https://www.batataisfood.com.br/",
  },
  {
    name: "Horus people flow counter",
    description:
      "Computer vision system that counts customer foot traffic in retail stores using security camera feeds. Built a neural network detection pipeline with OpenCV and TensorFlow, feeding data into Google BigQuery for cross-referencing with sales metrics and generating insights on campaign performance and peak traffic patterns.",
    technologies: ["OpenCV", "TensorFlow", "Python"],
  },
  {
    name: "Chromecast Discovery",
    description:
      "In-store sales tool that enabled retail staff to stream product demos to large screens via Chromecast. Each store ran a local Python service managing all Chromecast devices through an HTTP API with mDNS auto-discovery, plus an admin panel for configuring idle-mode campaign media by store section.",
    technologies: ["Python"],
  },
  {
    name: "Remote seller",
    description:
      "Remote selling platform developed for Magazine Luiza during the COVID-19 pandemic, enabling customers to connect with salespeople at their nearest virtual store for assisted purchases. Built with NuxtJS and NodeJS.",
    technologies: ["VueJS", "NodeJS"],
    url: "https://lojas.magazineluiza.com.br/nossos-vendedores",
  },
  {
    name: "Maga Chat",
    description:
      "WhatsApp-based sales channel for Magazine Luiza that centralized customer conversations from a single business number and routed them to individual sellers. Built an integration layer on NodeJS with direct WhatsApp Business API connectivity.",
    technologies: ["NodeJS", "MongoDB"],
  },
];
