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
    if (styleFather.height == '30px') {
      document.getElementById('father').style.height = "242px";
      document.getElementById('son').style.display = 'block';
    } else {
      document.getElementById('father').style.height = "30px";
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
            width: '70px',
            height: '30px',
          }}>
            <div onClick={() => {if (item.name !== 'mail') {this.props.ToAnchor(item.children.href)} else {window.location.href = "mailto:margaret.xie@shadingtech.com"} }}
              style={{fontSize: '12px', marginLeft: '-14px', marginTop: '-5px', color: '#000'}}>
              {a.children.map(getChildrenToRender)}
            </div>
          </Item>
        );
      } else {
        if (item.name !== 'mail') {
          return (
            <Item key={item.name} {...itemProps}>
              <div onClick={() => {this.props.ToAnchor(item.children.href)}} className={`header0-item-block ${a.className}`.trim()}>
                {a.children.map(getChildrenToRender)}
              </div>
            </Item>
          );
        }
      }
    });
    const moment = phoneOpen === undefined ? 300 : null;
    if (this.props.isMobile) {
      return (
        <div>
          <TweenOne
            component="header"
            animation={{opacity: 0, type: 'from'}}
            {...dataSource.wrapper}
            {...props}
          >
            <div
              {...dataSource.page}
              className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
              style={{height: '64px'}}
            >
              <img width="50%" src={dataSource.logo.children} alt="img" style={{marginTop: '20px'}} />
            </div>
          </TweenOne>

          <div id='father' className="header0-div-mobile-amotion" style={{height: '30px'}}>
            <Button onClick={this.toggleOn} type="link" icon="menu" ghost style={{width: '70px'}}></Button>
            <div className="header0-div-mobile-amotion-son" style={{textAlign: 'center', display: 'none'}} id='son'>
              <Menu
                mode={isMobile ? 'inline' : 'horizontal'}
                defaultSelectedKeys={['sub0']}
                style={{width: '0px', height: '0px'}}
              >
                {navChildren}
              </Menu>
            </div>
          </div>
        </div >
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
                <Button onClick={() => {window.location.href = "mailto:margaret.xie@shadingtech.com"}} type="primary">联系我们</Button>
              </Menu>
            </TweenOne>
          </div>
        </TweenOne>
      );
    }
  }
}

export default Header;
