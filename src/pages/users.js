import React from 'react';
import Table from 'react-bootstrap/Table'
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
/>
class GetUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            // isLoaded: false,
            loading: true,

            homes: []
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        homes: result.data,
                        loading: false

                    });
                    console.log("res", this.state.homes)
                },
                // error handler
                (error) => {
                    this.setState({
                        loading: true,

                        error
                    });
                }
            )
    }

    render() {

        return (
            <div style={{backgroundColor:'#ccd9ff'}}>
                {this.state.loading ?
                    <div className="container" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh'
                    }}>
                        <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    <div className="container" >
                        <div style={{
                            display: 'flex',
                            justifyContent: "center"
                            
                        }}><h1>
                                List of Users</h1></div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Image</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.homes.map((item, idx) => (
                                    <tr>
                                        <td>  {item.id}</td>
                                        <td>  {item.first_name}</td>
                                        <td>  {item.last_name}</td>
                                        <td>  {item.email}</td>
                                        <td>  <img src={item.avatar}></img></td>

                                    </tr>
                                ))}


                            </tbody>
                        </Table>
                    </div>
                }
            </div>

        );
    }
}

export { GetUsers };