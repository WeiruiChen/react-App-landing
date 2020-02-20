import React from 'react';
import { Card, Row, Col, Carousel} from 'antd';
import QueueAnim from 'rc-queue-anim';
import  {Element} from 'rc-banner-anim';
import {getChildrenToRender} from './utils';
import 'rc-banner-anim/assets/index.css';

const {Meta} = Card;

class Banner extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {show: false};

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({show: true});
  }

  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    // const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
    //   const elem = item.BannerElement;
    //   const elemClassName = elem.className;
    //   delete elem.className;
    //   const {textWrapper, content} = item;
    //   return (
    //     <Element style={{background: "#F4F6F9"}} key={i.toString()} {...elem} prefixCls={elemClassName}>
    //       <QueueAnim
    //         type={['bottom', 'top']}
    //         delay={200}
    //         key="text"
    //         {...textWrapper}
    //       >
    //         <div key="content" {...content}>
    //           {content.children}
    //         </div>
    //       </QueueAnim>
    //     </Element>
    //   );
    // });
    if (this.props.isMobile) {
      return (
        <div {...props} {...dataSource.wrapper}>
          <a name="gongsidongtai"></a>
          <div {...dataSource.page}>
            <div {...dataSource.titleWrapper} style={{display: 'inline'}}>
              {dataSource.titleWrapper.children.map(getChildrenToRender)}
              <a onClick={this.handleClick} style={{color: '#898989', marginLeft: '80%'}}>查看更多></a>
            </div>
            <div>
              <div style={{marginLeft: '5%'}}>
                <Card style={{width: '90%', height: '17vh'}} hoverable >
                  {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                  <div style={{display: 'inline-block'}}>
                    <div style={{width: '40%', height: '100%', float: 'left'}}>
                      <img
                        style={{width: '100%', height: '100%'}}
                        alt="example"
                        src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png"
                      ></img>
                    </div>
                    <div style={{width: '60%', float: 'right'}}>
                      <span style={{color: '#0033A1'}}>QuarkChain为北京邮电大学新生进行区块链讲座</span>
                      <div style={{marginTop: '7%', color: '#898989'}}>
                        <span style={{color: '#898989'}}>2019.12.10</span>
                        <a href="https://mp.weixin.qq.com/s/dZkxf3XMaCN5dNkq_M4h-g" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card style={{width: '90%', height: '17vh', marginTop: '5%'}} hoverable >
                  {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                  <div style={{display: 'inline-block'}}>
                    <div style={{width: '40%', height: '100%', float: 'left'}}>
                      <img
                        style={{width: '100%', height: '100%'}}
                        alt="example"
                        src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png"
                      ></img>
                    </div>
                    <div style={{width: '60%', float: 'right'}}>
                      <span style={{color: '#0033A1'}}>QuarkChain项目进展报告：2020年1月</span>
                      <div style={{marginTop: '7%', color: '#898989'}}>
                        <span style={{color: '#898989'}}>2020.2.1</span>
                        <a href="https://mp.weixin.qq.com/s/13B853SzdDNhjvREKAU67Q" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card style={{width: '90%', height: '17vh', marginTop: '5%'}} hoverable >
                  {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                  <div style={{display: 'inline-block'}}>
                    <div style={{width: '40%', height: '100%', float: 'left'}}>
                      <img
                        style={{width: '100%', height: '100%'}}
                        alt="example"
                        src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png"
                      ></img>
                    </div>
                    <div style={{width: '60%', float: 'right'}}>
                      <span style={{color: '#0033A1'}}>QuarkChain开启开发者悬赏开发主网工具可获万元奖励</span>
                      <div style={{marginTop: '7%', color: '#898989'}}>
                        <span style={{color: '#898989'}}>2020.1.16</span>
                        <a href="https://mp.weixin.qq.com/s/-cyJSlebhtjI3ZSxi4Le9w" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                      </div>
                    </div>
                  </div>
                </Card>


                {
                  this.state.show ?
                    <div>
                      <Card style={{width: '90%', height: '17vh', marginTop: '5%'}} hoverable >
                        {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                        <div style={{display: 'inline-block'}}>
                          <div style={{width: '40%', height: '100%', float: 'left'}}>
                            <img
                              style={{width: '100%', height: '100%'}}
                              alt="example"
                              src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png"
                            ></img>
                          </div>
                          <div style={{width: '60%', float: 'right'}}>
                            <span style={{color: '#0033A1'}}>QuarkChain夸克链需要更高的舞台 TPS比赛冠军采访</span>
                            <div style={{marginTop: '7%', color: '#898989'}}>
                              <span style={{color: '#898989'}}>2020.1.10</span>
                              <a href="https://mp.weixin.qq.com/s/KVwTNHBjDLjENA9H2BVnLg" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                            </div>
                          </div>
                        </div>
                      </Card>

                      <Card style={{width: '90%', height: '17vh', marginTop: '5%'}} hoverable >
                        <div style={{display: 'inline-block'}}>
                          <div style={{width: '40%', height: '100%', float: 'left'}}>
                            <img
                              style={{width: '100%', height: '100%'}}
                              alt="example"
                              src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gonggao5.png"
                            ></img>
                          </div>
                          <div style={{width: '60%', float: 'right'}}>
                            <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain CMO跨年直播|都说19年是公链的“滑铁卢”,2020公链如何东山再起？</span>
                            <div style={{marginTop: '4%', color: '#898989'}}>
                              <span style={{color: '#898989'}}>2020.1.1</span>
                              <a href="https://mp.weixin.qq.com/s/PoAqGiSNoRpWSFTh89VxBQ" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                    : ''
                }
              </div>
            </div>
          </div>
        </div >
      )
    } else {
      return (
        <div {...props} {...dataSource.wrapper}>
          <a name="gongsidongtai"></a>
          <div {...dataSource.page}>
            <div {...dataSource.titleWrapper}>
              {dataSource.titleWrapper.children.map(getChildrenToRender)}
            </div>
            <Carousel autoplay >
              <div>
                <Row style={{marginTop: '50px'}} type="flex" align="bottom" justify="space-around">
                  <Col span={6} > <Card hoverable
                    cover={<img alt="example" onClick={()=>window.open("https://mp.weixin.qq.com/s/dZkxf3XMaCN5dNkq_M4h-g")}src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png" />}
                  >
                    <Meta title={<div>
                      <span style={{fontSize: '10px', color: '#0033A1'}}>QuarkChain为北京邮电大学新生进行区块链讲座</span>
                    </div>} description="2019.12.10" />
                  </Card></Col>
                  <Col span={6} offset={1}><Card hoverable
                    cover={<img alt="example" onClick={()=>window.open("https://mp.weixin.qq.com/s/13B853SzdDNhjvREKAU67Q")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png" />}
                  >
                    <Meta title={<div>
                      <span style={{fontSize: '10px', color: '#0033A1'}}>QuarkChain项目进展报告:2020年1月</span>
                    </div>} description="2020.2.1" />
                  </Card></Col>
                  <Col span={6} offset={1}><Card hoverable
                    cover={<img alt="example" onClick={()=>window.open("https://mp.weixin.qq.com/s/-cyJSlebhtjI3ZSxi4Le9w")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png" />}
                  >
                    <Meta title={<div>
                      <span style={{fontSize: '10px', color: '#0033A1'}}>QuarkChain开启开发者悬赏开发主网工具可获万元奖励</span>
                    </div>} description="2020.1.16" />
                  </Card></Col>
                </Row>
              </div>
              <div >
                <Row style={{marginTop: '50px'}} type="flex" align="bottom" justify="space-around">
                  <Col span={6} > <Card hoverable
                    cover={<img alt="example" onClick={()=>window.open("https://mp.weixin.qq.com/s/KVwTNHBjDLjENA9H2BVnLg")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png" />}
                  >
                    <Meta title={<div>
                      <span style={{fontSize: '10px', color: '#0033A1'}}>QuarkChain夸克链需要更高的舞台 TPS比赛冠军采访</span>
                    </div>} description="2020.1.10" />
                  </Card></Col>
                  <Col span={6} offset={1}><Card hoverable
                    cover={<img alt="example" onClick={()=>window.open("https://mp.weixin.qq.com/s/PoAqGiSNoRpWSFTh89VxBQ")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gonggao5.png" />}
                  >
                    <Meta title={<div>
                      <span style={{fontSize: '10px', color: '#0033A1'}}>QuarkChain CMO跨年直播|都说19年是公链的“滑铁卢”，2020公链如何东山再起？</span>
                    </div>} description="2020.1.1" />
                  </Card></Col>
                  <Col span={6} offset={1}></Col>
                </Row>
              </div>
            </Carousel>
          </div>
        </div >
      );
    }
  }
}

export default Banner;
