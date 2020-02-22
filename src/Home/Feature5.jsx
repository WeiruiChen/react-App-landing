import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Tabs, Icon, Row, Col} from 'antd';
import {Collapse} from 'antd';
import {getChildrenToRender} from './utils';

const TabPane = Tabs.TabPane;
const {Panel} = Collapse;

class Content7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 2,
    };
  }
  onChange = (key) => {
    this.setState({current: parseFloat(key)});
  };
  onChange1 = (key) => {
    console.log('key' + key);
  };

  getBlockChildren = (item, i) => {
    const {tag, content} = item;
    const {text} = content;
    const textChildren = text.children;
    const {icon} = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;
    if (i === 0) {
      return (
        <TabPane
          key={0}
          disabled
          style={{backgroundColor: '#9EA6B3!important'}}
          tab={
            <div className={tag.className} style={{marginTop: '17px'}}>
              <Icon type={iconChildren} className={icon.className} />
              <div {...tagText}>{tagText.children}</div>
            </div>
          }
          className={item.className}
        >
        </TabPane>
      )
    } else {
      return (
        <TabPane
          key={i + 1}
          tab={
            <div className={tag.className} style={{marginTop: '17px'}}>
              <Icon type={iconChildren} className={icon.className} />
              <div {...tagText}>{tagText.children}</div>
            </div>
          }
          className={item.className}
        >
          <TweenOne.TweenOneGroup
            enter={{
              y: 30,
              delay: 300,
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad',
            }}
            leave={null}
            component=""
          >
            {this.state.current === i + 1 && (
              <Row
                key="content"
                className={content.className}
                gutter={content.gutter}
              >
                <Col className={text.className} xs={text.xs} md={text.md}>
                  {textChildren}
                </Col>
                {/* <Col className={img.className} xs={img.xs} md={img.md}>
                <img src={img.children} width="100%" alt="img" />
              </Col> */}
              </Row>
            )}
          </TweenOne.TweenOneGroup>
        </TabPane>
    );
  }
};

  render() {
    // const renderTabBar = (props, DefaultTabBar) => {
    //   // 提取tab信息
    //   const tabInfo = [];
    //   props.panels.forEach(item => {
    //     tabInfo.push({
    //       key: item.key,
    //       title: item.props.tab
    //     })
    //   });
    //   return (
    //     <div style={{display: 'flex', marginBottom: 16}}>
    //       {tabInfo.map((item, index) => (
    //         <div key={item.key}
    //           onClick={() => this.setState({activeKey: item.key})}
    //           className={props.activeKey === item.key ? 'activeTab normalTab' : 'normalTab'}>
    //           <div style={{padding: '0 16px'}}>{item.title}</div>
    //         </div>)}
    //     </div>)
    // };
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);
    if (this.props.isMobile) {
      return (
        <div>
          <a name="jiejuefangan" ></a>
          <div {...props} {...dataSource.wrapper}>
            <div {...dataSource.page}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRender)}
              </div>
              <div>
                <Collapse
                  expandIconPosition='right'
                >
                  <Panel style={{background: '#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                    <div style={{marginTop: '3vh'}}>
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhengwuicon.png" alt="政务上链">
                      </img>
                      <span style={{fontSize: '30px', color: '#0033A1', marginLeft: '10px'}}>政务上链</span>
                    </div>
                  </div>} key="1">
                    <div >
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhengwushanglian.png" width="100%" alt="政务上链"></img>
                    </div>
                  </Panel>
                </Collapse>

                <Collapse
                  style={{marginTop: '50px'}}
                  expandIconPosition='right'
                >
                  <Panel style={{background: '#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                    <div style={{marginTop: '3vh'}}>
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhihuiicon.png" alt="智慧城市">
                      </img>
                      <span style={{fontSize: '30px', color: '#0033A1', marginLeft: '10px'}}>智慧城市</span>
                    </div>
                  </div>} key="1">
                    <div >
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhihuichengshi.png" width="100%" alt="智慧城市"></img>
                    </div>
                  </Panel>
                </Collapse>

                <Collapse
                  style={{marginTop: '50px'}}
                  expandIconPosition='right'
                >
                  <Panel style={{background: '#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                    <div style={{marginTop: '3vh'}}>
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongyingicon.png" alt="供应链金融">
                      </img>
                      <span style={{fontSize: '30px', color: '#0033A1', marginLeft: '10px'}}>供应链金融</span>
                    </div>
                  </div>} key="1">
                    <div >
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongyinglianjinrong.png" width="100%" alt="供应链金融"></img>
                    </div>
                  </Panel>
                </Collapse>

                <Collapse
                  style={{marginTop: '50px'}}
                  expandIconPosition='right'
                >
                  <Panel style={{background: '#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                    <div style={{marginTop: '3vh'}}>
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/chanpingicon.png" alt="产品溯源">
                      </img>
                      <span style={{fontSize: '30px', color: '#0033A1', marginLeft: '10px'}}>产品溯源</span>
                    </div>
                  </div>} key="1">
                    <div >
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/chanping.png" width="100%" alt="产品溯源"></img>
                    </div>
                  </Panel>
                </Collapse>

                <Collapse
                  style={{marginTop: '50px'}}
                  expandIconPosition='right'
                >
                  <Panel style={{background: '#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                    <div style={{marginTop: '3vh'}}>
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/shuziicon.png" alt="数字身份">
                      </img>
                      <span style={{fontSize: '30px', color: '#0033A1', marginLeft: '10px'}}>数字身份</span>
                    </div>
                  </div>} key="1">
                    <div >
                      <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/shuzi.png" width="100%" alt="数字身份"></img>
                    </div>
                  </Panel>
                </Collapse>

              </div>
            </div>
          </div>
        </div>);
    }
    else {
      return (
        <div>
          <a name="jiejuefangan" ></a>
          <div {...props} {...dataSource.wrapper}>
            <div {...dataSource.page}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRender)}
              </div>
              <OverPack {...dataSource.OverPack}>
                <TweenOne.TweenOneGroup
                  key="tabs"
                  enter={{
                    y: 30,
                    opacity: 0,
                    delay: 200,
                    type: 'from',
                  }}
                  leave={{y: 30, opacity: 0}}
                  {...dataSource.tabsWrapper}
                >
                  {/* <div className="card-container"> */}
                  <Tabs
                    tabPosition="left"
                    key="tabs"
                    onChange={this.onChange}
                    activeKey={`${this.state.current}`}
                    // renderTabBar={}
                    tabBarStyle={{color: '#0033A1'}}
                    type="card"
                    {...dataSource.block}
                    tabBarGutter={0}
                  >

                    {tabsChildren}
                  </Tabs>
                  {/* </div> */}
                </TweenOne.TweenOneGroup>
              </OverPack>
            </div>
          </div>
        </div >
      );
    }
  }
}

export default Content7;
