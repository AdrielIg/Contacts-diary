
const FormLog = (props) => {


  return (
    <div className='form-wrapper'>
      <form className='form-log' onSubmit={props.submitHandler}>
        <h2>{props.title}</h2>
        <label htmlFor={props.idUser} >Username:</label>
        <input type='text' placeholder='Username' name='username' id={props.idUser} onChange={props.onChangeUsername} />
        <label htmlFor={props.idPass} >Password:</label>
        <input type='password' placeholder='Password' name='password' id={props.idPass} onChange={props.onChangePassword} />
        <div className='buttons'>
          <a className='form-to' href={props.linkTo}>{props.anchor}</a>
          <input className='form-submit' type='submit' value={props.buttonName} />

        </div>

      </form>
    </div>
  )
}

export default FormLog