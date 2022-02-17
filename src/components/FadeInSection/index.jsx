import React from 'react';

export default function FadeInSection(props) {
    //Indicates whether or not a section is visible
    const [isVisible, setVisible] = React.useState(true);
    //Creates a reference to a DOM node
    const domRef = React.useRef();
    //Creates intersection observer and observes
    React.useEffect(() => {
      //Creates a new instance of the IntersectionObserver class which will be called whenever anything changes on the screen due to being in a useEffect function
      const observer = new IntersectionObserver(entries => {
        //For each entry, should only be one, set the isVisible variable using the isIntersecting boolean
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      //This method tells the observer instance to observe the current DOM node
      observer.observe(domRef.current);
      //This returned function is a cleanup function, fixes a data leak
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      //This is the returned div to be used after the above logic is done, as a wrapper around elements that need this CSS functionality. Sets the class of the div to .fade-in-section.isVisible or .fade-in-section
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        //attaches DOM reference to the actual DOM.
        ref={domRef}
      >
        {props.children}
      </div>
    );
}