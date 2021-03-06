import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Tabs, Icon, Row, Col} from 'antd';
import Zmage from 'react-zmage'
import {Collapse} from 'antd';
// import {getChildrenToRender} from './utils';
import {getChildrenToRender, getChildrenToRenderWeb, getChildrenToRenderMobile} from './utils';


const TabPane = Tabs.TabPane;
const {Panel} = Collapse;

const nameMap = {
  '1': '政务上链',
  '2': '智慧城市',
  '3': '供应链金融',
  '4': '产品溯源',
  '5': '数字身份'
}

class Content7 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
      name: '政务上链'
    };
  }
  onChange = (key) => {
    this.setState({current: parseFloat(key)});
    this.setState({name: nameMap[key]});
  };

  onChange1 = (key) => {
    this.setState({current: parseFloat(key)});
    this.setState({name: nameMap[key]});
  };

  getBlockChildren = (item, i) => {
    const {tag, content} = item;
    const {text} = content;
    const textChildren = text.children;
    const {icon} = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;

    return (
      <TabPane
        key={i + 1}
        tab={
          <div className={tag.className} style={{marginTop: '18px'}} onMouseEnter={() => {
            this.setState({current: parseFloat(i + 1)});
            this.setState({name: nameMap[i + 1]});
          }} >
            <Icon type={iconChildren} className={icon.className} style={{marginTop: '5px'}} />
            <div {...tagText}>{tagText.children}</div>
          </div>
        }
        className={item.className}
      >
        <div style={{border: "2px solid #c8d2df", borderRadius: '0px 5px 5px 5px'}}>

          <div style={{textAlign: 'left', marginLeft: '55px', position: 'absolute', marginTop: '40px'}}>
            <h3 style={{fontSize: '20px', color: '#0033A1', fontWeight: '500'}}>{this.state.name}</h3>
            <div style={{width: '35px', marginTop: '-15px', height: '2px', background: '#0033A1'}}></div>
          </div>
          {/* <TweenOne.TweenOneGroup
          enter={{
            y: 30,
            delay: 300,
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          leave={null}
          component=""
        > */}
          {
            this.state.current === i + 1 && (
              <Row
                key="content"
                className={content.className}
                gutter={content.gutter}
                style={{marginTop: '70px'}}
              >
                <Col className={text.className} xs={text.xs} md={text.md} style={{height: '860px'}}>
                  {textChildren}
                </Col>
                {/* <Col className={img.className} xs={img.xs} md={img.md}>
                <img src={img.children} width="100%" alt="img" />
              </Col> */}
              </Row>
            )
          }
        </div>
        {/* </TweenOne.TweenOneGroup> */}
      </TabPane >
    );
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
          <div {...props} {...dataSource.wrapper} style={{
            minHeight: '300px'
          }}>
            <div {...dataSource.page} style={{padding: '64px 24px'}}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRenderMobile)}
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
                      <Zmage src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/%E6%89%8B%E6%9C%BA%E7%AB%AF%EF%BC%9A%E6%94%BF%E5%8A%A1%E4%B8%8A%E9%93%BE1.png" width="100%" alt="政务上链">
                      </Zmage>
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
                      <Zmage src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/%E6%89%8B%E6%9C%BA%E7%AB%AF%EF%BC%9A%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%821.png" width="100%" alt="智慧城市"></Zmage>
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
                      <Zmage src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/%E6%89%8B%E6%9C%BA%E7%AB%AF%EF%BC%9A%E4%BE%9B%E5%BA%94%E9%93%BE%E9%87%91%E8%9E%8D.png" width="100%" alt="供应链金融"></Zmage>
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
                      <Zmage src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/%E6%89%8B%E6%9C%BA%E7%AB%AF%EF%BC%9A%E4%BA%A7%E5%93%81%E6%BA%AF%E6%BA%90.png" width="100%" alt="产品溯源"></Zmage>
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
                      <Zmage src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/%E6%89%8B%E6%9C%BA%E7%AB%AF%EF%BC%9A%E6%95%B0%E5%AD%97%E8%BA%AB%E4%BB%BD.png" width="100%" alt="数字身份"></Zmage>
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
          <div {...props} {...dataSource.wrapper}  style={{minWidth:'1056px'}}>
            <div {...dataSource.page} style={{padding: '64px 24px'}}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRenderWeb)}
              </div>
              {/* <OverPack {...dataSource.OverPack}>
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
                > */}
              {/* <div className="card-container"> */}
              <Tabs
                key="tabs"
                onChange={this.onChange}
                activeKey={`${this.state.current}`}
                tabPosition='right'
                // renderTabBar={}
                tabBarStyle={{color: '#0033A1'}}
                {...dataSource.block}
                tabBarGutter={0}
              >
                {tabsChildren}
              </Tabs>
              {/* </div> */}
              {/* </TweenOne.TweenOneGroup>
              </OverPack> */}
            </div>
          </div>
        </div >
      );
    }
  }
}

export default Content7;
