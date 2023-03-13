import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

const HomePage = () => (
  <>
    <Head>
      <title>Front-end Dev Vivian Xu</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="hero">
        <h2>👋 Hi I am</h2>
        <h1>Vivian Xu</h1>
        <p>Front-end developer serves business goal</p>
        <Link href="about" className="btn btn-branding">
          Find Out More
        </Link>
      </div>
      <div className="projects" id="projects">
        <p className="text-center m-5">Featured Projects</p>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 description">
              <h2>Chuckroo</h2>
              <p>
                Chuckroo is a tech blog platform that provides a seamless and
                engaging experience for tech enthusiasts to share their
                knowledge and connect with others in the community.
              </p>
              <a
                href="https://chuckroo.mel.fish"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
            <div className="col-sm-6">
              <img
                src="images/chuckroo.png"
                className="project-photo img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img
                src="images/weather.png"
                className="project-photo img-fluid"
              />
            </div>
            <div className="col-sm-6 description">
              <h2>Weather App</h2>
              <p>
                A fun weather app to look up weather and change design
                accordingly.
              </p>
              <a
                href="https://funweatherapp.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 description">
              <h2>Client Website</h2>
              <p>
                Chuckroo is a tech blog platform that provides a seamless and
                engaging experience for tech enthusiasts to share their
                knowledge and connect with others in the community.
              </p>
              <a
                href="https://olysu.com"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="col-sm-6">
              <img
                src="images/olyweb.png"
                className="project-photo img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inquiry container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="pt-0">Work Inquiry</h2>
            <p className="mb-0">Let in tough and let me know how I can help.</p>
          </div>
          <div className="col-sm-6">
            <a
              href="contact.html"
              className="btn btn-inquiry btn-branding my-0"
            >
              Make an Inquiry
            </a>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default HomePage;