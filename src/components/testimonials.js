import React from "react"
import TestimonialsJSON from "../../content/testimonials.json"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class Testimonials extends React.Component {
  render () { return (
    <div className="testimonials row justify-content-center" >
      <h3 >   Testimonials   </h3>
      
      <Carousel className="col-12 col-md-8 testimonial__carousel">
        {TestimonialsJSON.map((data, index) => {
          return  <div className="card p-5 text-center">
            <p> <img src={data.image} alt="testimonial" width="32 px"/> </p>
            <p> 
              <i> <q>
                {data.text}
              </q> </i>
            </p> 
            <p> {data.author} <br/>  <small>{data.position}</small> </p> 
          </div>
        })}
      </Carousel>
    </div>
  ) }
}