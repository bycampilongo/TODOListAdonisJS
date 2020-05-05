'use strict'

const Task = use('App/Models/Task')

class TaskController {
     
    
   async index({ view }) {

        const tasks = await Task.all()

        return view.render('tasks', { title: 'Latest Tasks', tasks: tasks.toJSON() })
     }

     add = ({view}) => view.render('add')

     async store({request, response, session}){
         const task = new Task()

         task.title = request.input('title')
         task.body = request.input('body')

         await task.save()

         session.flash({ notification: 'Task Added!'})

         return response.redirect('/tasks')
     }

    show = async ({ params, view }) => {
        const task = await Task.find(params.id)

        return view.render('show_task',{ task })
    }

    edit = async ({ view, params }) => {
        const task = await Task.find(params.id)

        return view.render('edit_task',{ task })
    }

    update = async ({request, response, session }) => {

        await Task.query().where('id',request.input('id')).update({
            title: request.input('title'),
            body: request.input('body') 
        })
        
        session.flash({ notification: 'Task Updated!'})

        return response.redirect('/tasks')
    }
    
    delete = async ({params, response, session }) => {
        const task = await Task.find(params.id)
        
        await task.delete()
        session.flash({ notification: 'Task Removed!'})

        return response.redirect('/tasks')
    }
}

module.exports = TaskController
