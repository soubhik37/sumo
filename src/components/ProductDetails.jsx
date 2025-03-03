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
export const ProductDetails = ({ selectedColor, setSelectedColor }) => (
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
    <h2 style={{ color: selectedColor.secondary, fontSize: "2.4em" }}>
      Jordan Proto-Lyte <br />
      <span
        style={{ fontSize: "0.4em", textTransform: "uppercase", color: "#999" }}
      >
        Running Collection
      </span>
    </h2>
    <p style={{ color: "#333", fontSize: "15px" }}>
      Featuring soft foam cushioning and lightweight, woven fabric in the upper,
      the Jordan Proto-Lyte is made for all-day, bouncy comfort.
    </p>
    <h3 style={{ fontSize: "2.5em", color: selectedColor.secondary }}>
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
            border:
              selectedColor.name === color.name ? "2px solid #000" : "none",
          }}
        />
      ))}
    </div>
  </div>
);
