import React, { Component } from 'react';

class TaskForm extends Component {
  constructor () {
    super();
    this.state = {
      tarea: '',
      asignada: '',
      prioridad: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
/*
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    */
  }
/*
  handleClose(){
    this.setState({
      show : false
    })
  }

  handleShow(){
    this.setState({
      show : true
    })
  }
*/
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.setState({
      tarea: '',
      asignada: '',
      prioridad: '',
    });
    //this.handleClose();
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (


    <form className="needs-validation" onSubmit={this.handleSubmit} novalidate>
      <div className="form-row">

        <div className="col-md-4 mb-3">

          <label for="title">Tarea</label>
          <input type="text" id="title" name="tarea" placeholder="Descripcion de tarea" onChange={this.handleInputChange} value={this.state.tarea}
            required/>
          <div className="valid-feedback">
            Looks good!
          </div>

        </div>

        <div className="col-md-4 mb-3">

          <label for="resp">Asignado</label>
          <input type="text" id="resp" name="asignada" placeholder="Responsable asignado" value={this.state.asignada} onChange={this.handleInputChange}
            required/>
          <div className="valid-feedback">
            Looks good!
          </div>

        </div>

        <div className="col-md-4 mb-3">

          <label for="prior">Prioridad</label>

          <select className="custom-select browser-default" 
            name="prioridad"
             value={this.state.prioridad}
            onChange={this.handleInputChange}
            placeholder="Prioridad"
            required>

            <option></option>
            <option>Baja</option>
            <option>Media</option>
            <option>Alta</option>
          </select>
          <div className="invalid-feedback">Invalid select feedback</div>

        </div>

      </div>
      
      <button className="btn btn-primary btn-sm" type="submit">Submit form</button>
    </form>

    )
  }

}

export default TaskForm;

