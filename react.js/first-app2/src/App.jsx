import { createContext, useEffect } from "react";

const App= () =>{


   const handleClick=()=>{
    console.log("clicked")
      
    }


    const [name, setName]= usestate("");
  return(

   

    <>
    <button onClick={handleClick}>click me</button>


    <card fullname="vikas" age="25"/>


    <child name={name} setName={setName}/>
    <p>the value that is coming from child is : {name}</p>



    




    



    
    </>

  )

}

export default App;



// async and await 
// const data = async ()=>{

//   try{
//     const data1= await fetch('https..........');

//     if(!data1.ok){
//       console.log('error');
//     }

//     const json= await data1.json();
//     console.log(json);
//   } catch(err){
//     console.log(err);
//   }
// }

// data()


// context API

// parent class
// export const postman = createContext();
// const App=()=>{

//   let data ={
//     fname:"vikas",
//   };

//   return(
//     <div>
//       <postman.prover value={data}> <parent/> </postman.prover>
//     </div>
//   );
// };

// export dafault App;



// child element

// const child2=()=>{
//   const data =UseContext(postman);
//   console.log(data);
//   return <div>child2</div>
// };

// export default child2;




// custom hooks
// const custom =(url)=>{

//   const[data,setData]=useState(null);

//   useEffect(()=>{
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>setData(data));
//   },[url]);
// return [data];
// };

// export default custom;

// App.jsx

//const App=()=>{

  // const [data]=custom("");
  // console.log(data);


//   return(
{/* <div>app</div> */}
//     
//   );
// };

// export dafault App;


//hook to push in local storage
//practice routing







