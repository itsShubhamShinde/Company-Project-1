import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS_files/HomePage.css'
import { useNavigate } from 'react-router-dom'
const HomePage = ({ height, engine, legs }) => {
  const navigate = useNavigate()
  const { data } = useSelector((select) => select.dataSlice)
  console.log(data);
  const filterAr = data.filter((ele) => {
    return ele.height.feet >= height
  })
  
  const enginAr = filterAr.filter((ele) => {
    // if (ele.engines.thrust_vacuum.kN >= engine) {
    //   console.log(ele.engines.thrust_vacuum.kN)
    // }
    return ele.engines.thrust_vacuum.kN >= engine;
  })
  // console.log(engine)
  const legsAr = enginAr.filter((ele) => {
    return ele.landing_legs.number >= legs;
  })
  console.log(legsAr)
  // console.log("Engin " + engine);
  // console.log("heigth Value " + height);
  // console.log("Leg Value " + legs);


  return (
    <div className='home'>
      {
        // filterAr.map((ele)=>{
        //     return <div className='rockets-banner' style={{backgroundImage:`url(${ele.flickr_images[1]})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',}} >
        //       <div className="details">
        //         {/* { console.log(ele.landing_legs.number)} */}
        //        <h4>{ele.country}</h4>
        //       <h1>{ele.rocket_name}</h1>
        //        <button onClick={()=>{
        //         navigate(`/v3/rockets/${ele.rocket_id}`)
        //        }}>Details</button>
        //       </div>
        //     </div> 
        // })


         legs > 0 ? 
           <div> 
            {legsAr.map((ele) => {
            return <div className='rockets-banner' style={{ backgroundImage: `url(${ele.flickr_images[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', }} >
              <div className="details">
                {/* { console.log(ele.landing_legs.number)} */}
                <h4>{ele.country}</h4>
                <h1>{ele.rocket_name}</h1>
                <button onClick={() => {
                  navigate(`/v3/rockets/${ele.rocket_id}`)
                }}>Details</button>
              </div>
            </div>
          })}
           </div> 
         : engine > 0 ? 
         <div>
            {enginAr.map((ele) => {
            return <div className='rockets-banner' style={{ backgroundImage: `url(${ele.flickr_images[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', }} >
              <div className="details">
                {/* { console.log(ele.landing_legs.number)} */}
                <h4>{ele.country}</h4>
                <h1>{ele.rocket_name}</h1>
                <button onClick={() => {
                  navigate(`/v3/rockets/${ele.rocket_id}`)
                }}>Details</button>
              </div>
            </div>
          })}
         </div> 
         : height > 0 ? 
         <div>
            {filterAr.map((ele) => {
            return <div className='rockets-banner' style={{ backgroundImage: `url(${ele.flickr_images[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', }} >
              <div className="details">
                {/* { console.log(ele.landing_legs.number)} */}
                <h4>{ele.country}</h4>
                <h1>{ele.rocket_name}</h1>
                <button onClick={() => {
                  navigate(`/v3/rockets/${ele.rocket_id}`)
                }}>Details</button>
              </div>
            </div>
          })}
         </div> 
         : 
         <div>
            {data.map((ele) => {
            return <div className='rockets-banner' style={{ backgroundImage: `url(${ele.flickr_images[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', }} >
              <div className="details">
                <h4>{ele.country}</h4>
                <h1>{ele.rocket_name}</h1>
                <button onClick={() => {
                  navigate(`/v3/rockets/${ele.rocket_id}`)
                }}>Details</button>
              </div>
            </div>
          })}
         </div>































        // legs > 0 ? <div>
        //   {legsAr.map((ele) => {
        //     return <div className='rockets-banner' style={{ backgroundImage: `url(${ele.flickr_images[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', }} >
        //       <div className="details">
        //         {/* { console.log(ele.landing_legs.number)} */}
        //         <h4>{ele.country}</h4>
        //         <h1>{ele.rocket_name}</h1>
        //         <button onClick={() => {
        //           navigate(`/v3/rockets/${ele.rocket_id}`)
        //         }}>Details</button>
        //       </div>
        //     </div>
        //   })}
        // </div> : <div>
        //   {filterAr.map((ele) => {
        //     return <div className='rockets-banner' style={{ backgroundImage: `url(${ele.flickr_images[1]})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', }} >
        //       <div className="details">
        //         {/* { console.log(ele.landing_legs.number)} */}
        //         <h4>{ele.country}</h4>
        //         <h1>{ele.rocket_name}</h1>
        //         <button onClick={() => {
        //           navigate(`/v3/rockets/${ele.rocket_id}`)
        //         }}>Details</button>
        //       </div>
        //     </div>
        //   })}
        // </div>
      }
    </div>
  )
}
export default HomePage