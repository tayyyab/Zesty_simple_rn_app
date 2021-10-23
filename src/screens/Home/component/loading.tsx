/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import PropTypes from 'prop-types';
// import Typography from '../assets/Typography';

/**
 * @return {null}
 */

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default function Loader({loading}) {
  if (!loading) return null;
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1000000,
        elevation: 2,
        flex: 1,
        backgroundColor: 'rgba(98,107,123,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#ddd',
          borderRadius: 10,
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={'blue'} />
        <Text style={[{color: '#000'}]}>{'Loading'}</Text>
      </View>
    </View>
  );
}
