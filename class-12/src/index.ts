interface Users {
    id: string;
    name: string;
    age: number;
    email:string;
    password: string;
}

//when you dont want to alter any variables
interface ReadOnlyUser {
    readonly id: string;
    readonly name: string;
    readonly age: number;
    readonly email:string;
    readonly password: string;
}

//Another way of doing readonly is 

const ReadOnlyUsers : Readonly <Pick < Users, 'name' | 'age' > >  = {
    name: 'Harshit',
    age: 21,
}

type User = Pick < Users, 'name' | 'age' > //allow user to pick subset property or needed one

type partialUser = Partial < Users > // make properties optional

function sumOfAge(user1:User, user2:User){
    return user1.age + user2.age;
}

const age = sumOfAge({name: 'Harshit Gautam', age: 24},{name:"Krishna", age: 25});
console.log(age);

//--------------Record allows cleaner way to add type to objects------------------------

type RecordUser = Record <string, User>

const recordUser : RecordUser = {
    'harshit@1812': {name: 'Harshit', age:24},
    'gautam@1812': {name: 'Gautam', age:24}
}

// -----------------------MAP ----------------------------

const MapUSer = new Map <string, User>()
MapUSer.set("krish@01",{name:"Krishna",age:999})
const data = MapUSer.get("krish@01")
console.log(data)

// -----------------------------Exclude------------------

type EventType = 'click' | 'scroll'| 'mousehover';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling Event: ${event}`);
}

handleEvent('click');

// -------------------------------zod --------------------------

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);