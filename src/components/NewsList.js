import React, { useState } from "react";
import { List, Grid, Header, Image, Input, Divider, Icon, Segment } from "semantic-ui-react";

const NewsItem = (props) => {
  const { item } = props;
  return (
    <List.Item style={{ padding: 30 }}>
      <Grid>
        <Grid.Column
          width={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Header as="h3">{item.title}</Header>
          <List bulleted horizontal>
            <List.Item>Category: {item.category}</List.Item>
          </List>
          <List.Description style={{ margin: "20px 0" }}>
            {item.message}
          </List.Description>
        </Grid.Column>
        <Grid.Column width={5}>
          <Image src={item.thumbnail} />
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};

const NewsList = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Segment basic padded>
      <div class="ui one column stackable center aligned page grid">
        <div class="column twelve wide">
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            type="text"
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
          />
        </div>
      </div>
      </Segment>
      <Divider horizontal>
        <Header>
          <Icon link name='newspaper outline' size='small' />News Feed
        </Header>
      </Divider>
      <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
        {
          // eslint-disable-next-line
          props.items.filter(item => {
            if (query === '') {
              return item;
            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          }).map((item, index) => (
            <NewsItem item={item} key={item.title + index} />
          ))
        }
      </List>
    </div>
  );
};

export default NewsList;