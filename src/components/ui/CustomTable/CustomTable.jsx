import React from 'react'
import {Table} from 'react-bootstrap'
import CustomModal from '../Modals/CusomModals'
function CustomTable({data}) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
            <th>street</th>
            <th>suite</th>
            <th>city</th>
            <th>zipcode</th>
            <th>lat</th>
            <th>lng</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
            <th>catchPhrase</th>
            <th>bs</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(el => 
            <tr>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
            <td>{el.address.street}</td>
            <td>{el.address.suite}</td>
            <td>{el.address.city}</td>
            <td>{el.address.zipcode}</td>
            <td>{el.address.geo.lat}</td>
            <td>{el.address.geo.lng}</td>
            <td>{el.phone}</td>
            <td>{el.website}</td>
            <td>{el.company.name}</td>
            <td>{el.company.catchPhrase}</td>
            <td>{el.company.bs}</td>
            <td><CustomModal myData={el} /></td>
          </tr>
          )}
          
        </tbody>
      </Table>
    </div>
  )
}

export default CustomTable