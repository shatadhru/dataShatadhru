const express = require("express");
const router = express.Router();

const portfolioItems = [
  {
    id: 1,
    title: "LR Food Marketplace",
    date: "2024-01-15",
    image: "/demo/lrfood.png",
    url: "https://lrfood.vercel.app/",
    description:
      "A premium food delivery platform with real-time ordering, secure payments, and seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    gradient: "from-blue-500 to-cyan-400",
    borderColor: "blue-500",
    techColors: [
      { bg: "bg-blue-100", text: "text-blue-700" },
      { bg: "bg-cyan-100", text: "text-cyan-700" },
      { bg: "bg-purple-100", text: "text-purple-700" },
    ],
    premium: true,
  },
  {
    id: 2,
    title: "Clipping Master",
    date: "2024-02-20",
    image: "/demo/clippingmaster.png",
    url: "https://clippingmaster.com",
    description: "Clipping Image Path order-taking website.",
    technologies: ["Wordpress", "Firebase", "AI Integration"],
    gradient: "from-cyan-500 to-blue-400",
    borderColor: "cyan-500",
    techColors: [
      { bg: "bg-cyan-100", text: "text-cyan-700" },
      { bg: "bg-green-100", text: "text-green-700" },
      { bg: "bg-orange-100", text: "text-orange-700" },
    ],
    premium: false,
  },
  {
    id: 3,
    title: "Miss. Rabeya Akter Portfolio",
    date: "2024-03-10",
    image: "/demo/rabeyaportfolio.png",
    url: "https://rabeya.itghour.com/",
    description:
      "A modern and elegant personal portfolio website with smooth animations, responsive UI, and clean design.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-400",
    borderColor: "purple-500",
    techColors: [
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-pink-100", text: "text-pink-700" },
      { bg: "bg-yellow-100", text: "text-yellow-700" },
    ],
    premium: false,
  },
  {
    id: 4,
    title: "News Portal Websites",
    date: "2024-03-10",
    image: "/demo/newsportal.png",
    url: "https://newsportal.itghour.com/",
    description:
      "A professionally crafted personal portfolio website designed for showcasing achievements, skills, and projects.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-400",
    borderColor: "purple-500",
    techColors: [
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-pink-100", text: "text-pink-700" },
      { bg: "bg-yellow-100", text: "text-yellow-700" },
    ],
    premium: false,
  },
  {
    id: 5,
    title: "Alan Digital Ventures",
    date: "2024-03-10",
    image: "/demo/alandigitalventures.png",
    url: "https://alandigitalventures.com/",
    description:
      "A modern and responsive business website built to showcase digital services with a clean and professional interface.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-400",
    borderColor: "purple-500",
    techColors: [
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-pink-100", text: "text-pink-700" },
      { bg: "bg-yellow-100", text: "text-yellow-700" },
    ],
    premium: false,
  },
  {
    id: 6,
    title: "Kivicoin Investment Website",
    date: "2024-03-10",
    image: "/demo/kivicoin.png",
    url: "https://kivicoin.com",
    description:
      "A secure and visually engaging investment platform featuring modern UI, smooth interactions, and optimized performance.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-400",
    borderColor: "purple-500",
    techColors: [
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-pink-100", text: "text-pink-700" },
      { bg: "bg-yellow-100", text: "text-yellow-700" },
    ],
    premium: false,
  },
  {
    id: 7,
    title: "Kivicoin Investment Website (Client Site)",
    date: "2024-03-10",
    image: "/demo/clientkivicoin.png",
    url: "https://client.kivicoin.com/",
    description:
      "A secure and visually engaging investment platform featuring modern UI, smooth interactions, and optimized performance.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-400",
    borderColor: "purple-500",
    techColors: [
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-pink-100", text: "text-pink-700" },
      { bg: "bg-yellow-100", text: "text-yellow-700" },
    ],
    premium: false,
  },
  {
    id: 8,
    title: "Kivicoin Investment Website (Client Site)",
    date: "2024-03-10",
    image: "/demo/clientkivicoin.png",
    url: "https://client.kivicoin.com/",
    description:
      "A secure and visually engaging investment platform featuring modern UI, smooth interactions, and optimized performance.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-400",
    borderColor: "purple-500",
    techColors: [
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-pink-100", text: "text-pink-700" },
      { bg: "bg-yellow-100", text: "text-yellow-700" },
    ],
    premium: false,
  },
];

// 🔥 Route with auto backend URL for images
router.get("/portfolio", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`; // Auto detect backend URL

  const updatedItems = portfolioItems.map((item) => ({
    ...item,
    image: `${baseUrl}${item.image}`, // full image URL
  }));

  res.json(updatedItems);
});

module.exports = router;
