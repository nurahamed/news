import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsPanda - Top headlines</h2>
     <div className="row">
        
            <div className="col-md-4">
            <NewsItem title="myTitle" discription ="this is first news "imgUrl = " https://nypost.com/wp-content/uploads/sites/2/2023/04/ohio.jpg?quality=75&strip=all&1682817189&w=1024"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="myTitle" discription ="this is first news "/>
            </div>
            <div className="col-md-4">
            <NewsItem title="myTitle" discription ="this is first news "/>
            </div>

        </div>
       
      </div>
    )
  }
}

export default News
