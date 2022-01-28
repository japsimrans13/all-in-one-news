import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

 static defaultProps={
     country:'in',
     pageSize:8,
     category:'general'
 }
 static propTypes={
     country:propTypes.string,
     PageSize:propTypes.number,
 }


    Capitalize=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        // console.log("hello from news component");
        this.state={
            articles:[],
             loading: false,
             page:1,
             totalResults:0
        }
        document.title=`${this.Capitalize(this.props.category)}- News App`;
    }
   async componentDidMount(){
        let url=`
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1e4f04330a494b8a8da5572434153b&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
        // console.log(parsedData);
        
        this.setState({articles:parsedData.articles,
            totalArticles:parsedData.totalResults,
        loading:false,
        });
    }

// handlePrevious = async()=>{
    

//     let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1e4f04330a494b8a8da5572434153b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data= await fetch(url);
//     let parsedData= await data.json();
//     console.log(parsedData);
    
//     this.setState({
//         page:this.state.page-1,
//         articles:parsedData.articles,
//         loading:false
//     });
// }
// handleNext = async ()=>{
//  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1e4f04330a494b8a8da5572434153b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//      this.setState({loading:true});
//     let data= await fetch(url);
//     let parsedData= await data.json();
//     this.setState({
//         page:this.state.page+1,
//         articles:parsedData.articles,
//          loading:false
//     });
// }
// }
async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1e4f04330a494b8a8da5572434153b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data= await fetch(url);
       let parsedData= await data.json();
      
      this.setState({
           page:this.state.page+1,
          articles:this.state.articles.concat(parsedData.articles),
            loading:true
});
}
fetchMoreData = async () => {

  this.setState({page:this.state.page+1})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e1e4f04330a494b8a8da5572434153b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data= await fetch(url);
  let parsedData= await data.json();
 
 this.setState({
      page:this.state.page+1,
     articles:this.state.articles.concat(parsedData.articles),
       loading:true
      
})
}
    render() {
        return (
            <>
                <h2 className="text-center my-3 mb-4"  >News Point - Headlines</h2>
                    {/* {this.state.loading && <Spinner/>} */}

                <InfiniteScroll
                
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!== this.state.totalResults}
                loader={<Spinner/>}
                
                >

                <div className="container">
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} 
                description={element.description?element.description.slice(0,88):""} Imageurl={element.urlToImage} 
                newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>})}
                
                </div>
                
                
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-4"> */}
                {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr;Previous</button> */}
                {/* <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button> */}
               {/* </div> */}
                </>
        )
      
    }
}

export default News
