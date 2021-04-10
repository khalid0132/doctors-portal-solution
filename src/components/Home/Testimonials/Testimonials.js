import React from 'react';
import './Testimonials.css';
import Erik from '../../../images/Erik.png';
import Elsa from '../../../images/Elsa.png';
import Ema from '../../../images/Ema.png';
import Testimonial from '../Testimonial/Testimonial';
import quote from '../../../images/quote.png'
const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
        name: 'Erik Nilsson',
        from: 'Östersund',
        img: Erik
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
        name: 'Elsa Flemingsberg',
        from: 'Södertälje',
        img: Elsa
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
        name: 'Ema Eriksson',
        from: 'Stockholm',
        img: Ema
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary uppercase">Testimonial</h5>
                    <h1>What's Our Patients <br/>Says</h1>
                </div>
                <div className="card mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Testimonials;