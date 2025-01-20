import React, { useEffect , useState } from "react";
import Titlenews from "./src/Components/Titlenews";
import Load from './src/Components/Load';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { Link } from "react-router-dom";

const News =(props)=>{

  // class based me yaha likhte hai 
  // static defaultProps = {
  //   countyr: 'in',
  //   pageSize: 12,
  //   category: 'general'
  // }
  // static propTypes = {
  //   countyr: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.string
  // }
  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }



  // constructor ka sara maal naksa idhar function ban ke nikla
  const [articles , setArticle] = useState([]);
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1);
  const [totleResult , settotleresult] = useState(0);
  document.body.style.backgroundColor = "#1a1a1a"
  // document.title = `${this.capitalizeFirstLetter(this.props.category)}
  // constructor only work in class case ,, to function me to kaam nahi hi karega ,to iske initilizer hum funuction wale me setup karenge 




  // constructor(props) {
     // console.log("hey I am constructor from news component"); // sabse pahle yahi constructor run hota hai 

    // super(props);
    // document.body.style.backgroundColor = "#1a1a1a"
    // this.state = {
    //   articles: [],
    //   loading: false,
    //   page: 1,
    //   totleResult: 0
    // };
    // jo ye upar likha hai isko class me aise use karte hia but in case of fucntion aise use nahi hota hia balki we have to use in function way jaise upar kia const [ name , updatenaam ] = useState(value) aise karke
    // document.title = `${this.capitalizeFirstLetter(this.props.category)}-News_Paper`
  // }

  // async update() { // class naam
  const update = async () => {

    // in all where are this.props => replace with "props" to make it useable to function based


    // this.props.setProgress(0); // this.use matlac class 
    
    
    /*{ replaced term 
    this.props => props
    this.state.page => page
    }*/
    props.setProgress(0);
    console.log("cdm");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeyy}&page=${page}&pageSize=${props.pagesize}`;
    props.setProgress(30);
    // this.setState({ loading: true });
    setLoading(true)
    props.setProgress(50);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    props.setProgress(60);

    // class based 
    // this.setState({
    //   articles: parseddata.articles,
    //   totleResult: parseddata.totleResult,
    //   loading: false,
    // })

    // funciton based
    setArticle(parseddata.article);
    setLoading(false);
    settotleresult(parseddata.totleResult)

    props.setProgress(100);
  }

  // componentDidmount jo kaam kar raha hia vo kaam mera useeffect karega


  useEffect(()=>{
    update();
  } , []); // kul mila ke ye ek fucntion ki tarah kam karta hai ki kab run karna hai abhi empty hai matlab bas ek baar run ho raha hia  , componentDidMount() iska alternate kaam kia isme 


  // async componentDidMount() {  // ye kab run hoga -> sabse pahle constructor phir rendor phir ye run hoga
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe902e3b9c7941d0ba506a0afa481323&page=1&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true}); 
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // console.log(parseddata);
    // this.setState({articles : parseddata.articles ,
    //   totleResult:parseddata.totleResult,
    //   loading : false ,
    //   })
    // this.update();
  

  const fetchMoreData = async ()=>{  
    // this.setState({page : this.state.page +1 })
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeyy}&page=${page}&pageSize=${props.pagesize}`;
    // this.setState({ loading: true }); // kuki isme to neeche wala load wala sambhal lega  
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log("this is fetch data:"+parseddata)
    setArticle(articles.concat(parseddata.articles));
    settotleresult(parseddata.totleResult)
    // this.setState({
      // articles: this.state.articles.concat(parseddata.articles), // cl=>class
    //   totleResult: parseddata.totleResult,
      // loading: false,
    // })
  };




  // const Handlepreviousclick = async () => {
  //   console.log("Previous");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe902e3b9c7941d0ba506a0afa481323&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parseddata = await data.json();
  //   // this.setState({
  //   //   page : this.state.page - 1  , 
  //   //   articles : parseddata.articles , 
  //   //   loading : false ,
  //   // })

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   // })
  //   setPage(page +1 );
  //     update();
  //   // this.update(); // 3no me code same hai to iske lie ek update function bana dia 
  // };




  // const Handlenextclick = async () => {
  //   console.log("Next");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe902e3b9c7941d0ba506a0afa481323&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parseddata = await data.json();
  //   // this.setState({
  //   //   page : this.state.page +1  , 
  //   //   articles : parseddata.articles , 
  //   //   loading : false ,
  //   // })

  //   // class me use hua tha 
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   // })
  //   // this.update();

  //   setPage(page +1 );
  //   update();
  // }




  // render() { // used in class components .. aur function me just hata do 
    return (
      <div className="container my-4 ">
        {/* <h1 className="text-center mb-5" style={{ color: 'yellow' }}>News Daily - Top headlines on {this.capitalizeFirstLetter(props.category)}</h1>  //class ke lie*/ } 
        <h1 className="text-center mb-5" style={{ color: 'yellow' }}>News Daily - Top headlines on {capitalizeFirstLetter(props.category)}</h1>
        {/* <div className="container">{this.state.loading && <Load/>}</div> //class*/} 
        <div className="container">{loading && <Load/>}</div>



        <InfiniteScroll
          // dataLength={this.state.articles.length} //cl
          dataLength={articles.length!==0?articles.length : 1}
          // next={this.fetchMoreData} // class
          next={fetchMoreData}
          // hasMore={this.state.articles.length !== this.state.totleResult}  //cl
          hasMore={articles.length !== totleResult}
          loader={<Load/>}
        >
          <div className="container">
          <div className="row">
            {/* { this.state.articles.map((element) => { */}
            { articles.map((element) => {
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
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.Handlepreviousclick} style={{ backgroundColor: "#e3ab12" }} className="btn btn-info"> &larr; Previous Page </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totleResult / this.props.pagesize)} type="button" onClick={this.Handlenextclick} style={{ backgroundColor: "#e3ab12" }} className="btn">Next Page &rarr;</button>
        </div> */}
      </div>
    );
  };


// fucntion based me proptypes last me likhte hia aur class me upar likhte hia 
// bas isme function ka naam aur dot propname
News.defaultProps = {
  countyr: 'in',
  pageSize: 12,
  category: 'general'
}
News.propTypes = {
  countyr: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string
}

export default News;


 

