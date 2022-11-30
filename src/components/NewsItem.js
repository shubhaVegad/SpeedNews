import { getByTitle } from '@testing-library/react'

const NewsItem=(props)=>{
        
        let {title, description, imgUrl, newsUrl, date, source} = props
        return (
            <>
            

                 
            <div className='container m-4 my-3'>
                <div className="card itemdv">
                    <img src={imgUrl} className="card-img-top" alt="..."/>
                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <span className="badge rounded-pill bg-danger"> Published By {source? source : "SppedNews"} </span>
                            <p className="card-text"><small className="text-muted">  On {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            
            </>
        )
    
}
export default NewsItem
