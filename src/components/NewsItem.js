import React from 'react'

export default function NewsItem(props) {
    let { title, description, imgurl, readUrl, time, author, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: 'flex', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imgurl} className="card-img-top" alt="..." style={{ height: "220px" }} />
                <div className="card-body">
                    <h5 className="card-title text-primary">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-dark">PublishedBy <b className='text-primary'>{author ? author : "Unknown"}</b> on <b className='text-danger'>{new Date(time).toGMTString()}</b></small></p>
                    <a href={readUrl} target="_blank" rel='noreferrer' className="btn btn-dark btn-sm">Reda More</a>
                </div>
            </div>
        </div>
    )
}
