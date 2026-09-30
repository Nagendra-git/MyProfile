export const experiments = [
  {
    id: 'sql-index',
    name: 'Missing Composite Index',
    tagline: 'Diagnose and fix slow database queries',
    status: 'Completed',

    problem:
      'Why does a stock-history API become slow when querying a large stock-price table by symbol and trade date?',

    approach:
      'Generate a large dataset, benchmark the endpoint with k6, inspect the MySQL EXPLAIN plan, identify the full-table scan and filesort, add a composite index, and repeat the same workload.',

    result:
      'The query changed from a full-table scan to indexed access. Under the normal load profile, the optimized endpoint achieved approximately 8ms p95 latency.',

    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'JPA',
      'MySQL',
      'k6',
    ],

    areas: [
      'Composite Indexing',
      'EXPLAIN',
      'Query Optimization',
      'Load Testing',
    ],
  },

  {
    id: 'n-plus-one',
    name: 'JPA N+1 Query',
    tagline: 'Find hidden database calls in ORM code',
    status: 'In Progress',

    problem:
      'Why can an apparently simple JPA endpoint generate many additional database queries when related entities are accessed?',

    approach:
      'Measure the endpoint, inspect Hibernate SQL output, identify repeated queries caused by lazy relationships, and compare different fetching strategies while measuring query count and response latency.',

    result:
      'Experiment focuses on identifying N+1 behaviour and comparing ORM fetching strategies. Final benchmark results will be added after repeatable measurements are completed.',

    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'JPA',
      'MySQL',
      'k6',
    ],

    areas: [
      'N+1 Queries',
      'ORM Optimization',
      'Lazy Loading',
      'Query Performance',
    ],
  },

  {
    id: 'jvm',
    name: 'JVM Performance',
    tagline: 'Understand memory, GC and threads',
    status: 'Planned',

    problem:
      'How do heap configuration, garbage collection, and thread-pool settings affect a Spring Boot service under load?',

    approach:
      'Run the same application with controlled JVM configurations, apply identical workloads, and compare heap usage, garbage-collection behaviour, CPU utilization, thread counts, and latency.',

    result:
      'Benchmark results will be added after controlled JVM experiments are completed.',

    technologies: [
      'Java',
      'Spring Boot',
      'JVM',
      'k6',
      'Prometheus',
      'Grafana',
    ],

    areas: [
      'Garbage Collection',
      'Heap Memory',
      'Thread Pools',
      'JVM Tuning',
    ],
  },

  {
    id: 'redis',
    name: 'Redis Caching',
    tagline: 'Measure cache impact and expiration strategies',
    status: 'Planned',

    problem:
      'When does caching improve API performance, and how should cache expiration be selected without serving excessively stale data?',

    approach:
      'Compare the same read-heavy workload with no cache and cache-aside strategies using different TTL values. Measure latency, throughput, cache hit behaviour, and database load.',

    result:
      'Benchmark results will be added after controlled caching experiments are completed.',

    technologies: [
      'Java',
      'Spring Boot',
      'Redis',
      'MySQL',
      'k6',
      'Grafana',
    ],

    areas: [
      'Caching',
      'Cache-Aside',
      'TTL',
      'Cache Hit Rate',
    ],
  },

  {
    id: 'kafka',
    name: 'Event Processing',
    tagline: 'Understand partitions, consumers and retries',
    status: 'Planned',

    problem:
      'How do partitions, consumer groups, ordering, retries, and consumer throughput affect event-processing systems under burst traffic?',

    approach:
      'Produce controlled event bursts and compare different partition counts and consumer configurations while observing consumer lag, throughput, ordering, and failed-message behaviour.',

    result:
      'Benchmark results will be added after controlled event-processing experiments are completed.',

    technologies: [
      'Kafka',
      'RabbitMQ',
      'Azure Service Bus',
      'Spring Boot',
      'Grafana',
    ],

    areas: [
      'Event-Driven Architecture',
      'Consumer Groups',
      'Partitions',
      'Retries',
      'Consumer Lag',
    ],
  },

  {
    id: 'docker',
    name: 'Docker Image Optimization',
    tagline: 'Build smaller and faster Java containers',
    status: 'Planned',

    problem:
      'How can a Java service container be made smaller and faster to build without compromising runtime behaviour?',

    approach:
      'Compare different Java base images, multi-stage builds, dependency layering, and Dockerfile structures while measuring image size and build time.',

    result:
      'Benchmark results will be added after controlled container experiments are completed.',

    technologies: [
      'Docker',
      'Java',
      'Spring Boot',
    ],

    areas: [
      'Containerization',
      'Image Size',
      'Build Optimization',
      'Multi-stage Builds',
    ],
  },

  {
    id: 'kubernetes',
    name: 'Kubernetes Scaling',
    tagline: 'Understand resources, probes and autoscaling',
    status: 'Planned',

    problem:
      'How do CPU/memory limits, readiness probes, liveness probes, and horizontal autoscaling affect service behaviour under increasing traffic?',

    approach:
      'Deploy a Spring Boot service to Kubernetes, apply controlled load, and vary resource limits, probes, and autoscaling configuration while observing latency, errors, pod utilization, and scaling behaviour.',

    result:
      'Benchmark results will be added after controlled Kubernetes experiments are completed.',

    technologies: [
      'Kubernetes',
      'Docker',
      'Spring Boot',
      'k6',
      'Prometheus',
      'Grafana',
    ],

    areas: [
      'Autoscaling',
      'Resource Limits',
      'Health Probes',
      'Container Orchestration',
    ],
  },

  {
    id: 'api',
    name: 'API Performance',
    tagline: 'Find where request latency actually comes from',
    status: 'Planned',

    problem:
      'Where does the time go during an API request: application code, serialization, database access, network calls, or external dependencies?',

    approach:
      'Measure request latency end to end, instrument important stages, compare component-level timings, and optimize the largest measurable contributor first.',

    result:
      'Benchmark results will be added after controlled API profiling experiments are completed.',

    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'k6',
      'Prometheus',
      'Grafana',
    ],

    areas: [
      'Latency',
      'Throughput',
      'Profiling',
      'API Optimization',
    ],
  },

  {
    id: 'load',
    name: 'Load Testing',
    tagline: 'Find the point where the system starts degrading',
    status: 'In Progress',

    problem:
      'At what traffic level does the service begin to degrade, and which resource or component becomes the bottleneck first?',

    approach:
      'Ramp traffic through controlled stages and monitor p50, p90, p95, and maximum latency along with throughput, errors, CPU, memory, database behaviour, and application metrics.',

    result:
      'Heavy-load experiments have been performed with traffic stages reaching 500 requests/second. Additional workload comparisons are being documented.',

    technologies: [
      'k6',
      'Spring Boot',
      'Docker',
      'Prometheus',
      'Grafana',
    ],

    areas: [
      'Load Testing',
      'Stress Testing',
      'Latency Percentiles',
      'Throughput',
      'Capacity Analysis',
    ],
  },

  {
    id: 'observability',
    name: 'Observability',
    tagline: 'Answer what is slow and why',
    status: 'In Progress',

    problem:
      'Can application metrics, logs, and dashboards provide enough evidence to identify the source of a performance problem?',

    approach:
      'Instrument the application, collect metrics with Prometheus, visualize service behaviour in Grafana, and use Elasticsearch/Kibana where log aggregation and search are required.',

    result:
      'Observability infrastructure is being integrated into the performance experiments to correlate application behaviour with load-test results.',

    technologies: [
      'Prometheus',
      'Grafana',
      'Elasticsearch',
      'Kibana',
      'Spring Boot',
      'Docker',
    ],

    areas: [
      'Metrics',
      'Logging',
      'Dashboards',
      'Monitoring',
      'Troubleshooting',
    ],
  },
]

