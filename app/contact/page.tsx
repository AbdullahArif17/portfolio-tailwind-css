import Layout from "@/components/Layout/page";

const Contact = () => {
  return (
    <Layout>
      <section className="text-center px-6 py-6 space-y-6">
        <h1 className="text-5xl font-extrabold text-primary mb-6">Contact Me</h1>
        <form className="bg-white p-8 rounded-lg shadow-xl space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-primary" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-primary" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-primary h-32"></textarea>
          <button type="submit" className="bg-primary text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-secondary transition duration-300">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;
