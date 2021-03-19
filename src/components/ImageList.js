import React from 'react';
import './ImageList.css'

const ImageList = (props) => {

    const images = props.images.map(({id, description, urls}) => {

        return <img key={id} alt={description} src={urls.regular} />
    })

    return <div className="image-list">{images}</div>

}

export default ImageList;

/*
5- description, id and urls have been desctructured from (image)
i.e return <img key={image.id} alt={image.description} src={image.urls.regular}
*/