//SyncHook钩子是同步的.

class SyncHook { 
  constructor(args) { //args ===> ['name']
    this.tasks = []
  }
  call(...args) {
    this.tasks.forEach((task) => task(...args))
  }
  tap(name, task) {
    this.tasks.push(task)
  }
}

let hook = new SyncHook([])
hook.tap('react', function() {

})

hook.call('jw')