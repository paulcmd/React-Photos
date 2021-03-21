import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {

    const images = props.images.map((image) => {

        return <ImageCard key={image.id} image={image}/>
    })

    return <div className="image-list">{images}</div>

}

export default ImageList;

/*
5- description, id and urls have been desctructured from (image)
i.e return <img key={image.id} alt={image.description} src={image.urls.regular}

image={image} is sending the entire image object into the ImageCard as a prop. allowing us to
access image.urls.regular and image.description from ImageCard
*/