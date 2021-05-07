import Link from 'next/link'
import {Avatar, TextStyle, Button, Card, TextField, Filters, ResourceItem, ResourceList, Layout, Page, Heading, TextContainer, Select, DisplayText, Icon, Badge, Tabs, Pagination} from '@shopify/polaris';

export default function FirstPost() {
  return (
    <>
      <Page title="Invoice Statements">
        <Card>
          <TextContainer>
            <div className="flex p-8 flex-col md:flex-row items-center">

              <div className="flex-1">
                <DisplayText size="medium">April 2021</DisplayText>
              </div>
                
              <div className="flex-1 flex py-8 flex-row w-full">

                <div className="flex-1 text-center md:text-left">
                  Orders<br/>
                  <DisplayText size="large">4700</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Claims<br/>
                  <DisplayText size="large">20</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Saved<br/>
                  <DisplayText size="large">$1500</DisplayText>
                </div>

              </div>

              <div className="flex-1 text-right">
                <Link href="/"><Button primary>View Statement</Button></Link>
              </div>

            </div>
          </TextContainer>
          <hr />
          <TextContainer>
            <div className="flex p-8 flex-col md:flex-row items-center">

              <div className="flex-1">
                <DisplayText size="medium">March 2021</DisplayText>
              </div>
                
              <div className="flex-1 flex py-8 flex-column md:flex-row w-full">

                <div className="flex-1 text-center md:text-left">
                  Orders<br/>
                  <DisplayText size="large">4500</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Claims<br/>
                  <DisplayText size="large">18</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Saved<br/>
                  <DisplayText size="large">$1350</DisplayText>
                </div>

              </div>

              <div className="flex-1 text-right">
                <Link href="/"><Button primary>View Statement</Button></Link>
              </div>

            </div>
          </TextContainer>
          <hr />
          <TextContainer>
            <div className="flex p-8 flex-col md:flex-row items-center">

              <div className="flex-1">
                <DisplayText size="medium">February 2021</DisplayText>
              </div>
                
              <div className="flex-1 flex py-8 flex-column md:flex-row w-full">

                <div className="flex-1 text-center md:text-left">
                  Orders<br/>
                  <DisplayText size="large">5000</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Claims<br/>
                  <DisplayText size="large">19</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Saved<br/>
                  <DisplayText size="large">$1425</DisplayText>
                </div>

              </div>

              <div className="flex-1 text-right">
                <Link href="/"><Button primary>View Statement</Button></Link>
              </div>

            </div>
          </TextContainer>
          <hr />
          <TextContainer>
            <div className="flex p-8 flex-col md:flex-row items-center">

              <div className="flex-1">
                <DisplayText size="medium">January 2021</DisplayText>
              </div>
                
              <div className="flex-1 flex py-8 flex-column md:flex-row w-full">

                <div className="flex-1 text-center md:text-left">
                  Orders<br/>
                  <DisplayText size="large">4000</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Claims<br/>
                  <DisplayText size="large">15</DisplayText>
                </div>

                <div className="flex-1 text-center md:text-left">
                  Saved<br/>
                  <DisplayText size="large">$1125</DisplayText>
                </div>

              </div>

              <div className="flex-1 text-right">
                <Link href="/"><Button primary>View Statement</Button></Link>
              </div>

            </div>
          </TextContainer>
        </Card>
      </Page>
    </>
  )
}