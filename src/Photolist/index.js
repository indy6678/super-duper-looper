import React, {useState} from "react";

const PhotoList = ({category}) => {
    const [photos] = useState([
        {
            name: 'Me',
            category: 'aboutme',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name:  'Movie Info DB',
            category: 'portfolios',
            description: 'Search up a movie and get a description!'
        },
        {
            name:  'Password Generator',
            category: 'portfolios',
            description: 'Follow the prompts to generate a password!'
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category===category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../assets/images/${category}/${i}.png`)}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;