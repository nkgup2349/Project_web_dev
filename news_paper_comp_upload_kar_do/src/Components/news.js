import React, { useEffect , useState } from "react";
import Titlenews from "./Titlenews";
import Load from './Load';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { Link } from "react-router-dom";

const News =(props)=>{

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  // constructor ek tarah se
  const [articles , setArticle] = useState([]);
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1);
  const [totleResult , settotleresult] = useState(0);
  document.body.style.backgroundColor = "#1a1a1a"



  const updateNews = async () => {
    props.setProgress(0);
    console.log("updateNews function runing");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeyy}&page=${page}&pageSize=${props.pagesize}`;
    props.setProgress(30);
    setLoading(true)
    props.setProgress(50);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    props.setProgress(60);
    // funciton based
    setArticle(parseddata.articles);
    settotleresult(parseddata.totleResult)
    setLoading(false);
    props.setProgress(100);
  }


  useEffect(()=>{
    updateNews();
      document.title = `${capitalizeFirstLetter(props.category)} - NewsDaily`
  } , [] ); // kul mila ke ye ek fucntion ki tarah kam karta hai ki kab run karna hai abhi empty hai matlab bas ek baar run ho raha hia  , componentDidMount() iska alternate kaam kia isme 


  const fetchMoreData = async ()=>{  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeyy}&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page+1) // ye thoda time leta hi to uske lie pahle argument me daal dia aur baad me apna kabhi bhi set karo 
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticle(articles.concat(parseddata.articles));
    settotleresult(parseddata.totleResult)
    setLoading(false);
  };

    return (
      <>
      <div className="container my-4 ">
        <h1 className="text-center mb-5" style={{ color: 'yellow' }}>News Daily - Top headlines on {capitalizeFirstLetter(props.category)}</h1>
        <div className="container">{loading && <Load/>}</div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totleResult}
          loader={<Load/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4 my-4" key={element.url}>
                <Titlenews
                  title={element.title ? element.title.slice(0, 43) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  imageurl={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png"}
                  newsurl={element.url}
                  author={element.author}
                  updatetime={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            })};
          </div>
          </div>
        </InfiniteScroll>
      </div>
      </>
    );
  };

  News.defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
  }
  
  News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }

export default News;