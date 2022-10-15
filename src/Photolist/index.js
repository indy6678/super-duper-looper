import React from "react";

const PhotoList = ({category}) => {
    const [photos] = useState([
        {
            name: 'Me',
            category: 'about me',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name:  'Movie Info DB',
            category: 'portfolios',
            description: 'Search up a movie and get a description!'
        },

    ]);

    const currentPhotos = photos.filter((photo) -> photo.category===category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/images/${category}/${i}.jpg`)}
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