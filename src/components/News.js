import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        this is a news components
        <NewsItem title="myTitle" discription ="this is first news "/>
        <NewsItem/>

        <NewsItem/>
       
      </div>
    )
  }
}

export default News
