import React from 'react'
import { UserContext } from '../context/Newcontext'
import { useContext } from 'react'

function User2() {
    const {userOne} = useContext(UserContext)
    return (
      <div>
          hello
          {userOne}
        
      </div>
    )
}

export default User2
