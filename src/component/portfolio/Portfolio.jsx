import { useEffect, useState } from "react";
import PortfolioList from '../portfolioList/PortfolioList'
import'./portfolio.scss'
import {
    // featuredPortfolio,
    webPortfolio,
    // uiPortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data"
  import { motion } from 'framer-motion';

export default function Portfolio() {
    const [selected, setselected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        // {
        //   id: "featured",
        //   title: "Featured",
        // },
        {
          id: "web",
          title: "Web App",
        },
        // {
        //   id: "ui",
        //   title: "UI Design",
        // },
        {
          id: "design",
          title: "Graphic Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];

      useEffect(() => {
        switch (selected) {
          // case "featured":
          //   setData(featuredPortfolio);
          //   break;
          case "web":
            setData(webPortfolio);
            break;
          // case "ui":
          //   setData(uiPortfolio);
          //   break;
          case "design":
            setData(designPortfolio);
            break;
          case "content":
            setData(contentPortfolio);
            break;

          default:
            setData(webPortfolio);

        }
      }, [selected]);

    return (
        <div className='portfolio' id= "portfolio">
            <h1>Portfolio</h1>
            <ul>
            {list.map((item) => (
            <PortfolioList title={item.title} 
            id = {item.id}
            active = {selected === item.id} 
            setselected = {setselected} />
        ))}
            </ul>

            <div className="rocket">
                <motion.img src="assets/stars.png" alt="" 
                  whileTap={{scale:0.9}} 
                  whileHover={{scale:1.1}} 
                />
            </div>

            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <a href={d.link}><img src={d.img} alt="" /></a>
                    <h3> {d.title} </h3>
                </div>
                ))}
            
            </div>


        </div>
    )
}
