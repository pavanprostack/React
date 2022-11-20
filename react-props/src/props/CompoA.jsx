import React from 'react'
import CompoB from './CompoB'

let CompoA = ()=>{
    let a=10;
    let arr=[12,23,34,45]
    let emp={
         id:102,
         name:'pavan',
         salary:45000
    }
    return <div>
        <h1>Component A</h1>
        <h3>value={a}</h3>
        <h3>employeeName = {emp.name}</h3>
        <h3>employeeSalary = {emp.salary}</h3>
        <h4>array={arr[3]}</h4>
        <hr />
        <CompoB age={25} eDetails={emp} arrElements={arr} number={a} />
    </div>
}

export default CompoA

