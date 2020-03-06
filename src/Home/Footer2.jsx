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
            <a style={{paddingTop: '20px', fontSize: '20px'}} href="mailto:contact@shadingtech.com">Email: contact@shadingtech.com</a>
          </div> */}
          {/* <h1 style={{fontSize: '32px', margin: '0 auto', textAlign: 'center'}}>联系我们</h1>
          <h2 style={{fontSize: '18px', margin: '0 auto 64px', textAlign: 'center'}}>
            <a style={{fontSize: '20px'}} href="mailto:contact@shadingtech.com">Email: contact@shadingtech.com</a>
          </h2> */}
           {/* <div style={{float: 'left',marginBottom:'80px'}}>
            <div style={{marginLeft:'10px',fontSize:'20px'}}>联系我们</div>
            <ul  style={{marginLeft:'30px',fontSize:'14px',listStyle:'disc'}}> 
              <li>邮件:contact@shadingtech.com</li>
            </ul>
          </div> */}
          {/* <Button onClick={() => {
            window.location.href = "mailto:contact@shadingtech.com";
          }} style={{height: '40px', width: '80%', marginLeft: '10%', marginBottom: '10px', textAlign: 'center'}}>Email: contact@shadingtech.com</Button> */}
          {/* <h1 style={{fontSize: '32px', margin: ' 0 auto', textAlign: 'center'}}>联系我们</h1>
          <h2 style={{fontSize: '18px', margin: '0 auto 64px', textAlign: 'center'}}>Email: contact@shadingtech.com</h2> */}
          <div {...props} {...dataSource.wrapper} style={{margin: '0 auto', height: '130px', backgroundColor: '#3D4D66'}}>
            <div style={{width: '130px', height: '100px', float: 'left',marginLeft:'30px',marginTop:'15px'}}>
              <img style={{width: '100%', height: '100%'}} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/footer-logo-newest.png" atl="logo"></img>
            </div>
            <div style={{float:'right',marginRight:'70px', fontSize: '14px'}}>
              <Row style={{marginTop: '35px'}} >
                <Col span={11}>
                  <div onClick={() => {this.props.ToAnchor('Feature5_0')}}>
                    <a style={{color: '#DFE1E5'}}>解决方案</a></div>
                  <div onClick={() => {this.props.ToAnchor('Teams2_0')}}>
                    <a style={{color: '#DFE1E5'}}>合作伙伴</a></div>
                  <div onClick={() => {this.props.ToAnchor('Teams1_0')}}>
                    <a style={{color: '#DFE1E5'}}>关于我们</a></div>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={11}>
                  <div onClick={() => {this.props.ToAnchor('Content0_0')}}>
                    <a style={{color: '#DFE1E5'}}>核心优势</a></div>
                  <div onClick={() => {this.props.ToAnchor('Banner1_0')}}>
                    <a style={{color: '#DFE1E5'}}>公司动态</a></div>
                  <Button size="small" style={{marginLeft: '-5px',color:'#DFE1E5'}} onClick={() => {window.location.href = "mailto:contact@shadingtech.com"}} type="primary">联系我们</Button>
                </Col>
              </Row>
            </div>
          </div>
          <div style={{textAlign: 'center', height: '20px', backgroundColor: '#3D4D66',color:'#DFE1E5'}}>
            {dataSource.copyright1.children}
          </div>
          <div style={{textAlign: 'center', height: '10px', backgroundColor: '#3D4D66'}}>
          </div>
        </div >
      );
    } else {
      return (
        <div>
          {/* <h1 style={{fontSize: '32px', margin: '0 auto', textAlign: 'center'}}>联系我们</h1>
          <h2 style={{fontSize: '18px', margin: '0 auto 64px', textAlign: 'center'}}>
            <a style={{fontSize: '20px'}} href="mailto:contact@shadingtech.com">Email: contact@shadingtech.com</a>
          </h2> */}
          <div {...props} {...dataSource.wrapper} style={{textAlign: 'center',minWidth:'1036px'}}>
            {/* <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div> */}
            <OverPack {...dataSource.OverPack} style={{display: 'inline-block'}}>
              <TweenOne {...dataSource.links} style={{float: 'left'}}>
                {dataSource.links.children.map((item, i) => {
                  return (
                    <a key={i.toString()} {...item}>
                      <img src={item.children} style={{height:'130px',marginTop:'-30px'}} alt="img" />
                    </a>
                  );
                })}
              </TweenOne>
              <TweenOne
                // animation={{x: '+=30', opacity: 0, type: 'from'}}
                key="copyright"
                {...dataSource.copyright}
              >
                <div style={{marginTop: '40px', float: 'right'}}>
                  {dataSource.copyright.children.map((item, i) =>
                    // item.name === 'mail' ?
                    <a onClick={() => {this.props.ToAnchor(item.href)}} style={{marginLeft: '20px', color: '#DFE1E5'}} key={item.href}>{item.children}</a>
                    // :
                  )}
                  {/* <a href="mailto:contact@shadingtech.com" style={{marginLeft: '20px', color: '#3D4D66'}} key='mail'>联系我们</a> */}
                  {/* </div> */}
                  <Button style={{marginLeft: '20px'}} size="small" onClick={() => {window.location.href = "mailto:contact@shadingtech.com"}} type="primary">联系我们</Button>
                </div>
              </TweenOne>
            </OverPack>

          </div>
          <div style={{textAlign: 'center', height: '20px', backgroundColor: '#3D4D66',color:'#DFE1E5',minWidth:'1036px'}}>
            {dataSource.copyright1.children}
          </div>
          <div style={{textAlign: 'center', height: '10px', backgroundColor: '#3D4D66',minWidth:'1036px'}}>
          </div>
        </div >

      );
    }
  }
}

export default Footer2;
