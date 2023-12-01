
   
    const{booksDatabase}=require("../db/database");

    // function add new book
    const add =(Newbook)=>{
        Newbook.id=booksDatabase.length+1;
        booksDatabase.push(Newbook);
        console.log("/newbooks/n");
        console.log(booksDatabase);
     } 
    // function display all bboks
    const displayAll=()=>{
        console.log("\n all books without removing any one\n");
        console.log(booksDatabase);
    }
    // function Updates the books
    const update=(id,key,value)=>{
        var exists=booksDatabase.find(ele=>ele.id===id);
        if (!exists) {
            console.log("books not found\n");
        }
        else{
           
            exists[key]=value;
            
            console.log("books information updated\n");
            console.log(exists);
    
        }
    }
    
    // function that updates many books
    const updateMany=(id,obj)=>{
       
        var exists=booksDatabase.find(ele=>ele.id===id);
        if (!exists) {
            console.log("books not found\n");
        }
        else{
            for(key in obj){
                exists[key]=obj[key];  
            }
            
            console.log("all books are removed\n");
            console.log(exists);
    
        }
    };
    const remove=(id)=>{
        var exists=booksDatabase.find(ele=>ele.id===id);
        if (!exists) {
          console.log("books not found\n");
      
          
        } else {
          var remaining=[];
          remaining=booksDatabase.filter(ele=>ele.id!==id);
          console.log(remaining);
          
        }  
      }
      
      
      module.exports={
       
         add,
         displayAll,
         update,
         updateMany,
         remove
      }
    