import Accordion from "react-bootstrap/Accordion";

function Blogs() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Blogs</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Blogs;
