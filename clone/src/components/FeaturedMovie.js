import React from "react";
import './FeaturedMovie.css'

export default ({item}) => {
    console.log(item);

    let fistDate = new Date(item._air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return(
        <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--year">{fistDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons !== 1 ? "s" : ""} temporadas</div>
                   </div>
                   <div className="featured--description">{item.overview}</div>
                   <div className="featured--buttons">
                       <a href="">➤ Assitir</a>
                       <a href="">+ Minha Lista</a>
                   </div>
                   <div className="featured--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
            </div>
        </div>
        </section>
    )
}