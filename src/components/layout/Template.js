import Footer from "./Footer";
import Header from "./Header";

const Template = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main-quiz">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Template;
