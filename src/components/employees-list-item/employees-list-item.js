import './employees-list-item.css'
import { Component } from 'react';

function EmployeesListItem(){
<div className="list-group-item d-flex justify-content-between">
    <span className="list-group-item-label">Федор Петров</span>
    <input type="text" name="" id="" className="list-group-item-input"/>
    <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm">
            <i className="fas fa-coookie"></i>
        </button>
        <button className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
    </div>
    
</div>
}


export default EmployeesListItem;