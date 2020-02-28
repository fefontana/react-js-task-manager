import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Container.css'
import './FormNewTask.css'
import { Modal } from 'react-bootstrap';
// data
import { tasks } from './datatasks.json';

// subcomponents
import TaskForm from './TaskForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  removeTask(index) {
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

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

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (

          <div className="row">

                          <div className="col-5">{task.tarea}</div>
                          <div className="col-2">{task.asignada}</div>
                          <div className="col-1">{task.prioridad}</div>
                          <div className="col-3">

                            <button type="button" className="btn btn-outline-warning">Edit</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.removeTask.bind(this, i)}>Delete</button>

                          </div>

          </div>

      )
    });

    // RETURN THE COMPONENT
    return (
    <div className="App">
      <header className="App-header">
        Administrador de Tareas
      </header>
          <div className="container Container-marginTop Container-color">


              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <Modal.Title>Agregar Nueva Tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="form-group">

                      <form onSubmit={this.handleSubmit}>
                        <label>
                          Describa tarea:
                          <input name="tarea" type="text" />
                        </label>
                        <input type="submit" value="Submit" />
                      </form>
                                
                    </div>

                </Modal.Body>
              </Modal>

          <div className="col-12">

            <div className="row">

              <div className="col-9">
                  <h3 className="FormNewTask-header">Tareas - Total [{this.state.tasks.length}]</h3>
              </div>
              <div className="col-3">
                  <button type="button" className="btn btn-success FormNewTask-button" onClick = {this.handleShow}>Agregar Nueva</button>
              </div>

            </div>
            
            <div className="row">
                <TaskForm className="col-12" onAddTask={this.handleAddTask}></TaskForm>
            </div>
            
            {tasks}

          </div>
        </div>

          <footer>
            <p>powered by NodeJS - ReactJS - Bootstrap</p>
          </footer>
      </div>
    );
  }
}

export default App;