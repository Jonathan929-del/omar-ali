// Imports
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'



// Styles
const AllEmployeesContainer = styled.section`
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
const AllEmployees = ({setIsAllEmployeesOpened}) => {
  return (
    <AllEmployeesContainer>
        <Page>
            <Header>كل العمال</Header>
            <CloseIcon onClick={() => {setIsAllEmployeesOpened(false)}}>x</CloseIcon>
            <Table>
              <TableTop>
                <TableTopItem>الاجمالي</TableTopItem>
                <TableTopItem>الايام</TableTopItem>
                <TableTopItem>الوظيفة</TableTopItem>
                <TableTopItem>الاسم</TableTopItem>
              </TableTop>
              <TableBottom>
                <TableBottomItem>980</TableBottomItem>
                <TableBottomItem>12</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>ابراهيم السيد</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>980</TableBottomItem>
                <TableBottomItem>12</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>ابراهيم السيد</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>980</TableBottomItem>
                <TableBottomItem>12</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>ابراهيم السيد</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>980</TableBottomItem>
                <TableBottomItem>12</TableBottomItem>
                <TableBottomItem>عامل</TableBottomItem>
                <TableBottomItem>ابراهيم السيد</TableBottomItem>
              </TableBottom>
            </Table>
            <FirstListItem>
                اضافة عامل<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
            </FirstListItem>
            <Total><p style={{color:'#336cfb', marginRight:'10px'}}>12340</p> = الاجمالي</Total>
        </Page>
    </AllEmployeesContainer>
  )
}



// Export
export default AllEmployees