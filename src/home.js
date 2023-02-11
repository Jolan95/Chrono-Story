import React from 'react'
import BoxQuiz from "./box-quiz.js"
import Separator from './separator.js'

const componentName = () => {
    return (
        <div className='App-header'>
            <h1 className="text-center pb-5">Chrono-date</h1>
            <div className='container'>
                <div className='row'>
                    <Separator>Histoire</Separator>
                    <BoxQuiz image={"https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/evolution-wiki_ver_1.png"} to={"/humanity"} text={"Les grandes dates de l'histoire de l'Humanité"}>Histoire de l'Humanité</BoxQuiz>
                    <BoxQuiz image={"https://blog.artsper.com/wp-content/uploads/2022/04/New-Featured-Image-1200-x-675-6.jpg"} to={"/renaissance"} text={"Les grandes dates de la Renaissance"}>La Renaissance</BoxQuiz>
                    <BoxQuiz image={"https://www.larousse.fr/encyclopedie/data/images/1315784-Saint_Louis_chevauchant_avec_ses_chapelains.jpg"} to={"/middle-age"} text={"Les grandes dates mondiales du Moyen-Age"}>Le Moyen Age</BoxQuiz>
                    <BoxQuiz image={"https://img-4.linternaute.com/PkpDw9vnBsWisCXgWhcQ03ttScc=/1500x/smart/e75900c681bc4292be9e29f0cb589911/ccmcms-linternaute/26116406.jpg"} to={"/from-1789"} text={"Les grandes dates depuis la Révolution Française"}>Depuis 1789</BoxQuiz>
                    <BoxQuiz image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXYXmEY8kmDqz7dBEpr4HcpVtlAQloQniWw&usqp=CAU"} to={"/XXèmeSiecle"} text={"Les grandes dates du XXème Siècle"}>20ème Siècle</BoxQuiz>
                    <BoxQuiz image={"https://static.hitek.fr/img/actualite/i_moment-21-eme-siecle.jpg"} to={"/XXIèmeSiecle"} text={"Les grandes dates du XXIème Siècle"}>21ème Siècle</BoxQuiz>
                    <BoxQuiz image={"https://www.imagesdoc.com/wp-content/uploads/sites/33/2018/10/guerre-froide.jpg"} to={"/guerre-froide"} text={"Les grandes dates de la guerre froide"}>Guerre froide</BoxQuiz>
                    <BoxQuiz image={"https://i.ytimg.com/vi/DurZIMEdoPE/maxresdefault.jpg"} to={"/rois-de-france"} text={"Chronologie des rois de France"}>Rois de France</BoxQuiz>
                    <BoxQuiz image={"https://aws.vdkimg.com/vk_list/1/3/0/3/1303585_photo_scale_740x172.jpg"} to={"/presidents-français"} text={"Les présidents Français par date d'investiture"}>Présidents Français</BoxQuiz>
                    <BoxQuiz image={"https://www.rts.ch/2012/10/18/11/09/4360340.image?&w=800&h=450"} to={"/presidents-americains"} text={"Les présidents des USA par date d'investiture"}>Présidents des Etats-Unis</BoxQuiz>
                    <Separator>Sport</Separator>
                    <BoxQuiz image={"https://thumbs.dreamstime.com/b/mat%C3%A9riel-de-sport-2-22802518.jpg"} to={"/sport"} text={"Les grandes dates du sport"}>Sport</BoxQuiz>
                    <BoxQuiz image={"https://www.1min30.com/wp-content/uploads/2018/03/logo-NBA.jpg"} to={"/nba"} text={"Les grandes dates de la NBA"}>NBA</BoxQuiz>
                    <BoxQuiz image={"https://upload.wikimedia.org/wikipedia/fr/thumb/a/a5/Logo_Olympique_Lyonnais_-_2022.svg/1200px-Logo_Olympique_Lyonnais_-_2022.svg.png"} to={"/ol"} text={"Les grandes dates de l'Olympique Lyonnais"}>Olympique Lyonnais</BoxQuiz>
                    <BoxQuiz image={"https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/2048px-Paris_Saint-Germain_Logo.svg.png"} to={"/psg"} text={"Les grandes dates du Paris Saint Germain"}>Paris Saint Germain</BoxQuiz>
                    <BoxQuiz image={"https://upload.wikimedia.org/wikipedia/fr/archive/4/43/20200407190016%21Logo_Olympique_de_Marseille.svg"} to={"/om"} text={"Les grandes dates de l'Olympique de Marseille"}>Olympique de Marseille </BoxQuiz>
                </div>
            </div>
        </div>
    )
}

export default componentName