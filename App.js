/**
  <div id="parent">
     <div id= "child1">
       <h1>This is an H1 tag</h1>
       <h2>This is an H2 tag</h2>
     </div>
          <div id= "child2">
       <h1>This is an H1 tag</h1>
       <h2>This is an H2 tag</h2>
     </div>
  </div>
 */

const parent = React.createElement("div",{id:"parent"}, 
   [React.createElement("div" , {id: "child1"}, 
   [React.createElement("h1" , {}, "This is an H1 tag"),
   React.createElement("h2" , {}, 'This is an h2 tag')]
   ), React.createElement('div' , {id: "child2"}, [React.createElement("h1", {}, "This is an H1 tag"), 
   React.createElement("h2", {}, "This is an h2 tag")]
   )] 
)





// const heading = React.createElement(
//     "h1", {id:"heading" , xyz:"hello"}, 
//     "Hello World From React");
//     console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);