import  { useState, useEffect, useContext } from 'react';
import gif from './load.gif'
import JokeContext from '../Contexts/JokeContext';
import Category from './Category';

function Jokes(props) {
 
    const [joke, setJoke ] = useState({});
    const [search, setSearch ] = useState('');
    const [searchresult, setSearchResult] = useState([]);
    const fetchJoke = async() =>{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data =  await response.json();
        setJoke(data);
    }
   useEffect(() => {
        fetchJoke();
   },[]);

    const fetchSearch = async(params) => {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${params}`);
        const data =  await response.json();
        let trim = [];
        if(data.result.length >10){
            trim = data.result.slice(0,3);
        }
        else if (data.result.length === 0){
            trim = ['No data']
        }
        else{
             trim = data.result;
        }
        setSearchResult(trim);
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    if(search.length <= 2){
        return alert('Search param must be atleast 3 characters');
    }
    fetchSearch(search);
   }

   const handleChange = (e) => {
        setSearch(e.target.value)
   }

    return (
        <JokeContext.Provider value={ {joke, setJoke} }>
            <>
            <div className="new-align">
           <div className="row">
               <div className="col-md-6">
                   <Category />
               </div>
               <div className="col-md-6">
                    <h3 className="display-4">  Today's Joke </h3>
                    <div className="contain">
                    {  Object.keys(joke).length === 0 ? <img src={gif} width="70" height="70"/>:<p className="lead">{ joke.value } </p> }
                    </div>
               </div>
           </div>
        </div>

        <div className="container">
        <h1 className="display-4 text-center mt-5 text-light"> Search for Jokes</h1>
            <div className="py-5">
                <form onSubmit={ handleSubmit } className="custom">
                    <input  onChange={ handleChange }className="form-control" placeholder="Search Funny Jokes..."/> 
                    <button className="btn btn-light "> Search Joke Now</button>
                </form>
            </div>

            <div className="response py-3">
                <div className="row text-center">
                    {  
                       searchresult.length === 1 && searchresult[0] === "No data" ?  <div className="text-center w-100"> <h2 className="lead text-light">  No result available </h2></div>: 
                       searchresult.map(item => {
                            return ( <div className="col-lg-4 p-2"> 
                                        <div className="card  mb-3 card-body"> 
                                            <p className="lead"> { item.value } </p> 
                                        </div> 
                                    </div>
                            )
                        } )
                     }
                </div>
            </div>
        </div>
        </>
        </JokeContext.Provider>
    );
}

export default Jokes;