import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Row, Col} from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {getChildrenToRender, getChildrenToRenderWeb,getChildrenToRenderMobile} from './utils';

class Content extends React.PureComponent {
  render() {
    const {dataSource, isMobile, ...props} = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
      childWrapper1
    } = dataSource;
    if (this.props.isMobile) {
      return (
        <div>
          <div {...props} {...wrapper}>
            <div {...page}>
              <div {...titleWrapper}>
                {titleWrapper.children.map(getChildrenToRenderMobile)}
              </div>
              {/* <OverPack {...overPackData}>
                <QueueAnim
                  type="bottom"
                  key="block01"
                  leaveReverse
                  component={Row}
                  componentProps={childWrapper}
                > */}
                  {childWrapper.children.map((block, i) => {
                    const {children: item, ...blockProps} = block;
                    return (
                      <Col key={i.toString()} {...blockProps}>
                        <div className="content0-block-item">

                          {item.children.map(getChildrenToRenderMobile)}
                          <div></div>
                        </div>
                      </Col>
                    );
                  })}
                {/* </QueueAnim>
                <QueueAnim
                  type="bottom"
                  key="block"
                  leaveReverse
                  component={Row}
                  componentProps={childWrapper}
                > */}
                  {childWrapper1.children.map((block, i) => {
                    const {children: item, ...blockProps} = block;
                    return (
                      <Col key={i.toString()} {...blockProps}>
                        <div {...item}>
                          {item.children.map(getChildrenToRenderMobile)}
                        </div>
                      </Col>
                    );
                  })}
                {/* </QueueAnim>
              </OverPack> */}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div {...props} {...wrapper} style={{minWidth:'1036px'}}>
            <div {...page}>
              <div {...titleWrapper}>
                {titleWrapper.children.map(getChildrenToRenderWeb)}
              </div>
              {/* <OverPack {...overPackData}>
                <QueueAnim
                  type="bottom"
                  key="block01"
                  leaveReverse
                  component={Row}
                  componentProps={childWrapper}
                > */}
                  {childWrapper.children.map((block, i) => {
                    const {children: item, ...blockProps} = block;
                    return (
                      <Col key={i.toString()} {...blockProps}>
                        <div className="content0-block-item">

                          {item.children.map(getChildrenToRenderWeb)}
                          <div></div>
                        </div>
                      </Col>
                    );
                  })}
                {/* </QueueAnim>
                <QueueAnim
                  type="bottom"
                  key="block"
                  leaveReverse
                  component={Row}
                  componentProps={childWrapper}
                > */}
                  {childWrapper1.children.map((block, i) => {
                    const {children: item, ...blockProps} = block;
                    return (
                      <Col key={i.toString()} {...blockProps}>
                        <div {...item}>
                          {item.children.map(getChildrenToRenderWeb)}
                        </div>
                      </Col>
                    );
                  })}
                {/* </QueueAnim>
              </OverPack> */}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Content;
