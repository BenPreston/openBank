import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../_actions'

import './homePage.css'

function HomePage () {
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.getAll())
  }, [])

  return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Welcome {user.username}!</h1>
            <img src="https://thumbs.gfycat.com/PowerfulAfraidBluebottle-max-1mb.gif" alt="duckTalesBank"/>
            <p>If you made it this far I was going to try and do some cool stuff related to the bank. But sadly I didn't even have time to get the whole thing finished. </p>
            <p>I would have properly cleaned up my code, finished the dual language implementation so it's in Spanish and English ... and resolved the colour number issue at the top with state. I sadly just ran out of time. I would love to show you more at interview though!</p>

            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
  )
}

export { HomePage }
