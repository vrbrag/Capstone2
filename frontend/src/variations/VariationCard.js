import React from 'react'
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function VariationCard({ id, title, image }) {
   return (
      <div>
         <div className="VariationCard">
            <Card className="card-body">
               <div>
                  <Table>
                     <thead>
                        <tr>
                           <th>
                              <Link to={`/variation/${id}`}>
                                 <CardTitle className="card-title">{title}</CardTitle>
                              </Link>
                           </th>
                           <td>

                           </td>
                           <td className="fav-log-btns">
                              <img
                                 alt={title}
                                 src={image}
                              />

                           </td>
                        </tr>
                     </thead>
                  </Table>
               </div>
            </Card>
         </div>
      </div>
   )
}

export default VariationCard;