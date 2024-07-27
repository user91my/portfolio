import { Box } from "@mui/material";
import baseURL from "../../../components/baseURL";

const mainDescCss = {
  fontSize: "1rem",
  letterSpacing: "0.5px",
};

const descListBoxCss = {
  maxWidth: "96%",
  position: "relative",
  top: "-6px",
  left: "-20px",
  fontSize: "0.95rem",
  lineHeight: "26px",
};

export const projectsData = [
  {
    name: "Mediterranea",
    category: "E-Commerce",
    techStacks: {
      frontend: [
        "React JS",
        "Javascript",
        "HTML",
        "CSS",
        "MUI",
        "Redux Toolkit",
      ],
      backend: ["MongoDB", "Mongoose", "Express JS", "Node JS"],
    },
    description: (
      <>
        <Box sx={mainDescCss}>An Italian-themed grocery shopping site</Box>
        <Box sx={descListBoxCss}>
          <ul>
            <li>Has a functioning shopping cart</li>
            <li>Products can be added / removed from the shopping cart</li>
            <li>
              Contains a catalogue of products, each with their own description
              page
            </li>
            <li>
              Has a checkout portal requesting for the user's billing & shipping
              information
            </li>
            <li>
              Redirection to a demo payment gateway (powered by Stripe) upon
              checkout
            </li>
            <li>Optimized for mobile viewing</li>
          </ul>
        </Box>
      </>
    ),
    liveURL: "https://ecommerce-client-pi.vercel.app/",
    codeURL: "https://github.com/user91my/ecommerce",
    image: `${baseURL}/assets/projects/ecommerce-site.JPG`,
  },

  {
    name: "HubConnect",
    category: "Social Media",
    techStacks: {
      frontend: [
        "React JS",
        "Javascript",
        "HTML",
        "CSS",
        "MUI",
        "Redux Toolkit",
      ],
      backend: ["MongoDB", "Mongoose", "Express JS", "Node JS"],
    },
    description: (
      <>
        <Box sx={mainDescCss}>A Social Media site</Box>
        <Box sx={descListBoxCss}>
          <ul>
            <li>Has a login/logout functionality</li>
            <li>Friends can be added or removed</li>
            <li>User make a simple post</li>
            <li>Light/Dark mode available</li>
            <li>Mostly optimized for mobile viewing</li>
          </ul>
        </Box>
      </>
    ),
    liveURL: "https://social-media-site-frontend.vercel.app/",
    codeURL: "https://github.com/user91my/social-media-site",
    image: `${baseURL}/assets/projects/social-media-site-project.JPG`,
  },

  {
    name: "BizPortal",
    category: "Administration, E-Commerce",
    techStacks: {
      frontend: [
        "React JS",
        "Javascript",
        "HTML",
        "CSS",
        "MUI",
        "Redux Toolkit",
      ],
      backend: ["MongoDB", "Mongoose", "Express JS", "Node JS"],
    },
    description: (
      <>
        <Box sx={mainDescCss}>An Admin dashboard site</Box>
        <Box sx={descListBoxCss}>
          <ul>
            <li>Contains a functioning sidebar</li>
            <li>
              Data/tables/graphs relating to the firm's clients, sales and
              management are accessible via the sidebar
            </li>
            <li>Mock data for the portal are generated using faker.js</li>
            <li>Light/Dark mode available</li>
            <li>Mostly optimized for mobile viewing</li>
          </ul>
        </Box>
      </>
    ),
    liveURL: "https://admin-dashboard-client-seven.vercel.app/dashboard",
    codeURL: "https://github.com/user91my/admin-dashboard",
    image: `${baseURL}/assets/projects/admin-dashboard-site-project.JPG`,
  },

  {
    name: "Travista",
    category: "E-Commerce",
    techStacks: {
      frontend: ["React JS", "Javascript", "Sass", "HTML", "CSS"],
    },
    description: (
      <>
        <Box sx={mainDescCss}>A Travel agency site</Box>
        <Box sx={descListBoxCss}>
          <ul>
            <li>
              A series of scenic travel videos will be played on loop in the
              homepage
            </li>
            <li>Contains a catalogue of travel destinations</li>
            <li>Purely a frontend site (no server functionality)</li>
            <li>Optimized for mobile viewing</li>
          </ul>
        </Box>
      </>
    ),
    liveURL: "https://travel-site-client-gilt.vercel.app/",
    codeURL: "https://github.com/user91my/travel-site",
    image: `${baseURL}/assets/projects/travel-site.JPG`,
  },
];
