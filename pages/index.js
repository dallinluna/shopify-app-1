import React, {useCallback, useState} from 'react';
import {Avatar, TextStyle, Button, Card, TextField, Filters, ResourceItem, ResourceList, Layout, Page, Heading, Select, DisplayText, Icon, Badge, Tabs, Pagination} from '@shopify/polaris';
import {
  SecureMajor,
  ChecklistMajor,
  BillingStatementDollarMajor,
  NoteMajor
} from '@shopify/polaris-icons';
import LineTripsTotal from './ordersLine';
import Link from 'next/link'

export default function ResourceListExample() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC');
  const [taggedWith, setTaggedWith] = useState('Reordered');
  const [queryValue, setQueryValue] = useState(null);

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    [],
  );
  const handleQueryValueChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const items = [
    {
      id: 112,
      url: 'customers/341',
      name: 'Paul Bartholomew',
      location: 'St. George, USA',
      latestOrderUrl: 'orders/1456',
      orderId: '1000',
      product: 'Mechanical Keyboard',
      price: '$65.99',
      orderDate: '5/1/2021',
      tag: 'Under Protection'
    },
    {
      id: 212,
      url: 'customers/256',
      name: 'James Warrick',
      location: 'Los Angeles, USA',
      latestOrderUrl: 'orders/1457',
      orderId: '1001',
      product: 'Gaming Mouse',
      price: '$75.99',  
      orderDate: '5/2/2021',
      tag: 'Under Protection'
    },
    {
      id: 213,
      url: 'customers/257',
      name: 'Nathan Usher',
      location: 'San Clemente, USA',
      latestOrderUrl: 'orders/1458',
      orderId: '1002',
      product: 'HDMI Cables',
      price: '$39.99',
      orderDate: '5/3/2021',
      tag: 'Reordered'
    },
    {
      id: 214,
      url: 'customers/258',
      name: 'Dallin Moon',
      location: 'Broomfield, USA',
      latestOrderUrl: 'orders/1459',
      orderId: '1003',
      product: 'Wifi Adapter',
      price: '$99.99',
      orderDate: '3/31/2021',
      tag: 'Refunded'
    },
    {
      id: 215,
      url: 'customers/259',
      name: 'Darren Harline',
      location: 'San Clemente, USA',
      latestOrderUrl: 'orders/1460',
      orderId: '1004',
      product: '128GB Flash Drive',
      price: '$49.99',
      orderDate: '2/15/2021',
      tag: 'Claim Not Approved'
    },
    {
      id: 117,
      url: 'customers/341',
      name: 'Paul Bartholomew',
      location: 'St. George, USA',
      latestOrderUrl: 'orders/1456',
      orderId: '1000',
      product: 'Mechanical Keyboard',
      price: '$65.99',
      orderDate: '5/1/2021',
      tag: 'Under Protection'
    },
    {
      id: 219,
      url: 'customers/256',
      name: 'James Warrick',
      location: 'Los Angeles, USA',
      latestOrderUrl: 'orders/1457',
      orderId: '1001',
      product: 'Gaming Mouse',
      price: '$75.99',  
      orderDate: '5/2/2021',
      tag: 'Under Protection'
    },
    {
      id: 203,
      url: 'customers/257',
      name: 'Nathan Usher',
      location: 'San Clemente, USA',
      latestOrderUrl: 'orders/1458',
      orderId: '1002',
      product: 'HDMI Cables',
      price: '$39.99',
      orderDate: '5/3/2021',
      tag: 'Reordered'
    },
    {
      id: 201,
      url: 'customers/258',
      name: 'Dallin Moon',
      location: 'Broomfield, USA',
      latestOrderUrl: 'orders/1459',
      orderId: '1003',
      product: 'Wifi Adapter',
      price: '$99.99',
      orderDate: '3/31/2021',
      tag: 'Delivered'
    },
    {
      id: 178,
      url: 'customers/259',
      name: 'Darren Harline',
      location: 'San Clemente, USA',
      latestOrderUrl: 'orders/1460',
      orderId: '1004',
      product: '128GB Flash Drive',
      price: '$49.99',
      orderDate: '2/15/2021',
      tag: 'Claim Not Approved'
    }
  ];

  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];

  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Delete customers',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];

  const filters = [
    {
      key: 'taggedWith3',
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = !isEmpty(taggedWith)
    ? [
        {
          key: 'taggedWith3',
          label: disambiguateLabel('taggedWith3', taggedWith),
          onRemove: handleTaggedWithRemove,
        },
      ]
    : [];

  const filterControl = (
    <Filters
      queryValue={queryValue}
      filters={filters}
      appliedFilters={appliedFilters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    >

    </Filters>
  );

  const [selected, setSelected] = useState('newestUpdate');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Past 7 Days', value: 'newestUpdate'},
    {label: 'This Month', value: 'oldestUpdate'},
    {label: 'Past 30 Days', value: 'mostSpent'},
    {label: 'Past 90 Days', value: 'mostOrders'},
    {label: 'Pasy Year', value: 'lastNameAlpha'}
  ];

  /* Tabs */

  const [tabSelected, setTabSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setTabSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-orders-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Under Protection',
      panelID: 'protected-orders-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Claim Approved',
      panelID: 'claimed-orders-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Claim Not Approved',
      panelID: 'claimed-orders-1',
    },
    {
      id: 'prospects-1',
      content: 'Delivered',
      panelID: 'delivered-orders-1',
    },
  ];

  return (
    <Page 
      title="Corso Protection: May 2021"
      fullWidth="true"
      primaryAction={
        <Link href="/statements">
          <Button primary>
            Monthly Statements
          </Button>
        </Link>
      }
    >
      
      <div style={{marginBottom: "2rem"}}>

        <Layout>

          <Layout.Section oneThird>
            <Card>
              <div className="p-8 flex-col">
                <div className="flex">
                  <div className="mr-4">
                    <Icon
                      source={SecureMajor}
                      color="base" />
                  </div>
                  <Heading>Protected Orders (MTD)</Heading>
                </div>
                <div className="flex pt-4">

                  <div className="flex-1">
                    Orders Protected<br/>
                    <DisplayText size="large">4875</DisplayText>
                  </div>

                  <div className="flex-1">
                    Amount<br/>
                    <DisplayText size="large">$365,265</DisplayText>
                  </div>

                </div>
              </div>
            </Card>
          </Layout.Section>

          <Layout.Section oneThird>
            <Card>
              <div className="p-8 flex-col">
                <div className="flex">
                  <div className="mr-4">
                    <Icon
                      source={ChecklistMajor}
                      color="base" />
                  </div>
                  <Heading>Claims (MTD)</Heading>
                </div>
                <div className="flex pt-4">

                  <div className="flex-1">
                    Claims<br/>
                    <DisplayText size="large">13</DisplayText>
                  </div>

                  <div className="flex-1">
                    Refunds<br/>
                    <DisplayText size="large">8</DisplayText>
                  </div>

                  <div className="flex-1">
                    Reorders<br/>
                    <DisplayText size="large">5</DisplayText>
                  </div>

                </div>
              </div>
            </Card>
          </Layout.Section>

          <Layout.Section oneThird>
            <Card>
              <div className="p-8">
                <div className="flex">
                  <div className="mr-4">
                    <Icon
                      source={BillingStatementDollarMajor}
                      color="base" />
                  </div>
                  <Heading>You Save (MTD)</Heading>
                </div>
                <div className="flex pt-4">
                  <div className="flex-1">
                    Amount<br/>
                    <DisplayText size="large">$975</DisplayText>
                  </div>
                </div>
              </div>
            </Card>
          </Layout.Section>

        </Layout>

      </div>
      
      <Card>
        <div className="p-8">
          <Layout>
            <Layout.Section>
              <Heading>Protected Orders</Heading>
            </Layout.Section>
          </Layout>
          <div className="mt-8">
            <LineTripsTotal />
          </div>
        </div>
      </Card>
      
      <Card>

        <Tabs tabs={tabs} selected={tabSelected} onSelect={handleTabChange}>
          
          <div className="p-8">
            <Heading>{tabs[tabSelected].content} Orders</Heading>
          </div>

          <ResourceList
            resourceName={resourceName}
            items={items}
            renderItem={renderItem}
            sortValue={sortValue}
            sortOptions={[
              {label: 'Latest', value: 'DATE_MODIFIED_DESC'},
              {label: 'Price', value: 'DATE_MODIFIED_ASC'},
            ]}
            onSortChange={(selected) => {
              setSortValue(selected);
              console.log(`Sort option changed to ${selected}.`);
            }}
            filterControl={filterControl}
          />

        </Tabs>

        <div style={{padding: "2rem", display: "flex", justifyContent: "flex-end"}}>

          <Pagination
            hasPrevious
            onPrevious={() => {
              console.log('Previous');
            }}
            hasNext
            onNext={() => {
              console.log('Next');
            }}
          />
        
        </div>

      </Card>

      <Card>
        <div style={{padding: "2rem", flexDirection: "column"}}>
          <div style={{display: "flex"}}>
            <div style={{marginRight: "1rem"}}>
              <Icon
                source={NoteMajor}
                color="base" />
            </div>
            <Heading>Invoice (MTD)</Heading>
          </div>
          <div style={{display: "flex", paddingTop: "1rem"}}>

            <div style={{flex: "0 0 100%"}}>
              Amount<br/>
              <DisplayText size="large">$ 5179.69</DisplayText>
            </div>

          </div>
        </div>
      </Card>

    </Page>
  );

  function renderItem(item) {
    const {id, url, name, location, latestOrderUrl, orderId, product, price, orderDate, tag} = item;
    const media = <Avatar customer size="small" name={name} />;
    const shortcutActions = latestOrderUrl
      ? [{content: 'Reorder', url: latestOrderUrl}]
      : null;
    return (
      <ResourceItem
        id={id}
        url={url}
        media={media}
        accessibilityLabel={`View details for ${name}`}
        /*shortcutActions={shortcutActions}*/
        persistActions
      >
        <Layout>
          <Layout.Section oneThird>
            <Heading>
              {name}
            </Heading>
            <div>{location}</div>
          </Layout.Section>

          <Layout.Section oneThird>
            <TextStyle variation="strong">{product} ({orderId})</TextStyle>
            <p>{price}</p>
            <p>{orderDate}</p>
          </Layout.Section>

          <Layout.Section oneThird>
            <div style={{textAlign: "right"}}>

              { tag === 'Under Protection' ? <Badge status="success">{tag}</Badge> : tag === 'Reordered' ? <Badge status="attention">{tag}</Badge> : tag === 'Refunded' ? <Badge status="attention">{tag}</Badge> : tag === 'Claim Not Approved' ? <Badge status="critical">{tag}</Badge> : <Badge>{tag}</Badge> }

            </div>
          </Layout.Section>

        </Layout>
      </ResourceItem>
    );
  }

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'taggedWith3':
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
}