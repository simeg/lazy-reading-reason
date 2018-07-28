[%bs.raw {|require('./Button.css')|}];

let component = ReasonReact.statelessComponent("Button");
let str = ReasonReact.string;

let defaultType: string = "button";

let make = (~_type: string=defaultType, ~onClick, children: string) => {
  ...component,
  render: _self =>
    <button className="btn" _type onClick=(_e => onClick())>
      (str(children))
    </button>,
};
