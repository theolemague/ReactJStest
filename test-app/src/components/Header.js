import React, { useEffect } from "react";

const Header = ({builPictures, query, setQuery, highQuality, setHighQuality}) => {
    
    const handleQualityChange = () => {
        if (highQuality) setHighQuality(false);
        else setHighQuality(true);
    }
    const handleTextChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        builPictures(query, 1);
    }

    useEffect(()=>{
        builPictures('', 1);
    }, []);

    return (
        <header className='w-full text-center pt-5'>
            <h1 className='text-7xl font-bold leading-snug text-cyan-900 mb-10 wow fadeInUp animated'>Welcome</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleTextChange} placeholder='Enter key words' className='form-input rounded-full border-2 px-4 py-2 w-96'/>
                <button type="submit" className='bg-transparent hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 border-2 font-bold py-2 px-4 rounded-full mx-5'>Search</button>
                <button onClick={handleQualityChange} className='bg-transparent hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 border-2 font-bold py-2 px-4 rounded-full mx-5'>
                    {
                        highQuality === true ?'Low quality' : 'High quality'
                    }
                </button>
            </form>
        </header>
    );
}
export default Header;