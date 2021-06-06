import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function StatusBarPage(props){
    const isFucused = useIsFocused();

    return isFucused ? <StatusBar {...props} /> : null;

}

export default StatusBarPage