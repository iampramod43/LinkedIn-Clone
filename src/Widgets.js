import React, { useEffect, useState } from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useSelector } from 'react-redux';
import { selectCountry } from './features/countrySlice';
function Widgets() {
    const country = useSelector(selectCountry);
    const [news, setNews] = useState([]);
    useEffect(() => {  
        fetch(country.countryNews).then(res => res.json()).then(
                (result) => {
                    setNews(result.articles);
                },
                (error) => {
                    return alert(error);
                }
            );
    }, []);
    
    const newsArticle = (heading, subtitle, link) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div onClick={ () => redirect(link)} className="widgets__articleRight">
                <h4 >{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    const redirect = (link) => {
        window.open(link);
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {news.map(item => {
                return newsArticle(item.title, item.description, item.url);
            })}
        </div>
    )
}

export default Widgets
