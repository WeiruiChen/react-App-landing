import React from 'react';
import {Row, Col} from 'antd';
import {TweenOneGroup} from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {getChildrenToRender} from './utils';

class Content5 extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </div>
        </Col>
      );
    });

  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    const {...currentProps} = this.props;
    const {
      wrapper,
      page,
      BannerAnim
    } = dataSource;
    delete props.dataSource;
    delete props.isMobile;
    if (this.props.isMobile) {
      return (
        <div>
          <div {...currentProps} {...wrapper} style={{background: '#fff', height: '100px', minHeight: '100px'}}>
            <div {...page}>
              <div {...dataSource.titleWrapper} >
                <div style={{textAlign: 'center', marginTop: '-70px'}}>
                  <span style={{fontSize: '30px'}}>联系我们</span>
                  {/* <ul style={{marginLeft: '15px', fontSize: '15px', listStyle: 'disc'}}> */}
                  {/* <li> */}
                  <div>
                    <a href="mailto:contact@shadingtech.com" style={{color: '#3D4D66'}} key='mail'>邮件:contact@shadingtech.com</a>
                  </div>
                  {/* </li> */}
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div {...currentProps} {...wrapper} style={{background: '#fff', height: '150px', minHeight: '150px',minWidth:'1056px'}}>
            <div {...page}>
              <div {...dataSource.titleWrapper} style={{textAlign: 'center'}}>
                <div style={{marginTop: '-50px'}}>
                  <span style={{fontSize: '30px'}}>联系我们</span>
                  {/* <ul style={{marginLeft: '20px', fontSize: '24px', listStyle: 'disc'}}>
                    <li> */}
                  <div>
                    <a href="mailto:contact@shadingtech.com" style={{color: '#3D4D66'}} key='mail'>邮件:contact@shadingtech.com</a>
                  </div>
                  {/* </li> */}
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Content5;
