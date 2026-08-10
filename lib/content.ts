/**
 * Single source of truth for site copy.
 *
 * Content follows the "PLC Website Update Brief" — institution-focused
 * language throughout, one official email address, and the team section
 * titled "Impact & Innovation Board".
 */

export const site = {
  name: "The Plethora Literacy Club",
  shortName: "Plethora Literacy Club",
  tagline: "Nigeria's first school-embedded multi-literacy club",
  email: "plethoraentworld@gmail.com",
  phone: "08106737346",
  phoneHref: "+2348106737346",
  handle: "@plc_global",
  location: "Abuja, Nigeria",
  url: "https://plethora-literacy-club.vercel.app",
  /**
   * The club's real profile URLs were not supplied with the brief. Until they
   * are, `href` stays null and the chip renders as plain text rather than a
   * link to a platform home page. Drop the URL in and it becomes a link — no
   * other change needed.
   */
  socials: [
    { label: "Facebook", href: null as string | null },
    { label: "LinkedIn", href: null as string | null },
    { label: "TikTok", href: null as string | null },
  ],
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Impact", href: "/impact" },
  { label: "Board", href: "/board" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Contact", href: "/contact" },
] as const;

/* ---------------------------------------------------------------- About */

export const about = {
  eyebrow: "About the club",
  heading: "A learning and empowerment initiative built around children.",
  /* Verbatim positioning from the brief — organisation-focused, not personal. */
  intro:
    "The Plethora Literacy Club is a learning and empowerment initiative committed to helping children build practical life skills early. The club equips children with financial literacy, digital literacy, entrepreneurship, leadership, communication, and hands-on creative skills that prepare them for school, life, and future opportunities.",
  mission:
    "Our mission is to raise a generation of thinkers, leaders, and problem solvers by giving children the knowledge, confidence, and practical tools they need to thrive. We work through school clubs, bootcamps, trainings, workshops, tailored learning materials, and collaborative programmes that make learning practical, engaging, and future-focused.",
  channels: [
    "School clubs",
    "Bootcamps",
    "Trainings",
    "Workshops",
    "Tailored learning materials",
    "Collaborative programmes",
  ],
  values: [
    {
      title: "Practical before theoretical",
      body: "We teach children what to do, not only what to know. Every session ends with something a child can apply.",
    },
    {
      title: "Early is the point",
      body: "Skills land best in the formative years, before there is pressure to produce results. We start where the pressure is lowest.",
    },
    {
      title: "Built inside schools",
      body: "The club is embedded in the school week, so learning is consistent, supervised, and part of a child's ordinary term.",
    },
    {
      title: "Dignity in every story",
      body: "Children are participants, not case studies. We share their progress with consent, care, and respect.",
    },
  ],
} as const;

/* ------------------------------------------------------------- Literacies */

export const literacies = [
  {
    slug: "financial-literacy",
    title: "Financial Literacy",
    summary: "Understanding money before money becomes urgent.",
    detail:
      "Children learn saving, budgeting, needs versus wants, honest earning, and the habits that make money a tool rather than a source of pressure.",
    icon: "coins",
    accent: "gold",
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    summary: "Teaching children to create value, ethically.",
    detail:
      "From spotting a problem to pricing a product, children practise building small ventures with integrity at the centre.",
    icon: "sprout",
    accent: "teal",
  },
  {
    slug: "digital-skills",
    title: "Digital Skills",
    summary: "Digital confidence is no longer optional.",
    detail:
      "Children learn to use everyday digital tools for learning, creating, and communicating — safely and responsibly.",
    icon: "laptop",
    accent: "navy",
  },
  {
    slug: "upcycling-and-crafts",
    title: "Upcycling & Crafts",
    summary: "Waste has value — and creativity is economic power.",
    detail:
      "Hands-on making turns discarded material into products children design, finish, and are genuinely proud of.",
    icon: "recycle",
    accent: "coral",
  },
  {
    slug: "environmental-resilience",
    title: "Environmental Resilience",
    summary: "The children in our classrooms will inherit the climate.",
    detail:
      "Practical environmental awareness, local action, and the habits of stewardship that carry into adulthood.",
    icon: "globe",
    accent: "teal",
  },
] as const;

/* ------------------------------------------------------------- Programmes */

/** Section 5 of the brief — the club's programme offering. */
export const programmes = [
  {
    title: "Club Inauguration and Establishment",
    body: "We set up a Plethora Literacy Club inside your school — structure, schedule, club leadership, and a delivery plan for the term.",
  },
  {
    title: "Digital and Financial Literacy Trainings and Workshops",
    body: "Focused sessions that build money confidence and digital capability in children, delivered in class or as a standalone workshop.",
  },
  {
    title: "Skill Bootcamps",
    body: "Short, intensive, hands-on programmes where children build and finish something real within the holiday or term break.",
  },
  {
    title: "Entrepreneurship Workshops",
    body: "Children move from idea to offer — identifying a need, making a product, pricing it, and presenting it to an audience.",
  },
  {
    title: "Train-the-Trainer Workshops",
    body: "We equip educators and facilitators to run the club themselves, so the programme continues long after we leave the room.",
  },
  {
    title: "Digital Teachers Training",
    body: "Practical digital upskilling for teachers, so classroom technology supports teaching rather than complicating it.",
  },
  {
    title: "Tailored Learning Materials",
    body: "Curriculum books, worksheets, and activity kits designed around your learners, your term, and your context.",
  },
  {
    title: "Consultation",
    body: "Advisory support for schools, partners, and organisations designing literacy, skills, or youth empowerment programmes.",
  },
] as const;

/* ----------------------------------------------------------------- Impact */

export const stats = [
  {
    value: 300,
    suffix: "+",
    label: "Students currently active across Abuja schools",
  },
  {
    value: 2,
    suffix: "",
    label: "Full academic terms of pilot delivery completed",
  },
  { value: 4, suffix: "", label: "Programme pillars delivered in the pilot" },
  {
    value: 1,
    suffix: "",
    label: "Completed curriculum book — tested and print-ready",
  },
] as const;

export const heroFacts = [
  { value: "300+", label: "Students enrolled across Abuja schools" },
  { value: "5", label: "Literacy pillars delivered every term" },
  { value: "5–17", label: "Age range · primary & secondary" },
  { value: "Abuja", label: "Nigeria · expanding nationally" },
] as const;

/* ------------------------------------------------------------------- SDGs */

export type Sdg = {
  number: number;
  title: string;
  color: string;
  tier: "Primary" | "Secondary" | "Additional";
};

export const sdgs: Sdg[] = [
  { number: 4, title: "Quality Education", color: "#c5192d", tier: "Primary" },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    color: "#a21942",
    tier: "Primary",
  },
  { number: 1, title: "No Poverty", color: "#e5243b", tier: "Secondary" },
  {
    number: 10,
    title: "Reduced Inequalities",
    color: "#dd1367",
    tier: "Secondary",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    color: "#19486a",
    tier: "Secondary",
  },
  { number: 5, title: "Gender Equality", color: "#ff3a21", tier: "Additional" },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    color: "#bf8b2e",
    tier: "Additional",
  },
];

