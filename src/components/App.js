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
    this.handleClose();
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

     
                <div className="row" key={i}>

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


              <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <Modal.Title>Agregar Nueva Tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  <div className="row">
                      <TaskForm className="col-12" onAddTask={this.handleAddTask}></TaskForm>
                  </div>

                </Modal.Body>
              </Modal>


              <div className="row">

                  <div className="App-tasktit col-8">
                      Tareas - Total [{this.state.tasks.length}]
                  </div>

                  <div className="col-4">
                      <button type="button" className="btn btn-success" onClick = {this.handleShow}>Agregar Nueva</button>
                  </div>
              </div>
            
              <div className="App-subheader row" >
                                <div className="col-5">Tarea</div>
                                <div className="col-2">Asignada</div>
                                <div className="col-1">Prioridad</div>
                                <div className="col-3">Accion</div>
              </div>  
            {tasks}


        </div>

          <footer>
            <p>powered by NodeJS - ReactJS - Bootstrap</p>
          </footer>
    </div>
    );
  }
}

export default App;


