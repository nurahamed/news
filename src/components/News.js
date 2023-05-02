import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Richard Pollina",
          "title": "14 people injured in roof collapse at home near Ohio State University - New York Post ",
          "description": "All victims were transported to several nearby hospitals with unspecified injuries.",
          "url": "https://nypost.com/2023/04/30/roof-of-house-near-ohio-state-university-collapses-injuring-14/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/ohio.jpg?quality=75&strip=all&1682817189&w=1024",
          "publishedAt": "2023-04-30T05:12:00Z",
          "content": "Fourteen people were injured as a roof at an off-campus house near Ohio State University in Columbus collapsed Saturday night, officials said. \r\nFirst responders were called to East 13th Avenue, bloc… [+993 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Sudan crisis: Last UK evacuation flight leaves rescue effort ends - BBC",
          "description": "The government says 1,888 people were rescued in the \"extremely successful\" evacuation operation.",
          "url": "https://www.bbc.com/news/uk-65436403",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/42DB/production/_129551171_fleet-20230421-xr0003-1164.jpg",
          "publishedAt": "2023-04-30T04:43:23Z",
          "content": "An operation to evacuate people from Sudan has been \"extremely successful\", a government minister has said, as the UK ended its evacuation operation.\r\nThe Foreign Office said the last flight left the… [+3878 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Times of Israel"
          },
          "author": null,
          "title": "King Charles’ royal coronation to feature roles for Jewish, Muslim, Hindu leaders - The Times of Israel",
          "description": "In first, non-Christian faiths and languages to play a prominent part in much-anticipated May 6 event where monarch will be crowned",
          "url": "https://www.timesofisrael.com/king-charles-royal-coronation-to-feature-roles-for-jewish-muslim-hindu-leaders/",
          "urlToImage": "https://static.timesofisrael.com/www/uploads/2022/12/Untitled-3-8-1024x640.jpg",
          "publishedAt": "2023-04-30T03:36:07Z",
          "content": "LONDON (AFP) — The UK’s non-Christian faiths and its Celtic languages will play a prominent role for the first time in a royal coronation when King Charles III is crowned next week, organizers said o… [+3939 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Ukrainian shelling of Russian village kills two, governor says - Al Jazeera English",
          "description": "Attack on village inside Russian territory follows drone raid on fuel storage facility in Russia-annexed Crimea.",
          "url": "https://www.aljazeera.com/news/2023/4/30/ukrainian-shelling-of-russian-village-kills-two-governor-says",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/04/AP23119671517931-1682823388.jpg?resize=1200%2C675",
          "publishedAt": "2023-04-30T03:34:02Z",
          "content": "Two civilians have died as a result of Ukrainian shells hitting a village in Russias Bryansk region, the regional governor said according to Russian media.\r\nShells hit the village of Suzemka, to the … [+1825 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Hannah Getahun",
          "title": "Here's how to make an AI commercial with video in 3 hours - Business Insider",
          "description": "AI can now make nearly all the assets you need to create a commercial to sell your pizza. But it might turn out to be complete \"nightmare fuel.\"",
          "url": "https://www.businessinsider.com/how-to-make-an-ai-commercial-with-video-3-hours-2023-4",
          "urlToImage": "https://i.insider.com/644ddbb5da6d7b0019bdbaac?width=1200&format=jpeg",
          "publishedAt": "2023-04-30T03:20:00Z",
          "content": "The days of expensive commercial budgets, large teams of creatives and actors putting together scenes, and time-consuming delays over visual effects will soon be over. Maybe.\r\nAt a time when chatbots… [+5902 chars]"
        }
       
      ]
    constructor(){
        super();
        console.log("hello im constructor from news component");
        this.state = {
            articles: this.articles,
            loading : false 
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8ef999af2b1a4df3b547aae291e81fa9";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }


  render() {
    return (
      <div className="container my-3">
        <h2>NewsPanda - Top headlines</h2>
        <div className="row">
         {this.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url}>
                <NewsItem  title={element.title? element.title.slice(0,45):" "} discription ={element.discription? element.description.slice(0,90): " "} imgUrl = {element.urlToImage} newsUrl ={element.url} />
            </div>

        })}
            

        </div>
       
      </div>
    )
  }
}

export default News
