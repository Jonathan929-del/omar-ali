// Imports
import Head from 'next/head'
import RightBar from '../Components/RightBar'


// Main Function
const Employees = () => {
  return (
    <div>
      <Head>
        <title>Omar Ali - Employees</title>
        <meta name="description" content="Omar Ali - Employees" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Employees'/>
      Employees
    </div>
  )
}


// Export
export default Employees;