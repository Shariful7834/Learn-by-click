import Accordion from "react-bootstrap/Accordion";

function Blogs() {
  return (
    <div className="container mt-5 pt-5 text-start">
      <h2 className="text-center mb-5">Blogs</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
<<<<<<< HEAD
          <Accordion.Header>1. The Purpose of React Router</Accordion.Header>
          <Accordion.Body>
            React Router, and dynamic, client-side routing, allows us to build a
            single-page web application with navigation without the page
            refreshing as the user navigates. React Router uses component
            structure to call components, which display the appropriate
            information.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. How does context API work?</Accordion.Header>
          <Accordion.Body>
            he React Context API is a way for a React app to effectively produce
            global variables that can be passed around. This is the alternative
            to "prop drilling" or moving props from grandparent to child to
            parent, and so on. Context is also touted as an easier, lighter
            approach to state management using Redux.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. useHref Hooks</Accordion.Header>
          <Accordion.Body>
            The useHref hook returns a URL that may be used to link to the given
            to location, even outside of React Router. Tip: You may be
            interested in taking a look at the source for the 'Link' component
            in react-router-dom to see how it uses useHref internally to
            determine its own href value.
=======
          <Accordion.Header>1. What is the Purpose of React Router</Accordion.Header>
          <Accordion.Body>
          React Router is a state container for the current location , or URL. It keeps track of the location and renders different 
          'Router' s as it changes, and it also gives you tools to update the location using 'Link'' s and the history API.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. How does Context API work? </Accordion.Header>
          <Accordion.Body>
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the 
          alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, 
          lighter approach to state management using Redux.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. How does useHref hook work? </Accordion.Header>
          <Accordion.Body>
          useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
>>>>>>> 97828bc09eaea8595bf9ac8df88ef09c336b7282
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Blogs;
