[%bs.raw {|require('./App.css')|}];
[%bs.raw {|require('./components/TextInput.re')|}];
[%bs.raw {|require('./components/Slider.re')|}];

type state = {
  userInput: string,
  readerState: WordReader.readerState,
  readerIndex: int,
  timerInstance: option(Js.Global.timeoutId),
};

let initialState = () => {
  readerIndex: 0,
  userInput: "Here is some starting text",
  readerState: Stopped,
  timerInstance: None,
};

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState,
  reducer: (action, state) =>
    switch (action) {
    | InputOnChange(input) => ReasonReact.Update({...state, userInput: input})
    | ReaderStart => ReasonReact.Update({...state, readerState: Running})
    | ReaderPause => ReasonReact.Update({...state, readerState: Paused})
    | ReaderStop => ReasonReact.Update({...state, readerState: Stopped})
    | SetTimerInstance(instance) => ReasonReact.Update({...state, timerInstance: instance})
    },
  render: ({state: {userInput, readerState, readerIndex, timerInstance}, send}) =>
    <div id="outer">
      <div id="inner">
        <WordCounter input=userInput />
        <div id="output">
          <WordReader
            setTimerInstance=(instance => send(WordReader.SetTimerInstance(instance)))
            timerInstance
            readerState
            input=userInput
            index=readerIndex
          />
        </div>
        <TextInput
          className=(readerState === Running ? "hide" : "") onChange=(e => send(WordReader.InputOnChange(e)))>
          ...userInput
        </TextInput>
        <Slider />
        <div>
          <Button onClick=(_e => send(readerState === Running ? ReaderPause : ReaderStart))>
            ...(readerState === Running ? "Pause" : "Start")
          </Button>
          <Button onClick=(_e => send(ReaderStop))> ..."Reset" </Button>
        </div>
      </div>
    </div>,
};
