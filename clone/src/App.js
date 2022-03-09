import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';

export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
    
    loadAll();
    }, []);

    return (
        <div>
            <section>
                {movie.list.map((item, key)=>(
                    <div>
                        {item.title}
                    </div>
                ))}
                
            </section>
        </div>
    )
}