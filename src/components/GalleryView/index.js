import { useParams } from "react-router-dom"


const GalleryView = (props) => {
    const {galleryId} = useParams()
    console.log(galleryId)
    return (
        <h1>Hello from GalleryView</h1>
    )
}

export default GalleryView

