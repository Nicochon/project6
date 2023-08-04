import Card from "../Card";
import { Apartment } from "../../assets/logement";
import "../../scss/Logement/index.scss";
function Housing() {
  return (
    <section>
      <div className="grid_logement">
        {Apartment.slice(0, 6).map((Liste, index) => (
          <Card
            key={Liste.id}
            KEY={Liste.id}
            cover={Liste.cover}
            title={Liste.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Housing;
