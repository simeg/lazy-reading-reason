[%bs.raw {|require('./WordCounter.css')|}];

let component = ReasonReact.statelessComponent("WordCounter");
let str = ReasonReact.string;

let getWordsCount = (input: string) : string =>
  switch (String.trim(input)) {
  | "" => "0 words"
  | words =>
    let wordCount: int =
      words
      |> Js.String.split(" ")
      |> Array.to_list
      |> List.filter(str => str !== "")
      |> List.length;
    switch (wordCount) {
    | 1 => "1 word"
    | _ => {j|$wordCount words|j}
    };
  };

let make = (~input: string, _children) => {
  ...component,
  render: _self =>
    <div id="word-counter"> (str(getWordsCount(input))) </div>,
};
