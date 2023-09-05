import ReactDOM from "react-dom/client";
import Header from "../UI/Header/Header";

it("render header image on initial load", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Header />);
});
