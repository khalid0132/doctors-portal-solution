// import React from 'react';

// const Testimonial = (props) => {
//     const {quote,name,from ,img} = props.testimonial;
//     return (
//         <div className="card shadow-sm">
//             <div className="card-body">
//                 <p className="card-text text-center">{quote}</p>
//             </div>
//             <div className="card-footer d-flex  align-items-center">
//                 <img className="mx-3" src={img} alt="" width="60"/>
//                 <div>
//                     <h6 className="text-primary">{name}</h6>
//                     <p className="m-0">{from}</p>
//                 </div>
//             </div>
//        </div>
//     );
// };

// export default Testimonial;

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Testimonial = ({testimonial}) => {
    const {quote, name, from, img} = testimonial;
    return (
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
        <Card.Img variant="top" src={img} width="30px" height="25%" />
        <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Title className="text-center">{from}</Card.Title>
            <Card.Text className="font-weight-bold">{quote}</Card.Text>
            
        </Card.Body>
    </Card>

        // <div className="card shadow-sm">
        //     <div className="card-body">
        //         <p className="card-text text-center">{quote}</p>
        //     </div>
        //     <div className="card-footer d-flex  align-items-center">
        //         <img className="mx-3" src={img} alt="" width="60"/>
        //         <div>
        //             <h6 className="text-primary">{name}</h6>
        //             <p className="m-0">{from}</p>
        //         </div>
        //     </div>
        // </div> 
   );
};

export default Testimonial;