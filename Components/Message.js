import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Message = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/msg");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Err:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};

export default Message;
