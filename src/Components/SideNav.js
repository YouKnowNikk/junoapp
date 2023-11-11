import React, { useState, useEffect } from 'react';
import { RiseOutlined,SlidersOutlined,EuroCircleOutlined,HourglassOutlined,RightCircleOutlined} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Avatar} from 'antd'
import './SideNav.css'
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('', 'g1', null, [getItem('Overview', '/', <RiseOutlined /> ), getItem('Onboarding', '/Onboarding', <HourglassOutlined />), getItem('Monitoring', '/Monitoring', <SlidersOutlined /> ), getItem('Flagging', '/Flagging', <RightCircleOutlined />), getItem('Source of Income', '/SourceofIncome', <EuroCircleOutlined />),getItem('UAR', '/UAR', null)], 'group')
];

function SideNav() {
  let navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const handleItemClick = ({ key }) => {
    setSelectedKey(key);
    navigate(key);
  };

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleMenu}
      trigger={null}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5%'}}>
        <h3 style={{ color: 'black' }}>Omio</h3>
        </div>
        <Menu
          defaultSelectedKeys={['/']}
          selectedKeys={[selectedKey]}
          mode="vertical"
          theme="light"
          items={items}
          onClick={handleItemClick}
        />
      </div>
      <div className='avtar'>
    <Avatar  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
    <div className='userCredentials'>
        <h4  style={{margin:'0'}}> Elon Musk</h4>
        <p style={{margin:'0'}}>elon@twitter.com</p>
    </div>
    </div>
    </Sider>
    
    </div>
    
  );
}

export default SideNav;
