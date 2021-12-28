import './testimonoal.scss'

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Cai Sheng",
          title: "Senior Geotechnical Engineer",
          img:
            "https://www.bai-jia-song.com/assets/BJS_logo.png",
          icon: "assets/twitter.png",
          desc:
            "As a foundation engineering company founded eight years ago, we have always neglected corporate image and publicity. With Ray's work, our enterprise has a new look and official website. We really appreciate Ray's precise positioning and meticulous design style. ",
        },
        {
          id: 2,
          name: "Pamela Ng",
          title: "Director of Rayla's",
          img:
            "https://imgur.com/m4Y7cM2.jpg",
          icon: "assets/youtube.png",
          desc:
            "Ray is exceeded our expectations on process, design and customer service. Our beautiful, easy to navigate website came in on time and on budget. Ray is not only talented, but great human beings which makes working with him a delight. We look forward to collaborating again. ",
          featured: true,
        },
      ];

    return (
        <div className='testimonial' id = "testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                    
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img 
                        src={d.img} className='user' alt="" />

                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
