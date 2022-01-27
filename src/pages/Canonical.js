import { Helmet } from "react-helmet";

const Canonical = () => {
  return (
    <div>
      <Helmet>
        <title>Canonical page title here</title>
        <link rel="canonical" href="https://canonical.netlify.app" />
      </Helmet>{" "}
      this is the canonical page
    </div>
  );
};

export default Canonical;
