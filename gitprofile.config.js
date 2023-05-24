// gitprofile.config.js

const config = {
  github: {
    username: 'guillaumearnx', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'guillaumearnx/guigzbot',
        'guillaumearnx/github-readme-stats',
        'guillaumearnx/guillaumearnx',
        'guillaumearnx/Discord-Bot-Template-V14',
        'guillaumearnx/discord-image-generation',
        'guillaumearnx/Potato',
        'guillaumearnx/pterodactyl-eggs',
        'arnoux23u-IUTNC/IPTools',
        'arnoux23u-IUTNC/Swing-Paint-Tool',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
    organizations: true, // Set to true, if you want to display projects from public organizations of your GitHub account.
  },
  avatar: {
    url: 'https://media.licdn.com/dms/image/C4E03AQE-hk0uRJLw8g/profile-displayphoto-shrink_800_800/0/1659596603237?e=2147483647&v=beta&t=aFEtd7NIErYGQ2PNtBaH3fEFaf2iAgTg46iV1LhTskQ', //Set an URL to display an image instead of your GitHub avatar. If left empty, your GitHub avatar will be displayed.
  },
  social: {
    linkedin: 'arnouxg',
    twitter: '',
    facebook: '',
    instagram: 'guillaumearnx',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'guillaumearnx',
    stackoverflow: '13652668/guillaumearnx', // format: userid/username
    website: 'https://garnx.fr',
    phone: '',
    email: 'contact@garnx.fr',
  },
  resume: {
    fileUrl: 'https://cv.garnx.fr', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'Node.js',
    'MySQL / PLSQL',
    'Java',
    'Scala',
    'Dart',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
  ],
  experiences: [
    {
      company: 'LMI Solutions',
      position: 'Computer Science and Network Junior Engineer',
      from: 'April 2022',
      to: 'Today',
      companyLink: 'https://www.lmisolutions.fr',
    },
    {
      company: 'Gendarmerie Nationale',
      position: 'Réserviste opérationnel (RO1)',
      from: 'Sept 2022',
      to: 'Today',
      companyLink: '',
    },
  ],
  education: [
    {
      institution: 'CESI Nancy',
      degree: 'Computer Science and Network Engineer',
      from: '2022',
      to: 'Today',
    },
    {
      institution: 'IUT Nancy-Charlemagne',
      degree: 'Computer Science DUT',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'LPO Jean Hanzelet - Pont-à-Mousson',
      degree: ' Scientific Baccalaureate',
      from: '2017',
      to: '2020',
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // Display blog posts from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
