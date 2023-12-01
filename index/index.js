const {add,displayAll,update,updateMany,remove}=require("../library/libraries");


const Newbook={
    
    id: 5,
    title: '1930', 
   author: 'George arlol', 
   year: 1944 

    
}
add (Newbook);
displayAll();
update(1,"author","athors");

const tobeupd ={
    id: 3,
     title: '1984', 
    author: 'George Orwell', 
    year: 1949 
    
   

};
updateMany(3,tobeupd);

remove(1);
