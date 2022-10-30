import React from 'react'
import Axios from 'axios'


class Student extends React.Component{
    state={
        students:[]
    }
    componentDidMount = ()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response.data);
            this.setState({students:response.data})
        }).catch()
    }
    render(){
        return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <table className='table table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.length > 0 ?
                                 <>
                                 {
                                    this.state.students.map((student, index)=>{
                                        return <tr key={index}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                        </tr>
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
export default Student