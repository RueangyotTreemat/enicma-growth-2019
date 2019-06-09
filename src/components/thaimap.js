import VectorMap from '@south-paw/react-vector-maps';
import thailand from '@south-paw/react-vector-maps/maps/json/thailand.json';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

import { Wrapper, Output, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  svg {
    path {
      fill: #36622b;
      cursor: pointer;

      &:focus,
      &:hover {
        fill: #729d39;
      }

      &[aria-checked='true'] {
        fill: #733917;
      }
    }
  }
`;

 class MyMap extends Component{
  constructor(props) {
    super(props);

    this.state = {
      hovered: null,
      focused: null,
      clicked: null,
    };
  }
/** When the mouse enters a layer. */
onMouseEnter = e => this.setState({ hovered: e.target.attributes.name.value });

/** When the mouse leaves a layer. */
onMouseLeave = () => this.setState({ hovered: null });

/** When a layer gains focus. */
onFocus = e => this.setState({ focused: e.target.attributes.name.value });

/** When a layer looses focus. */
onBlur = () => this.setState({ focused: null });

/** When a layer is clicked. */
onClick = e => this.setState({ clicked: e.target.attributes.name.value });

render() {
  const { map } = this.props;
  const { hovered, focused, clicked } = this.state;

  const layerProps = {
    onMouseEnter: this.onMouseEnter,
    onMouseLeave: this.onMouseLeave,
    onFocus: this.onFocus,
    onBlur: this.onBlur,
    onClick: this.onClick,
  };

  return (
  
      <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
          
                <Wrapper>
                    <Output>
                      <p>
                        <strong>Hovered layer:</strong> {hovered}
                      </p>
                      <p>
                        <strong>Focused layer:</strong> {focused}
                      </p>
                      <p>
                        <strong>Clicked layer:</strong> {clicked}
                      </p>
                    </Output>
                  <StyledMap>
                    <VectorMap {...thailand} layerProps={layerProps} />
                  </StyledMap>
                </Wrapper>
                  
                  
                  {/* <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> */}

              </Cell>
              <Cell col={6}>
                  <h2>Contact Me</h2>
                  <hr/>

                  <div className="contact-list">
                  <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                          <i className="fa fa-phone-square" aria-hidden="true"/>
                          (66) 887-924355
                      </ListItemContent>
                  </ListItem>

                  <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                          <i className="fa fa-fax" aria-hidden="true"/>
                          (66) 887-924355
                      </ListItemContent>
                  </ListItem>

                  <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                          <i className="fa fa-envelope" aria-hidden="true"/>
                          someone@example.com
                      </ListItemContent>
                  </ListItem>

                  <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                          <i className="fa fa-skype" aria-hidden="true"/>
                          MySkypeID
                      </ListItemContent>
                  </ListItem>
                  </List>
                  
                  </div>
                  
      
              </Cell>
          </Grid>
      </div>
  )
}
}

MyMap.propTypes = {
  map: PropTypes.shape({
    id: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default MyMap;