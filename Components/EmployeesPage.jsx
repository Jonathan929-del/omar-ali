// Imports
import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import {IoMdAddCircle} from 'react-icons/io'



// Styles
const EmployeesContainer = styled.section`
    height:100%;
    display:flex;
    padding:20px 0;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width:calc(100vw - 300px);
`
const SearchContainer = styled.div`
    width:95%;
    height:50px;
    display:flex;
    position:relative;
    align-items:center;
    border-radius:50px;
    background-color:#fff;
`
const SearchIcon = styled(BsSearch)`
    font-size:25px;
    margin-left:30px;
`
const Search = styled.input`
    width:100%;
    height:100%;
    border:none;
    outline:none;
    text-align:center;
    background-color:transparent;
`
const Page = styled.section`
  width:100%;
  display:flex;
  margin-top:30px;
  flex-direction:column;
  padding:20px 50px 0 50px;
`
const Top = styled.div`
  display:flex;
  justify-content:flex-end;
  background-color:transparent;
`
const TopText = styled.p`
  font-size:25px;
  font-weight:500;
  background-color:transparent;
`
const MainBox = styled.div`
  height:90%;
  margin-top:20px;
  border-radius:10px;
  background-color:transparent;
`
const Section = styled.div`
  width:100%;
  display:flex;
  border-radius:10px;
  align-items: center;
  flex-direction:column;
  background-color:transparent;
`
const Table = styled.div`
  width:100%;
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
  font-size:22px;
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
  font-size:19px;
  padding:20px 0;
  font-weight:500;
  align-items:center;
  justify-content:center;
  border-top:1px solid #000;
  background-color:transparent;
  border-left:1px solid #000;
`
const FirstListItem = styled.li`
    width:200px;
    padding:10px;
    display:flex;
    cursor:pointer;
    font-size:18px;
    font-weight:500;
    color:#367bf5;
    align-items:center;
    border-radius:20px;
    margin:40px 0 60px 0;
    justify-content:center;
    background-color:#fff;
    box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);
`




// Main Function
const EmployeesPage = () => {
  return (
    <EmployeesContainer>
        <SearchContainer>
            <SearchIcon />
            <Search placeholder='بحث'/>
        </SearchContainer>
        <Page>
        <Top>
          <TopText>كل الموظفين</TopText>
        </Top>
        <MainBox>
          <Section>
            <Table>
              <TableTop>
                <TableTopItem>الوظيفة</TableTopItem>
                <TableTopItem>رقم الهاتف</TableTopItem>
                <TableTopItem>العنوان</TableTopItem>
                <TableTopItem>اسم الموظف</TableTopItem>
              </TableTop>
              <TableBottom>
                <TableBottomItem>مسؤول</TableBottomItem>
                <TableBottomItem>012054518364</TableBottomItem>
                <TableBottomItem>الهرم الجيزة</TableBottomItem>
                <TableBottomItem>علي عمر</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>مسؤول</TableBottomItem>
                <TableBottomItem>012054518364</TableBottomItem>
                <TableBottomItem>الهرم الجيزة</TableBottomItem>
                <TableBottomItem>علي عمر</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>مسؤول</TableBottomItem>
                <TableBottomItem>012054518364</TableBottomItem>
                <TableBottomItem>الهرم الجيزة</TableBottomItem>
                <TableBottomItem>علي عمر</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>مسؤول</TableBottomItem>
                <TableBottomItem>012054518364</TableBottomItem>
                <TableBottomItem>الهرم الجيزة</TableBottomItem>
                <TableBottomItem>علي عمر</TableBottomItem>
              </TableBottom>
            </Table>
          </Section>
        </MainBox>
      </Page>
      <FirstListItem>
          اضافة عامل<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
      </FirstListItem>      
    </EmployeesContainer>
  )
}



// Export
export default EmployeesPage