import './testimonoal.scss'

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
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
                        <img src="assets/right-arrow.png" className = "left" alt="" />
                        <img 
                        src={d.img} className='user' alt="" />
                        <img src={d.icon} className='right' alt="" />

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
