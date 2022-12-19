import { useState } from "react";
import SquareBlock from "../squareBlock";
import CircleSelector from "../circleSelector";
import "./rgbAlchemy.css";
const RGBAlchemy = (props) => {
  const { userDetails } = props;

  const [selectorColor, setSelectorColor] = useState("rgb(255,0,0)");
  const [shade1, setShade1] = useState("");

  const [clickFlag, setClickFlag] = useState(3)

  const grid = [];

  for (let row = 0; row < userDetails.height; row++) {
    const currentRow = [];
    for (let col = 0; col < userDetails.width; col++) {
      currentRow.push(SquareBlock);
    }
    grid.push(currentRow);
  }

  const handleSelector = (e, y) => {
    if (clickFlag > 0) {
        e.target.style.backgroundColor = selectorColor
        setClickFlag((clickFlag) => (clickFlag - 1))
        if (clickFlag === 3) {
            setSelectorColor("rgb(0,255,0)")
        }
        if (clickFlag === 2) {
            setSelectorColor("rgb(0,0,255)")
        }
    }
  };

  const handleTilePos = (e, x, y) => {
    e.target.style.backgroundColor = "green"
    console.log("Tile X", x);
    console.log("Tile Y", y);
    console.log((e.target.style.backgroundColor = "green"));
  };

  return (
    <div className="container">
      {grid.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((Tile, j) => {
              return (
                <div key={j}>
                  <div
                    className="circleSelectorTop"
                    onClick={(e) => {
                        handleSelector(e, j, 'top');
                    }}
                  >
                    {i === 0 && <CircleSelector />}
                  </div>
                  <div
                    className="circleSelectorLeft"
                    onClick={(e) => {
                        handleSelector(e, i, 'left');
                    }}
                  >
                    {j === 0 && <CircleSelector />}
                  </div>
                  <div
                    className="circleSelectorRight"
                    onClick={(e) => {
                        handleSelector(e, i, 'right');
                    }}
                  >
                    {j === userDetails.width - 1 && <CircleSelector />}
                  </div>
                  {
                    <div
                      onClick={(e) => {
                        handleTilePos(e, i, j);
                      }}
                      data-x={i}
                      data-y={j}
                    >
                      <Tile />
                    </div>
                  }
                  <div
                    onClick={(e) => {
                        handleSelector(e, j, 'bottom');
                    }}
                  >
                    {i === userDetails.height - 1 && <CircleSelector />}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RGBAlchemy;
