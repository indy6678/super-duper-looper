import React, {useState} from "react";
import photo from '../../assets/images/About Me/0.png';

const PhotoList = ({category}) => {
    const [photos] = useState([
        {
            name: 'Me',
            category: 'About Me',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name:  'Movie Info DB',
            category: 'portfolios',
            description: 'Search up a movie and get a description!'
        },
        {
            name:  'Password Generator',
            category: 'Portfolios',
            description: 'Follow the prompts to generate a password!'
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className='flex-row'>
                <img 
                    src={photo}
                    alt=''
                />
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/images/${category}/${i}.png`)}
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