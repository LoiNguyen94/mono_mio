import { Tabs } from 'antd';
import { ReactText } from 'react';

const { TabPane } = Tabs;

export interface CartProps {
  data?: any;
  errors?: any;
}

const renTabBar = (props: any, DefaultTabBar: any) => {
  return (
    <>
      {props.panes.map((item: any, index: number) => (
        <div>{item?.key}</div>
      ))}
    </>
  );
};

export function Cart({ errors, data }: CartProps) {
  function callback(key: string) {
    console.log(key);
  }
  if (errors) {
    return <span style={{ color: 'red' }}>ERR: {errors}</span>;
  }

  return (
    <div style={{ marginTop: 85, paddingBottom: 85 }}>
      <Tabs renderTabBar={renTabBar} defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Cart;
