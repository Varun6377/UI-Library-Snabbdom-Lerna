import { h } from "snabbdom/build/h";

const increment = "INCREMENT";

/*Templating*/
function Teamplate(state, props) {
  const buttonStyles = {
    fontSize: "24px",
    padding: "15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
  };

  function handleTransitionStart(event) {
    const button = event.target;
    button.style.transition = "transform 0.09s";
    button.style.transform = "scale(1.04)";
  }

  function handleTransitionEnd(event) {
    const button = event.target;
    button.style.transition = "";
    button.style.transform = "";
  }

  return h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        fontSize: "24px",
      },
    },
    [
      h("h1", `Value : ${state}`),
      h(
        "button",
        {
          on: {
            click: props.bind(null, { type: increment }),
            mousedown: handleTransitionStart,
            transitionend: handleTransitionEnd,
          },
          style: buttonStyles,
        },
        "Add"
      ),
    ]
  );
}

/*Reactivity*/
function updateState(state, action) {
  console.log("State changed!");
  return action.type === increment ? state + 1 : state;
}

/*Life Cycle Events*/
function onMount() {
  console.log("Component mounted!");
}

export default { Teamplate, updateState, onMount, actions: { increment } };
