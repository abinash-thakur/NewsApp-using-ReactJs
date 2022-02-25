import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //document.title = `${this.capitalized(props.category)}-NewsAbinash`;


  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatePage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.progressState(10);
    let data = await fetch(url);
    props.progressState(30);
    let parseData = await data.json();
    props.progressState(70);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.progressState(100);
  }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    updatePage();
  }, []);


  return (
    <>
      <h2 className='text-center' style={{margin:'30px 0',marginTop:'90px'}}>NewsAbinas-Top <b className="d-inline text-danger">{capitalized(props.category)}</b> Headlines</h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={(loading) ? <Spinner /> : ''}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem imgurl={(element.urlToImage) ? element.urlToImage : "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260npmm"} title={element.title} description={(element.description) ? element.description.slice(0, 120) : ""}
                  readUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
News.defaultProps = {
  country: "in",
  category: "technology",
  pageSize: 9,
  totalResults: 0
}