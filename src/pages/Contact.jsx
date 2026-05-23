function ContactPage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="main-title">Contact Information</h1>
        </div>
      </section>

      {/* Second Section */}
      <section className="registry-section">
        <div className="home-title-div">
          <h2>Source Material</h2>
        </div>
        <div className="container">
          <div className="registry-grid">
            <img
              src="images/registry_1.jpg"
              alt="An old book that is closed from the top."
              className="registry-image"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <img
                src="images/registry_2.jpg"
                alt="An old book that is open from the top."
                className="registry-image"
              />
              <p>
                <i>Three views of [shelf mark].</i>
              </p>
            </div>

            <img
              src="images/registry_3.jpg"
              alt="An old book that is closed from the side."
              max-width="100%"
              className="registry-image"
            />
          </div>

          <div className="left-text">
            <p>
              Handwritten registries, copies of which are now held in the T71
              series of the National Archives of the United Kingdom (TNA), yield
              detailed information about every individual enslaved in Trinidad
              and St. Lucia. Following an 1813 Order in Council, enslavers were
              required to report the first name, last name, “color,” employment,
              age, stature, country of origin, “marks,” or distinguishing
              characteristics, and familial relations of each person enslaved in
              Trinidad; in 1815, they did the same for St. Lucia.
            </p>
            <br></br>
            <p>
              In each island, Registrars and their clerks hand-copied this
              information into one of two large books, each of which runs to as
              many as 800 pages: the Registry of Plantation Slaves (i.e., people
              enslaved on agricultural estates) or the Registry of Personal
              Slaves (i.e., people enslaved in more urban settings). In 1819,
              copies of the Registry Books were sent to England, and in 1851
              they were transferred to the Public Record Office (now TNA). The
              registries can be freely accessed at TNA. All information made
              available on this site is based on human-generated transcriptions
              of photographs of these original archival documents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
