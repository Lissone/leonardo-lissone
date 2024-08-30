import React, { ReactElement, useState } from 'react';

import { Container, Content, NavTabs, Tab } from './styles';

interface ChildrenType {
  readonly id: string;
  readonly children: ReactElement;
}
interface TabsProps {
  readonly children: ReactElement<ChildrenType>[];
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(children[0].props.id);

  return (
    <Container>
      <NavTabs>
        {React.Children.map(children, (child: React.ReactElement<ChildrenType>) => (
          <Tab key={child.props.id} className={activeTab === child.props.id ? 'active' : ''}>
            <button type="button" onClick={() => setActiveTab(child.props.id)}>
              {child.props.id}
            </button>
          </Tab>
        ))}
      </NavTabs>

      <Content data-aos="fade-up">
        {React.Children.map(children, (child: React.ReactElement<ChildrenType>) => (
          child.props.id === activeTab ? child.props.children : null
        ))}
      </Content>
    </Container>
  );
}
