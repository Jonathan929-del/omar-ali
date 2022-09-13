// Imports
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'



// Styles
const ExpensesContainer = styled.section`
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    position:absolute;
    align-items:center;
    justify-content:center;
    background-color:#000000a1;
`
const Page = styled.div`
    width:500px;
    height:600px;
    display:flex;
    position:relative;
    align-items:center;
    border-radius:10px;
    flex-direction:column;
    border:2px solid #000;
    background-color:#fff;
    justify-content:space-evenly;
`
const Header = styled.h2`
    font-size:35px;
    font-weight:400;
    background-color:transparent;
`
const Table = styled.div`
  width:90%;
  display:flex;
  overflow:hidden;
  border-radius:10px;
  flex-direction:column;
  border:1px solid #000;
  background-color:transparent;
`
const TableTop = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
`
const TableTopItem = styled.p`
  width:33.3%;
  height:100%;
  display:flex;
  font-size:18px;
  padding:20px 0;
  font-weight:400;
  align-items:center;
  justify-content:center;
  background-color:#ecedee;
  border-left:1px solid #000;
`
const TableBottom = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
`
const TableBottomItem = styled.p`
  width:33.3%;
  height:100%;
  display:flex;
  font-size:15px;
  padding:20px 0;
  font-weight:500;
  align-items:center;
  justify-content:center;
  border-top:1px solid #000;
  background-color:transparent;
  border-left:1px solid #000;
`
const FirstListItem = styled.a`
    width:200px;
    padding:10px;
    display:flex;
    cursor:pointer;
    font-size:18px;
    font-weight:500;
    color:#367bf5;
    align-items:center;
    border-radius:20px;
    text-decoration:none;
    justify-content:center;
    background-color:#fff;
    box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);
`
const Total = styled.div`
    width:70%;
    display:flex;
    padding:10px;
    font-size:20px;
    font-weight:500;
    align-items:center;
    border-radius:10px;
    justify-content:center;
    border:1px solid #000;
    background-color:#fff;
`
const CloseIcon = styled.span`
    top:40px;
    right:30px;
    cursor:pointer;
    font-size:20px;
    position:absolute;
    background-color:transparent;
`



// Main Function
const Expenses = ({setIsExpensesOpened}) => {
  return (
    <ExpensesContainer>
        <Page>
            <Header>كل المصاريف</Header>
            <CloseIcon onClick={() => {setIsExpensesOpened(false)}}>x</CloseIcon>
            <Table>
              <TableTop>
                <TableTopItem>النوع</TableTopItem>
                <TableTopItem>التاريخ</TableTopItem>
                <TableTopItem>القيمة</TableTopItem>
                <TableTopItem>التفاصيل</TableTopItem>
              </TableTop>
              <TableBottom>
                <TableBottomItem>مكتبي</TableBottomItem>
                <TableBottomItem>1/1/2021</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>عمر احمد</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>مكتبي</TableBottomItem>
                <TableBottomItem>1/1/2021</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>عمر احمد</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>مكتبي</TableBottomItem>
                <TableBottomItem>1/1/2021</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>عمر احمد</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>مكتبي</TableBottomItem>
                <TableBottomItem>1/1/2021</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>عمر احمد</TableBottomItem>
              </TableBottom>
            </Table>
            <FirstListItem>
                اضافة مصاريف<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
            </FirstListItem>
            <Total><p style={{color:'#336cfb', marginRight:'10px'}}>6660</p> = الاجمالي</Total>
        </Page>
    </ExpensesContainer>
  )
}



// Export
export default Expenses