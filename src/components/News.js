import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import './Darkmode.css';

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
        
        this.state={
            articles:[],
            
             page:1,
             totalResults:0
        }
        document.title=`${this.Capitalize(this.props.category)}- News App`;
    }
   async componentDidMount(){
        let url=`
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45db73d96c5b437fa421c421838b795b&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
        
        
        this.setState({articles:parsedData.articles,
            totalArticles:parsedData.totalResults,
        
        });
    }


//     let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45db73d96c5b437fa421c421838b795b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
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
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45db73d96c5b437fa421c421838b795b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
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
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45db73d96c5b437fa421c421838b795b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data= await fetch(url);
       let parsedData= await data.json();
      
      this.setState({
           page:this.state.page+1,
          articles:this.state.articles.concat(parsedData.articles),
            
});
}
fetchMoreData = async () => {

  this.setState({page:this.state.page+1})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45db73d96c5b437fa421c421838b795b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data= await fetch(url);
  let parsedData= await data.json();
 
 this.setState({
      page:this.state.page+1,
     articles:this.state.articles.concat(parsedData.articles),
    
      
})
}
    render() {
        return (
            <>
                <div className="text-center1"><h2 className="text-center my-3 mb-4"  >News Point - Headlines</h2></div>
                    

                <InfiniteScroll
                
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!== this.state.totalResults}
                
                
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
                
                </>
        )
      
    }
}

export default News
