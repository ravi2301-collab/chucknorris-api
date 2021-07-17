import React, { useContext, useState, useEffect } from 'react';
import JokeContext from '../Contexts/JokeContext';

function Category() {
    const { joke,setJoke } = useContext(JokeContext);
    const [ category, setCategory ] = useState([]);
    const fetchJoke = async(c) =>{
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${c}`);
        const data =  await response.json();
        setJoke(data);
    }

    const fetchCategory= async() =>{
        const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
        const data =  await response.json();
        setCategory(data);
    }

    useEffect(() => {
        fetchCategory();
    },[])

    const handleClick = (c) =>{
        return fetchJoke(c);
    }

    return (
        <div className="p-2 text-center">
            <h1 className="lead"> Get Joke by Category </h1>
            <p className="text-muted">
                Click on category to get your Joke:
            </p>

            <div>
                { category.map(item => <span onClick={ () =>{ handleClick(item)} }  className="badge badge-secondary ml-4"> {item} </span>)}
            </div>
        </div>
    );
}

export default Category;