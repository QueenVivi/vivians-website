import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/d678a5487c.js"
        crossorigin="anonymous"
      ></script>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
