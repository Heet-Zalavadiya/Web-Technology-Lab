function Item({ name, isDisplay }) {
  return (
    <li className="item">
      {name} {isDisplay && '✅'}
    </li>
  )
}




function App() {
  return (
    <>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isDisplay={true}
          name="Space suite"
        />
        <Item
          isDisplay={true}
          name="Helmet with golden leaf"
        />
        <Item
          isDisplay={false}
          name="Photo of Tam"
        />
      </ul>
    </>
  )
}

export default App
