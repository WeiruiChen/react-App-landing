import React from 'react';
import TweenOne from 'rc-tween-one';
import {Menu, Button} from 'antd';
import {getChildrenToRender} from './utils';

const {Item} = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }
  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  toggleOn() {
    let styleFather = document.getElementById('father').style;
    if (styleFather.height == '50px') {
      document.getElementById('father').style.height = "212px";
      document.getElementById('son').style.display = 'block';
    } else {
      document.getElementById('father').style.height = "50px";
      document.getElementById('son').style.display = 'none';
    }

  }
  render() {
    const {dataSource, isMobile, ...props} = this.props;
    const {phoneOpen} = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const {children: a, subItem, ...itemProps} = item;
      if (this.props.isMobile) {
        return (
          <Item key={item.name} {...itemProps} style={{
            width: '94px'}}>
            <div onClick={() => {this.props.ToAnchor(item.children.href)}} style={{fontSize: '10px', position: 'relative'}}>
              {a.children.map(getChildrenToRender)}
            </div>
          </Item>
        );
      } else {
        return (
          <Item key={item.name} {...itemProps}>
            <div onClick={() => {this.props.ToAnchor(item.children.href)}} className={`header0-item-block ${a.className}`.trim()}>
              {a.children.map(getChildrenToRender)}
            </div>
          </Item>
        );
      }
    });
    const moment = phoneOpen === undefined ? 300 : null;
    if (this.props.isMobile) {
      return (
        <div id='father' className="header0-div-mobile-amotion">
          <Button onClick={this.toggleOn} icon="menu" ghost style={{margin: '10px 0 0 30px', }}></Button>
          <div className="header0-div-mobile-amotion-son" style={{textAlign: 'center'}} id='son'>
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              theme="theme"
              style={{width: '0px'}}
            >
              {navChildren}
            </Menu>
            {/* <div style={{marginTop: '5px', height: '30px'}}>核心优势</div>
            <div style={{marginTop: '5px', height: '30px'}}>解决方案</div>
            <div style={{marginTop: '5px', height: '30px'}}>合作伙伴</div>
            <div style={{marginTop: '5px', height: '30px'}}>公司动态</div>
            <div style={{marginTop: '5px', height: '30px'}}>关于我们</div> */}
          </div>
        </div>
      );
    } else {
      return (
        <TweenOne
          component="header"
          animation={{opacity: 0, type: 'from'}}
          {...dataSource.wrapper}
          {...props}
        >
          <div
            {...dataSource.page}
            className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
          >
            <TweenOne
              animation={{x: -30, type: 'from', ease: 'easeOutQuad'}}
              {...dataSource.logo}
            >
              <img width="50%" src={dataSource.logo.children} alt="img" />
            </TweenOne>
            {isMobile && (
              <div
                {...dataSource.mobileMenu}
                onClick={() => {
                  this.phoneClick();
                }}
              >
                <em />
                <em />
                <em />
              </div>
            )}
            <TweenOne
              {...dataSource.Menu}
              animation={
                isMobile
                  ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                  : null
              }
              moment={moment}
              reverse={!!phoneOpen}
            >
              <Menu
                mode={isMobile ? 'inline' : 'horizontal'}
                defaultSelectedKeys={['sub0']}
                theme="theme"
              >
                {navChildren}
              </Menu>
            </TweenOne>
          </div>
        </TweenOne>
      );
    }
  }
}

export default Header;
