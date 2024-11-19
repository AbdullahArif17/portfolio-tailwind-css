import Layout from "../components/Layout/page";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <section className="text-center px-2 py-2 space-y-8">
        <div className="flex justify-center items-center p-6">
          <h1 className="text-5xl font-extrabold text-gradient p-2 text-center px-6 py-1 space-y-8 text-primary">
            I am Abdullah Arif, Welcome to My Portfolio.
          </h1>
          <Image
            src={"/me.jpg"}
            height={300}
            width={300}
            alt={"me"}
            className="p-2 rounded-full shadow-lg"
          ></Image>
        </div>
        <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto text-center px-6 py-12 space-y-8">
          I am currently enrolled in a comprehensive course at Governor House
          focused on Web3, TypeScript, and Next.js, which involves months of
          intensive coding practice. This course covers advanced concepts in
          decentralized web applications, providing hands-on experience with
          TypeScript for type safety and scalability, and Next.js for
          server-side rendering and optimized web performance. This program aims
          to build a strong foundation in modern web development with a focus on
          blockchain and decentralized technologies.
        </p>
        <a
          href="/projects"
          className="bg-primary text-center space-y-8 hover:bg-secondary text-white font-semibold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out"
        >
          View My Projects
        </a>
      </section>
    </Layout>
  );
};

export default Home;
