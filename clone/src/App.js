import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb'; 
import MovieRow from './components/MovieRow'; 
import FeaturedMovie from './components/FeaturedMovie';


export default () => {

    const [movieList, setMovieList] = useState([]);
    const [FeaturedData, setFeatured] = useState (null);
   
    useEffect(() => {
        const loadAll = async ()=> {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            let originals =list.filter(i=>i.slug == "originals");
            let randomChosen = Math.floor(Math.random () * (originals[0].items.results.length))
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
            setFeatured(chosenInfo);
        }   

        loadAll()

    },[]);
   
    return(
        <div className='page'>
            {FeaturedData && 
            <FeaturedMovie item={FeaturedData}/>
            }

            <section className='lists'>
                {movieList.map((item, key) => (
                     <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}
