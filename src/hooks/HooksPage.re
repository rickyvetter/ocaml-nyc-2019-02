/* This is your familiar handleClick from ReactJS. This mandatorily takes the payload,
   then the `self` record, which contains state (none here), `handle`, `send`
   and other utilities */
let handleClick = _event => Js.log("clicked!");

/* Which desugars to

   `let make = ({message}) => ...` */
[@react.component]
let make = (~message, ()) => {
  React.useEffect(() => {
    Js.log("Hey!");
    None;
  }); 
  <button onClick=handleClick> {ReasonReact.string(message)} </button>
};
