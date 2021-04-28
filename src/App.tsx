import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";
import { MovieContextProvider } from "./MoviesContext";

export function App() {
  return (
    <MovieContextProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />

        <Content />
      </div>
    </MovieContextProvider>
  );
}
