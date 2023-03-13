import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

const AboutPage = () => (
  <Layout>
    <Head>
      <title>About - Vivian Xu</title>
    </Head>
    <div className="about container">
      <div className="row">
        <div className="col-sm-7 content">
          <h1>👋 Hi I am Vivian Xu</h1>
          <h2>Full-stack developer from Australia🇦🇺</h2>
          <p>
            I love to build applications that not only look good, but also
            delivers a great experience for customers and solve business
            problems. Coding to me is not just a technical language, it’s an art
            to write code that’s readable, maintainable and re-usable, to make
            it easier to the team to collaborate and build great products.
          </p>
        </div>
        <div className="col-sm-5 text-start">
          <Image
            src="/images/profileviv.png"
            alt="vivian's profile picture"
            style={{ width: "100%", maxWidth: "290px", height: "auto" }}
            width="290"
            height="290"
          />
        </div>
      </div>
    </div>
    <div className="inquiry container">
      <div className="row">
        <div className="col-sm-4 text-start">
          <h2 className="pt-0">Front-end</h2>
          <ul className="list-unstyled ">
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind, bootstrap</li>
            <li>Sass, CSS architecture</li>
            <li>Responsive web development</li>
            <li>Web accessibility</li>
          </ul>
        </div>
        <div className="col-sm-4 text-start">
          <h2 className="pt-0">Back-end</h2>
          <ul className="list-unstyled">
            <li>Node.js</li>
            <li>Vercel</li>
            <li>Prisma</li>
            <li>Jest unit testing</li>
            <li>API integration</li>
          </ul>
        </div>
        <div className="col-sm-4 text-start">
          <h2 className="pt-0">Other skills</h2>
          <ul className="list-unstyled">
            <li>Git flow</li>
            <li>Version control with Github</li>
            <li>Agile software development</li>
            <li>Figma, Sketch, Abstract</li>
            <li>UX design and research</li>
          </ul>
        </div>
      </div>
    </div>
    <a
      href="contact.html"
      target="_blank"
      rel="noreferrer"
      className="btn btn-branding"
    >
      Get in touch
    </a>
  </Layout>
);

export default AboutPage;
