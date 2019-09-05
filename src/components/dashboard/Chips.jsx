import React from "react";

const Chips = props => {
  return (
    <div>
      <h4 className="pt-2 font-weight-bolder">
        <RenderChip
          intials="NM"
          className="mychip"
          label="My Events"
          handleClick={() => handleClick("myevents")}
          active={state.whichEventsToShow === "myevents"}
        ></RenderChip>
      </h4>
      <h4 className="pt-2 font-weight-bolder">
        <RenderChip
          label="All Events"
          className="allchip"
          handleClick={() => handleClick("allevents")}
          active={state.whichEventsToShow === "allevents"}
        ></RenderChip>
      </h4>
    </div>
  );
};

export default Chips;
