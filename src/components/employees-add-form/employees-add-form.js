import './employees-add-form.css';
import { Component } from 'react';


class EmployeesAddForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (evt) => {
        console.log(evt.target.name);
     
        this.setState({
            [evt.target.name] : evt.target.value
        });
        console.log(this.state);
    }

    render(){
    return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="d-flex add-form-wrapper">
                <input type="text" 
                        className="form-control add-form-input"
                        placeholder='Как его зовут?'
                        name = 'name'
                        value = {this.state.name}
                        onChange={(evt) => (this.onValueChange(evt))}/>
                <input type="text" 
                        className="form-control add-form-input"
                        placeholder='Сколько зп?'
                        name = 'salary'
                        value = {this.state.salary}
                        onChange={this.onValueChange}/>
                <button className="btn btn-outline-light"
                    type='submit'>
                        Добавить
                </button>
            </form>
        </div>
    );
    }
};

export default EmployeesAddForm;