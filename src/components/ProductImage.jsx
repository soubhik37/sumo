// ProductImage.js
export const ProductImage = ({ selectedColor }) => (
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
);
