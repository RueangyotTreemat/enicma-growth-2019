import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
  <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'white'}} to="/">WESECTA</Link>} scroll>
            <Navigation>
                <Link to="/thaimap">Thaimap</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/login">Login</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none',color:'black'}} to="/">WESECTA</Link>}>
            <Navigation>
                <Link to="/thaimap">Thaimap</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/login">Login</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
