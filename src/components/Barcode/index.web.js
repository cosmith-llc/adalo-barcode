import React, { useEffect, useState } from "react";
import JsBarcode from "jsbarcode";
import "./style.web.css";

function Converter(props) {
  const {
    type,
    data,
    text,
    _height,
    _width,
    widthBarcode
  } = props

  console.log('_height#', _height, _width);

  const [isError, setError] = useState(false);

  useEffect(() => {
    try {
      new JsBarcode("#barcode", data, {
        format: type,
        width: widthBarcode,
        text: text,
        displayValue: text !== ''
      });

      setError(false)
    } catch (e) {
      setError(true)
    }
  })

  return (
    <div className={"barcodeWrapper"}>
      {
        isError ? <>
            <p className={"errorText"}>
              Incorrect format!
              <svg id="barcode"/>
            </p>
          </>
          : <svg id="barcode"/>
      }
    </div>
  );
}

export default Converter;
