import React from 'react';
import {Card, Row, Col, Carousel, Icon, Layout} from 'antd';
import {getChildrenToRender} from './utils';
import 'rc-banner-anim/assets/index.css';

const {Meta} = Card;
const {Header, Footer, Sider, Content} = Layout;

class Banner extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {show: false};
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.next1 = this.next1.bind(this);
    this.prev1 = this.prev1.bind(this);

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({show: true});
  }
  next() {
    this.slider.slick.slickNext();
  }
  prev() {
    this.slider.slick.slickPrev();
  }

  next1() {
    this.slider1.slick.slickNext();
  }
  prev1() {
    this.slider1.slick.slickPrev();
  }

  render() {
    const {...props} = this.props;
    const {...currentProps} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    const {
      wrapper,
      page,
      BannerAnim
    } = dataSource;
    const Banner0Data = BannerAnim.children.map((item) => {
      return (
        <Card
          onClick={() => {window.open(item.href)}}
          hoverable
          size='small'
          style={{width: '250px', margin: '0 auto', marginTop: '20px'}}
          cover={<img alt="example" src={item.imgSrc} />}>
          <Meta style={{fontSize: '10px'}} title={<span style={{color: '#0033A1', fontSize: '12px'}}
          >{item.title}</span>} description={item.date} />
        </Card>
      )
    });
    const Banner1Data = BannerAnim.children1.map((item) => {
      return (
        <Card
          onClick={() => {window.open(item.href)}}
          hoverable
          size='small'
          style={{width: '250px', margin: '0 auto', marginTop: '20px'}}
          cover={<img alt="example" src={item.imgSrc} />}>
          <Meta title={<span style={{color: '#0033A1', fontSize: '12px'}}
          >{item.title}</span>} description={item.date} />
        </Card>
      )
    });
    if (this.props.isMobile) {
      return (
        <div>
          <div {...currentProps} {...wrapper}>
            <div {...page}>
              <div {...dataSource.titleWrapper} >
                {dataSource.titleWrapper.children.map(getChildrenToRender)}
              </div>
              <div style={{textAlign: 'center'}}>
                <Icon type="up-circle" style={{fontSize: '30px', color: '#BEC4CC', margin: '0 auto'}} onClick={this.prev1} />
                <Carousel dotPosition='left' style={{background: '#EBEDF0'}} ref={el => (this.slider1 = el)}>
                  {/* <Col> */}
                  <div style={{textAlign: 'center',background: '#EBEDF0'}}>
                    {Banner0Data}
                  </div>
                  <div style={{textAlign: 'center',background: '#EBEDF0'}}>
                    {Banner1Data}
                  </div>
                </Carousel>
                <Icon type="down-circle" style={{fontSize: '30px', marginTop: '20px', color: '#BEC4CC'}} onClick={this.prev1} />

                {/* <div style={{textAlign: 'center'}}>
                    <Card
                      hoverable
                      size='small'
                      style={{width: '250px', margin: '0 auto'}}
                      cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png" />}
                    >
                      <Meta style={{fontSize: '10px'}} title={<span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain为北京邮电大学新生进行区块链讲座</span>} description="2019.12.10" />
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      size='small'
                      cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png" />}
                    >
                    </Card>
                  </div> */}

                {/* </div> */}
                {/* <div>
                
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div> */}
                {/* <div style={{marginLeft: '5%'}}> */}

                {/* <Card style={{width: '100%', height: '20%'}} hoverable >
                    <div style={{height: '100%'}}>
                      <div style={{width: '40%', height: '100%', float: 'left'}}>
                        <img
                          style={{width: '100%', height: '90%', marginBottom: '5%'}}
                          alt="example"
                          src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png"
                        ></img>
                      </div>
                      <div style={{width: '60%', float: 'right'}}>
                        <span style={{
                          color: '#0033A1', fontSize: '10px'
                        }}>QuarkChain为北京邮电大学新生进行区块链讲座</span>
                        <div style={{marginTop: '7%', color: '#898989'}}>
                          <span style={{color: '#898989'}}>2019.12.10</span>
                          <a href="https://mp.weixin.qq.com/s/dZkxf3XMaCN5dNkq_M4h-g" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                    <div >
                      <div style={{width: '40%', height: '100%', float: 'left'}}>
                        <img
                          style={{width: '100%', height: '100%'}}
                          alt="example"
                          src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png"
                        ></img>
                      </div>
                      <div style={{width: '60%', float: 'right'}}>
                        <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain项目进展报告：2020年1月</span>
                        <div style={{marginTop: '20%', color: '#898989'}}>
                          <span style={{color: '#898989'}}>2020.2.1</span>
                          <a href="https://mp.weixin.qq.com/s/13B853SzdDNhjvREKAU67Q" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                    <div >
                      <div style={{width: '40%', height: '100%', float: 'left'}}>
                        <img
                          style={{width: '100%', height: '100%'}}
                          alt="example"
                          src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png"
                        ></img>
                      </div>
                      <div style={{width: '60%', float: 'right'}}>
                        <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain开启开发者悬赏开发主网工具可获万元奖励</span>
                        <div style={{marginTop: '7%', color: '#898989'}}>
                          <span style={{color: '#898989'}}>2020.1.16</span>
                          <a href="https://mp.weixin.qq.com/s/-cyJSlebhtjI3ZSxi4Le9w" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                        </div>
                      </div>
                    </div>
                  </Card> */}
                {/* <div style={{display: this.state.show ? 'block' : 'none'}}>
                    <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                      {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                {/* <div >
                    <div style={{width: '40%', height: '100%', float: 'left'}}>
                      <img
                        style={{width: '100%', height: '100%'}}
                        alt="example"
                        src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png"
                      ></img>
                    </div>
                    <div style={{width: '60%', float: 'right'}}>
                      <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain夸克链需要更高的舞台 TPS比赛冠军采访</span>
                      <div style={{marginTop: '7%', color: '#898989'}}>
                        <span style={{color: '#898989'}}>2020.1.10</span>
                        <a href="https://mp.weixin.qq.com/s/KVwTNHBjDLjENA9H2BVnLg" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                      </div>
                    </div>
                  </div>
                    </Card>

                <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                  <div >
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
                </Card> */}
                {/* </div>  */}
              </div>
            </div>
          </div >
        </div >

      )
    } else {
      return (
        <div>
          <div {...currentProps} {...wrapper} style={{minWidth:'1036px'}}>
            <div {...page}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRender)}
              </div>
              <div style={{background: '#EBEDF0'}}>
                <Row>
                  <Col span={1} style={{textAlign: 'center'}}>
                    <Icon type="left-circle" style={{fontSize: '30px', marginTop: '135px', color: '#BEC4CC'}} onClick={this.prev} />
                  </Col>
                  <Col span={22}><Carousel ref={el => (this.slider = el)}>
                    <div>
                      <Row type="flex" align="bottom" justify="space-around">
                        <Col span={6} > <Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/dZkxf3XMaCN5dNkq_M4h-g")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px',
                              display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain为北京邮电大学新生进行区块链讲座</span>
                          </div>} description="2019.12.10" />
                        </Card></Col>
                        <Col span={6} offset={1}><Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/13B853SzdDNhjvREKAU67Q")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px', display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain项目进展报告:2020年1月</span>
                          </div>} description="2020.2.1" />
                        </Card></Col>
                        <Col span={6} offset={1}><Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/-cyJSlebhtjI3ZSxi4Le9w")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px', color: '#0033A1',
                              whiteSpace: 'pre-wrap', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain开启开发者悬赏开发主网工具可获万元奖励</span>
                          </div>} description="2020.1.16" />
                        </Card></Col>
                      </Row>
                    </div>
                    <div >
                      <Row type="flex" align="bottom" justify="space-around">
                        <Col span={6} > <Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/KVwTNHBjDLjENA9H2BVnLg")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px', display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain夸克链需要更高的舞台 TPS比赛冠军采访</span>
                          </div>} description="2020.1.10" />
                        </Card></Col>
                        <Col span={6} offset={1}><Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/PoAqGiSNoRpWSFTh89VxBQ")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gonggao5.png" />}
                        >
                          <Meta title={
                            <div>
                              <span style={{
                                fontSize: '14px', color: '#0033A1', wordBreak: 'normal', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                              }}>QuarkChain CMO跨年直播|都</span>
                              <span className="show-text"> 说19年是公链的“滑铁卢”,2020公链如何东山再起？</span>
                            </div>
                          } description="2020.1.1" />
                        </Card></Col>
                        <Col span={6} offset={1}></Col>
                      </Row>
                    </div>
                  </Carousel>
                  </Col>
                  <Col span={1} style={{textAlign: 'center'}}>
                    <Icon type="right-circle" style={{fontSize: '30px', marginTop: '135px', color: '#BEC4CC'}} onClick={this.next} />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Banner;
