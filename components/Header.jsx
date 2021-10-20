const Header = ({types}) => {
  console.log("Types: ", types)
  return (
    <div className="header">
      <p>Strapi Recipe Book</p>
      <ul>
      {types.map((type) => (
        <li>{type.type}</li>
      ))}
      </ul>
    </div>
  )
}

export default Header;