export const sdgTiers = [
  {
    tier: "Primary" as const,
    note: "The goals our programmes are designed to move directly.",
  },
  {
    tier: "Secondary" as const,
    note: "The goals our work contributes to through its outcomes.",
  },
  {
    tier: "Additional" as const,
    note: "The goals we advance through how our programmes are delivered.",
  },
];

/* ---------------------------------------------------- Impact & Innovation */

export type BoardMember = {
  slug: string;
  name: string;
  role: string;
  country: string;
  bio: string;
  photo: string;
  /** CSS object-position tuned per photo so faces stay well framed. */
  focus: string;
};

export const boardIntro =
  "The Impact & Innovation Board brings together educators, strategists, mentors, and innovation leaders who support The Plethora Literacy Club's mission to equip children with financial literacy, digital skills, entrepreneurship, leadership, and practical life skills.";

export const board: BoardMember[] = [
  {
    slug: "dorcas-ayodele",
    name: "Dorcas Damilola Ayodele",
    role: "Founder & Executive Director",
    country: "Nigeria",
    bio: "Dorcas Damilola Ayodele is the Founder and Executive Director of The Plethora Literacy Club. She leads the club's vision, programme strategy, curriculum direction, partnerships, and impact work, with a focus on helping children build financial literacy, digital confidence, entrepreneurial thinking, leadership, and practical life skills from an early age.",
    photo: "/board/dorcas-ayodele.jpg",
    focus: "50% 30%",
  },
  {
    slug: "peace-ishaku",
    name: "Peace Ishaku",
    role: "Digital Learning Lead",
    country: "Nigeria",
    bio: "Peace Ishaku is a digital expert passionate about helping people use digital tools to learn, earn, grow, and improve themselves. At The Plethora Literacy Club, she supports digital literacy learning and helps children understand how technology can be used responsibly for education, creativity, communication, and future opportunities.",
    photo: "/board/peace-ishaku.jpg",
    focus: "50% 32%",
  },
  {
    slug: "henry-iwediba",
    name: "Henry Iwediba",
    role: "Technology & Innovation Lead",
    country: "Nigeria",
    bio: "Henry Iwediba is an AI solutions developer and digital transformation professional focused on making artificial intelligence practical, accessible, and valuable. At The Plethora Literacy Club, he leads technology and innovation by supporting digital systems, learning tools, and creative solutions that strengthen the club's programmes and digital learning experience.",
    photo: "/board/henry-iwediba.jpg",
    focus: "50% 18%",
  },
  {
    slug: "nasseem-mubarak",
    name: "Nasseem Mubarak",
    role: "Regional Impact Advisor & Financial Literacy Mentor",
    country: "Uganda",
    bio: "Nasseem Mubarak is a banking professional, financial writer, and educator passionate about financial discipline, practical money management, and human-centered financial systems. She supports The Plethora Literacy Club by providing regional perspective, financial insight, and mentorship for youth financial empowerment across Africa.",
    photo: "/board/nasseem-mubarak.jpg",
    focus: "50% 24%",
  },
  {
    slug: "benjamin-ajike",
    name: "Benjamin Ajike",
    role: "Programme & Operations Manager",
    country: "Nigeria",
    bio: "Benjamin Ajike is a writer, public speaker, and disruptive thought leader passionate about human potential, purpose, and personal transformation. At The Plethora Literacy Club, he supports programme coordination and operations, helping to build learning experiences that strengthen confidence, creativity, discipline, and leadership in children.",
    photo: "/board/benjamin-ajike.jpg",
    focus: "50% 26%",
  },
  {
    slug: "josiah-maiyaki",
    name: "Josiah Maiyaki",
    role: "Partnerships & External Relations Lead",
    country: "Nigeria",
    bio: "Josiah Maiyaki builds strategic partnerships that advance youth empowerment, entrepreneurship, and good governance. At The Plethora Literacy Club, he leads stakeholder engagement, partnership development, and resource mobilisation, connecting the club with institutions, allies, and opportunities that expand its impact.",
    photo: "/board/josiah-maiyaki.jpg",
    focus: "52% 30%",
  },
  {
    slug: "christine-vihishima",
    name: "Christine Vihishima Esq.",
    role: "Impact Advisor & Financial Literacy Mentor",
    country: "Nigeria",
    bio: "Christine Vihishima Esq., popularly known as The Money Mechanic, is a lawyer, certified management consultant, financial education instructor, and financial literacy advocate. She supports The Plethora Literacy Club by mentoring children and strengthening the club's financial literacy impact through practical money education and wealth-building guidance.",
    photo: "/board/christine-vihishima.jpg",
    focus: "50% 34%",
  },
];

