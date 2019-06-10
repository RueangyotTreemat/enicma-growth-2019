import VectorMap from '@south-paw/react-vector-maps';
import thailand from '@south-paw/react-vector-maps/maps/json/thailand.json';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Cell} from 'react-mdl';


import { Wrapper, Output, MapWrapper } from './styled';

const StyledMap = styled(MapWrapper)`
  svg {
    path {
      fill: #CFD9BA;
      cursor: pointer;

      &:focus,
      &:hover {
        fill: #729d39;
      }

      &[aria-checked='true'] {
        fill: #000;
      }
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  padding: 0.25rem;
  background: white;
  border: 0.2rem solid #ccc;
`;

let validImageName = 'Khon Kaen';
let invalidImageName = 'NoData';
 class MyMap extends Component{
  constructor(props) {
    super(props);

    this.state = {
      hovered: null,
      focused: null,
      clicked: null,
      current: null,
      isTooltipVisible: false,
      tooltipY: 0,
      tooltipX: 0,
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

onClick = e => {
  const name = e.target.attributes.name.value;
  if(name === 'Khon Kaen' ){
    validImageName = 'Khon Kaen';
  }else if(name === 'Kalasin'){
    validImageName = 'Kalasin';
  }else {
    validImageName = "NoData";
  }
};

//tooltipY
onMouseOver = e => this.setState({ current: e.target.attributes.name.value });

onMouseMove = e =>
  this.setState({
    isTooltipVisible: true,
    tooltipY: e.clientY + 10,
    tooltipX: e.clientX + 10,
  });

onMouseOut = () => this.setState({ current: null, isTooltipVisible: false });


render() {
  const { map } = this.props;
  const { hovered, focused, clicked } = this.state;
  const { current, isTooltipVisible, tooltipX, tooltipY } = this.state;

  const layerProps = {
    onMouseEnter: this.onMouseEnter,
    onMouseLeave: this.onMouseLeave,
    onFocus: this.onFocus,
    onBlur: this.onBlur,
    onClick: this.onClick,
    onMouseOver: this.onMouseOver,
    onMouseMove: this.onMouseMove,
    onMouseOut: this.onMouseOut,
  };

  const tooltipStyle = {
    display: isTooltipVisible ? 'block' : 'none',
    top: tooltipY,
    left: tooltipX,
  };

  
  return (

      <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
          
                <Wrapper >
                  <StyledMap >
                    <VectorMap {...thailand} layerProps={layerProps} style={{width:'258.39',height:'auto'}}/>
                    <Tooltip style={tooltipStyle} >{current}</Tooltip>
                  </StyledMap>
                </Wrapper>
             
                
              </Cell>
              <Cell col={6}>
                  

                  <div className="contact-list" >
                      
                
    {/* <img style={{width:'300px',height:'auto'}} onClick={this.handleClick} src={ require('./'+{this.props.value}+'.jpg') } alt="province" /> */}

                      <img style={{width:'300px',height:'auto'}} src={ require( './'+validImageName.toString()+'.jpg') } alt="province" />
                
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