// Imports
import Head from 'next/head'
import RightBar from '../Components/RightBar'
import AddDestinationsPage from '../Components/AddDestinationsPage'


// Main Function
const AddDestinations = () => {
  return (
    <div>
      <Head>
        <title>Ali Omar - Destinations</title>
        <meta name="description" content="Ali Omar - Destinations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Destinations'/>
      <AddDestinationsPage />
    </div>
  )
}


// Export
export default AddDestinations;