
export const projects = [
  // =========================================================
  // PROFESSIONAL PROJECTS
  // =========================================================

  {
    slug: 'nasdaq-ems-trading-platform',
    name: 'Nasdaq — EMS / Trading Data Platform',
    category: 'Professional project',
    summary:
      'Backend and UI engineering for a real-time financial-market technology platform involving high-volume trading data and distributed application functionality.',

    technologies: [
      'Go',
      'JavaScript',
      'REST APIs',
      'Twig',
      'SCSS',
      'Drupal',
      'YAML',
      'Distributed Systems',
    ],

    areas: [
      'Real-time Data',
      'Backend Services',
      'REST APIs',
      'Distributed Systems',
      'UI Development',
      'Production Support',
    ],

    overview:
      'Current client assignment at Nasdaq, contributing to EMS and trading-data platform functionality. Work includes backend services, REST APIs, UI functionality, troubleshooting, testing, and production-oriented engineering.',

    problem:
      'Real-time financial applications require reliable backend services, efficient data handling, responsive interfaces, and careful troubleshooting across distributed application components.',

    solution:
      'Contributed to backend services and REST APIs while also working on UI functionality using JavaScript, Twig, SCSS, YAML, and Drupal. Supported application testing, issue resolution, and environment-level troubleshooting.',

    architecture: [
      {
        label: 'UI Layer',
        desc: 'Web functionality implemented using JavaScript, Twig, SCSS, and Drupal.',
      },
      {
        label: 'Backend Services',
        desc: 'Backend services responsible for application and trading-data functionality.',
      },
      {
        label: 'REST APIs',
        desc: 'APIs supporting communication between application components.',
      },
      {
        label: 'Distributed Components',
        desc: 'Multiple application components working together in a real-time financial technology environment.',
      },
    ],

    decisions: [
      'Follow existing platform architecture and service boundaries.',
      'Validate changes across local, Brown, and QC environments.',
      'Use structured troubleshooting and testing to identify application issues.',
      'Keep UI and backend changes aligned with existing platform conventions.',
    ],

    challenges: [
      'Working within a large real-time financial technology platform.',
      'Understanding existing application architecture and legacy components.',
      'Troubleshooting issues across multiple environments.',
      'Balancing backend responsibilities with UI development.',
    ],

    performance: [
      'Contributed to reliability and performance-focused backend functionality.',
      'Performed environment-level testing and troubleshooting for application changes.',
    ],

    learned: [
      'Large enterprise platforms require strong understanding of existing architecture before making changes.',
      'Production-quality engineering requires consistent testing across environments.',
      'Working across backend and UI layers provides a broader understanding of end-to-end application behaviour.',
    ],
  },

  {
    slug: 'healthcare-ris-platform',
    name: 'RADSpa — Healthcare RIS / PACS Platform',
    category: 'Professional project',
    summary:
      'Backend engineering for a healthcare radiology workflow platform using Spring Boot microservices, asynchronous messaging, secure APIs, healthcare interoperability, and observability.',

    technologies: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'RabbitMQ',
      'MQTT',
      'FHIR',
      'ABHA',
      'Spring Security',
      'Keycloak',
      'Elasticsearch',
      'Kibana',
      'Azure DevOps',
    ],

    areas: [
      'Healthcare Systems',
      'Microservices',
      'Asynchronous Processing',
      'API Security',
      'Interoperability',
      'Observability',
    ],

    overview:
      'Backend engineering for a radiology workflow platform supporting healthcare workflows across 7+ countries. Confidential client and implementation details are intentionally excluded.',

    problem:
      'Healthcare workflow platforms require secure access, reliable service communication, interoperability with external systems, and strong observability across distributed services.',

    solution:
      'Developed Spring Boot microservices and REST APIs with RabbitMQ-based asynchronous processing, MQTT communication, FHIR and ABHA integrations, Keycloak and Spring Security, and Elasticsearch/Kibana for search and observability.',

    architecture: [
      {
        label: 'Client Applications',
        desc: 'Applications used by healthcare staff to interact with platform workflows.',
      },
      {
        label: 'Spring Boot Services',
        desc: 'Microservices implementing healthcare workflow functionality.',
      },
      {
        label: 'RabbitMQ',
        desc: 'Supports asynchronous communication and background processing.',
      },
      {
        label: 'Keycloak',
        desc: 'Centralized identity and access management.',
      },
      {
        label: 'Elasticsearch',
        desc: 'Search and indexed application data.',
      },
      {
        label: 'Kibana',
        desc: 'Operational dashboards and observability.',
      },
      {
        label: 'FHIR / ABHA',
        desc: 'External healthcare interoperability integrations.',
      },
    ],

    decisions: [
      'Use asynchronous messaging for suitable workflow processing.',
      'Centralize authentication and authorization through Keycloak.',
      'Use Elasticsearch for search and applicable indexed workloads.',
      'Separate external healthcare integrations from core business services.',
    ],

    challenges: [
      'Working with distributed healthcare workflows.',
      'Maintaining secure access to application data.',
      'Integrating with external healthcare systems.',
      'Troubleshooting issues across distributed services and infrastructure.',
    ],

    performance: [
      'Used asynchronous processing to reduce direct coupling between workflow components.',
      'Used Elasticsearch for efficient indexed search and operational use cases.',
    ],

    learned: [
      'Security, interoperability, and observability are critical concerns in distributed healthcare applications.',
      'Clear service boundaries make complex integrations easier to maintain.',
    ],
  },

  {
    slug: 'manufacturing-mes',
    name: 'MES — Manufacturing Execution System',
    category: 'Professional project',
    summary:
      'Backend engineering for a manufacturing execution system involving Spring Boot microservices, ERP integration, API gateway management, authentication, and large-data processing.',

    technologies: [
      'Java',
      'J2EE',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'MySQL',
      'MongoDB',
      'JDBC',
      'Tyk',
      'Keycloak',
      'Docker',
      'Azure',
    ],

    areas: [
      'Microservices',
      'ERP Integration',
      'API Gateway',
      'Authentication',
      'Data Processing',
      'Performance Optimization',
    ],

    overview:
      'Backend engineering for a manufacturing execution system supporting manufacturing workflows and ERP integration. Confidential implementation details are intentionally omitted.',

    problem:
      'Manufacturing applications often process large datasets while integrating multiple services and external enterprise systems.',

    solution:
      'Developed Spring Boot microservices and REST APIs, optimized Bill of Material processing, implemented Tyk API Gateway and Keycloak, and used Docker for containerized application delivery.',

    architecture: [
      {
        label: 'Client / Dashboard',
        desc: 'Interfaces used for manufacturing workflows and operational views.',
      },
      {
        label: 'Tyk API Gateway',
        desc: 'Central API routing and gateway-level policies.',
      },
      {
        label: 'Keycloak',
        desc: 'Authentication and authorization.',
      },
      {
        label: 'Spring Boot Services',
        desc: 'Backend microservices implementing domain functionality.',
      },
      {
        label: 'Database Layer',
        desc: 'MySQL and MongoDB for application persistence.',
      },
    ],

    decisions: [
      'Centralize API gateway concerns through Tyk.',
      'Use Keycloak for centralized authentication and authorization.',
      'Use appropriate database technologies based on workload requirements.',
      'Optimize large-data Bill of Material processing using algorithmic improvements.',
      'Use Docker for consistent application environments.',
    ],

    challenges: [
      'Processing large Bill of Material datasets efficiently.',
      'Coordinating authentication and access policies across services.',
      'Integrating backend services with ERP workflows.',
      'Supporting deployment and troubleshooting across environments.',
    ],

    performance: [
      'Optimized Bill of Material processing to improve efficiency for large datasets.',
    ],

    learned: [
      'Algorithmic complexity becomes increasingly important as backend data volumes grow.',
      'API gateways and centralized identity services simplify cross-cutting concerns in microservice architectures.',
    ],
  },

  {
    slug: 'assist-construction-qaqc',
    name: 'Assist — Construction QA/QC Platform',
    category: 'Professional project',
    summary:
      'Backend engineering for a multi-tenant construction QA/QC platform with MongoDB sharding, Kubernetes autoscaling, performance profiling, and CI/CD.',

    technologies: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'MongoDB',
      'MongoDB Sharding',
      'VisualVM',
      'Kubernetes',
      'Docker',
      'Azure DevOps',
    ],

    areas: [
      'Multi-tenancy',
      'Database Optimization',
      'Performance Engineering',
      'Kubernetes',
      'Autoscaling',
      'CI/CD',
    ],

    overview:
      'Backend engineering for a multi-tenant enterprise construction QA/QC platform. The project involved database optimization, performance analysis, Kubernetes deployment, and production support.',

    problem:
      'Multi-tenant enterprise applications need to handle increasing data volumes while maintaining query performance and scalable application workloads.',

    solution:
      'Developed Spring Boot microservices, optimized sharded MongoDB queries, performed CPU/thread/memory profiling with VisualVM, and deployed services on Kubernetes with autoscaling.',

    architecture: [
      {
        label: 'Client Applications',
        desc: 'Web applications supporting construction QA/QC workflows.',
      },
      {
        label: 'Spring Boot Services',
        desc: 'Backend microservices implementing application workflows.',
      },
      {
        label: 'MongoDB',
        desc: 'Primary persistence layer supporting multi-tenant application data.',
      },
      {
        label: 'MongoDB Sharding',
        desc: 'Supports horizontal scaling of database workloads.',
      },
      {
        label: 'Kubernetes',
        desc: 'Container orchestration and scalable service deployment.',
      },
      {
        label: 'Azure DevOps',
        desc: 'CI/CD pipelines supporting deployment and delivery.',
      },
    ],

    decisions: [
      'Use database sharding to support horizontal data scalability.',
      'Use profiling tools to identify application-level bottlenecks.',
      'Use Kubernetes autoscaling for variable application workloads.',
      'Automate deployment through CI/CD pipelines.',
    ],

    challenges: [
      'Maintaining query performance as data volume increased.',
      'Identifying CPU, thread, and memory bottlenecks.',
      'Supporting scalable workloads in a multi-tenant environment.',
      'Troubleshooting production issues across application and infrastructure layers.',
    ],

    performance: [
      'Used VisualVM CPU, thread, and memory profiling.',
      'Improved application performance by approximately 30%.',
      'Optimized MongoDB queries and database operations for improved performance and scalability.',
    ],

    learned: [
      'Database design and deployment architecture have a direct impact on application scalability.',
      'Profiling provides concrete evidence for performance optimization decisions.',
      'Application and infrastructure scaling need to be considered together.',
    ],
  },

  {
    slug: 'solid-waste-management',
    name: 'Solid Waste Management System',
    category: 'Professional project',
    summary:
      'Backend development for an industrial waste tracking and management application using Java, Spring Boot, REST APIs, and Firebase Authentication.',

    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Firebase Authentication',
    ],

    areas: [
      'Backend Development',
      'REST APIs',
      'Authentication',
      'Application Maintenance',
    ],

    overview:
      'Backend development for an industrial waste tracking and management application.',

    problem:
      'The application required backend workflows for tracking industrial waste along with secure user authentication.',

    solution:
      'Developed Spring Boot REST APIs and backend workflows and integrated Firebase Authentication for user authentication.',

    architecture: [
      {
        label: 'Client',
        desc: 'Application interface used for waste-management workflows.',
      },
      {
        label: 'Spring Boot API',
        desc: 'Backend REST APIs implementing application functionality.',
      },
      {
        label: 'Firebase Authentication',
        desc: 'Authentication service for application users.',
      },
    ],

    decisions: [
      'Use Spring Boot for backend REST API development.',
      'Use Firebase Authentication rather than implementing authentication from scratch.',
    ],

    challenges: [
      'Implementing backend workflows and resolving application issues.',
      'Supporting testing and maintenance activities.',
    ],

    performance: [
      'Focused on reliable API implementation and application maintenance.',
    ],

    learned: [
      'External authentication services can simplify identity management for application development.',
      'Production support and debugging are important parts of backend engineering.',
    ],
  },

  // =========================================================
  // PERSONAL PROJECTS
  // =========================================================

  {
    slug: 'stock-research-platform',
    name: 'Stock Research Platform',
    category: 'Personal project',
    summary:
      'A full-stack stock research application with a React frontend and Java/Spring Boot backend for market-data processing, caching, and cloud deployment.',

    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'React',
      'MongoDB',
      'Redis',
      'Docker',
      'AWS',
      'GitHub Actions',
      'Nginx',
    ],

    areas: [
      'Market Data',
      'REST APIs',
      'Caching',
      'Data Processing',
      'Full Stack Development',
      'Cloud Deployment',
    ],

    overview:
      'A personal full-stack application exploring backend architecture, market-data processing, caching, and cloud deployment.',

    problem:
      'Repeated requests to external market-data providers can increase latency and consume provider quotas unnecessarily.',

    solution:
      'Built a React frontend backed by Spring Boot REST APIs. Frequently requested data is cached in Redis while longer-lived data is persisted in MongoDB.',

    architecture: [
      {
        label: 'React',
        desc: 'Frontend application providing research and market-data views.',
      },
      {
        label: 'Spring Boot API',
        desc: 'Backend REST API responsible for business logic and data access.',
      },
      {
        label: 'Redis',
        desc: 'Cache for frequently accessed data.',
      },
      {
        label: 'MongoDB',
        desc: 'Persistent application and research data.',
      },
      {
        label: 'External Market Data API',
        desc: 'Provides market and historical data consumed by the backend.',
      },
    ],

    decisions: [
      'Keep external provider credentials and integration logic on the backend.',
      'Use Redis for frequently accessed data.',
      'Separate cache storage from durable persistence.',
      'Containerize the application for repeatable deployment.',
    ],

    challenges: [
      'Managing external API limits.',
      'Choosing appropriate cache expiry strategies.',
      'Maintaining predictable behaviour between cached and persisted data.',
    ],

    performance: [
      'Redis caching reduces repeated backend and external provider requests.',
    ],

    learned: [
      'Cache strategy must be designed together with data freshness requirements.',
      'External API constraints can influence application architecture.',
    ],
  },

  {
    slug: 'azure-service-bus-event-driven',
    name: 'Azure Service Bus Event-Driven Application',
    category: 'Personal project',
    summary:
      'An event-driven backend application demonstrating asynchronous processing, queues, producers, consumers, and decoupled service communication using Azure Service Bus.',

    technologies: [
      'Java',
      'Spring Boot',
      'Azure Service Bus',
      'REST APIs',
      'Docker',
      'Azure',
    ],

    areas: [
      'Event-Driven Architecture',
      'Asynchronous Processing',
      'Message Queues',
      'Distributed Systems',
    ],

    overview:
      'A backend application built to explore event-driven architecture and asynchronous communication using Azure Service Bus.',

    problem:
      'Synchronous service communication can create tight coupling and require downstream processing to happen within the original request lifecycle.',

    solution:
      'Used Azure Service Bus queues to decouple producers and consumers. Producers publish events while consumers process them asynchronously.',

    architecture: [
      {
        label: 'Producer',
        desc: 'Publishes application events to Azure Service Bus.',
      },
      {
        label: 'Azure Service Bus',
        desc: 'Provides asynchronous message delivery through queues.',
      },
      {
        label: 'Consumer',
        desc: 'Processes messages independently from the producer.',
      },
      {
        label: 'Spring Boot',
        desc: 'Provides application services and messaging integration.',
      },
    ],

    decisions: [
      'Use asynchronous messaging where immediate downstream processing is not required.',
      'Keep producers and consumers loosely coupled.',
      'Use managed messaging infrastructure for reliable event delivery.',
    ],

    challenges: [
      'Designing reliable asynchronous processing.',
      'Handling message-processing failures.',
      'Understanding message delivery and consumer behaviour.',
    ],

    performance: [
      'Asynchronous processing allows producers to continue without waiting for downstream processing.',
    ],

    learned: [
      'Messaging can reduce service coupling and improve system resilience.',
      'Distributed systems require explicit thinking about failures and message processing.',
    ],
  },

  {
    slug: 'performance-engineering-lab',
    name: 'Performance Engineering Lab',
    category: 'Personal project',
    summary:
      'A hands-on engineering laboratory for reproducing backend performance incidents and measuring database, application, caching, load-testing, and observability improvements.',

    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'JPA',
      'MySQL',
      'Redis',
      'k6',
      'Prometheus',
      'Grafana',
      'Docker',
    ],

    areas: [
      'Database Optimization',
      'JPA/Hibernate',
      'Load Testing',
      'Performance Engineering',
      'Caching',
      'Observability',
    ],

    overview:
      'A reproducible backend performance laboratory where each experiment establishes a baseline, identifies a bottleneck, applies an optimization, and measures the result.',

    problem:
      'Performance advice is often theoretical. The goal of this project is to reproduce realistic backend incidents and validate optimizations using measurable workloads.',

    solution:
      'Built a Spring Boot and MySQL application with large datasets, k6 workloads, Prometheus metrics, and Grafana dashboards. Experiments cover database indexing, N+1 queries, caching, and application performance.',

    architecture: [
      {
        label: 'k6',
        desc: 'Generates controlled workloads and captures API performance metrics.',
      },
      {
        label: 'Spring Boot',
        desc: 'Backend service used as the system under test.',
      },
      {
        label: 'Hibernate / JPA',
        desc: 'Persistence layer used to reproduce ORM-related performance issues.',
      },
      {
        label: 'MySQL',
        desc: 'Database used for large-scale query and indexing experiments.',
      },
      {
        label: 'Prometheus',
        desc: 'Collects application and performance metrics.',
      },
      {
        label: 'Grafana',
        desc: 'Visualizes latency, throughput, and JVM/application metrics.',
      },
      {
        label: 'Docker',
        desc: 'Provides a repeatable local environment.',
      },
    ],

    decisions: [
      'Measure a baseline before applying an optimization.',
      'Use EXPLAIN to investigate database query behaviour.',
      'Change one major variable at a time.',
      'Use realistic load profiles instead of single-request benchmarks.',
      'Document each performance incident independently.',
    ],

    challenges: [
      'Generating sufficiently large datasets.',
      'Producing stable and comparable load-test results.',
      'Separating database, application, and infrastructure bottlenecks.',
    ],

    performance: [
      'Reduced stock-history API latency from a high-latency baseline to single-digit millisecond p95 after adding an appropriate composite database index.',
      'Normal-load testing demonstrated approximately 8ms p95 latency after the indexing optimization.',
      'Heavy-load testing included traffic stages up to 500 requests/second.',
    ],

    learned: [
      'Performance optimization should begin with measurement rather than assumptions.',
      'Database access patterns can dominate API performance.',
      'Load testing and observability are essential for understanding system behaviour.',
    ],
  },
]
