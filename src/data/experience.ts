import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Tapper",
    role: "Software Engineer",
    startYear: 2025,
    description:
      "Building an integrated business management platform for food service establishments, combining digital menus, POS systems, delivery management, and AI-powered WhatsApp chatbot into a single solution.",
  },
  {
    company: "TxPipe",
    role: "Software Engineer",
    startYear: 2023,
    endYear: 2025,
    description:
      "Developed open-source tools in Rust for the Cardano blockchain, including pipeline management for processing on-chain data (Oura) and Demeter, an event-driven decentralized cloud platform built from scratch to offer blockchain tools, services and hosting. Demeter involved developing infrastructure extensions (CRDs) for Kubernetes and custom reverse proxies (TLS, TCP, HTTP/S, WS, GRPC) to validate requests and collect usage metrics. Worked primarily with Rust and hexagonal architecture (Fabric).",
  },
  {
    company: "Cardano Warriors",
    role: "Software Engineer (Co-Founder/Tech Lead)",
    startYear: 2021,
    endYear: 2024,
    description:
      "Co-founded and led the tech team of one of the first NFT collections minted on Cardano, built as an RPG game. Defined the architecture, managed teams and oversaw 20 designers and developers. Built a distributed platform to manage game assets (off-chain and on-chain), an interactive game map using image processing and Leaflet, and a minting engine integrated with Cardano. The critical path used event-driven architecture with RabbitMQ. Developed on-chain data pipelines and secured quest results with symmetric and asymmetric cryptography. Successfully launched a real-time beta using Unity.",
  },
  {
    company: "Orionlabs/Batatais Food",
    role: "Software Engineer (Co-Founder/Tech Lead)",
    startYear: 2021,
    endYear: 2023,
    description:
      "Initiated the concept, defined the architecture and led the development team. Provided advanced technology solutions to small and medium-sized restaurants, helping them automate operations and enhance the food sales experience. The platform includes an admin panel, mobile POS, desktop POS, digital e-commerce menu, and a local marketplace. Built with a scalable microservices architecture using NodeJS, VueJS, C#, Dart, Python and Golang.",
  },
  {
    company: "Luizalabs",
    role: "Software Developer",
    startYear: 2019,
    endYear: 2021,
    description:
      "Worked at the tech team behind Magalu, one of Brazil's largest retailers. Developed Horus, a people flow counter using OpenCV and TensorFlow with OpenVino models to detect customers from security cameras, generating heatmaps for the marketing team. Built a Chromecast-based system for streaming targeted campaigns to in-store TVs. During COVID, developed a remote selling platform connecting customers to their nearest store's salespeople, and a chat platform integrating WhatsApp Business with each salesperson's mobile POS.",
  },
  {
    company: "Idealeware/Citel",
    role: "Software Developer",
    startYear: 2018,
    endYear: 2019,
    description:
      "Developed a scalable and distributed e-commerce platform using .NET Core (C#) with extensive integrations with major Brazilian players including payment gateways, marketplace integrations, and postal services. The platform used Cassandra as the main database, Apache Solr as the search engine, and a microservices architecture.",
  },
  {
    company: "Implementos Agricolas Marispan",
    role: "Software Developer",
    startYear: 2015,
    endYear: 2018,
    description:
      "Started career in the IT sector at an agricultural implements manufacturer, helping with network architecture and developing systems to help engineers control projects and the manufacturing tools sector.",
  },
];
