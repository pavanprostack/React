import React from 'react'
import Axios from 'axios'


class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: {}
        }
    }
    componentDidMount = () => {
        Axios.get('https://reqres.in/api/users?page=2').then((response) => {
            this.setState({ persons: response.data })
        }).catch(() => { })
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state.persons.data)}</pre>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className='table table-hover'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Avatar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.persons).length > 0 ?
                                        <>
                                            {
                                                this.state.persons.data.map((person) => {
                                                    return <>
                                                        <tr key={person.id}>
                                                            <td>{person.id}</td>
                                                            <td>{person.email}</td>
                                                            <td>{person.first_name}</td>
                                                            <td><img src={person.avatar} alt="avtr" width="30px" /></td>
                                                        </tr>
                                                    </>
                                                })
                                            }
                                        </> : null
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    }
}
export default Users