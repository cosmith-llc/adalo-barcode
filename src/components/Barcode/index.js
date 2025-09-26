import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Barcode from "react-native-barcode-builder";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    }
  }

  render() {
    const {
      type,
      data,
      text,
      widthBarcode
    } = this.props

    const errorStyle = {
      width: 100
    }

    const barcodeWrapperStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    const excludeFormat = ['ean8', 'ean13', 'upc'];
    if (excludeFormat.some(format => format === type)) {
      this.state.isError = true;
    }

    const handleError = (e) => {
      this.state.isError = true;
    }

    const getFormat = () => {
      return type === 'pharmacode' || type === 'codabar' ? type : type.toUpperCase();
    }

    return (
      <View style={barcodeWrapperStyle}>
        {
          data.trim() === ""
            ? <Text style={errorStyle}>Value is null!</Text>
            : this.state.isError
              ? <Text style={errorStyle}>Incorrect format!</Text>
              : <Barcode
                format={getFormat()}
                value={data.toString()}
                width={widthBarcode}
                text={text}
                onError={handleError}
              />
        }
      </View>
    )
  }
}