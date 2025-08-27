
// function InnerComponent(props) {  // simple
//   return (
//     <>
//       <h1>Name = {props.name}</h1>
//     </>
//   );
// }

// function InnerComponent({name ,age = 18}) {  // destructuring
//   return (
//     <>
//       <h1>Name = {name}</h1>
//       <h1>Age = {age}</h1>
//     </>
//   );
// }

function Inner2({name, age}){
  return(
    <>
      <h1>Name = {name}</h1>
      <h1>Age = {age}</h1>
    </>
  );
}

function Inner1(props) {
  return (
    <Inner2 {...props}/>
  )
}


function App() {
  return (
    <>
      <Inner1 name = "arjun" age = "20"/>
    </>
  );
}

export default App
