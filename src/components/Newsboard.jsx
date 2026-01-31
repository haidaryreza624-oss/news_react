import Newsitem from "./Newsitem";

import {useEffect, useState} from 'react'
import Navbar from './Navbar.jsx'

function Newsboard() {

	const [News, setNews] = useState([]);
	const [cat,setCat] = useState('general')
	const [loading,setloading] = useState(true)
	const [q,setQuery] = useState('')
	useEffect(()=>{
		fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${q}&searchin=title,description,content,author&category=${cat}&apiKey=${import.meta.env.VITE_NEWS_API_KEY
		}`).then(item => item.json())
			.then((data) =>{setNews(data.articles)
							setloading(false)
							})

		return ()=>{
			setloading(true)
		}
	},[cat,q]);


	const new_cat = (e)=>{
		
		setCat(e)
	}
	const update_q = (e) => {
		setQuery(e)
	}
  return (

  	<>
  	<Navbar func = {new_cat} func_q = {update_q}/>

    <div className="container my-4">

      <h2 className="text-center mb-4">Latest News <button  onClick = {()=>setQuery('')}type="button" class="btn btn-dark">
  {cat} <span class="badge bg-primary" >{q}</span>
</button></h2>
      <div className="row">

     	{
      		News.map((item,index) => {
      		return <Newsitem

		          title={item.title}
		          key={index}
		          description={item.description}
		          imageUrl={item.urlToImage}
		          newsUrl={item.url}
		          load={loading}
		        />
      		})
      	}


      </div>
    </div>
    </>
  );

}

export default Newsboard;
