// Imports
import Head from 'next/head'
import {useState} from 'react'
import Expenses from '../Components/Expenses'
import HomePage from '../Components/HomePage'
import RightBar from '../Components/RightBar'


// Main Function
const Home = () => {

  const [isExpensesOpened, setIsExpensesOpened] = useState(false);
  const ExpensesOpener = () => {
    setIsExpensesOpened(true);
  }

  return (
    <div>
      <Head>
        <title>Ali Omar- Main Page</title>
        <meta name="description" content="Ali Omar - Main Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RightBar title='Main Page' ExpensesOpener={ExpensesOpener} setIsExpensesOpened={setIsExpensesOpened}/>
      <HomePage isExpensesOpened={isExpensesOpened} setIsExpensesOpened={setIsExpensesOpened} ExpensesOpener={ExpensesOpener}/>
      {isExpensesOpened && <Expenses setIsExpensesOpened={setIsExpensesOpened}/>}
    </div>
  )
}


// Export
export default Home;