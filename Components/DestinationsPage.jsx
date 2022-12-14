// Imports
import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import ReactPaginate from 'react-paginate'



// Styles
const DestinationsContainer = styled.section`
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
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
`
const Select = styled.select`
  font-size:15px;
  padding:7px 15px;
  border-radius:5px;
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




// Main Function
const DestinationsPage = () => {
  return (
    <DestinationsContainer>
        <SearchContainer>
            <SearchIcon />
            <Search placeholder='??????'/>
        </SearchContainer>
        <Page>
        <Top>
          <Select>
            <option>?????????? 12, 2016 . 2016 ,21????????????</option>
          </Select>
          <TopText>???? ??????????????</TopText>
        </Top>
        <MainBox>
          <Section>
            <Table>
              <TableTop>
                <TableTopItem>????????????</TableTopItem>
                <TableTopItem>?????????? ????????????????</TableTopItem>
                <TableTopItem>?????????? ??????????</TableTopItem>
                <TableTopItem>??????????????</TableTopItem>
                <TableTopItem>?????? ????????????</TableTopItem>
              </TableTop>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
              <TableBottom>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>14/8/2022</TableBottomItem>
                <TableBottomItem>1/3/2022</TableBottomItem>
                <TableBottomItem>?????????? ????????????</TableBottomItem>
                <TableBottomItem>???????? ??????????</TableBottomItem>
              </TableBottom>
            </Table>
          </Section>
        </MainBox>
      </Page>
      <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={3}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={''}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
        />
    </DestinationsContainer>
  )
}



// Export
export default DestinationsPage