# Projeto-NLW-05-NodeJS

O Chatty é um chat para atendimento de clientes em tempo real.

## Tecnologias

* [Socket.io](https://socket.io/),
* [Express](https://expressjs.com/), 
* [SQLite3](https://www.sqlite.org/index.html), 
* [TypeORM](https://typeorm.io/),
* [Typescript](https://www.typescriptlang.org/).

## Routes

### Creation Message ("/messages")
```json
{
  "admin_id?": "1535149",
  "text": "Hi, How are you?",
  "user_id": "1235446"
}
```

### Show By User Messages ("/messages/:id")

###  Creation Settings ("/settings")

```json
{
  "chat": "asdfsaf asdfsadf aasdfasdfasdf",
  "username": "user123"
}
```

### Find By Username Settings ("/settings/:username")

### Update Settings ("/settings/:username")

```json
  {
    "chat": "asdasda asdasd asdad asdad"
  }
```

### Creation User ("/users")

```json
  {
    "email": "test@test.com"
  }
```






