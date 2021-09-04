import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, dated } = this.props;

        return (
            <div>
                <div className="card mt-5">
                    
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "150px" }} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{right: "0%", zIndex:1, top: '0%'}}>
                        {this.props.source}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(dated).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
