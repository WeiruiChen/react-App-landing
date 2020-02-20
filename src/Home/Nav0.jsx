import React from 'react';
import TweenOne from 'rc-tween-one';
import {Menu} from 'antd';
import {getChildrenToRender} from './utils';

const {Item} = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }
  subGoto = (id) => { // 学习挣钱，调用父组件方法
    console.log('1111111');
    this.props.ToAnchor('gongsidongtai');
  }
  // scrollToAnchor = (anchorId) => {
  //   cons
  //   if (anchorId) {   // 找到锚点 id
  //     let anchorElement = document.getElementById('gongsidongtai');
  //     if (anchorElement) {        // 如果对应id的锚点存在，就跳转到锚点
  //       anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  //     }
  //   }
  // }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const {dataSource, isMobile, ...props} = this.props;
    const {phoneOpen} = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const {children: a, subItem, ...itemProps} = item;
      return (
        <Item key={item.name} {...itemProps}>
          <div onClick={()=>{this.props.ToAnchor(item.children.href)}} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </div>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
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

export default Header;
