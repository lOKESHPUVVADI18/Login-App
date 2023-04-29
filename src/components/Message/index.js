// Write your code here

import './index.css'

const Message = props => {
  const {value} = props
  return value ? (
    <h1 className="heading">Welcome User</h1>
  ) : (
    <h1 className="heading">Please Login</h1>
  )
}

export default Message
