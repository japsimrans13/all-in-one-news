import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description,Imageurl,newsurl,author,date,source}=this.props;
        return (
            <div >
                <div className="card" >
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left:'80%',zIndex:'1',top:'1.5%'}}>

    {source}
   
  </span>
  <img src={!Imageurl?"https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg":Imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem;
