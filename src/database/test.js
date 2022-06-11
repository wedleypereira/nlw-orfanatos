const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
   // inserir dados na tabela
  await saveOrphanage(db,  {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    whatsapp: "(15)99858-3585",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
        "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1598749953342-b4ee75629dca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ],
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h até 18h",
    open_on_weekends: "0"
})
   
   // consultar dados da tabela  
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   // consultar somente 1 orfanato pelo id
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
   console.log(orphanage) 

   // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})