

/*
<div id="parent">
  <div id="child">
  <h1>this is an h1 tag</h1>
  </div>
  </div>
  */
 
  const parent = React.createElement("div",{id:"parent"},

  React.createElement("div",{id:"child"},

  React.createElement("h1",{},"this ia an h1 tag")
)
);



console.log(parent);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);