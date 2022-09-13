// Imports
import Head from 'next/head'
import styled from 'styled-components'



// Styles
const FormPage = styled.section`
    display:flex;
    padding:30px 0;
    align-items:center;
    flex-direction:column;
`
const Img = styled.img`
    width:700px;
`
const Invoice = styled.div`
    width:500px;
    padding:20px;
    display:flex;
    margin-top:50px;
    border:3px solid #000;
    justify-content:center;
`
const InvoiceContent = styled.p`

`
const Number = styled.p`
    margin-left:5px;
`
const TextSection = styled.div`
    width:80%;
    margin-top:50px;
`
const Date = styled.p`

`
const Master = styled.p`

`
const Purchase = styled.p`

`
const Table = styled.div`
    width:80%;
    height:400px;
    display:grid;
    margin-top:50px;
    border:3px solid #000;
    grid-template-rows:repeat(9, 1fr);
    grid-template-columns:repeat(18, 1fr);
    grid-template-areas:'itemNo description description description description description description description description description unit unit qty qty pricePerUnit pricePerUnit netValue netValue'
                        'itemNo description description description description description description description description description unit unit qty qty pricePerUnit pricePerUnit netValue netValue'
                        'itemNoSpace descriptionSpace descriptionSpace descriptionSpace descriptionSpace descriptionSpace descriptionSpace descriptionSpace descriptionSpace descriptionSpace unitSpace unitSpace qtySpace qtySpace pricePerUnitSpace pricePerUnitSpace netValueSpace netValueSpace'
                        'basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace'
                        'basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPrice basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace basicPriceSpace'
                        'vat vat vat vat vat vat vat vat vat vat vatSpace vatSpace vatSpace vatSpace vatSpace vatSpace vatSpace vatSpace'
                        'vat vat vat vat vat vat vat vat vat vat vatSpace vatSpace vatSpace vatSpace vatSpace vatSpace vatSpace vatSpace'
                        'totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace'
                        'totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValue totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace totalValueSpace';
`
const ItemNo = styled.p`
    display:flex;
    grid-area:itemNo;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
`
const Description = styled.p`
    display:flex;
    align-items:center;
    border:1px solid #000;
    grid-area:description;
    justify-content:center;
`
const Unit = styled.p`
    display:flex;
    grid-area:unit;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
`
const Qty = styled.p`
    display:flex;
    grid-area:qty;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
`
const PricePerUnit = styled.p`
    display:flex;
    align-items:center;
    border:1px solid #000;
    grid-area:pricePerUnit;
    justify-content:center;
`
const NetValue = styled.p`
    display:flex;
    align-items:center;
    grid-area:netValue;
    border:1px solid #000;
    justify-content:center;
`
const ItemNoSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    grid-area:itemNoSpace;
    justify-content:center;
`
const DescriptionSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
    grid-area:descriptionSpace;
`
const UnitSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    grid-area:unitSpace;
    justify-content:center;
`
const QtySpace = styled.input`
    outline:none;
    display:flex;
    align-items:center;
    grid-area:qtySpace;
    border:1px solid #000;
    justify-content:center;
`
const PricePerUnitSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
    grid-area:pricePerUnitSpace;
`
const NetValueSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
    grid-area:netValueSpace;
`
const BasicPrice = styled.p`
    display:flex;
    align-items:center;
    grid-area:basicPrice;
    border:1px solid #000;
    justify-content:center;
`
const Vat = styled.p`
    display:flex;
    grid-area:vat;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
`
const TotalValue = styled.p`
    display:flex;
    align-items:center;
    grid-area:totalValue;
    border:1px solid #000;
    justify-content:center;
`
const BasicPriceSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
    grid-area:basicPriceSpace;
`
const VatSpace = styled.input`
    outline:none;
    display:flex;
    grid-area:vatSpace;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
`
const TotalValueSpace = styled.input`
    display:flex;
    outline:none;
    align-items:center;
    border:1px solid #000;
    justify-content:center;
    grid-area:totalValueSpace;
`
const LowDatesText = styled.div`
    width:80%;
    display:flex;
    margin-top:50px;
    align-items:flex-end;
    flex-direction:column;
`
const LowDate = styled.p`

`
const LastText = styled.footer`
    display:flex;
    margin-top:50px;
    align-items:center;
    flex-direction:column;
`
const Line = styled.p`

`



// Main Function
const Home = () => {
  return (
    <FormPage>
      <Head>
        <title>Ali Omar- Form</title>
        <meta name="description" content="Ali Omar - Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Img src='/Images/Form.png'/>
      <Invoice>
        <InvoiceContent>Invoice No :</InvoiceContent>
        <Number>3</Number>
      </Invoice>
      <TextSection>
        <Date>Date:</Date>
        <Master>The Master</Master>
        <Purchase>PURSHASE ORDER NO:</Purchase>
      </TextSection>
      <Table>
        <ItemNo>Item No</ItemNo>
        <Description>Description</Description>
        <Unit>Unit</Unit>
        <Qty>Qty</Qty>
        <PricePerUnit>Price Per Unit</PricePerUnit>
        <NetValue>Net Value</NetValue>
        <ItemNoSpace></ItemNoSpace>
        <DescriptionSpace></DescriptionSpace>
        <UnitSpace></UnitSpace>
        <QtySpace></QtySpace>
        <PricePerUnitSpace></PricePerUnitSpace>
        <NetValueSpace></NetValueSpace>
        <BasicPrice>Basic Price</BasicPrice>
        <Vat>VAT 14% EXTRA</Vat>
        <TotalValue>Total Value</TotalValue>
        <BasicPriceSpace></BasicPriceSpace>
        <VatSpace></VatSpace>
        <TotalValueSpace></TotalValueSpace>
      </Table>
      <LowDatesText>
        <LowDate>3/15/410/537/5 / م.ض</LowDate>
        <LowDate>536/410/557 /  ض.م</LowDate>
        <LowDate>140103 / س.ت</LowDate>
      </LowDatesText>
      <LastText>
        <Line>17 Omar Bin Abdel Aziz Street in front of the garden 6 October - Helwan</Line>
        <Line>Fax:02_25591673 / Mob:01001617094-01224417823-01007724753</Line>
        <Line>Email:ali.omar87@yahoo.com</Line>
        <Line>www.egyoc.com</Line>
      </LastText>
    </FormPage>
  )
}



// Export
export default Home;