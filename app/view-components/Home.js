import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {document.title = `Home Page`},[])
  return (
    <div className="view-home">
      <h3>Next Launch</h3>
      {/* Launch Component */}
    </div>
  )
}

export default Home;