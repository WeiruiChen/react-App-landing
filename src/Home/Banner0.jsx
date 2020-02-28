import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {isImg} from './utils';

class Banner extends React.PureComponent {
  render() {
    const {...currentProps} = this.props;
    const {dataSource} = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    const {
      wrapper,
      page,
    } = dataSource;
    if (this.props.isMobile) {
      return (
        <div {...currentProps} {...wrapper}>
          <div {...page} >
            <QueueAnim
              key="QueueAnim"
              type={['bottom', 'top']}
              delay={200}
              {...dataSource.textWrapper}
            >
              <div style={{color: '#00236D', fontSize: '50px'}}>鲨丁区块链</div>
              <div key="title" {...dataSource.title}>
                {typeof dataSource.title.children === 'string' &&
                  dataSource.title.children.match(isImg) ? (
                    <img src={dataSource.title.children} width="100%" alt="img" />
                  ) : (
                    dataSource.title1.children
                  )}
              </div>
              {/* <div key="content" {...dataSource.content}>
                {dataSource.content.children}
              </div> */}
            </QueueAnim>
          </div>
        </div>
      );
    } else {
      return (
        <div {...currentProps} {...wrapper}>
          <div {...page} >
            <QueueAnim
              key="QueueAnim"
              type={['bottom', 'top']}
              delay={200}
              {...dataSource.textWrapper}
            >
              <div style={{color: '#00236D', fontSize: '50px'}}>鲨丁区块链</div>
              <div key="title" {...dataSource.title}>
                {typeof dataSource.title.children === 'string' &&
                  dataSource.title.children.match(isImg) ? (
                    <img src={dataSource.title.children} width="100%" alt="img" />
                  ) : (
                    dataSource.title.children
                  )}
              </div>
              <div key="content" {...dataSource.content}>
                {dataSource.content.children}
              </div>
            </QueueAnim>
          </div>
        </div>
      )
    }
  }
}
export default Banner;
