// gitprofile.config.js

const config = {
  github: {
    username: 'guillaumearnx', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        "github-readme-stats",
        "guillaumearnx",
        "discord-image-generation",
        "Potato",
        "pterodactyl-eggs"
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
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
    fileUrl:
      'https://cv.garnx.fr', // Empty fileUrl will hide the `Download Resume` button.
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
      to: 'Present',
      companyLink: 'https://www.lmisolutions.fr',
    },
    {
      company: 'Gendarmerie Nationale',
      position: 'Réserviste opérationnel (RO1)',
      from: 'Sept 2022',
      to: 'Present',
      companyLink: '',
    },
  ],
  education: [
    {
      institution: 'CESI',
      degree: 'Computer Science and Network Engineer',
      from: '2022',
      to: 'Present',
    },
    {
      institution: 'IUT Nancy-Charlemagne',
      degree: 'Computer Science DUT',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
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
