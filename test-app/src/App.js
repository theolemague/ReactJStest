import { useEffect, useState } from 'react';
import Header from './components/Header';
import Paginator from './components/Paginator';
import Picture from './components/Picture';

const key='17555297-46a99d3dc7abf78679ec9e640&q';

const App = () => {
  const [pictures, setPictures] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [highQuality, setHighQuality] = useState(false);

  const builPictures = async (q, page) => {
    const req = await (await fetch(`https://pixabay.com/api/?key=${key}&image_type=photo&q=${q.replaceAll(' ','+')}&page=${page}`)).json();
    var response = [];
    for (let i in req.hits) {
      let p = req.hits[i];
      if (highQuality) response.push({'imageURL':p.largeImageURL, 'pageURL': p.pageURL, 'tags':p.tags});
      else response.push({'imageURL':p.previewURL, 'pageURL': p.pageURL, 'tags':p.tags});
    }    
    setTotal(req.total);
    setPictures(response);
  }
  
  useEffect(()=>{
    setCurrentPage(1);
  }, [total]);

  return (
    <div className='container mx-auto'>
      <Header builPictures={builPictures} query={query} setQuery={setQuery} highQuality={highQuality} setHighQuality={setHighQuality}/>
      <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} builPictures={builPictures} query={query} total={total}/>
      <section className='md:h-full max-w-container mx-auto px-12'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
          {
            pictures.length !== 0 ?
            pictures.map((v, i) => {
              return <Picture key={i} picture={v}/>
            }): <></>
          }
        </div>
      </section>
    </div>
  );
}
export default App;
