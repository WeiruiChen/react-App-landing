import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Row, Col} from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {getChildrenToRender, getChildrenToRenderWeb, getChildrenToRenderMobile} from './utils';

class Teams1 extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const {titleWrapper, ...$item} = item;
      return (
        <Col key={i.toString()} {...$item}>
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    if (this.props.isMobile) {
      return (
        <div>
          <div {...props} {...dataSource.wrapper}>
            <div {...dataSource.page}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRenderMobile)}
              </div>
              {/* <OverPack {...dataSource.OverPack}>
                <QueueAnim
                  type="bottom"
                  key="block"
                  leaveReverse

                  component={Row}
                > */}
              <div {...dataSource.block}>
                {listChildren}
              </div>
              {/* </QueueAnim>
              </OverPack> */}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div {...props} {...dataSource.wrapper} style={{minWidth:'1056px'}}>
            <div {...dataSource.page}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRenderWeb)}
              </div>
              {/* <OverPack {...dataSource.OverPack}>
                <QueueAnim
                  type="bottom"
                  key="block"
                  leaveReverse
                  {...dataSource.block}
                  component={Row}
                > */}
              {listChildren}
              {/* </QueueAnim>
              </OverPack> */}
            </div>
          </div>
        </div>
      );
    }
  }

}

export default Teams1;
