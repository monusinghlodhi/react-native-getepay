// Import necessary modules from React Native
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import getepayPortal from '../PgKit/index';
// import productsImage from '../assests/products.jpg';

const Cart = () => {
    const data = {
        mid: "108",
        amount: "10.00",
        merchantTransactionId: "sd12121",
        transactionDate: "THRU Oct 26 18:26:30 IST 2023",
        terminalId: "Getepay.merchant61062@icici",
        udf1: "1234567890",
        udf2: "test@gmail.com",
        udf3: "Test",
        udf4: "",
        udf5: "",
        udf6: "",
        udf7: "",
        udf8: "",
        udf9: "",
        udf10: "",
        ru: "http://localhost:3000/msg",
        callbackUrl: "",
        currency: "INR",
        paymentMode: "ALL",
        bankId: "",
        txnType: "single",
        productType: "IPG",
        txnNote: "Test Txn",
        vpa: "Getepay.merchant61062@icici",
      };
    
      const config = {
        GetepayMid: 108,
        GeepayTerminalId: "Getepay.merchant61062@icici",
        GetepayKey: "JoYPd+qso9s7T+Ebj8pi4Wl8i+AHLv+5UNJxA3JkDgY=",
        GetepayIV: "hlnuyA9b4YxDq6oJSZFl8g==",
        // GetepayKey: "4CPxLj0OY6mCulA6S2oR518k4lnWCs3bReHDqZquJbw=",
        // GetepayIV: "+KvtIqsKAIBZm9FrjbCJvA==",
        // "GetepayUrl": "http://164.52.216.34:8085/getepayPortal/pg/generateInvoice",
        GetepayUrl: "https://pay1.getepay.in:8443/getepayPortal/pg/generateInvoice",
      };

  return (
    <View style={styles.container}>
      {/* <Image source={productsImage} style={styles.image} /> */}
      <View style={styles.cardBody}>
        <Text style={styles.title}>Laptop</Text>
        <Text style={styles.description}>
          Some quick example to looks before purchase
        </Text>
        <Button
          title="Buy"
          onPress={() => getepayPortal(data, config)}
          color="#007bff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    // Add any other styling you need
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Cart;
