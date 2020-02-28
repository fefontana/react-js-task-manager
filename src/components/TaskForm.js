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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.setState({
      tarea: '',
      asignada: '',
      prioridad: ''
    });
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
      <div className="form-inline">
        <form onSubmit={this.handleSubmit}
          className="form-row was-validated">

          <div className="form-group">

          <input
            type="text"
            id="title"
            name="tarea"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.tarea}
            placeholder="Descripcion de tarea"
            required
            />
          </div>
            
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
          
          <div className="form-group">
            <input
              type="text"
              name="asignada"
              className="form-control"
              value={this.state.asignada}
              onChange={this.handleInputChange}
              placeholder="Responsable asignado"
              required
              />
          </div>

          <div className="form-group">
            <select
                name="prioridad"
                className="form-control"
                value={this.state.prioridad}
                onChange={this.handleInputChange}
                placeholder="Prioridad"
              >
              <option></option>
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
          
        </form>

      </div>
    )
  }

}

export default TaskForm;