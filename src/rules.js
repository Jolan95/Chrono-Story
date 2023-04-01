import React from 'react'
import Header from './components/header'
export default function Rules() {
  return (
    <div>
 
        <Header></Header>
        <div className="rules container">
            <h1 className='text-center mb-4'>Règles du jeu</h1>
            <h2>Qu'est ce que Chrono-Story?</h2>
            Chrono-Story est un jeu éducatif comprenant plusieurs thèmes (Moyen-Age, Humanité, Présidents Français,...) , ces thèmes contiennent une certaine quantité de question disponible faisant référence à un évènement/fait marquant lié à une date. 
            Le but du jeu est de situer ces évènements dans le temps.
            <h2 className='mt-3'>Règles du jeu</h2>
            Pour jouer il faut séléctionner un thème. Une question (Encadrée en bleu clair) est présentée au joueur, un évènement est affiché comme réference ainsi que sa date de déroulement. 
            Le joueur doit classer les dates de haut en bas dans un ordre croissant (du plus ancien au plus récent). Le joueur dispose de 3 vies, chaque erreur fait perdre une vie, la partie prend donc fin au bout de 3 erreurs. Chaque bonne réponse donne un point.
            <h2 className='mt-3'>Comment jouer?</h2>
            Le joueur doit cliquer sur les barres blanches horizontales pour faire une suggestion, si cette dernière est bonne, un bloc vert avec le libellé de la question ainsi que la révélation de la date s'affichera à l'emplacement du clic, autrement un bloc rouge viendra se situera à l'emplacement adéquat.
            Le joueur doit donc faire preuve de précision dans ses suggestions car les blocs s'accumulent et les bonnes réponses se situeront souvent entre deux blocs (ex : 1 bloc avec la date 1789 au dessus d'un bloc 1804, le joueur devra donc cliquer sur la barre comprise entre ces dernières pour situer une réponse comprise entre 1789 et 1804) dont les dates sont de plus en plus plus proches les unes des autres.
            <h2 className='mt-3'>Fin de partie</h2>
            Le jeu prend fin quand le joueur est arrivé à bout de l'integralité des questions disponibles pour le thème choisi ou qu'il n'a plus de vies.<br></br>
            Les utilisateurs peuvent s'authentifier afin d'enregistrer leurs records en base de données.
            <p className='mt-3'>Le meilleur moyen de comprendre, c'est d'y jouer. 😉</p>
        </div>
    </div>
  )
}
