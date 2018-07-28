[%bs.raw {|require('./WordReader.css')|}];

let str = ReasonReact.string;
type readerState =
  | Running
  | Paused
  | Stopped;
type state = {
  userInput: string,
  readerState,
  readerIndex: int,
  timerId: ref(option(Js.Global.timeoutId)),
};

let initialState = () => {
  readerIndex: 0,
  userInput: "Here is some starting text",
  readerState: Stopped,
  timerId: ref(None),
};

type action =
  | InputOnChange(string)
  | ReaderStart
  | ReaderPause
  | ReaderStop
  | Tick
  | SetTimerInstance(option(Js.Global.timeoutId));

let component = ReasonReact.reducerComponent("WordReader");

type wordPart = {
  text: string,
  className: string,
};

type word = {
  pre: wordPart,
  middle: wordPart,
  post: wordPart,
};

let getHighlightIndex = (word: string) : int =>
  switch (String.length(word)) {
  | 1 => 0
  | 2
  | 3
  | 4
  | 5 => 1
  | _ => 2
  };

let renderWord = (input: string) : word => {
  let index: int = getHighlightIndex(input);
  let pre: wordPart = {text: String.sub(input, 0, index), className: "pre"};
  let middle: wordPart = {text: String.make(1, input.[index]), className: "highlight"};
  let post: wordPart = {text: String.sub(input, index + 1, String.length(input)), className: "post"};
  {pre, middle, post};
};

/* -------------------------------------------------------------------------- */

let handleState = (self, state) =>
  if (state === Paused) {
    Js.log("it's paused");
    switch (self.ReasonReact.state.timerId^) {
    | None => self.ReasonReact.state
    | Some(instance) =>
      Js.Global.clearTimeout(instance);
      self.ReasonReact.state;
    };
  } else {
    Js.log("it's running");
    self.state.timerId := Some(Js.Global.setTimeout(() => self.send(Tick), 1000));
    self.ReasonReact.state;
  };

let myRender = (state, input, index) => state === Running ? str(Js.String.split(" ", input)[index]) : str("");

let make = (~input, ~readerState, ~index, ~setTimerInstance, ~timerInstance, _children) => {
  ...component,
  initialState,
  willReceiveProps: self => handleState(self, readerState),
  didMount: self => {
    Js.log("started");
    self.state.timerId := Some(Js.Global.setTimeout(() => self.send(Tick), 1000));
  },
  reducer: (action, state) =>
    switch (action) {
    | ReaderStart => ReasonReact.Update({...state, readerState: Running})
    | ReaderPause => ReasonReact.Update({...state, readerState: Paused})
    | ReaderStop => ReasonReact.Update({...state, readerState: Stopped})
    | Tick => ReasonReact.Update({...state, readerIndex: state.readerIndex + 1})
    },
  render: self => <div id="word-container"> myRender (readerState, input, index) </div>,
};
