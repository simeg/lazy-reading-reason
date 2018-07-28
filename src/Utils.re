module Utils = {
  let valueFromEvent = evt : string => (evt |> ReactEventRe.Form.target |> ReactDOMRe.domElementToObj)##value;
};
