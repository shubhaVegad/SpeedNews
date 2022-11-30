
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from 'react';
import Wave from './Wave';



const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=68137311949148acb39b19e9317802e9&page=${page}&pageSize=15`
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url)
    let parseData = await data.json()
    props.setProgress(50)
    setArticles(parseData.articles)
    setTotalResult(parseData.totalResult)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${props.category === 'general' ? 'Home' : props.category}-SpeedNews`
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=68137311949148acb39b19e9317802e9&page=${page + 1}&pageSize=15`
    setPage(page + 1)
    let data = await fetch(url)
    let parsData = await data.json()
    setArticles(articles.concat(parsData.articles))
    setTotalResult(parsData.totalResult)

  }


  return (
    <>
      <div className="maindv">



        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
        >

          <div className="container">
            <h2 style={{ marginTop: '67px',display: 'flex',justifyContent: 'center',color: 'rgb(255 255 255)',zIndex: '1',position: 'relative'}}>Top Headlines of {(props.country)=='in'? "INDIA" : (props.country)}</h2>
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4 mx--10" key={element.url}>
                <NewsItem source={element.source.name} date={element.publishedAt} title={element.title} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} newsUrl={element.url}></NewsItem>
              </div>
            }
            )}
          </div>
      </div>
    </InfiniteScroll>

      </div >
    </>
  )
}
News.defaultProps = {
  country: 'in',
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
