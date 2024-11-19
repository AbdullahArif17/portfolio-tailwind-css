import Layout from "@/components/Layout/page";

const projects = [
  { id: 1, title: 'Calculator', description: 'Calculator using Typescript', link: "https://calculator-theta-mocha.vercel.app/" },
  { id: 2, title: 'Resume Builder', description: 'Editable Resume Builder using Typescript.', link: "https://hackathon-xi-woad.vercel.app/" },
  { id: 3, title: 'Countdown Timer', description: 'Timer using Nextjs.', link: "https://timer-mu-sepia.vercel.app/" },
  { id: 4, title: 'Weather Widget', description: 'Weather App using Nextjs.', link: "https://weather-widget-eight-theta.vercel.app/" },
];

const Projects = () => {
  return (
    <Layout>
      <section className="text-center px-6 py-6 space-y-6">
        <h1 className="text-5xl text-primary font-extrabold mb-8">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="mt-4 px-4 py-2 text-3xl font-bold text-primary">{project.title}</h2>
              <p className="px-4 py-2 text-gray-700 font-semibold mt-2">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 px-6 py-2 text-blue-500 font-bold hover:text-blue-400"
              >
                View Project
              </a>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Projects;
