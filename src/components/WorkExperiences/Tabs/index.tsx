import { useState } from 'react'

import { Container, NavTabs, Tab, Content } from './styles'

interface TabsProps {
  readonly children: any
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(children[0].props.id)

  return (
    <Container>
      <NavTabs>
        {children.map((tab: any) => (
          <Tab key={tab.props.id} className={activeTab === tab.props.id ? 'active' : ''}>
            <button type="button" onClick={() => setActiveTab(tab.props.id)}>
              {tab.props.id}
            </button>
          </Tab>
        ))}
      </NavTabs>

      <Content data-aos="fade-up">
        {children.map((element: any) => {
          if (element.props.id === activeTab) return element.props.children
        })}
      </Content>
    </Container>
  )
}
