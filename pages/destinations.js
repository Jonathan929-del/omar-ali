// Imports
import Head from 'next/head'
import RightBar from '../Components/RightBar'
import DestinationsPage from '../Components/DestinationsPage'


// Main Function
const Destinations = () => {
  return (
    <div>
      <Head>
        <title>Ali Omar - Destinations</title>
        <meta name="description" content="Ali Omar - Destinations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Destinations'/>
      <DestinationsPage />
    </div>
  )
}


// Export
export default Destinations;