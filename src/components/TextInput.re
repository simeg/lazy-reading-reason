open Utils;

[%bs.raw {|require('./TextInput.css')|}];

let component = ReasonReact.statelessComponent("TextInput");
let str = ReasonReact.string;

let make = (~onChange, ~className, children) => {
  ...component,
  render: _self =>
    <textarea
      className
      id="textarea-input"
      onChange=(e => onChange(Utils.valueFromEvent(e)))>
      (str(children))
    </textarea>,
};
