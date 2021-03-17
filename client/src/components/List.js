const List = (props) => {
  const { children, name, data, renderData } = props

  return(
    <>
      <h1>{name}</h1>
      <div>
        {data.map( d => renderData(d))}
      </div>
    </>
  )
}




export default List;