import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"
// const GalleryNavigation = ({ galleries }) => {
const GalleryNavigation = (props) => {
  const { galleries } = props
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        {
            galleries.map(gallery => (
                <NavLink
                    key={gallery.id}
                    to={`/galleries/${gallery.id}`}
                >
                    {gallery.name}
                </NavLink>
            ))
        }
    </nav>
  );
};

export default GalleryNavigation