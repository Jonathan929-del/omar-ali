// Imports
import Head from 'next/head'
import RightBar from '../Components/RightBar'
import StatisticsPage from '../Components/StatisticsPage'


// Main Function
const Statistics = () => {
  return (
    <div>
      <Head>
        <title>Ali Omar - Statistics</title>
        <meta name="description" content="Ali Omar - Statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Statistics'/>
      <StatisticsPage />
    </div>
  )
}


// Export
export default Statistics;