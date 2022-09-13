// Imports
import Head from 'next/head'
import RightBar from '../Components/RightBar'
import EmployeesPage from '../Components/EmployeesPage'


// Main Function
const Employees = () => {
  return (
    <div>
      <Head>
        <title>Ali Omar - Employees</title>
        <meta name="description" content="Ali Omar - Employees" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Employees'/>
      <EmployeesPage />
    </div>
  )
}


// Export
export default Employees;