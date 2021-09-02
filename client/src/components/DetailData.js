const DetailData = (props) => {

  return (
    <div className='data-container'>
      <i className={props.icon}></i>
      <p>{props.data || '-'}</p>
    </div>
  )
}

export default DetailData