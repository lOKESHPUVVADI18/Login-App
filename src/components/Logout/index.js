// Write your code here

import './index.css'

const LogOut = props => {
  const {logout} = props
  return (
    <button onClick={logout} type="button" className="button">
      Logout
    </button>
  )
}

export default LogOut
