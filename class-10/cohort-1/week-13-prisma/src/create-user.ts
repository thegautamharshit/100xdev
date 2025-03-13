import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//   await prisma.user.create({
//     data:{
//         name:"Harshit Gautam",
//         email: "thegautamharshit@gmail.com",
//         posts:{
//             create: {title: "Learning Prisma"}
//         },
//         profile:{
//             create:{bio: "MERN fullstack developer"}
//         }
//     }
//   })

//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allUsers, { depth: null })

// const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   })
//   console.log(post)

// await prisma.user.create({
//     data:{
//         name:"Omprakash",
//         email: "om924137@gmail.com"
//     }
// })

const post = await prisma.profile.create({
    data: {
      bio: 'Soon to be a Government officer',
      user: {
        connect: { email: 'om924137@gmail.com' },
      },
    },
  })


  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })