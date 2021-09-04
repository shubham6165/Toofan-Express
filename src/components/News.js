import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'sports',
        pageSize: 15
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // state = {
    //     articles : [],
    //     loading : true,
    //     page : 1,
    //     totalResults : 0
    // }
    constructor(props){
        super(props);
        // console.log('This is constructor call');
        
        this.state={
            articles : [],
            loading : true,
            page : 1,
            totalResults : 0
        }
        document.title = `Toofan Express-${this.capitalizeFirstLetter(this.props.category)}`
    }

    async updateNews(pageNo){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        this.props.setProgress(50);
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews(this.state.page);
    }

    handlePrevClick = async()=>{
        this.setState({
            page : this.state.page-1,
        });
        this.updateNews(this.state.page-1);
    }
    handleNextClick = async()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        this.setState({
            // articles: parsedData.articles,
            page : this.state.page+1,
            // loading:false 
        });
        this.updateNews(this.state.page+1);
    }

     d = new Date();

    render() {
        
        return (
            <div> 
                <div className="container">
                <h2 className = "text-center" style = {{marginTop: 80}}>Welcome to Toofan Express </h2>
                    {this.props.category==="general"?<h2 className = "my-2 float-start fs-1">Latest News Today</h2>:
                    <h2 className = "my-2 float-start fs-1">Top {this.capitalizeFirstLetter(this.props.category)} News</h2> }
        
                    {this.state.loading && <Spinner/>}
                  { !this.state.loading && <div className="row">
                        {this.state.articles.map((element)=>{
                          return  <div className="col-md-4" key = {element.url}>
                                <NewsItem title = {element.title?element.title.slice(0, 45):""} description = {element.description?element.description.slice(0, 88):""} imageUrl = 
                                {element.urlToImage?element.urlToImage:"https://www.reuters.com/resizer/Ii0FoVtLOaN9Kh_5dShngs3XZbM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DHENEZA6LZLIZABIOZSIQTV45M.jpg"} 
                                newsUrl = {element.url} author={element.author} dated ={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}
                    </div>}
                </div>
                <div className="container mt-2 d-flex justify-content-between">
                <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handlePrevClick}>&larr; Previous</button>
                <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick = {this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
