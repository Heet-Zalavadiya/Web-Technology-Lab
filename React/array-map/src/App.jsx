function App() {

  const Faculty = [
    {
      name: "arjun",
      subject: "Web Technology"
    },
    {
      name: "nilesh",
      subject: "Machine Learning"
    },
    {
      name: "vishal",
      subject: "C language"
    },
    {
      name: "shruti",
      subject: "Data Structure"
    }
  ]
  return (
    <>
      {
        
        Faculty.map((temp) => {
          return (
            <>
              <li class="list-group-item">Faculty name : {temp.name} <br/> Faculty subject : {temp.subject}</li>
            </>)
        })
      }
    </>
  )
}

export default App
