import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

// import { Project } from "./models/projects";
import { User } from "./models/user";

import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  name: 'sqlite',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  // modelPaths: ['./src/models']
});

// sequelize.addModels(['./src/models']);
sequelize.addModels([User]);

const user = User.build<User>({name: 'user1'});
user.save();

// const server = new Server();
// const app =
NestFactory.create(ApplicationModule).then(app =>
  app.listen(3000, () =>
    console.log("Application is listening on port 3000.")
  )
);
