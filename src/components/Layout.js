import { Navigation } from "./navigation";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
