import React from 'react';

import AnchorLabel from './AnchorLabel';



import { withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const { MarkerWithLabel } = require('react-google-maps/lib/components/addons/MarkerWithLabel');
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');


/*global google*/
const MyMarkerComponent = (props) => {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     }
    //     this.onToggleOpen = this.onToggleOpen.bind(this);
    // }



    // onToggleOpen({ isOpen }) {
    //     this.setState({ isOpen: !this.state.isOpen })
    // }


    // render() {

    // console.log('props ', this.props)
    return (
        <div>
            {/* <InfoBox
                    defaultPosition={new google.maps.LatLng(this.props.position.lat, this.props.position.lng)}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                >
                    <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                            Hello, Taipei!
                    </div>
                    </div>
                </InfoBox> */}
            <Marker
                position={{ lat: props.position.lat, lng: props.position.lng }}
                onClick={() => props.handleClick(props.doctorObj)}
            >
                {props.visible &&
                    <InfoBox
                        visible={props.visible}
                        // onCloseClick={this.onToggleOpen}
                        options={{
                            closeBoxURL: ``,
                            enableEventPropagation: true,
                            allignBottom: true,
                            pixelOffset: new google.maps.Size(-208, -250),
                            boxStyle: {
                                minWidth: '416px',
                                minHeight: '100px',
                                overflow: 'inherit'

                            }
                        }}
                    >
                        <AnchorLabel doctorObj={props.doctorObj} />
                    </InfoBox>}
            </Marker>
        </div>
    )
    // }

    // <MarkerWithLabel
    //     position={props.position}
    //     labelAnchor={new google.maps.Point(208, 220)}
    // >
    //     <AnchorLabel />
    // </MarkerWithLabel>






}



export default MyMarkerComponent;