import { c as create_ssr_component } from "../../chunks/ssr.js";
import { HttpAgent, Actor } from "@dfinity/agent";
import { b as building } from "../../chunks/environment.js";
import { e as escape } from "../../chunks/escape.js";
const idlFactory = ({ IDL }) => {
  return IDL.Service({ "greet": IDL.Func([IDL.Text], [IDL.Text], ["query"]) });
};
const canisterId = "oc2rv-5aaaa-aaaag-aovqa-cai";
const createActor = (canisterId2, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });
  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: canisterId2,
    ...options.actorOptions
  });
};
function dummyActor() {
  return new Proxy({}, { get() {
    throw new Error("Canister invoked while building");
  } });
}
const buildingOrTesting = building || process.env.NODE_ENV === "test";
buildingOrTesting ? dummyActor() : createActor(canisterId);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let greeting = "";
  return `<main><img src="/logo2.svg" alt="DFINITY logo"> <br> <br> <form action="#" data-svelte-h="svelte-hhx21s"><label for="name">Enter your name:  </label> <input id="name" alt="Name" type="text"> <button type="submit">Click Me!</button></form> <section id="greeting">${escape(greeting)}</section></main>`;
});
export {
  Page as default
};
