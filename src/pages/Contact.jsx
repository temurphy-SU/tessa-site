function ContactPage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="contact-section">
        <div className="container">
          <h1 className="main-title">Contact Information</h1>

          <div className="contact-header-div">
            <img
              src="images/murphy-crop.jpg"
              alt="Professional headshot of Dr. Tessa Murphy."
              className="headshot-image"
            />
            <div className="contact-text">
              <h2>Dr. Tessa Murphy</h2>
              <h3>
                {" "}
                <a
                  className="contact-links"
                  href="https://www.maxwell.syr.edu/directory/tessa-murphy"
                >
                  Maxwell faculty page link{" "}
                </a>
              </h3>
              <h3>
                email:{" "}
                <a className="contact-links" href="mailto:temurphy@syr.edu">
                  temurphy@syr.edu
                </a>
              </h3>
            </div>
          </div>

          <div className="citation-text">
            <h2>How to cite this page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              condimentum auctor purus at malesuada. Cras vulputate purus augue,
              vel volutpat mauris lobortis eu. Suspendisse ullamcorper laoreet
              lacinia. Suspendisse at dui a ante auctor fermentum ac condimentum
              quam. Nullam bibendum justo a efficitur feugiat. Donec vestibulum
              vestibulum fringilla.
            </p>
            <br></br>
            <h2>Read publications about this</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              condimentum auctor purus at malesuada. Cras vulputate purus augue,
              vel volutpat mauris lobortis eu. Suspendisse ullamcorper laoreet
              lacinia. Suspendisse at dui a ante auctor fermentum ac condimentum
              quam. Nullam bibendum justo a efficitur feugiat. Donec vestibulum
              vestibulum fringilla.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
