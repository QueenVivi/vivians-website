import Head from "next/head";
import Layout from "@/components/Layout";

const ContactPage = () => (
  <Layout>
    <Head>
      <title>Contact - Vivian Xu</title>
    </Head>
    <div class="contact">
      <h1>Work Inquiry</h1>
      <h3>Email</h3>
      <a href="mailto:hi@vivianxu.com" target="_blank" title="Vivian's email">
        <p>hi@vivianxu.com</p>
      </a>

      <h3>Linkedin</h3>
      <a
        href="https://linkedin.com/in/vivian-ux/"
        target="_blank"
        title="Vivian's Linkedin"
        rel="noreferrer"
      >
        <p>Linkedin</p>
      </a>
      <h3>Github</h3>
      <a
        href="https://github.com/QueenVivi"
        target="_blank"
        title="Vivian's Github"
        rel="noreferrer"
      >
        <p>Github</p>
      </a>
    </div>
  </Layout>
);

export default ContactPage;
