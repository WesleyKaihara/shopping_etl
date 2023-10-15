import 'dotenv/config';
import express from "express";
import { faker } from '@faker-js/faker';

const app = express();

const PORT = Number(process.env.PORT);

app.get("/random-user", (req,res) => {
  const randomUser = {
    userId: faker.string.uuid(),
    username: faker.person.fullName(),
    registeredAt: faker.date.past()
  }

  res.json(randomUser);
})

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);  
});

export default app;
