import React from "react";
import { Segment, Image, Menu } from "semantic-ui-react";

function TopBar() {

  return (
    <div>
      <Segment basic inverted padded>
        <Menu fixed='top' inverted>
          <Menu.Item as='a' header>
            <Image size='small' src='https://cdn.studio71.com/wp-content/uploads/2019/01/03101058/Studio71-Logo-Web-Horizontal.png' style={{ marginRight: '1.5em' }} />
            News Feed
          </Menu.Item>
        </Menu>
      </Segment>
    </div>
  );
}

export default TopBar;