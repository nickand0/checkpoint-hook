// MovieData.js
const MovieData = [
    { 
        id: 1,
        title: 'Manifest', 
        description: "De nos jours, le vol 828 de la Montego Air reliant la Jamaïque à New York, connaît une brève période de fortes turbulences. Quand ils atterrissent, les passagers et les membres de l'équipage apprennent de la part de l'Agence de sécurité nationale que plus de cinq ans et demi se sont écoulés, période au cours de laquelle ils ont été présumés morts. Alors qu'ils se réinsèrent dans la société, les passagers commencent à se rendre compte que leurs vies - et leurs proches - ne sont plus comme avant. Ils commencent à faire l'expérience de voix directrices et d'hallucinations",
        posterURL: 'https://ntvb.tmsimg.com/assets/p15516905_b_h8_av.jpg?w=960&h=540', 
        rating: 5, 
        trailerURL: 'https://youtu.be/T4ITpuOBReY' 
    },
    { 
        id: 2, 
        title: 'The rain', 
        description: "On ne sait jamais quand sa vie va changer... Six ans après l'apparition d'un virus mortel ayant éliminé plus de la moitié de la population, un frère et une sœur partent à la recherche d'un abri dans un monde devenu périlleux. ",
        posterURL: 'https://www.radiofrance.fr/s3/cruiser-production/2020/06/79fe679e-72a1-452b-bebe-209929c701e7/1200x680_the-rain.jpg', 
        rating: 5, 
        trailerURL: 'https://youtu.be/5WeaTr4Ib7k' 
    },
    { 
        id: 3, 
        title: 'La Demoiselle et le Dragon', 
        description: "Une jeune femme docile accepte d'épouser un beau prince et réalise que la famille royale a choisi de la sacrifier en remboursement d'une dette ancienne. Jetée dans une grotte abritant un dragon cracheur de feu, elle ne pourra compter que sur son intelligence et sur son courage pour survivre. Millie Bobby Brown est à l'affiche de LA DEMOISELLE ET LE DRAGON, disponible le 8 mars 2024, seulement sur Netflix.", 
        posterURL: 'https://cdn.lesnumeriques.com/optim/product/74/74672/547b007b-la-demoiselle-et-le-dragon__1200_900__0-165-910-678.jpg', 
        rating: 4, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 4, 
        title: 'Squid game', 
        description: "Une série Netflix | SQUID GAME Survivre ou mourir .Qui vivra assez longtemps pour remporter les 45,6 milliards de wons ?", 
        posterURL: 'https://ca-times.brightspotcdn.com/dims4/default/5410779/2147483647/strip/false/crop/5906x3937+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F58%2F4e%2Fa59edfeb4c00b85217973e5560f6%2Fsquidgame-unit-104-442.jpg', 
        rating: 4, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 5, 
        title: 'Locke & Key', 
        description: "Inspirée des romans graphiques à succès, la série Locke & Key suit trois frères et sœurs qui décident, après le meurtre de leur père, d'emménager dans la demeure ancestrale : une maison avec des clés magiques qui leur confèrent de nombreux pouvoirs.", 
        posterURL: 'https://img.rts.ch/medias/2020/image/a6sz77-26710066.image?w=1200&h=627', 
        rating: 5, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 6, 
        title:"Le monde aprè nous" , 
        description:'Quand le chaos envahit le monde, en qui peut-on avoir confiance ? Le film LE MONDE APRÈS NOUS, avec Julia Roberts, Mahershala Ali, Ethan Hawke, Myha’la Herrold et Kevin Bacon, disponible sur Netflix le 8 décembre.', 
        posterURL: 'https://cdn.lesnumeriques.com/optim/product/74/74328/c69f94fd-le-monde-apres-nous__1200_1200__0-60-910-970.jpg', 
        rating: 5, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 7, 
        title: 'NOWHERE', 
        description: "Une femme enceinte, seule et prisonnière d'un conteneur à la dérive, tente de survivre après avoir fui un pays totalitaire dévasté.", 
        posterURL: 'https://decider.com/wp-content/uploads/2023/10/nowhere-true-story.jpg?quality=75&strip=all', 
        rating: 4, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 8, 
        title: 'La casa de papel', 
        description: "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution. Regardez autant que vous voulez. Cette série policière captivante a été élue meilleure série dramatique aux Emmy Awards ainsi qu'aux prix Fénix et Iris.", 
        posterURL: 'https://www.programme-tv.net/imgre/fit/~1~tel~2021~12~10~d375fdf3-70f8-4eb7-87c8-037fb7f05b91.png/720x405/crop-from/top/quality/80/focus-point/942,545/serieux-un-vrai-negociateur-juge-la-credibilite-de-la-casa-de-papel.jpg', 
        rating: 4, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 9, 
        title: 'Better than us', 
        description: "Dans un Moscou où les robots font partie du quotidien, une famille embauche sans le savoir un androïde tueur pour faire le ménage.", 
        posterURL: 'https://www.beliciousmuse.com/wp-content/uploads/2019/08/better-than-us-review.jpg', 
        rating: 4, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
    { 
        id: 10, 
        title:"La mère de la mariée", 
        description:"Synopsis. Emma, la fille de Lana, revient de l'étranger et lâche une bombe : elle va se marier en Thaïlande et dans un mois ! Lana apprend que l'homme qui a conquis le cœur d'Emma est le fils de l'homme qui a brisé le sien il y a des années.", 
        posterURL: 'https://occ-0-8407-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeiXVmC2MfHWK8YfZqsS9BCWkXPDsJcHyUndK1ZPaCqCgSFYBpu8hfzhz2Z6sUoXXmBEa9Dxj-WV8eM0IPn7MR7gEH8bpSjaihf7.jpg?r=e45', 
        rating: 5, 
        trailerURL: 'https://www.youtube.com/embed/tLMk9-L8UYo' 
    },
];

export default MovieData;
