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
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
