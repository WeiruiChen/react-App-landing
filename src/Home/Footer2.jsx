import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Button, Row, Col} from 'antd';

class Footer2 extends React.PureComponent {
  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    if (this.props.isMobile) {
      return (
        <div>
          {/* <div style={{
            height: '40px',width:'80%',marginLeft:'10%', textAlign: 'center', marginBottom: '10px',borderStyle:'outset',
            borderRadius:'2px',borderColor:'#000',borderWidth:'2px'
          }}>
            <a style={{paddingTop: '20px', fontSize: '20px'}} href="mailto:margaret.xie@shadingtech.com">Email: margaret.xie@shadingtech.com</a>
          </div> */}
          <h1 style={{fontSize: '32px', margin: '0 auto', textAlign: 'center'}}>联系我们</h1>
          <h2 style={{fontSize: '18px', margin: '0 auto 64px', textAlign: 'center'}}>
            <a style={{fontSize: '20px'}} href="mailto:margaret.xie@shadingtech.com">Email: margaret.xie@shadingtech.com</a>
          </h2>
          {/* <Button onClick={() => {
            window.location.href = "mailto:margaret.xie@shadingtech.com";
          }} style={{height: '40px', width: '80%', marginLeft: '10%', marginBottom: '10px', textAlign: 'center'}}>Email: margaret.xie@shadingtech.com</Button> */}
          {/* <h1 style={{fontSize: '32px', margin: ' 0 auto', textAlign: 'center'}}>联系我们</h1>
          <h2 style={{fontSize: '18px', margin: '0 auto 64px', textAlign: 'center'}}>Email: margaret.xie@shadingtech.com</h2> */}
          <div {...props} {...dataSource.wrapper} style={{margin: '0 auto', height: '130px'}}>
            <div style={{width: '45%', height: '100%', float: 'left'}}>
              <img style={{width: '100%', height: '100%'}} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/logo-02.png" atl="logo"></img>
            </div>
            <div style={{marginLeft: "250px", fontSize: '14px'}}>
              <Row style={{marginTop:'35px'}}>
                <Col span={12}>
                  <div onClick={() => {this.props.ToAnchor('Feature5_0')}}>
                    <a style={{color: '#3D4D66'}}>解决方案</a></div>
                  <div onClick={() => {this.props.ToAnchor('Teams2_0')}}>
                    <a style={{color: '#3D4D66'}}>合作伙伴</a></div>
                  <div onClick={() => {this.props.ToAnchor('Teams1_0')}}>
                    <a style={{color: '#3D4D66'}}>关于我们</a></div>
                </Col>
                <Col span={12}>
                  <div onClick={() => {this.props.ToAnchor('Content0_0')}}>
                    <a style={{color: '#3D4D66'}}>核心优势</a></div>
                  <div onClick={() => {this.props.ToAnchor('Banner1_0')}}>
                    <a style={{color: '#3D4D66'}}>公司动态</a></div>
                  <Button size="small" style={{marginLeft: '-5px'}} onClick={() => {window.location.href = "mailto:margaret.xie@shadingtech.com"}} type="primary">联系我们</Button>
                </Col>
              </Row>

            </div>


          </div>
          <div style={{textAlign: 'center', height: '20px', backgroundColor: '#DFE1E5'}}>
            {dataSource.copyright1.children}
          </div>
        </div >
      );
    } else {
      return (
        <div>

          <h1 style={{fontSize: '32px', margin: '0 auto', textAlign: 'center'}}>联系我们</h1>
          <h2 style={{fontSize: '18px', margin: '0 auto 64px', textAlign: 'center'}}>
            <a style={{fontSize: '20px'}} href="mailto:margaret.xie@shadingtech.com">Email: margaret.xie@shadingtech.com</a>
          </h2>
          <div {...props} {...dataSource.wrapper} style={{textAlign: 'center'}}>
            {/* <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div> */}
            <OverPack {...dataSource.OverPack} style={{display: 'inline-block'}}>
              <TweenOne {...dataSource.links} style={{marginLeft: '75px'}}>
                {dataSource.links.children.map((item, i) => {
                  return (
                    <a key={i.toString()} {...item}>
                      <img src={item.children} alt="img" />
                    </a>
                  );
                })}
              </TweenOne>
              <TweenOne
                animation={{x: '+=30', opacity: 0, type: 'from'}}
                key="copyright"
                {...dataSource.copyright}
              >
                <div style={{marginRight: '100px', marginTop: '40px'}}>
                  {dataSource.copyright.children.map((item, i) =>
                    // item.name === 'mail' ?
                    <a onClick={() => {this.props.ToAnchor(item.href)}} style={{marginLeft: '20px', color: '#3D4D66'}} key={item.href}>{item.children}</a>
                    // :
                  )}
                  {/* <a href="mailto:margaret.xie@shadingtech.com" style={{marginLeft: '20px', color: '#3D4D66'}} key='mail'>联系我们</a> */}
                  {/* </div> */}
                  <Button style={{marginLeft: '20px'}} size="small" onClick={() => {window.location.href = "mailto:margaret.xie@shadingtech.com"}} type="primary">联系我们</Button>
                </div>
              </TweenOne>
            </OverPack>

          </div>
          <div style={{textAlign: 'center', height: '20px', backgroundColor: '#DFE1E5'}}>
            {dataSource.copyright1.children}
          </div>
        </div >

      );
    }
  }
}

export default Footer2;
