import TableauOverviewEmbed from "../components/TableauOverviewEmbed";
// import TableauCropSelector from "../components/TableauCropSelector";
import TableauCropSelectorV2 from "../components/TableauCropSelectorV2";

function Overview() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="main-title">Overview</h1>

          <div className="dataviz">
            {/* Tableau Viz */}
            <TableauOverviewEmbed />
          </div>
        </div>
      </section>

      <TableauCropSelectorV2 />

      {/* Third Section */}
    </div>
  );
}

export default Overview;
