import React, { useState } from "react";
import { ProductImage } from "./ProductImage";
import { ProductDetails } from "./ProductDetails";

const productColors = [
  {
    name: "black",
    primary: "#000",
    secondary: "#212121",
    img: "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true",
  },
  {
    name: "red",
    primary: "#7E021C",
    secondary: "#bd072d",
    img: "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true",
  },
  {
    name: "orange",
    primary: "#CE5B39",
    secondary: "#F18557",
    img: "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true",
  },
];




export default function ProductCard() {
  const [selectedColor, setSelectedColor] = useState(productColors[0]);

  return (
    <div
      style={{
        backgroundColor: selectedColor.primary,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "900px",
          height: "600px",
          background: "#fff",
          margin: "20px",
          position: "relative",
        }}
      >
        <ProductImage selectedColor={selectedColor} />
        <ProductDetails selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
}
