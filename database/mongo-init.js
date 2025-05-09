db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: 'todos' }]
});

db = db.getSiblingDB('todos');
db.todos.insertMany([
  { title: 'Learn Docker', completed: false },
  { title: 'Learn Kubernetes', completed: false }
]);

