import React, { useState } from "react";

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
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
            backgroundColor: selectedColor.secondary,
            transition: "0.3s linear",
          }}
        >
          <img
            src={selectedColor.img}
            alt="Nike Jordan Proto-Lyte"
            style={{
              position: "relative",
              width: "700px",
              transform: "rotate(-30deg)",
              left: "-50px",
              transition: "0.9s linear",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
            height: "100%",
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              color: selectedColor.secondary,
              fontSize: "2.4em",
              marginBottom: "10px",
            }}
          >
            Jordan Proto-Lyte <br />
            <span
              style={{
                fontSize: "0.4em",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#999",
              }}
            >
              Running Collection
            </span>
          </h2>
          <p style={{ color: "#333", fontSize: "15px", marginBottom: "36px" }}>
            Featuring soft foam cushioning and lightweight, woven fabric in the
            upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.
          </p>
          <h3
            style={{
              fontSize: "2.5em",
              color: selectedColor.secondary,
              margin: "0",
            }}
          >
            Rs. 12,800
          </h3>
          <button
            style={{
              background: selectedColor.secondary,
              color: "#fff",
              border: "none",
              padding: "15px 20px",
              marginTop: "5px",
              fontSize: "16px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: "600",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
          <div style={{ marginTop: "20px" }}>
            {productColors.map((color) => (
              <span
                key={color.name}
                onClick={() => setSelectedColor(color)}
                style={{
                  display: "inline-block",
                  width: "26px",
                  height: "26px",
                  marginRight: "12px",
                  borderRadius: "50%",
                  backgroundColor: color.primary,
                  cursor: "pointer",
                  position: "relative",
                  border:
                    selectedColor.name === color.name
                      ? "2px solid #000"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
