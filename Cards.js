import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Users from './db.json';

class Cards extends Component {
    render() {
        return (
            <div className='row'>
                {Users.map((user => (
                    <div className='col-sm-6 col-md-3'>
                        <Card>
                            <Card.Img variant="top" src="https://picsum.photos/600" />
                            <Card.Body>
                                <Card.Title style={{color:"black", cursor:"pointer"}}>{user.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                )))}

            </div>

        )
    }
}

export default Cards;