import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function Home({ history }) {
  
  useEffect(() => {
    history.push('/docs')
  }, [])
  
  return (
    <></>
  );
}

export default withRouter(Home)