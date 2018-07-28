[%bs.raw {|require('./Slider.css')|}];

let component = ReasonReact.statelessComponent("Slider");

let make = _children => {
  ...component,
  render: _self =>
    <input
      className="slider"
      _type="range"
      defaultValue="300"
      max="500"
      min=100
    />,
};
