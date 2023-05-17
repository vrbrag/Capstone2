import React from 'react';
import { Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserTable from './UserTable';

function Profile() {


   return (
      <div className="Profile">
         <h1 className="list-title">profile</h1>

         <Card className="card-body">
            <UserTable />
         </Card>


         <Link to={`/profile-edit`}>
            <Button
               className="btn"
               outline color="warning"
               size="sm"
            >
               edit
            </Button>
         </Link>

      </div>
   )
}

export default Profile;