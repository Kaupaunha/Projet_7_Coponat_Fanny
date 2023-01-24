import './Home.scss'

import Banner from '../../components/Banner/Banner'
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard'

import data from '../../assets/datas/datas.json'
import bannerImg from '../../assets/img/bannerImg.jpeg'

import { Link } from 'react-router-dom'

function Home() {
  const bannerTitle = 'Chez vous, partout et ailleurs'
  return (
    <div>
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => {
          /* return generera les liens de redirection des cartes */
          return (
            <Link
              className="main__link"
              // Redirection vers le chemin ci-dessous avec la variable en paramètre (comme défini dans le routeur)
              to={`/apartment/${apartment.id}`}
              // Pour identifier les elements d'une liste de manière unique
              key={apartment.id}
              title={apartment.title}
            >
              {/* le spread operator pour récup toutes les données de chaque appartement mappé.
              Dans le composant ci-dessous on récupère seulement le "cover" et le "title" mais ça fait plus court */}
              <ApartmentCard {...apartment} />
            </Link>
          )
        })}
      </main>
    </div>
  )
}

// Export pour réutilisation dans le routeur
export default Home
