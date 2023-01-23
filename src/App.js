import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation 
        galleries={harvardArt.records}
      />
      <div className="page-wrapper">
        <Route path="/galleries/:galleryId">
          <GalleryView/>
        </Route>
      </div>
    </>
  );
};

export default App;
