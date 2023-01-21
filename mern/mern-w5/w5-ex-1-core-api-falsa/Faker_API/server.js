

// Express JS
const express = require("express");
const app = express();
const PORT = 8000;
    

app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );

//Faker API
const { faker } = require('@faker-js/faker');

//Datos a ser creados aleatoriamente
class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.password = faker.internet.password();
    }
}


class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.name()
        this.Address = {
            street : faker.address.street(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        };
    }
  }


//API ROUTES
app.get("/api", (req, res) => {
    res.json({ message: "Hello World API" });
});
app.get("/api/users/new", (req, res) => {
    res.json(new User);
    res.sendStatus(200);
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
});
app.get("/api/user/company", (req, res) => {
    res.json(  {user: new User, company: new Company}  );
});