/* ---------------------------------------------------------- Safeguarding */

export const safeguardingIntro =
  "The Plethora Literacy Club is committed to protecting every child who participates in our programmes. Our safeguarding approach is built on prevention, accountability, dignity, and prompt action.";

export const safeguarding = [
  {
    title: "Zero Tolerance Policy",
    body: "We maintain a strict zero-tolerance approach to any form of child abuse, exploitation, or harm.",
    icon: "shield",
  },
  {
    title: "Vetted Team Members",
    body: "All staff and volunteers undergo appropriate background checks, screening, and safeguarding orientation before working with children.",
    icon: "badge",
  },
  {
    title: "Safe Spaces",
    body: "Our programmes are designed to create physically and emotionally safe environments for every child.",
    icon: "home",
  },
  {
    title: "Supervision & Accountability",
    body: "Children are always supervised, and clear reporting mechanisms are in place.",
    icon: "eye",
  },
  {
    title: "Ethical Storytelling",
    body: "We share stories with dignity, consent, and respect — never exploiting children's images or circumstances.",
    icon: "heart",
  },
  {
    title: "Incident Response",
    body: "Clear protocols are in place for reporting, investigating, and addressing any safeguarding concerns swiftly.",
    icon: "alert",
  },
] as const;

/* -------------------------------------------------------------- Partners */

export const partnerPaths = [
  {
    title: "Bring the club to your school",
    body: "We inaugurate the club, train your facilitators, and deliver the five literacies across the term.",
    action: "Partner with your school",
  },
  {
    title: "Fund a cohort",
    body: "Sponsorship covers curriculum materials, facilitator time, and bootcamp resources for a group of children.",
    action: "Discuss funding",
  },
  {
    title: "Volunteer your skill",
    body: "Educators, finance professionals, makers, and technologists strengthen what children can learn from us.",
    action: "Offer your skill",
  },
] as const;
