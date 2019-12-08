import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  count: state
});

const mapDispatchToProps = (dispatch) => ({
  add10: () => dispatch({ type: "ADD_10" }),
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  remove10: () => dispatch({ type: "REMOVE_10" }),
  reset: () => dispatch({ type: "RESET" }),
});

const CounterComponent = ({ count, add10, add, remove, remove10, reset }) => (
  <div>
    <button onClick={add10}>+10</button>
    <button onClick={add}>+ 1</button>
    {count}
    <button onClick={remove}>- 1</button>
    <button onClick={remove10}>-10</button>
    <button onClick={reset}>RESET</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);