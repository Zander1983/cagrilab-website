export type NewsItem = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  intro: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "integrated-living-lab-platform",
    date: "August 2026",
    category: "Platform Development",
    title: "CAgriLab moves towards an integrated Living Lab platform",
    excerpt:
      "CAgriLab is bringing its core technologies together, including the Digital Twin viewer and builder, data-space infrastructure and a container-based computing environment.",
    intro:
      "CAgriLab has entered a new phase of development as the project's individual technologies are brought together into a more integrated platform for Agricultural Living Labs.",
    sections: [
      {
        paragraphs: [
          "The project is developing digital infrastructure to help Living Labs manage, share and make better use of agricultural research data. Rather than creating a single data repository, CAgriLab combines technologies for data sharing, Digital Twins, data harmonisation, computation and intelligent search.",
          "By August 2026, work was progressing on integrating the project's Digital Twin viewer and builder with the Pontus-X infrastructure. Development was also underway to integrate a container-based computing environment, allowing computational tools to operate alongside data held within the platform.",
        ],
      },
      {
        heading: "From individual tools to a connected platform",
        paragraphs: [
          "Earlier phases of CAgriLab focused on developing and testing individual components. These include tools for publishing and harmonising Living Lab data, Digital Twin functionality, natural-language search and AI-supported agricultural measurements.",
          "Integration is an important next step because the value of these technologies increases when they can work together.",
          "For example, a Living Lab Digital Twin could provide structured information about an experiment and its local context, while harmonisation tools make the underlying data comparable and search tools help users discover relevant information.",
          "The project will continue integrating these components and applying them to practical Living Lab use cases as development progresses.",
        ],
      },
    ],
  },

  {
    slug: "natural-language-search",
    date: "July 2026",
    category: "Artificial Intelligence",
    title: "Natural-language search prototype developed for CAgriLab",
    excerpt:
      "A new prototype explores how users can discover Living Lab data using natural-language questions, making agricultural evidence easier to find without specialist knowledge of datasets or search systems.",
    intro:
      "CAgriLab has developed a prototype natural-language search capability designed to make information from Agricultural Living Labs easier to discover.",
    sections: [
      {
        paragraphs: [
          "Living Labs can produce large amounts of information from field experiments, soil measurements, farm-management activities and other research. Finding the relevant information can be difficult when users need to understand where particular datasets are stored or how they have been structured.",
          "Natural-language search offers a different approach: allowing users to search using ordinary language.",
          "By July 2026, CAgriLab had developed a natural-language search prototype, alongside prototype functionality for uploading and visualising Digital Twins. The project's wallet-free publishing and data-harmonisation tools had also reached production status.",
        ],
      },
      {
        heading: "Making Living Lab evidence easier to find",
        paragraphs: [
          "The longer-term opportunity is particularly relevant to regenerative agriculture.",
          "The effect of a regenerative practice can vary according to soil, climate, crop, management history and other local conditions. Finding evidence therefore involves more than searching for the name of a practice: researchers need to understand the context in which an experiment took place.",
          "CAgriLab is exploring how natural-language interfaces can make this growing body of Living Lab information easier to navigate.",
          'Instead of manually searching individual datasets, a future user might ask a question such as: "What experiments have tested cover crops under conditions similar to mine?"',
          "The prototype represents an important step towards making CAgriLab's underlying data and knowledge accessible without requiring users to understand the technical infrastructure behind it.",
        ],
      },
    ],
  },

  {
    slug: "hamk-ai-agricultural-measurement",
    date: "June 2026",
    category: "Artificial Intelligence",
    title: "HAMK develops AI tools for agricultural measurement",
    excerpt:
      "CAgriLab partner HAMK has developed prototype algorithms for measuring grass and clover ratios, estimating forage biomass and detecting cow activity, alongside work on soil structure and biodiversity assessment.",
    intro:
      "Researchers at HAMK are developing artificial-intelligence and computer-vision tools to support agricultural measurement as part of the CAgriLab project.",
    sections: [
      {
        paragraphs: [
          "Agricultural Living Labs depend on observations and measurements collected under real farming conditions. Some measurements, however, can be time-consuming to collect and analyse manually.",
          "CAgriLab is exploring how image analysis and machine learning can complement these methods.",
          "By June 2026, HAMK had developed prototype algorithms addressing three agricultural measurement tasks: estimating grass and clover ratios, estimating above-ground forage biomass in multi-species systems, and detecting cow activity.",
          "The work builds on earlier development involving image-based approaches to soil structure, biodiversity and vegetation assessment.",
        ],
      },
      {
        heading: "Turning field observations into usable data",
        paragraphs: [
          "These tools demonstrate how AI could help Living Labs generate useful measurements from imagery and other field data.",
          "The resulting information could ultimately form part of the wider digital record associated with a Living Lab, allowing measurements, experiments and outcomes to be brought together within CAgriLab.",
          "The work also provides practical examples of how computational tools can be combined with agricultural datasets within the wider CAgriLab environment.",
        ],
      },
    ],
  },

  {
    slug: "wallet-free-data-publishing",
    date: "March 2026",
    category: "Platform Development",
    title: "CAgriLab simplifies data publishing with wallet-free access",
    excerpt:
      "New functionality allows users to publish data through CAgriLab without requiring a blockchain wallet, removing an important barrier to using the platform.",
    intro:
      "CAgriLab has introduced a simpler way for users to publish data through its digital infrastructure without requiring a blockchain wallet.",
    sections: [
      {
        paragraphs: [
          "The project uses Pontus-X infrastructure to support data sharing and data sovereignty. While this provides mechanisms for controlling and exchanging data, requiring users to interact directly with blockchain technologies can also create an unnecessary barrier for researchers whose main objective is simply to publish or access agricultural information.",
          "By March 2026, functionality had been introduced allowing data to be published without requiring the user to have a wallet.",
        ],
      },
      {
        heading: "Making the technology easier to use",
        paragraphs: [
          "Reducing technical barriers is important if digital research infrastructure is to be useful outside specialist technology communities.",
          "Agricultural researchers and Living Lab participants should not need detailed knowledge of the underlying data-space or blockchain architecture simply to contribute their data.",
          "The wallet-free approach therefore represents an important usability improvement for CAgriLab.",
          "During the same period, the project's first system architecture was drafted as partners continued defining how Living Labs, Digital Twins and the wider CAgriLab infrastructure would interact.",
          "Development will continue with the goal of making increasingly sophisticated data infrastructure accessible through a straightforward user experience.",
        ],
      },
    ],
  },

  {
    slug: "cagrilab-portal-launched",
    date: "December 2025",
    category: "Project Milestone",
    title: "CAgriLab portal goes online",
    excerpt:
      "The CAgriLab portal is now operational, providing the digital foundation for sharing Living Lab data, algorithms and other resources across the project.",
    intro:
      "The CAgriLab project has brought its online portal into operation, establishing the digital foundation for sharing data and computational resources from Agricultural Living Labs.",
    sections: [
      {
        paragraphs: [
          "Living Labs generate valuable information through experiments conducted under real agricultural conditions. However, differences in data formats, infrastructure and access arrangements can make this information difficult to share and reuse across projects and countries.",
          "CAgriLab is developing a common digital environment to address these challenges.",
          "By December 2025, the project's Pontus-X portal was online and successfully tested, with functionality allowing data and algorithms to be published and accessed. PSNC had also deployed its own Pontus-X provider node as part of the project's infrastructure.",
        ],
      },
      {
        heading: "A foundation for CAgriLab",
        paragraphs: [
          "The portal provides a foundation on which additional CAgriLab capabilities can be built.",
          "These include harmonisation of agricultural data, Living Lab Digital Twins, computational tools and new approaches to discovering information held across the platform.",
          "The objective is not simply to collect more agricultural data. CAgriLab is investigating how information from different Living Labs can be made easier to discover, understand, compare and reuse.",
          "As development continues, the platform will increasingly be demonstrated using real Living Lab data and practical use cases.",
        ],
      },
    ],
  },

  {
    slug: "living-lab-data-harmonisation",
    date: "October 2025",
    category: "Data",
    title: "CAgriLab develops tools to harmonise Living Lab data",
    excerpt:
      "New harmonisation tools are being developed to make agricultural data from different Living Labs easier to combine, compare and reuse, including work based on the GLOSIS standard.",
    intro:
      "CAgriLab partners are developing data-harmonisation tools to make information generated by different Agricultural Living Labs easier to combine and reuse.",
    sections: [
      {
        paragraphs: [
          "Agricultural research produces highly diverse datasets. Individual Living Labs may use different sensors, terminology, file structures and data models even when measuring similar characteristics.",
          "This creates a basic interoperability problem: having access to multiple datasets does not necessarily mean they can easily be compared or analysed together.",
          "CAgriLab is addressing this challenge through the development of common data structures and harmonisation tools.",
          "By October 2025, the project had developed harmonisation functionality using GLOSIS, the Global Soil Information System, as a foundation for standardising soil information.",
        ],
      },
      {
        heading: "Why harmonisation matters",
        paragraphs: [
          "Making data comparable is particularly important when studying regenerative agriculture.",
          "Results observed at one location may depend on soil conditions, climate, crop type, previous management and experimental design. Researchers therefore need both the measured outcome and sufficient contextual information to determine whether evidence from another site is relevant.",
          "A common structure makes it easier to connect these different pieces of information.",
          "During the same period, HAMK completed field-season data collection covering forage, soil and biodiversity measurements, providing real Living Lab information with which CAgriLab's wider data infrastructure could be developed and tested.",
          "The harmonisation work provides one of the foundations for CAgriLab's broader goal: enabling evidence generated across different Living Labs to become more discoverable, comparable and reusable.",
        ],
      },
    ],
  },
];

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}