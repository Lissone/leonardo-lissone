import { useState } from 'react'

import { Container, NavTabs, Tab, Content } from './styles'

interface TabsProps {
  children: any
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(children[0].props.id)

  function handleChangeTab(newActiveTab: string) {
    setActiveTab(newActiveTab)
  }

  return (
    <Container>
      <NavTabs>
        {children.map(tab => (
          <Tab key={tab.props.id} className={activeTab === tab.props.id ? 'active' : ''}>
            <button type="button" onClick={() => handleChangeTab(tab.props.id)}>
              {tab.props.id}
            </button>
          </Tab>
        ))}
      </NavTabs>

      <Content>
        {children.map(element => {
          if (element.props.id === activeTab) return element.props.children
        })}
      </Content>
    </Container>
  )
}
