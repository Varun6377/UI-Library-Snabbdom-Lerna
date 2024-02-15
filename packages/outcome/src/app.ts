import { init } from "snabbdom";

import output from "ui-library/src/index";

const patch = init([
  require("snabbdom/modules/class"),
  require("snabbdom/modules/props"),
  require("snabbdom/modules/style"),
  require("snabbdom/modules/eventlisteners"),
]);

function main(initState, oldVnode, { Teamplate, updateState, onMount }) {
  const newVnode = Teamplate(initState, (e) => {
    const newState = updateState(initState, e);
    main(newState, newVnode, { Teamplate, updateState, onMount });
  });
  patch(oldVnode, newVnode);
  onMount();
}

main(0, document.getElementById("app"), output);
