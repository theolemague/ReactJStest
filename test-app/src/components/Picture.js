import React from 'react';

const Picture = ({picture}) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg h-fit mb-4 border-transparent duration-150 transition-all ease-out hover:border-2'>
            <a href={picture.pageURL} target="_blank" rel="noreferrer">                
                <img src={picture.imageURL} className='w-full' alt={picture.tags}/>
            </a>
        </div>
    );
}
export default Picture;