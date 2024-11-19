import Layout from "@/components/Layout/page";

const About = () => {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto text-center px-6 py-6 space-y-8">
        <h1 className="text-5xl font-extrabold text-primary mb-6">About Me</h1>
        <p className="text-xl font-medium text-gray-700 leading-relaxed">
          Hello! I&apos;m a passionate developer with expertise in building dynamic,
          responsive, and user-friendly web applications. I specialize in modern
          web technologies like Web3, TypeScript, and Next.js.
        </p>
        <p className="text-xl font-medium text-gray-700 leading-relaxed">
          I aim to deliver clean code, elegant designs, and impactful solutions
          to clients and projects. Outside of coding, I enjoy fitness,
          continuous learning, and exploring new technologies.
        </p>
      </section>
    </Layout>
  );
};

export default About;
