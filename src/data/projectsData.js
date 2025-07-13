// src/data/projectsData.js
const projects = [
    {
      id: 1,
      title: "Animestation",
      description: "is College Assigment Mobile project for anime streaming for fans using Flutter and Supabase for database.",
      image: "/assets/project/Animestation/animestation2.png", // **Ganti dengan path gambar proyek Anda di public/assets**
      tech: ["Flutter", "Supabase"],
      liveLink: "https://example.com/ecommerce", // Ganti dengan link demo live
      githubLink: "https://github.com/DzikriAli/animestation" // Ganti dengan link GitHub repo
    },
    {
      id: 2,
      title: "UTB Kost",
      description: "WEB dev using native PHP for College Assignment.",
      image: "/assets/project/UTB_Kost/utb_kost.png", // **Ganti dengan path gambar proyek Anda di public/assets**
      tech: ["PHP", "MySQL", "Bootstrap"],
      liveLink: "https://example.com/utb-kost",
      githubLink: "https://github.com/RafiRhnnn/UtbKosWeb"
        },
        {
        id: 3,
        title: "Portfolio Website (You are here)",
        description: "Building a personal portfolio website with interactive scroll animations, modern design, and a focus on engaging user experience to attract recruiters.",
        image: "/assets/project/porto/pict1.png", // **Change to your project image path in public/assets**
        tech: ["React", "Framer Motion", "Styled Components", "JavaScript"],
        liveLink: "https://yourportfolio.com", // Ganti dengan link portofolio Anda sendiri nanti
        githubLink: "https://https://github.com/ahmadz1507/portofolio" // Ganti dengan link GitHub repo ini
    },
    // **projek lain**
];

export default projects;