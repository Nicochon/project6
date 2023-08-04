import { useParams } from "react-router-dom";
import { Apartment } from "../../assets/logement";
import BannerDescription from "../../components/Section/Description/CarouselDescription";
import SectionTitle from "../../components/Section/Description/SectionTitle";
import SectionTagRating from "../../components/Section/Description/SectionTagRating";
import SectionDescription from "../../components/Section/Description/SectionDescription";
import SectionEquipements from "../../components/Section/Description/SectionEquipements";
import "../../scss/Section/description/infos_appartement.scss";
import "../../scss/Section/description/carrousel.scss";
import "../../scss/Section/description/animation_texte.scss";
import { Link } from "react-router-dom";
import "../../scss/General/index.scss";
function Description({
  infoLogement,
  TagsMap,
  EquipmentMap,
  CarouselPictures,
}) {
  const { KEY } = useParams();
  Apartment.map((Liste) =>
    Liste.id === KEY ? (infoLogement = { Liste }) : null
  );

  /*parcourir les infos */
  TagsMap = infoLogement.Liste.tags.map((Tags, index) => (
    <Link key={`${Tags}-${index}`} href="/">
      {Tags}
    </Link>
  ));

  EquipmentMap = infoLogement.Liste.equipments.map((Equipments, index) => (
    <li key={`${Equipments}-${index}`}>{Equipments}</li>
  ));

  CarouselPictures = infoLogement.Liste.pictures;

  return (
    <div className="container_description">
      <BannerDescription PicturesLogement={CarouselPictures} />
      <SectionTitle
        title={infoLogement.Liste.title}
        logement={infoLogement.Liste.location}
        hostname={infoLogement.Liste.host.name}
        hostpicture={infoLogement.Liste.host.picture}
      />
      <SectionTagRating
        tags={TagsMap}
        hostname={infoLogement.Liste.host.name}
        hostpicture={infoLogement.Liste.host.picture}
      />
      <div className="section_accordion">
        <SectionDescription description={infoLogement.Liste.description} />
        <SectionEquipements equipments={EquipmentMap} />
      </div>
    </div>
  );
}

export default Description;
