// Color data
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

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column", 
  justifyContent: "center",
  width: "50%",
  height: "100%",
  padding: "40px",
  boxSizing: "border-box",
};

const titleStyle = (color) => ({
  color: color,
  fontSize: "2.4em"
});

const subtitleStyle = {
  fontSize: "0.4em",
  textTransform: "uppercase",
  color: "#999"
};

const descriptionStyle = {
  color: "#333",
  fontSize: "15px"
};

const priceStyle = (color) => ({
  fontSize: "2.5em",
  color: color
});

const buttonStyle = (color) => ({
  background: color,
  color: "#fff",
  border: "none",
  padding: "15px 20px", 
  marginTop: "5px",
  fontSize: "16px",
  borderRadius: "40px",
  cursor: "pointer"
});

const colorSwatchContainerStyle = {
  marginTop: "20px"
};

const colorSwatchStyle = (primary, isSelected) => ({
  display: "inline-block",
  width: "26px",
  height: "26px",
  marginRight: "12px",
  borderRadius: "50%",
  backgroundColor: primary,
  cursor: "pointer",
  border: isSelected ? "2px solid #000" : "none"
});

// Components
const Title = ({ color }) => (
  <h2 style={titleStyle(color)}>
    Jordan Proto-Lyte <br />
    <span style={subtitleStyle}>Running Collection</span>
  </h2>
);

const Description = () => (
  <p style={descriptionStyle}>
    Featuring soft foam cushioning and lightweight, woven fabric in the upper,
    the Jordan Proto-Lyte is made for all-day, bouncy comfort.
  </p>
);

const Price = ({ color }) => (
  <h3 style={priceStyle(color)}>Rs. 12,800</h3>
);

const BuyButton = ({ color }) => (
  <button style={buttonStyle(color)}>Buy Now</button>
);

const ColorSwatch = ({ color, selectedColor, setSelectedColor }) => (
  <span
    key={color.name}
    onClick={() => setSelectedColor(color)}
    style={colorSwatchStyle(color.primary, selectedColor.name === color.name)}
  />
);

export const ProductDetails = ({ selectedColor, setSelectedColor }) => (
  <div style={containerStyle}>
    <Title color={selectedColor.secondary} />
    <Description />
    <Price color={selectedColor.secondary} />
    <BuyButton color={selectedColor.secondary} />
    <div style={colorSwatchContainerStyle}>
      {productColors.map((color) => (
        <ColorSwatch
          key={color.name}
          color={color}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      ))}
    </div>
  </div>
);
