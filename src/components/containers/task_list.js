import React from 'react'
import { levels } from '../../models/levels.enum.js'
import { Task } from '../../models/task.class.js'
import TaskComponent from '../form/task.js'

///
const TaskList = () => {

    const defaultTask = new Task('example','default description',levels.normal,false);

    // const changeState = (id) =>{
    //   console.log('cambiar estado de una tarea')
    // }

    console.log(defaultTask)

  return (
    <div>
        <div>
            <h1>Your Task:</h1>
        </div>
        <div>
          {/*TODO: Aplicar un for/map para renderizar lista*/}
          <TaskComponent task={defaultTask}></TaskComponent>
        </div>

    </div>

    
  )
}



export default TaskList