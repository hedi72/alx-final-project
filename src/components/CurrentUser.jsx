import React from 'react'
import { UserContext } from '../context/Newcontext'
import { useContext } from 'react'

function CurrentUser() {
    const {userOne} = useContext(UserContext)
    return (
      <div>
          hello
          {userOne}
        
      </div>
    )
}

export default CurrentUser
