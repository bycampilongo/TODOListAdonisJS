'use strict'

class Task {
  get rules () {
    return {
      // validation rules
      title: 'required|min:3',
      body: 'required'
    }
  }

  get validateAll () {
    return true
  }


  get messages () {
    return {
      'title.required': 'Input Title is empty',
      'title.min': 'Title at least 3 characters'
    }
  }
}

module.exports = Task
