import Layout from "../components/Layout/page";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <section className="text-center px-4 py-8 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 p-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gradient p-5 m-5 text-center md:text-left text-primary">
            I am Abdullah Arif, Welcome to My Portfolio.
          </h1>
          <Image 
            src={"/me.jpg"} 
            height={300} 
            width={300} 
            alt={"me"} 
            className="p-2 rounded-full shadow-lg max-w-full h-auto"
          />
        </div>

        <p className="text-lg sm:text-xl font-medium text-gray-700 max-w-2xl mx-auto text-center px-6 py-8">
          I am currently enrolled in a comprehensive course at Governor House
          focused on Web3, TypeScript, and Next.js, which involves months of
          intensive coding practice. This course covers advanced concepts in
          decentralized web applications, providing hands-on experience with
          TypeScript for type safety and scalability, and Next.js for
          server-side rendering and optimized web performance. This program aims
          to build a strong foundation in modern web development with a focus on
          blockchain and decentralized technologies.
        </p>

        <div className="flex justify-center">
          <a 
            href="/projects" 
            className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out text-center"
          >
            View My Projects
          </a>
        </div>

      </section>
    </Layout>
  );
};

export default Home;
