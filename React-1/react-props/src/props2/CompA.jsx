import React from 'react'

import CompB from './CompB'

class CompA extends React.Component{
    id=102;
    name="Sai"
    arr = [45,56,67,78]
    students = {
        marks:99,
        grade:"A",

    }
    render(){
        return <div>
            <h1>Component A</h1>
            <h4>StudentId = {this.id}</h4>
            <h3>StudentName = {this.name}</h3>
            <h2>StudentMarks = {this.students.marks}</h2>
            <h3>Array = {this.arr[1]}</h3>
            <hr />
            <CompB  collegeName={"jagans College"} collegeId={"Jcet"} empId={this.id} empDetails={this.students} />
        </div>
    }
}
export default CompA