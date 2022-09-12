// Imports
import Head from 'next/head'
import HomePage from '../Components/HomePage'
import RightBar from '../Components/RightBar'


// Main Function
const Home = () => {
  return (
    <div>
      <Head>
        <title>Omar Ali - Main Page</title>
        <meta name="description" content="Omar Ali - Main Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Main Page'/>
      <HomePage />
    </div>
  )
}


// Export
export default Home;